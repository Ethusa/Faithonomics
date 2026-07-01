import { createMockRepository } from "../adapters/mockRepository";
import { SupabaseRestClassroomRepository } from "../adapters/supabase/supabaseRestRepository";
import { WixDataClassroomRepository } from "../adapters/wix/wixDataRepository";
import { AIAssessmentService } from "./aiAssessmentService";
import { CertificateService } from "./certificateService";
import { ClassroomService } from "./classroomService";

const nodeEnv = typeof process !== "undefined" ? process.env : {};
const namespace = nodeEnv.WIX_APP_NAMESPACE ?? import.meta.env.VITE_APP_NAMESPACE;
const backendProvider = import.meta.env.VITE_BACKEND_PROVIDER;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseTable = import.meta.env.VITE_SUPABASE_TABLE ?? "classroom_records";
const shouldUseSupabase = backendProvider === "supabase" && Boolean(supabaseUrl && supabaseAnonKey);
const shouldUseWixData =
  !shouldUseSupabase && Boolean(namespace && namespace !== "<app-namespace>" && import.meta.env.PROD);

export const repository =
  shouldUseSupabase && supabaseUrl && supabaseAnonKey
    ? new SupabaseRestClassroomRepository(supabaseUrl, supabaseAnonKey, supabaseTable)
    : shouldUseWixData && namespace
      ? new WixDataClassroomRepository(namespace)
      : createMockRepository();
export const classroomService = new ClassroomService(repository);
export const aiAssessmentService = new AIAssessmentService(repository);
export const certificateService = new CertificateService(repository);
