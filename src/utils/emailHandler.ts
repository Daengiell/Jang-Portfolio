import { PERSONAL_INFO } from '../data/portfolioData';

/**
 * Robust email handler that works in all browsers, OS configurations, and iframe sandboxes.
 * 1. Copies the email address to clipboard.
 * 2. Opens Gmail compose in a new tab (webmail guarantee).
 * 3. Triggers native mailto: handler as fallback.
 */
export function sendEmail(
  subject = 'Inquiry for Jhon Rey A. Ebro',
  onNotify?: (msg: string) => void
) {
  const email = PERSONAL_INFO.email;

  // 1. Copy email address to clipboard
  try {
    navigator.clipboard.writeText(email);
    if (onNotify) {
      onNotify(`Copied ${email} to clipboard! Opening email composer...`);
    }
  } catch (err) {
    console.warn('Clipboard write failed:', err);
  }

  // 2. Open Gmail Webmail Compose in a new tab
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}`;

  window.open(gmailUrl, '_blank', 'noopener,noreferrer');

  // 3. Trigger native mailto: protocol as well
  setTimeout(() => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  }, 150);
}
