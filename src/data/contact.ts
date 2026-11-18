/** Contacto y WhatsApp — fuente única. */

export const WHATSAPP_NUMBER = '525650099583';
export const WHATSAPP_DISPLAY = '+52 56 5009 9583';
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export const CONTACT_EMAIL = 'dante.creativa@gmail.com';

export const socialLinks = {
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/dante.creativa/',
    handle: 'dante.creativa',
  },
  facebook: {
    label: 'Facebook',
    href: 'https://www.facebook.com/DanteCreativeAgency/',
    handle: 'DanteCreativeAgency',
  },
} as const;

export function whatsappUrl(text?: string) {
  if (!text) return WHATSAPP_BASE;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export const contactGoals = [
  {
    id: 'start',
    label: 'Voy a empezar un negocio desde 0',
    message:
      'Hola Dante, voy a empezar un negocio desde 0. Me gustaría platicar cómo pueden ayudarme.',
  },
  {
    id: 'clients',
    label: 'Ya tengo mi negocio pero quiero conseguir clientes en línea',
    message:
      'Hola Dante, ya tengo mi negocio pero quiero conseguir clientes en línea. Me gustaría platicar cómo pueden ayudarme.',
  },
  {
    id: 'content',
    label: 'Quiero crear contenido atractivo para redes sociales',
    message:
      'Hola Dante, quiero crear contenido atractivo para redes sociales. Me gustaría platicar cómo pueden ayudarme.',
  },
  {
    id: 'ads',
    label: 'Quiero mejorar mis anuncios y mis resultados de ventas',
    message:
      'Hola Dante, quiero mejorar mis anuncios y mis resultados de ventas. Me gustaría platicar cómo pueden ayudarme.',
  },
  {
    id: 'leads',
    label: 'Necesito un equipo que me ayude a dar seguimiento a clientes potenciales',
    message:
      'Hola Dante, necesito un equipo que me ayude a dar seguimiento a clientes potenciales. Me gustaría platicar cómo pueden ayudarme.',
  },
] as const;

export const expressWhatsapp = {
  googleBusiness:
    'Hola Dante, quiero configurar u optimizar la ficha de Google de mi negocio. Me gustaría platicar cómo pueden ayudarme.',
  setupRedes:
    'Hola Dante, quiero dejar listas las redes sociales de mi negocio. Me gustaría platicar cómo pueden ayudarme.',
  metaBusiness:
    'Hola Dante, quiero configurar mi cuenta publicitaria para empezar a anunciar mi negocio. Me gustaría platicar cómo pueden ayudarme.',
  papeleria:
    'Hola Dante, quiero diseñar la papelería de mi negocio. Me gustaría platicar cómo pueden ayudarme.',
} as const;
