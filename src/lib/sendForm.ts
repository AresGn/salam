// Form submissions are delivered by email through Web3Forms (https://web3forms.com).
// The access key only allows sending to the inbox it was created for, so it is safe to ship client-side.
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '61d34fd3-8743-405b-8d86-28ccc3d6ab52';

export type SubmitResult = { ok: true } | { ok: false; message: string };

export async function sendForm(fields: Record<string, string>): Promise<SubmitResult> {
  try {
    // FormData (no custom headers) keeps this a "simple" CORS request, as in the Web3Forms docs.
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('from_name', 'Portfolio SAIBOU ABDOU SALAM');
    Object.entries(fields).forEach(([key, value]) => formData.append(key, value));

    const response = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: formData });
    const body = await response.json().catch(() => null);

    if (response.ok && body?.success === true) {
      return { ok: true };
    }
    return {
      ok: false,
      message: body?.message || "L'envoi a échoué. Merci de réessayer dans quelques instants.",
    };
  } catch {
    return { ok: false, message: 'Impossible de joindre le serveur. Vérifiez votre connexion puis réessayez.' };
  }
}
