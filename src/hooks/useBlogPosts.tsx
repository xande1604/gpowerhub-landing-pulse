
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  author: string;
  created_at: string;
  image_url: string | null;
  slug: string;
  tags: string[] | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
  status: 'draft' | 'published';
  published_at: string | null;
  updated_at: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Type assertion to ensure proper typing
      const typedPosts = (data || []) as BlogPost[];
      setPosts(typedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar posts.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (postData: Partial<BlogPost>) => {
    try {
      if (!postData.title || !postData.content) {
        throw new Error('Título e conteúdo são obrigatórios');
      }

      const slug = postData.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

      const insertData = {
        title: postData.title,
        content: postData.content,
        slug,
        author: postData.author || 'Admin',
        excerpt: postData.excerpt || null,
        image_url: postData.image_url || null,
        tags: postData.tags || [],
        meta_title: postData.meta_title || postData.title,
        meta_description: postData.meta_description || postData.excerpt || null,
        keywords: postData.keywords || null,
        status: postData.status || 'draft'
      };

      const { data, error } = await supabase
        .from('blog_posts')
        .insert([insertData])
        .select()
        .single();

      if (error) throw error;

      const typedPost = data as BlogPost;
      setPosts(prev => [typedPost, ...prev]);
      toast({
        title: "Post criado",
        description: "O post foi criado com sucesso.",
      });
      
      return typedPost;
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "Erro",
        description: "Erro ao criar post.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const updatePost = async (id: string, postData: Partial<BlogPost>) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      const typedPost = data as BlogPost;
      setPosts(prev => prev.map(post => post.id === id ? typedPost : post));
      toast({
        title: "Post atualizado",
        description: "O post foi atualizado com sucesso.",
      });
      
      return typedPost;
    } catch (error) {
      console.error('Error updating post:', error);
      toast({
        title: "Erro",
        description: "Erro ao atualizar post.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deletePost = async (id: string) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setPosts(prev => prev.filter(post => post.id !== id));
      toast({
        title: "Post excluído",
        description: "O post foi excluído com sucesso.",
      });
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: "Erro",
        description: "Erro ao excluir post.",
        variant: "destructive",
      });
      throw error;
    }
  };

  return {
    posts,
    loading,
    createPost,
    updatePost,
    deletePost,
    refetch: fetchPosts
  };
};
