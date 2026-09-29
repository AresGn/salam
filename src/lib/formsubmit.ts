// Form submissions are delivered by email through FormSubmit (https://formsubmit.co).
// The first submission sends an activation email to this address; forms work once it is confirmed.
// After activation, FormSubmit provides a random alias that can replace the address below to hide it.
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/salamsaibou2002@gmail.com';

export type SubmitResult = { ok: true } | { ok: false; message: string };

export async function sendForm(fields: Record<string, string>): Promise<SubmitResult> {
  try {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _template: 'table', _captcha: 'false', ...fields }),
    });
    const body = await response.json().catch(() => null);

    // FormSubmit answers 200 with success "false" (e.g. form awaiting activation), so check the body too.
    if (response.ok && String(body?.success) === 'true') {
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
