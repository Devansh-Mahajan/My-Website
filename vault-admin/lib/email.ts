import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Use Resend's shared testing domain until you verify a custom domain.
// Change 'from' to e.g. 'admin@yourdomain.com' once your domain is verified.
const FROM = 'Vault Admin <onboarding@resend.dev>'

export async function sendResetEmail(to: string, resetUrl: string) {
  await resend.emails.send({
    from: FROM,
    to,
    subject: 'Reset your Vault Admin password',
    html: `
      <div style="font-family:Inter,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;background:#f7f8fb;border-radius:12px;border:1px solid #d8dee8">
        <h2 style="color:#111827;font-size:20px;font-weight:700;margin:0 0 8px">Reset your password</h2>
        <p style="color:#647084;font-size:15px;line-height:1.6;margin:0 0 24px">
          Click the button below to reset your Vault Admin password. This link expires in <strong>15 minutes</strong>.
        </p>
        <a href="${resetUrl}" style="display:inline-block;background:#2563eb;color:#fff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none">
          Reset password →
        </a>
        <p style="color:#9aa7bb;font-size:13px;margin:24px 0 0">
          If you didn't request this, ignore this email — your password won't change.
        </p>
      </div>
    `,
  })
}

export async function sendNewHashEmail(to: string, newHash: string) {
  await resend.emails.send({
    from: FROM,
    to,
    subject: 'Your new Vault Admin password hash',
    html: `
      <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#f7f8fb;border-radius:12px;border:1px solid #d8dee8">
        <h2 style="color:#111827;font-size:20px;font-weight:700;margin:0 0 8px">Password updated ✓</h2>
        <p style="color:#647084;font-size:15px;line-height:1.6;margin:0 0 16px">
          Your password was reset. Update the <code style="background:#eef3f9;padding:2px 6px;border-radius:4px;font-family:monospace">ADMIN_PASSWORD_HASH</code> environment variable in Vercel with the hash below, then redeploy.
        </p>
        <pre style="background:#111827;color:#eef4ff;padding:16px;border-radius:8px;font-size:13px;font-family:monospace;overflow-wrap:break-word;white-space:pre-wrap;margin:0 0 16px">${newHash}</pre>
        <ol style="color:#647084;font-size:14px;line-height:1.8;margin:0;padding-left:20px">
          <li>Vercel dashboard → your project → <strong>Settings → Environment Variables</strong></li>
          <li>Update <code style="background:#eef3f9;padding:1px 5px;border-radius:3px;font-family:monospace">ADMIN_PASSWORD_HASH</code> with the hash above</li>
          <li>Go to <strong>Deployments → Redeploy</strong></li>
        </ol>
      </div>
    `,
  })
}
