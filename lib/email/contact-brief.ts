type BriefPayload = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function buildBriefSubject({ name, projectType }: BriefPayload) {
  return `Nouveau brief · ${name}${projectType ? ` (${projectType})` : ""}`;
}

export function buildBriefText(payload: BriefPayload) {
  return [
    `Nom : ${payload.name}`,
    `Email : ${payload.email}`,
    `Type de projet : ${payload.projectType || "Non renseigné"}`,
    `Budget : ${payload.budget || "Non renseigné"}`,
    "Consentement RGPD : oui",
    "",
    payload.message
  ].join("\n");
}

export function buildBriefHtml(payload: BriefPayload) {
  const { name, email, projectType, budget, message } = payload;

  return `<!DOCTYPE html>
<html lang="fr">
  <body style="margin:0;padding:0;background:#070708;color:#f5f5f5;font-family:Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#070708;padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#111114;border:1px solid #2a2a2f;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:28px 28px 12px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#888;">
                Nouveau brief · 42studio.fr
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 8px;font-size:28px;font-weight:700;line-height:1.1;color:#fff;">
                ${escapeHtml(name)}
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 24px;font-size:14px;line-height:1.7;color:#bdbdbd;">
                <p style="margin:0 0 8px;"><strong style="color:#fff;font-weight:600;">Email :</strong> ${escapeHtml(email)}</p>
                <p style="margin:0 0 8px;"><strong style="color:#fff;font-weight:600;">Type :</strong> ${escapeHtml(projectType || "Non renseigné")}</p>
                <p style="margin:0;"><strong style="color:#fff;font-weight:600;">Budget :</strong> ${escapeHtml(budget || "Non renseigné")}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px;background:#0d0d10;border-top:1px solid #2a2a2f;font-size:15px;line-height:1.8;color:#ddd;white-space:pre-wrap;">${escapeHtml(message)}</td>
            </tr>
            <tr>
              <td style="padding:18px 28px 28px;font-size:12px;color:#777;">
                Répondre directement à cet email pour contacter ${escapeHtml(name)}.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildConfirmationSubject() {
  return "Brief reçu · 42studio";
}

export function buildConfirmationText({ name }: BriefPayload) {
  return [
    `Bonjour ${name},`,
    "",
    "Merci pour ton message. On a bien reçu ton brief et on revient vers toi sous 24 h.",
    "",
    "42studio",
    "hello@42studio.fr",
    "https://42studio.fr"
  ].join("\n");
}

export function buildConfirmationHtml({ name }: BriefPayload) {
  return `<!DOCTYPE html>
<html lang="fr">
  <body style="margin:0;padding:0;background:#070708;color:#f5f5f5;font-family:Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#070708;padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#111114;border:1px solid #2a2a2f;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:28px 28px 12px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#888;">
                42studio
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 12px;font-size:28px;font-weight:700;line-height:1.1;color:#fff;">
                Brief reçu.
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 28px;font-size:15px;line-height:1.8;color:#ddd;">
                Bonjour ${escapeHtml(name)},<br /><br />
                Merci pour ton message. On a bien reçu ton brief et on revient vers toi sous 24 h.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
