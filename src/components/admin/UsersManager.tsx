import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Shield, ShieldOff, Loader2, User, Mail, Calendar } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface UserWithRole {
  id: string;
  user_id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  is_admin: boolean;
}

const UsersManager = () => {
  const queryClient = useQueryClient();
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    userId: string;
    action: "promote" | "demote";
    userName: string;
  }>({ open: false, userId: "", action: "promote", userName: "" });

  const { data: users, isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      // Fetch all user profiles
      const { data: profiles, error: profilesError } = await supabase
        .from("user_profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (profilesError) throw profilesError;

      // Fetch all admin roles
      const { data: adminRoles, error: rolesError } = await supabase
        .from("user_roles")
        .select("user_id")
        .eq("role", "admin");

      if (rolesError) throw rolesError;

      const adminUserIds = new Set(adminRoles?.map(r => r.user_id) || []);

      // Combine data
      const usersWithRoles: UserWithRole[] = (profiles || []).map(profile => ({
        id: profile.id,
        user_id: profile.user_id,
        email: profile.email,
        full_name: profile.full_name,
        avatar_url: profile.avatar_url,
        created_at: profile.created_at,
        is_admin: adminUserIds.has(profile.user_id)
      }));

      return usersWithRoles;
    }
  });

  const promoteMutation = useMutation({
    mutationFn: async (userId: string) => {
      const { error } = await supabase
        .from("user_roles")
        .insert({ user_id: userId, role: "admin" });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      toast.success("Usuário promovido a admin!");
    },
    onError: (error: Error) => {
      toast.error("Erro ao promover usuário: " + error.message);
    }
  });

  const demoteMutation = useMutation({
    mutationFn: async (userId: string) => {
      const { error } = await supabase
        .from("user_roles")
        .delete()
        .eq("user_id", userId)
        .eq("role", "admin");
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      toast.success("Permissão de admin removida!");
    },
    onError: (error: Error) => {
      toast.error("Erro ao remover permissão: " + error.message);
    }
  });

  const handleAction = () => {
    if (confirmDialog.action === "promote") {
      promoteMutation.mutate(confirmDialog.userId);
    } else {
      demoteMutation.mutate(confirmDialog.userId);
    }
    setConfirmDialog({ ...confirmDialog, open: false });
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getInitials = (name: string | null, email: string | null) => {
    if (name) {
      return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    }
    if (email) {
      return email.substring(0, 2).toUpperCase();
    }
    return "U";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const admins = users?.filter(u => u.is_admin) || [];
  const regularUsers = users?.filter(u => !u.is_admin) || [];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Gerenciar Usuários e Permissões
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Admins Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Badge variant="default" className="bg-primary">
                Administradores ({admins.length})
              </Badge>
            </h3>
            {admins.length === 0 ? (
              <p className="text-muted-foreground text-sm">Nenhum administrador encontrado.</p>
            ) : (
              <div className="space-y-3">
                {admins.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 border rounded-lg bg-primary/5 border-primary/20"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={user.avatar_url || undefined} />
                        <AvatarFallback>{getInitials(user.full_name, user.email)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{user.full_name || "Sem nome"}</span>
                          <Badge variant="default" className="text-xs">Admin</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {user.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(user.created_at)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setConfirmDialog({
                        open: true,
                        userId: user.user_id,
                        action: "demote",
                        userName: user.full_name || user.email || "este usuário"
                      })}
                      disabled={admins.length === 1}
                      title={admins.length === 1 ? "Deve haver pelo menos um admin" : "Remover permissão de admin"}
                    >
                      <ShieldOff className="w-4 h-4 mr-2" />
                      Remover Admin
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Regular Users Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Badge variant="secondary">
                Usuários ({regularUsers.length})
              </Badge>
            </h3>
            {regularUsers.length === 0 ? (
              <p className="text-muted-foreground text-sm">Nenhum usuário regular encontrado.</p>
            ) : (
              <div className="space-y-3">
                {regularUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={user.avatar_url || undefined} />
                        <AvatarFallback>{getInitials(user.full_name, user.email)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{user.full_name || "Sem nome"}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {user.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(user.created_at)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setConfirmDialog({
                        open: true,
                        userId: user.user_id,
                        action: "promote",
                        userName: user.full_name || user.email || "este usuário"
                      })}
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Promover a Admin
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={confirmDialog.open} onOpenChange={(open) => setConfirmDialog({ ...confirmDialog, open })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {confirmDialog.action === "promote" ? "Promover a Admin" : "Remover Admin"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {confirmDialog.action === "promote"
                ? `Tem certeza que deseja promover "${confirmDialog.userName}" a administrador? Essa pessoa terá acesso total ao painel administrativo.`
                : `Tem certeza que deseja remover as permissões de administrador de "${confirmDialog.userName}"?`
              }
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleAction}>
              {confirmDialog.action === "promote" ? "Promover" : "Remover"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default UsersManager;
