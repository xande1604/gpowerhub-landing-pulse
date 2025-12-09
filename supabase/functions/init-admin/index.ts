import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Iniciando criação do usuário admin...");

    // Use service role key for admin operations
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const adminEmail = "dvixmovie@gmail.com";
    const adminPassword = "Admin@123";

    // Check if user already exists
    const { data: existingUsers, error: listError } = await supabaseAdmin.auth.admin.listUsers();
    
    if (listError) {
      console.error("Erro ao listar usuários:", listError);
      throw listError;
    }

    const existingUser = existingUsers?.users?.find(u => u.email === adminEmail);

    let userId: string;

    if (existingUser) {
      console.log("Usuário já existe, atualizando role...");
      userId = existingUser.id;
    } else {
      // Create the admin user
      console.log("Criando novo usuário admin...");
      const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
        email: adminEmail,
        password: adminPassword,
        email_confirm: true, // Auto-confirm email
      });

      if (createError) {
        console.error("Erro ao criar usuário:", createError);
        throw createError;
      }

      userId = newUser.user.id;
      console.log("Usuário criado com ID:", userId);

      // Create user profile
      const { error: profileError } = await supabaseAdmin
        .from("user_profiles")
        .upsert({
          user_id: userId,
          email: adminEmail,
          full_name: "Administrador",
        }, { onConflict: "user_id" });

      if (profileError) {
        console.error("Erro ao criar perfil:", profileError);
        // Continue anyway, profile might already exist via trigger
      }
    }

    // Check if already has admin role
    const { data: existingRole } = await supabaseAdmin
      .from("user_roles")
      .select("*")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();

    if (!existingRole) {
      // Assign admin role
      const { error: roleError } = await supabaseAdmin
        .from("user_roles")
        .insert({
          user_id: userId,
          role: "admin",
        });

      if (roleError) {
        console.error("Erro ao atribuir role:", roleError);
        throw roleError;
      }
      console.log("Role admin atribuída com sucesso!");
    } else {
      console.log("Usuário já possui role admin");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Usuário admin criado/atualizado com sucesso!",
        email: adminEmail,
        hint: "Senha padrão: Admin@123 - Altere após o primeiro login!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Erro na função init-admin:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
