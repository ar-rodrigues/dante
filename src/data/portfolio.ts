export type PortfolioMedia = {
  src: string;
  alt: string;
  type?: 'image' | 'video';
  poster?: string;
};

export type PortfolioProject = {
  name: string;
  services: string;
  description: string;
  cover: PortfolioMedia;
  images: PortfolioMedia[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Costado Producciones',
    services: 'Naming · Construcción de Marca · Identidad Visual · Animación',
    description:
      'Costado Producciones tiene como centro el acompañamiento cinematográfico, la colaboración y el vínculo con las comunidades y los territorios, desde el desarrollo hasta la exhibición.',
    cover: {
      src: '/portafolio/costado-producciones/animacion-logo.mp4',
      type: 'video',
      poster: '/portafolio/costado-producciones/portada.png',
      alt: 'Animación del logo de Costado Producciones',
    },
    images: [
      {
        src: '/portafolio/costado-producciones/animacion-logo.mp4',
        type: 'video',
        poster: '/portafolio/costado-producciones/portada.png',
        alt: 'Animación del logo de Costado Producciones',
      },
      {
        src: '/portafolio/costado-producciones/cartel.png',
        alt: 'Identidad de Costado Producciones aplicada a un cartel',
      },
      {
        src: '/portafolio/costado-producciones/gorra.png',
        alt: 'Identidad de Costado Producciones aplicada a una gorra',
      },
    ],
  },
  {
    name: 'Producciones Caporal',
    services:
      'Sitio web · Venta en línea · Campañas Publicitarias · Gestión Integral de redes',
    description:
      'Producciones Caporal crea propuestas teatrales que conectan con las personas a través de historias que emocionan e inspiran.\n\nImpulsa el talento emergente y acerca nuevos públicos al teatro con obras como Más allá del cofre y Recuerdos de ti.',
    cover: {
      src: '/portafolio/producciones-caporal/sitio-web.png',
      alt: 'Sitio web de Producciones Caporal',
    },
    images: [
      {
        src: '/portafolio/producciones-caporal/sitio-web.png',
        alt: 'Sitio web de Producciones Caporal',
      },
      {
        src: '/portafolio/producciones-caporal/ads.png',
        alt: 'Campañas publicitarias de Producciones Caporal',
      },
      {
        src: '/portafolio/producciones-caporal/flyers.png',
        alt: 'Piezas de comunicación de Producciones Caporal',
      },
    ],
  },
  {
    name: 'Parallelo',
    services: 'Naming · Identidad Visual · Sitio Web',
    description:
      'Parallelo es una consultoría estratégica especializada en cumplimiento normativo, aseguramiento de la calidad y talento humano.\n\nCon más de 30 años de experiencia, ayuda a las empresas a prevenir riesgos, optimizar procesos y fortalecer sus equipos.',
    cover: {
      src: '/portafolio/parallelo/sitio-web.png',
      alt: 'Sitio web de Parallelo',
    },
    images: [
      {
        src: '/portafolio/parallelo/sitio-web.png',
        alt: 'Sitio web de Parallelo',
      },
      {
        src: '/portafolio/parallelo/hoja.png',
        alt: 'Identidad visual de Parallelo aplicada a papelería',
      },
      {
        src: '/portafolio/parallelo/taza.png',
        alt: 'Identidad visual de Parallelo aplicada a una taza',
      },
    ],
  },
  {
    name: 'Drunks · Coctelería to go',
    services: 'Identidad visual · Aplicaciones digitales',
    description:
      'Drunks es una marca de coctelería para llevar en pouches, con venta en punto y servicio de cócteles personalizados para eventos.\n\nSu identidad es joven, urbana y divertida, con un toque de sofisticación que acompaña su propuesta casual y contemporánea.',
    cover: {
      src: '/portafolio/drunks/letrero.png',
      alt: 'Identidad de Drunks aplicada a un letrero exterior',
    },
    images: [
      {
        src: '/portafolio/drunks/letrero.png',
        alt: 'Identidad de Drunks aplicada a un letrero exterior',
      },
      {
        src: '/portafolio/drunks/gorra.png',
        alt: 'Identidad de Drunks aplicada a una gorra',
      },
      {
        src: '/portafolio/drunks/sudadera.png',
        alt: 'Identidad de Drunks aplicada a una sudadera',
      },
    ],
  },
];
