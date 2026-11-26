/** Disparos del píxel de Meta (vía fbq, p. ej. cargado por Tag Manager). */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Evento estándar Contactar: el usuario inicia contacto (WhatsApp, etc.). */
export function trackMetaContact() {
  window.fbq?.('track', 'Contact');
}
