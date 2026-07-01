interface ImportMetaEnv {
  readonly VITE_WIX_SITE_ID?: string;
  readonly VITE_WIX_CLIENT_ID?: string;
  readonly VITE_WIX_SITE_BASE_URL?: string;
  readonly VITE_STUDENT_PORTAL_URL?: string;
  readonly VITE_CLASSROOM_API_BASE?: string;
  readonly VITE_APP_NAMESPACE?: string;
  readonly VITE_BACKEND_PROVIDER?: "mock" | "wix" | "supabase";
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_SUPABASE_TABLE?: string;
  readonly VITE_ENABLE_DEMO_DATA?: string;
  readonly BASE_URL: string;
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const process: {
  readonly env: Record<string, string | undefined>;
};
