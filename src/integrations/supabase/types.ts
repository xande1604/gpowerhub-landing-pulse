export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      app_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          setting_key: string
          setting_value: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          setting_key: string
          setting_value?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string
          content: string
          created_at: string
          excerpt: string | null
          id: string
          image_url: string | null
          keywords: string | null
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          slug: string
          status: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          content: string
          created_at?: string
          excerpt?: string | null
          id?: string
          image_url?: string | null
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug: string
          status?: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          content?: string
          created_at?: string
          excerpt?: string | null
          id?: string
          image_url?: string | null
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug?: string
          status?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      cases: {
        Row: {
          client_logo_url: string | null
          client_name: string | null
          created_at: string | null
          created_by: string | null
          description: string
          display_order: number | null
          id: string
          image_url: string | null
          is_published: boolean | null
          results: Json | null
          subtitle: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          client_logo_url?: string | null
          client_name?: string | null
          created_at?: string | null
          created_by?: string | null
          description: string
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          results?: Json | null
          subtitle?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          client_logo_url?: string | null
          client_name?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          results?: Json | null
          subtitle?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      credit_key_redemptions: {
        Row: {
          credits_received: number
          id: string
          key_id: string
          redeemed_at: string
          user_id: string
        }
        Insert: {
          credits_received: number
          id?: string
          key_id: string
          redeemed_at?: string
          user_id: string
        }
        Update: {
          credits_received?: number
          id?: string
          key_id?: string
          redeemed_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "credit_key_redemptions_key_id_fkey"
            columns: ["key_id"]
            isOneToOne: false
            referencedRelation: "credit_keys"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_keys: {
        Row: {
          created_at: string
          created_by: string | null
          credits: number
          current_uses: number
          description: string | null
          expires_at: string | null
          id: string
          includes_posts: boolean | null
          is_active: boolean
          key_code: string
          max_uses: number
          subscription_duration_days: number | null
          subscription_tier: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          credits: number
          current_uses?: number
          description?: string | null
          expires_at?: string | null
          id?: string
          includes_posts?: boolean | null
          is_active?: boolean
          key_code: string
          max_uses?: number
          subscription_duration_days?: number | null
          subscription_tier?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          credits?: number
          current_uses?: number
          description?: string | null
          expires_at?: string | null
          id?: string
          includes_posts?: boolean | null
          is_active?: boolean
          key_code?: string
          max_uses?: number
          subscription_duration_days?: number | null
          subscription_tier?: string | null
        }
        Relationships: []
      }
      gamma_presentations: {
        Row: {
          additional_instructions: string | null
          created_at: string
          format: string | null
          gamma_url: string
          generation_id: string | null
          id: string
          input_text: string
          language: string | null
          num_cards: number | null
          pdf_url: string | null
          pptx_url: string | null
          text_mode: string | null
          title: string
          tone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          additional_instructions?: string | null
          created_at?: string
          format?: string | null
          gamma_url: string
          generation_id?: string | null
          id?: string
          input_text: string
          language?: string | null
          num_cards?: number | null
          pdf_url?: string | null
          pptx_url?: string | null
          text_mode?: string | null
          title: string
          tone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          additional_instructions?: string | null
          created_at?: string
          format?: string | null
          gamma_url?: string
          generation_id?: string | null
          id?: string
          input_text?: string
          language?: string | null
          num_cards?: number | null
          pdf_url?: string | null
          pptx_url?: string | null
          text_mode?: string | null
          title?: string
          tone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      generated_contents: {
        Row: {
          content: string
          content_type: string
          created_at: string
          generated_images: Json | null
          id: string
          industry: string | null
          is_free_trial: boolean | null
          linkedin_post_id: string | null
          month_year: string | null
          prompt: string
          published_at: string | null
          scheduled_for: string | null
          status: string
          title: string | null
          tone: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          content_type: string
          created_at?: string
          generated_images?: Json | null
          id?: string
          industry?: string | null
          is_free_trial?: boolean | null
          linkedin_post_id?: string | null
          month_year?: string | null
          prompt: string
          published_at?: string | null
          scheduled_for?: string | null
          status?: string
          title?: string | null
          tone: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          content_type?: string
          created_at?: string
          generated_images?: Json | null
          id?: string
          industry?: string | null
          is_free_trial?: boolean | null
          linkedin_post_id?: string | null
          month_year?: string | null
          prompt?: string
          published_at?: string | null
          scheduled_for?: string | null
          status?: string
          title?: string | null
          tone?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      generated_stories: {
        Row: {
          background_color: string | null
          created_at: string | null
          id: string
          images: Json
          metadata: Json | null
          story_mode: string
          style: string | null
          title: string
          topic: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          background_color?: string | null
          created_at?: string | null
          id?: string
          images: Json
          metadata?: Json | null
          story_mode: string
          style?: string | null
          title: string
          topic?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          background_color?: string | null
          created_at?: string | null
          id?: string
          images?: Json
          metadata?: Json | null
          story_mode?: string
          style?: string | null
          title?: string
          topic?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      image_transformations: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          input_tokens: number | null
          original_image_url: string
          output_tokens: number | null
          processing_method: string | null
          prompt: string
          status: string
          tokens_used: number | null
          transformed_image_url: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          input_tokens?: number | null
          original_image_url: string
          output_tokens?: number | null
          processing_method?: string | null
          prompt: string
          status?: string
          tokens_used?: number | null
          transformed_image_url?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          input_tokens?: number | null
          original_image_url?: string
          output_tokens?: number | null
          processing_method?: string | null
          prompt?: string
          status?: string
          tokens_used?: number | null
          transformed_image_url?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      infographic_style_examples: {
        Row: {
          created_at: string
          created_by: string | null
          example_image_url: string
          id: string
          style_label: string
          style_value: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          example_image_url: string
          id?: string
          style_label: string
          style_value: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          example_image_url?: string
          id?: string
          style_label?: string
          style_value?: string
          updated_at?: string
        }
        Relationships: []
      }
      infographics: {
        Row: {
          created_at: string
          data: Json
          id: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data: Json
          id?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      landing_sections: {
        Row: {
          content: string | null
          created_at: string | null
          created_by: string | null
          cta_link: string | null
          cta_text: string | null
          data: Json | null
          display_order: number | null
          id: string
          image_url: string | null
          is_published: boolean | null
          section_type: string
          subtitle: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          cta_link?: string | null
          cta_text?: string | null
          data?: Json | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          section_type: string
          subtitle?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          cta_link?: string | null
          cta_text?: string | null
          data?: Json | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          section_type?: string
          subtitle?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      model_templates: {
        Row: {
          categories: string[] | null
          created_at: string
          description: string
          id: string
          is_active: boolean
          model_name: string
          model_type: string
          name: string
          parameters: Json
          prompt_template: string
          scenes: string[] | null
          updated_at: string
        }
        Insert: {
          categories?: string[] | null
          created_at?: string
          description: string
          id?: string
          is_active?: boolean
          model_name: string
          model_type: string
          name: string
          parameters?: Json
          prompt_template: string
          scenes?: string[] | null
          updated_at?: string
        }
        Update: {
          categories?: string[] | null
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean
          model_name?: string
          model_type?: string
          name?: string
          parameters?: Json
          prompt_template?: string
          scenes?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      n8n_blog_posts: {
        Row: {
          author: string
          content: string
          created_at: string
          excerpt: string | null
          id: string
          image_url: string | null
          keywords: string | null
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          slug: string
          status: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          content: string
          created_at?: string
          excerpt?: string | null
          id?: string
          image_url?: string | null
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug: string
          status?: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          content?: string
          created_at?: string
          excerpt?: string | null
          id?: string
          image_url?: string | null
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug?: string
          status?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      photo_packages: {
        Row: {
          created_at: string
          credits: number
          id: string
          is_active: boolean
          name: string
          price_cents: number
          stripe_price_id: string | null
        }
        Insert: {
          created_at?: string
          credits: number
          id?: string
          is_active?: boolean
          name: string
          price_cents: number
          stripe_price_id?: string | null
        }
        Update: {
          created_at?: string
          credits?: number
          id?: string
          is_active?: boolean
          name?: string
          price_cents?: number
          stripe_price_id?: string | null
        }
        Relationships: []
      }
      photo_transactions: {
        Row: {
          created_at: string
          credits_change: number
          description: string
          id: string
          stripe_payment_intent_id: string | null
          transaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          credits_change: number
          description: string
          id?: string
          stripe_payment_intent_id?: string | null
          transaction_type: string
          user_id: string
        }
        Update: {
          created_at?: string
          credits_change?: number
          description?: string
          id?: string
          stripe_payment_intent_id?: string | null
          transaction_type?: string
          user_id?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          category: string | null
          created_at: string | null
          created_by: string | null
          description: string
          display_order: number | null
          features: Json | null
          id: string
          image_url: string | null
          is_published: boolean | null
          name: string
          price_info: string | null
          short_description: string | null
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          description: string
          display_order?: number | null
          features?: Json | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          name: string
          price_info?: string | null
          short_description?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string
          display_order?: number | null
          features?: Json | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          name?: string
          price_info?: string | null
          short_description?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      prompt_examples: {
        Row: {
          category: string
          created_at: string
          description: string
          display_order: number | null
          example_image_url: string | null
          icon_name: string
          id: string
          is_active: boolean
          prompt: string
          result_image_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description: string
          display_order?: number | null
          example_image_url?: string | null
          icon_name: string
          id?: string
          is_active?: boolean
          prompt: string
          result_image_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          display_order?: number | null
          example_image_url?: string | null
          icon_name?: string
          id?: string
          is_active?: boolean
          prompt?: string
          result_image_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string
          id: string
          referred_id: string
          referrer_id: string
          reward_credits: number
          reward_given: boolean
        }
        Insert: {
          created_at?: string
          id?: string
          referred_id: string
          referrer_id: string
          reward_credits?: number
          reward_given?: boolean
        }
        Update: {
          created_at?: string
          id?: string
          referred_id?: string
          referrer_id?: string
          reward_credits?: number
          reward_given?: boolean
        }
        Relationships: []
      }
      scheduled_posts: {
        Row: {
          caption: string | null
          content_id: string | null
          created_at: string
          error_message: string | null
          id: string
          image_url: string | null
          linkedin_post_id: string | null
          scheduled_for: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          caption?: string | null
          content_id?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          image_url?: string | null
          linkedin_post_id?: string | null
          scheduled_for: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          caption?: string | null
          content_id?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          image_url?: string | null
          linkedin_post_id?: string | null
          scheduled_for?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          posts_this_week: number | null
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
          week_start: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          posts_this_week?: number | null
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
          week_start?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          posts_this_week?: number | null
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
          week_start?: string | null
        }
        Relationships: []
      }
      usage_tracking: {
        Row: {
          created_at: string
          id: string
          infographics_generated: number
          month_year: string
          photos_generated: number
          posts_text_only: number
          posts_with_image: number
          updated_at: string
          user_id: string
          year: string
        }
        Insert: {
          created_at?: string
          id?: string
          infographics_generated?: number
          month_year: string
          photos_generated?: number
          posts_text_only?: number
          posts_with_image?: number
          updated_at?: string
          user_id: string
          year: string
        }
        Update: {
          created_at?: string
          id?: string
          infographics_generated?: number
          month_year?: string
          photos_generated?: number
          posts_text_only?: number
          posts_with_image?: number
          updated_at?: string
          user_id?: string
          year?: string
        }
        Relationships: []
      }
      user_favorite_styles: {
        Row: {
          created_at: string
          id: string
          style_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          style_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          style_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorite_styles_style_id_fkey"
            columns: ["style_id"]
            isOneToOne: false
            referencedRelation: "prompt_examples"
            referencedColumns: ["id"]
          },
        ]
      }
      user_instagram_settings: {
        Row: {
          access_token: string | null
          app_id: string
          app_secret: string
          created_at: string
          id: string
          instagram_user_id: string | null
          is_active: boolean | null
          refresh_token: string | null
          token_expires_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token?: string | null
          app_id: string
          app_secret: string
          created_at?: string
          id?: string
          instagram_user_id?: string | null
          is_active?: boolean | null
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string | null
          app_id?: string
          app_secret?: string
          created_at?: string
          id?: string
          instagram_user_id?: string | null
          is_active?: boolean | null
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_linkedin_settings: {
        Row: {
          access_token: string | null
          client_id: string
          client_secret: string
          created_at: string
          id: string
          is_active: boolean | null
          linkedin_person_id: string | null
          refresh_token: string | null
          token_expires_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token?: string | null
          client_id: string
          client_secret: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          linkedin_person_id?: string | null
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string | null
          client_id?: string
          client_secret?: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          linkedin_person_id?: string | null
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          blog_token: string | null
          blog_webhook_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          n8n_webhook_url: string | null
          photo_credits: number
          signature: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          blog_token?: string | null
          blog_webhook_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          n8n_webhook_url?: string | null
          photo_credits?: number
          signature?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          blog_token?: string | null
          blog_webhook_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          n8n_webhook_url?: string | null
          photo_credits?: number
          signature?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_youtube_settings: {
        Row: {
          access_token: string | null
          client_id: string
          client_secret: string
          created_at: string
          id: string
          is_active: boolean | null
          refresh_token: string | null
          token_expires_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token?: string | null
          client_id: string
          client_secret: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string | null
          client_id?: string
          client_secret?: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_usage_limits: {
        Args: { p_usage_type: string; p_user_id: string }
        Returns: Json
      }
      check_user_post_limit: { Args: { p_user_id: string }; Returns: Json }
      deduct_credits: {
        Args: { credits_to_deduct: number; user_id: string }
        Returns: boolean
      }
      get_user_credits: { Args: { user_id: string }; Returns: number }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      increment_usage: {
        Args: { p_amount?: number; p_usage_type: string; p_user_id: string }
        Returns: Json
      }
      is_admin_user: { Args: { user_uuid: string }; Returns: boolean }
      make_first_user_admin: { Args: never; Returns: undefined }
      process_referral: {
        Args: { referred_user_id: string; referrer_email: string }
        Returns: Json
      }
      redeem_credit_key: { Args: { p_key_code: string }; Returns: Json }
      reset_weekly_posts: { Args: never; Returns: undefined }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
