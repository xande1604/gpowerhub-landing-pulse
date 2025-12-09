import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Json } from "@/integrations/supabase/types";

export interface LandingSection {
  id: string;
  section_type: string;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  image_url: string | null;
  cta_text: string | null;
  cta_link: string | null;
  data: Json | null;
  display_order: number | null;
  is_published: boolean | null;
  created_at: string | null;
  updated_at: string | null;
  created_by: string | null;
}

export const useLandingSections = () => {
  return useQuery({
    queryKey: ["landing-sections"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("landing_sections")
        .select("*")
        .eq("is_published", true)
        .order("display_order");

      if (error) throw error;
      return data as LandingSection[];
    },
  });
};

export const useAdminLandingSections = () => {
  return useQuery({
    queryKey: ["admin-landing-sections"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("landing_sections")
        .select("*")
        .order("display_order");

      if (error) throw error;
      return data as LandingSection[];
    },
  });
};

export const useCreateLandingSection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (sectionData: { 
      section_type: string;
      title?: string | null;
      subtitle?: string | null;
      content?: string | null;
      image_url?: string | null;
      cta_text?: string | null;
      cta_link?: string | null;
      data?: Json | null;
      display_order?: number | null;
      is_published?: boolean | null;
    }) => {
      const { data, error } = await supabase
        .from("landing_sections")
        .insert([sectionData])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-landing-sections"] });
      queryClient.invalidateQueries({ queryKey: ["landing-sections"] });
      toast.success("Seção criada com sucesso!");
    },
    onError: (error: Error) => {
      toast.error("Erro ao criar seção: " + error.message);
    },
  });
};

export const useUpdateLandingSection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...sectionData }: Partial<LandingSection> & { id: string }) => {
      const { data, error } = await supabase
        .from("landing_sections")
        .update(sectionData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-landing-sections"] });
      queryClient.invalidateQueries({ queryKey: ["landing-sections"] });
      toast.success("Seção atualizada com sucesso!");
    },
    onError: (error: Error) => {
      toast.error("Erro ao atualizar seção: " + error.message);
    },
  });
};

export const useDeleteLandingSection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("landing_sections")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-landing-sections"] });
      queryClient.invalidateQueries({ queryKey: ["landing-sections"] });
      toast.success("Seção excluída com sucesso!");
    },
    onError: (error: Error) => {
      toast.error("Erro ao excluir seção: " + error.message);
    },
  });
};
