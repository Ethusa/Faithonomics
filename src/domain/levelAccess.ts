import type { LevelAccessCredential } from "./types";

const normalizeUsername = (value: string): string => value.trim().toLowerCase();

export const authenticateLevelAccess = (
  credentials: readonly LevelAccessCredential[],
  moduleId: string,
  username: string,
  password: string,
): LevelAccessCredential | null =>
  credentials.find(
    (credential) =>
      credential.moduleId === moduleId &&
      normalizeUsername(credential.username) === normalizeUsername(username) &&
      credential.password === password,
  ) ?? null;
