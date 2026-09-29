// Form submissions are delivered by email through Web3Forms (https://web3forms.com).
// The access key only allows sending to the inbox it was created for, so it is safe to ship client-side.
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '61d34fd3-8743-405b-8d86-28ccc3d6ab52';

export type SubmitResult = { ok: true } | { ok: false; message: string };

export async function sendForm(fields: Record<string, string>): Promise<SubmitResult> {
  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, from_name: 'Portfolio SAIBOU ABDOU SALAM', ...fields }),
    });
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
