export const marqueeServices = [
  'Branding Digital',
  'Social Media',
  'Fotografía & Video',
  'Campañas Meta',
  'Sitios Web & Landings',
  'Copywriting',
  'Marketing Digital',
] as const;

export const heroCards = [
  {
    number: '01',
    title: 'Branding Digital',
    description: 'Identidad visual que comunica y convierte.',
    variant: 'dark' as const,
  },
  {
    number: '02',
    title: 'Social Media',
    description: 'Contenido que atrae, informa y vende.',
    variant: 'primary' as const,
  },
  {
    number: '03',
    title: 'Campañas Meta',
    description: 'Visibilidad y clientes reales para tu negocio.',
    variant: 'accent' as const,
  },
  {
    number: '04',
    title: 'Foto & Video',
    description: 'Imagen profesional que atrae clientes desde el primer vistazo.',
    variant: 'muted' as const,
  },
];

export const aboutValues = [
  {
    number: '01',
    title: 'Calidad sin excusas',
    description:
      'Nos tomamos todos los proyectos muy en serio, sin importar el tamaño. No hay proyecto pequeño.',
  },
  {
    number: '02',
    title: 'Sin contratos largos',
    description:
      'Proponemos soluciones claras, sin inflarte el presupuesto ni amarrarte a compromisos interminables.',
  },
  {
    number: '03',
    title: 'Resultados medibles',
    description:
      'Medimos y mejoramos constantemente, porque los resultados también se afinan con el tiempo.',
  },
  {
    number: '04',
    title: 'Tu marca, auténtica',
    description:
      'Tu marca no necesita ser perfecta, necesita ser auténtica. Eso es lo que construimos juntos.',
  },
];

export const services = [
  {
    icon: '✦',
    tag: 'Identidad',
    title: 'Branding Digital',
    description: 'Naming, logo, identidad y tono para destacar online.',
    items: [
      'Manual de identidad básico o avanzado',
      'Estrategia y voz de marca',
      'Diseño de material digital',
      'Animación de logotipo',
    ],
  },
  {
    icon: '◈',
    tag: 'Comunidad',
    title: 'Social Media',
    description: 'Contenido que atrae, informa y vende. Llevamos tus redes de forma integral.',
    items: [
      'Estrategias de contenido',
      'Community Management',
      'Diseño de postales',
      'Medición de resultados',
    ],
  },
  {
    icon: '▲',
    tag: 'Publicidad',
    title: 'Campañas Meta',
    description: 'Aumenta tu visibilidad, consigue clientes y comunidad con campañas efectivas.',
    items: ['Manual de identidad de campaña', 'Tono de marca para ads', 'Estrategia de pauta'],
  },
  {
    icon: '◉',
    tag: 'Visual',
    title: 'Fotografía & Video',
    description: 'Imagen que representa tu esencia y atrae clientes al primer vistazo.',
    items: [
      'Fotografía de producto y retrato',
      'Videos promocionales e institucionales',
      'Reels y formato TikTok',
      'Menús animados · Drone',
    ],
  },
  {
    icon: '⊞',
    tag: 'Web',
    title: 'Sitio Vertical & Landings',
    description: 'Funcionales, claros y listos para convertir visitantes en clientes.',
    items: [
      'Diseño integral de sitio vertical',
      'Formulario con captación de clientes',
      'Monitoreo con Google',
    ],
  },
  {
    icon: '◎',
    tag: 'Estrategia',
    title: 'Marketing & Asesoría',
    description: 'Consultoría enfocada en lo que tu marca realmente necesita para crecer.',
    items: ['Asesoría personalizada', 'Ficha Google My Business', 'Copywriting y contenido digital'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Escuchamos',
    description:
      'Entendemos tu marca y objetivos reales antes de proponer cualquier cosa.',
  },
  {
    number: '02',
    title: 'Proponemos',
    description: 'Una solución clara, sin inflarte el presupuesto ni contratos largos.',
  },
  {
    number: '03',
    title: 'Ejecutamos',
    description: 'Lo que acordamos, con calidad y seguimiento constante de nuestro equipo.',
  },
  {
    number: '04',
    title: 'Mejoramos',
    description: 'Medimos los resultados porque los logros también se afinan con el tiempo.',
  },
];

export const contactLinks = [
  {
    icon: '✉',
    label: 'Correo',
    value: 'dante.creativa@gmail.com',
    href: 'mailto:dante.creativa@gmail.com',
  },
  {
    icon: '📷',
    label: 'Instagram',
    value: '@dante.creativa',
    href: 'https://instagram.com/dante.creativa',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: 'Al alcance de un mensaje',
    href: '#',
  },
  {
    icon: '📍',
    label: 'Ubicación',
    value: 'Puebla, México',
    href: '#',
  },
];

export const navLinks = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proceso', href: '#process' },
] as const;

export const CONTACT_EMAIL = 'dante.creativa@gmail.com';
