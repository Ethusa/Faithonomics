export const readWixSecret = async (secretName: string): Promise<string | null> => {
  try {
    const moduleName = "@wix/secrets";
    const imported = (await import(/* @vite-ignore */ moduleName)) as {
      secrets?: { getSecretValue?: (name: string) => Promise<{ value?: string }> };
    };
    const value = await imported.secrets?.getSecretValue?.(secretName);
    return typeof value?.value === "string" && value.value.length > 0 ? value.value : null;
  } catch (error) {
    console.error("Unable to read Wix secret.", error);
    return null;
  }
};
