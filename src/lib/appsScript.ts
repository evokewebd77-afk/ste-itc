export const APPS_SCRIPT_URL =
  "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

export type FormPayload = Record<string, string>;

export async function submitToAppsScript(payload: FormPayload): Promise<void> {
  if (!APPS_SCRIPT_URL.startsWith("https://script.google.com")) {
    throw new Error("Apps Script URL is not configured");
  }

  const body = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => body.append(key, value));

  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body,
    redirect: "follow",
  });

  if (!res.ok) throw new Error(`Submission failed (${res.status})`);

  const data = (await res.json().catch(() => null)) as {
    result?: string;
    message?: string;
  } | null;
  if (data && data.result === "error") {
    throw new Error(data.message || "Submission failed");
  }
}
