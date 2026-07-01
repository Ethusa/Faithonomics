import type { LearnerIdentity } from "../../domain/types";

export interface WixHeadlessConfig {
  clientId: string;
  siteBaseUrl: string;
  redirectUri: string;
}

export interface WixHeadlessSession {
  identity: LearnerIdentity | null;
  loginUrl: string;
}

const buildState = (): string => {
  const values = new Uint8Array(16);
  crypto.getRandomValues(values);
  return Array.from(values, (value) => value.toString(16).padStart(2, "0")).join("");
};

export const createWixLoginUrl = (config: WixHeadlessConfig): string => {
  const url = new URL("/oauth/member/login", config.siteBaseUrl);
  url.searchParams.set("client_id", config.clientId);
  url.searchParams.set("redirect_uri", config.redirectUri);
  url.searchParams.set("state", buildState());
  return url.toString();
};

export const getWixHeadlessSession = async (config: WixHeadlessConfig): Promise<WixHeadlessSession> => {
  const loginUrl = createWixLoginUrl(config);
  try {
    const sdkModule = "@wix/sdk";
    const membersModule = "@wix/members";
    const sdk = (await import(/* @vite-ignore */ sdkModule)) as {
      createClient?: (options: Record<string, unknown>) => unknown;
      OAuthStrategy?: (options: Record<string, unknown>) => unknown;
    };
    const members = (await import(/* @vite-ignore */ membersModule)) as {
      currentMember?: { getMember?: () => Promise<{ member?: { _id?: string; loginEmail?: string; profile?: { nickname?: string } } }> };
    };
    sdk.createClient?.({
      modules: { members },
      auth: sdk.OAuthStrategy?.({ clientId: config.clientId }),
    });
    const member = await members.currentMember?.getMember?.();
    const memberId = member?.member?._id;
    if (!memberId) {
      return { identity: null, loginUrl };
    }
    return {
      loginUrl,
      identity: {
        memberId,
        contactId: memberId,
        email: member.member?.loginEmail ?? "",
        displayName: member.member?.profile?.nickname ?? "Learner",
        roles: ["learner"],
      },
    };
  } catch {
    return { identity: null, loginUrl };
  }
};
