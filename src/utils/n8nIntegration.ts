
// Utility para integração com n8n
// Este arquivo contém funções para facilitar a integração com webhooks do n8n

export interface N8nBlogPost {
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  image?: string;
  tags?: string[];
  publishDate?: string;
}

export class N8nBlogIntegration {
  private webhookUrl: string;
  
  constructor(webhookUrl: string) {
    this.webhookUrl = webhookUrl;
  }

  // Função para publicar um post via webhook do n8n
  async publishPost(postData: N8nBlogPost): Promise<boolean> {
    try {
      console.log("Publishing post via n8n webhook:", postData);
      
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create_post',
          data: {
            ...postData,
            publishDate: postData.publishDate || new Date().toISOString(),
            image: postData.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=entropy&auto=format'
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Post published successfully:", result);
      
      // Adicionar o post ao blog localmente se a função global estiver disponível
      if ((window as any).addBlogPost) {
        (window as any).addBlogPost({
          title: postData.title,
          excerpt: postData.excerpt,
          content: postData.content,
          author: postData.author,
          date: new Date(postData.publishDate || Date.now()).toLocaleDateString('pt-BR'),
          image: postData.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=entropy&auto=format',
          tags: postData.tags
        });
      }

      return true;
    } catch (error) {
      console.error("Error publishing post:", error);
      return false;
    }
  }

  // Função para buscar posts do n8n
  async fetchPosts(): Promise<any[]> {
    try {
      const response = await fetch(`${this.webhookUrl}?action=get_posts`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return Array.isArray(data) ? data : data.posts || [];
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

  // Função para deletar um post
  async deletePost(postId: string | number): Promise<boolean> {
    try {
      const response = await fetch(this.webhookUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'delete_post',
          postId: postId
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  }
}

// Função helper para configurar a integração
export const setupN8nIntegration = (webhookUrl: string) => {
  return new N8nBlogIntegration(webhookUrl);
};

// Exemplo de uso:
/*
// 1. Configure a integração
const n8nBlog = setupN8nIntegration('https://seu-webhook-n8n.com/webhook/blog');

// 2. Publique um post
await n8nBlog.publishPost({
  title: "Novo artigo sobre IA",
  excerpt: "Descubra as últimas tendências em inteligência artificial...",
  author: "João Silva",
  tags: ["IA", "Tecnologia", "Inovação"]
});

// 3. Busque posts
const posts = await n8nBlog.fetchPosts();
*/

// Configuração de webhook para receber posts do n8n
export const setupWebhookReceiver = () => {
  // Esta função pode ser chamada quando um webhook do n8n enviar dados
  (window as any).receiveN8nWebhook = (data: any) => {
    console.log("Received webhook data from n8n:", data);
    
    if (data.action === 'new_post' && data.post) {
      // Adicionar o novo post ao blog
      if ((window as any).addBlogPost) {
        (window as any).addBlogPost({
          title: data.post.title,
          excerpt: data.post.excerpt,
          content: data.post.content,
          author: data.post.author,
          date: new Date(data.post.date).toLocaleDateString('pt-BR'),
          image: data.post.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=entropy&auto=format',
          tags: data.post.tags
        });
      }
    }
  };
};
