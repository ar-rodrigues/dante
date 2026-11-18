import { expressWhatsapp, whatsappUrl } from '@/data/contact';

export const navLinks = [
  { label: 'Lo que hacemos', href: '#servicios' },
  { label: 'El equipo', href: '#equipo' },
  { label: 'Nuestro trabajo', href: '#trabajo' },
  { label: 'Platiquemos ↗', href: '#empezar' },
] as const;

export const heroContent = {
  titleBefore: 'Un aliado para tu marca',
  titleEmphasis: 'y tu negocio.',
  description:
    'Branding, marketing, desarrollo web y todo lo que tu proyecto necesite para existir y destacar en el mundo digital.',
  primaryCta: { label: 'Encuentra tu punto de partida ↗', href: '#empezar' },
  secondaryCta: { label: 'Ver servicios ↓', href: '#servicios' },
  videoSrc: '/hero.mp4',
  posterSrc: '/hero-poster.png',
} as const;

export const marqueeServices = [
  'BRANDING',
  'MARKETING',
  'DISEÑO',
  'AUDIOVISUAL',
  'DESARROLLO WEB',
] as const;

export const problemsSection = {
  kicker: 'Si estás aquí,',
  title: 'algo de esto te suena.',
  note: 'Sea cual sea tu punto de partida, hay un camino claro desde aquí.',
  cta: { label: 'Ver cómo te ayudamos ↓', href: '#servicios' },
  items: [
    {
      title: 'Tengo una idea sin identidad todavía.',
      description:
        'No sabes por dónde empezar tu marca ni cómo llevarla al mundo digital.',
      tone: 'coral' as const,
      icon: 'idea' as const,
    },
    {
      title: 'Mi marketing no tiene rumbo.',
      description:
        'Tu negocio ya existe, pero publicas cuando se puede, sin estrategia ni objetivos.',
      tone: 'purple' as const,
      icon: 'chart' as const,
    },
    {
      title: 'Invierto en anuncios. ¿Y los resultados?',
      description:
        'Pasas horas configurando o le pagas a alguien más, pero nadie te traduce los resultados.',
      tone: 'blue' as const,
      icon: 'target' as const,
    },
  ],
} as const;

export const servicesSection = {
  kicker: 'Distintas disciplinas.',
  title: 'Una misma dirección.',
  items: [
    {
      tag: 'ESTRATEGIA · CAMPAÑAS · CONTENIDO',
      title: 'Marketing',
      description:
        'Para resultados medibles: estrategia, campañas y contenido con objetivos claros.',
      examples: 'Estrategia digital / Social media / Campañas publicitarias',
      image: '/ilustraciones-servicios/marketing.png',
      tone: 'coral' as const,
    },
    {
      tag: 'IDENTIDAD · CONCEPTO · APLICACIONES',
      title: 'Branding',
      description:
        'Una identidad que expresa quién eres y hace reconocible tu marca.',
      examples: 'Identidad visual / Manual de marca / Aplicaciones digitales e impresas',
      image: '/ilustraciones-servicios/branding.png',
      tone: 'purple' as const,
    },
    {
      tag: 'FOTO · VIDEO · PRODUCCIÓN',
      title: 'Audiovisual',
      description:
        'Foto y video profesional que transporta tu marca y esencia al mundo digital.',
      examples: 'Fotografía de producto / Videos de marca / Contenido para redes',
      image: '/ilustraciones-servicios/audiovisual.png',
      tone: 'blue' as const,
    },
    {
      tag: 'SITIOS WEB · UX/UI · PRODUCTO DIGITAL',
      title: 'Desarrollo Web',
      description:
        'Un espacio para que tu marca también venda cuando tú no estás.',
      examples: 'Sitios adaptables / Landing pages / Diseño de interfaces',
      image: '/ilustraciones-servicios/desarrollo-web.png',
      tone: 'pink' as const,
    },
    {
      tag: 'ANIMACIÓN · VIDEO · MOVIMIENTO',
      title: 'Motion Graphics',
      description:
        'Animaciones y recursos visuales que dan movimiento y personalidad a tu marca.',
      examples: 'Logotipos animados / Videos explicativos / Animación para redes',
      image: '/ilustraciones-servicios/motion-graphics.png',
      tone: 'orange' as const,
    },
  ],
} as const;

export const alliesSection = {
  titleBefore: 'No somos proveedores.',
  titleEmphasis: 'Somos aliados.',
  cities: 'PUEBLA · QUERÉTARO · GUADALAJARA',
  support:
    'Entendemos tu negocio y cuidamos tu inversión como si fuera nuestra.',
  stats: [
    { value: '+5', label: 'AÑOS CREANDO' },
    { value: '+45', label: 'MARCAS QUE HAN CONFIADO' },
    { value: '+30 mill.', label: 'EN VENTAS' },
  ],
  process: [
    { number: '01', title: 'Entendemos tu negocio' },
    { number: '02', title: 'Detectamos oportunidades reales' },
    { number: '03', title: 'Diseñamos una estrategia personal' },
    { number: '04', title: 'Ejecutamos y optimizamos' },
    { number: '05', title: 'Aprendemos, mejoramos y repetimos' },
  ],
} as const;

export const contactSection = {
  titleBefore: 'Tu siguiente paso',
  titleEmphasis: 'empieza platicando.',
  description:
    'Dinos qué buscas para saber el punto de partida. Lo demás, lo resolvemos platicando.',
  flow: 'WhatsApp → Videollamada → Objetivos → Cotización a tu medida.',
  legend: '¿Qué te gustaría lograr?',
  submitLabel: 'Enviar por WhatsApp ↗',
  choosePrompt: 'Elige un objetivo para preparar tu mensaje.',
} as const;

export const teamSection = {
  titleBefore: 'Un equipo que',
  titleEmphasis: 'te entiende.',
  members: [
    {
      name: 'Valeria Contreras',
      role: 'Dirección estratégica',
      image: '/team/Val.webp',
    },
    {
      name: 'Karla Elizondo',
      role: 'Dirección creativa',
      image: '/team/Kar.webp',
    },
    {
      name: 'Alisson Rodrigues',
      role: 'Desarrollo web',
      image: '/team/Ali.webp',
    },
    {
      name: 'Fer Chávez',
      role: 'Comunicación audiovisual',
      image: '/team/Fer.webp',
    },
    {
      name: 'Ale Acosta',
      role: 'Comunicación audiovisual',
      image: '/team/Ale.webp',
    },
  ],
} as const;

export const portfolioSection = {
  titleBefore: 'Ideas que ya están',
  titleEmphasis: 'funcionando allá afuera.',
  description:
    'Cada proyecto nació de una estrategia distinta. Igual que cada negocio.',
} as const;

export const funnelSection = {
  hint: 'Toca cada bloque para descubrir cómo trabajamos.',
  steps: [
    {
      title: 'Atracción',
      summary: 'Atraemos personas con campañas y contenido',
    },
    {
      title: 'Conversación',
      summary: 'Respondemos sus dudas y conocemos lo que necesitan',
    },
    {
      title: 'Prospecto perfilado',
      summary: 'Te conectamos con personas interesadas e informadas',
    },
    {
      title: 'Cierre de venta',
      summary: 'Tu equipo recibe el prospecto y concreta la venta',
    },
  ],
  copyTitle: 'Atraemos la atención. Seguimos la conversación.',
  copyBody:
    'Trabajamos contigo desde las campañas hasta la atención y el perfilado de prospectos, para que tu equipo reciba personas interesadas e informadas y pueda enfocarse en cerrar la venta.',
  howTitle: '¿Cómo funciona?',
  howBody:
    'Nos aliamos con Ágora, empresa brasileña de tecnología detrás de los agentes de IA que filtran tus leads y los atienden de forma personalizada antes de que te lleguen.',
  cta: { label: 'Quiero conocer más ↗', href: '#empezar' },
} as const;

export const expressSection = {
  titleBefore: '¿Necesitas resolver',
  titleEmphasis: 'algo puntual?',
  description:
    'Configuramos, armamos y dejamos listo lo que necesitas en una sola sesión.',
  advise:
    'Te damos una asesoría inicial sin costo para analizar tu caso y decirte qué sí necesitas y qué no.',
  adviseCta: { label: 'Platiquemos de tu proyecto ↗', href: '#empezar' },
  slides: [
    {
      eyebrow: 'Que te encuentren.',
      title: 'Google Business',
      description:
        'Tu ficha configurada y optimizada para Maps y búsquedas locales.',
      image: '/servicios-puntuales/google-business.png',
      href: whatsappUrl(expressWhatsapp.googleBusiness),
    },
    {
      eyebrow: 'Listos para conectar.',
      title: 'Set up de redes sociales',
      description: 'Instagram y Facebook creados y listos para publicar.',
      image: '/servicios-puntuales/setup-redes.png',
      href: whatsappUrl(expressWhatsapp.setupRedes),
    },
    {
      eyebrow: 'El siguiente clic.',
      title: 'Cuenta publicitaria',
      description: 'Meta Business configurado y listo para tus campañas.',
      image: '/servicios-puntuales/meta-business.png',
      href: whatsappUrl(expressWhatsapp.metaBusiness),
    },
    {
      eyebrow: 'Tu marca, en cada detalle.',
      title: 'Papelería comercial',
      description:
        'Tarjetas, firma digital, hojas membretadas y presentaciones de venta.',
      image: '/servicios-puntuales/papeleria.png',
      href: whatsappUrl(expressWhatsapp.papeleria),
    },
  ],
} as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export const faqItems: FaqItem[] = [
  {
    question: '¿Trabajan fuera de las ciudades mencionadas?',
    answer:
      'Sí. Además de Puebla, Querétaro y Guadalajara, trabajamos con marcas de todo México y adaptamos el proceso para colaborar a distancia.',
  },
  {
    question: '¿Qué pasa si todavía no sé qué necesito?',
    answer:
      'Cuéntanos tu objetivo y seguimos la conversación para encontrar los servicios que tengan sentido para tu momento actual.',
    link: { label: 'Encontrar mi punto de partida ↗', href: '#empezar' },
  },
  {
    question: '¿Cuánto cuesta trabajar con Dante?',
    answer:
      'Depende de lo que tu negocio necesite. No vendemos paquetes generalizados. La primera asesoría es gratis y nos permite cotizar con base en tu caso.',
  },
  {
    question: '¿Cómo empezamos?',
    answer:
      'Agendamos una videollamada, platicamos sobre tu negocio y tus objetivos y después te decimos cómo podemos ayudarte.',
  },
  {
    question: '¿Necesito tener una marca o un negocio registrado?',
    answer:
      'No. Trabajamos con negocios activos y con ideas que todavía no tienen nombre ni marca. Construir tu marca desde cero también es parte de lo que hacemos.',
    link: { label: 'Ver servicios ↗', href: '#servicios' },
  },
];

export const faqSection = {
  titleBefore: 'Para empezar',
  titleEmphasis: 'con mayor claridad.',
} as const;

export const footerContent = {
  statementBefore: 'El marketing funciona cuando quien lo hace entiende tu negocio.',
  statementEmphasis: 'Nosotros empezamos por ahí.',
  cities: 'PUEBLA · QUERÉTARO · GUADALAJARA',
  copyright: '© 2026 DANTE CREATIVE AGENCY',
} as const;
