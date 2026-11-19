# Styleguide — Dante Creative Agency

Fuente de verdad visual del sitio. Antes de crear o modificar UI, lee este documento y usa los tokens de `src/styles/variables.css`.

## Paleta

| Token CSS | Hex | Uso |
|-----------|-----|-----|
| `--color-paper` | `#f2f0e6` | Fondo principal |
| `--color-ink` | `#171713` | Texto y superficies oscuras |
| `--color-orange` | `#ff9345` | CTA primario, acentos |
| `--color-coral` | `#ff654f` | Tarjetas / énfasis |
| `--color-purple` | `#aa96fa` | Contacto y tarjetas |
| `--color-pink` | `#f5a1bd` | Tarjetas de servicio |
| `--color-blue` | `#99d7f2` | Tarjetas |
| `--color-muted` | `#716d60` | Texto secundario |
| `--color-construction-bg` | `#e97525` | Solo portada `ComingSoon` |
| `--color-construction-hover` | `#ff9b24` | Hover de portada |

No reintroducir la paleta placeholder (rojo `#c0251a` / crema `#faf6ef`). No hardcodear hex en componentes salvo casos puntuales documentados (p. ej. gradientes del hero).

## Tipografía

- Cuerpo / títulos: **DM Sans** (`--font-body`), pesos 300–700.
- Énfasis itálico (`<em>`): **DM Serif Display** Italic (`--font-script`) o Georgia.
- Escalas de referencia: H1 ~`clamp(36px, 4.5vw, 60px)`; H2 ~`clamp(31px, 4.5vw, 48px)`; cuerpo ~15px / line-height 1.55–1.6.
- Kickers: ~10px, uppercase, letter-spacing amplio.

## Espaciado y layout

- Padding de sección: `--space-section-y` / `--space-section-x` (65px / 6%).
- Radios: `--radius-sm` 6px, `--radius-md` 12px, `--radius-pill` 50px.
- Breakpoints de QA: **360 / 390 / 768 / 1440**. Móvil estrecho ~650px (`--breakpoint-md`).
- Header sticky: `scroll-margin-top` con `--header-offset` (~115px).
- Barra de desplazamiento del documento visible (nativa del navegador).

## Componentes UI

- **Enlaces**: color ink (`#171713`), nunca el azul por defecto. En Ant Design: `colorLink` / hover / active = ink en `src/theme/antdTheme.ts`.
- **Botones**: solo `components/ui/Button`. Variantes `primary`, `alt`/`outline`, `dark`, `white`. Píldora, borde ink, min-height ~48px.
- **Navbar**: logo ~124px (104px móvil); todos los ítems son enlaces de texto (incluido «Platiquemos ↗»), sin CTA naranja en el header.
- **ExploreCard**: tarjetas problema con `+` que rota a `×` al abrir; hover/foco revela detalle.
- **HorizontalRail**: scroll-snap + flechas + dots (servicios).
- **Equipo**: en desktop, grid de 5 columnas centrado (`max-width: 850px`); en móvil, carrusel con dots (sin flechas). Fotos ovaladas compactas; caption al hover.
- **WhatsApp flotante**: píldora fija inferior derecha, sombra `3px 3px 0` ink, texto «WhatsApp ↗».
- **Footer**: fondo ink; logo blanco ~168px (144px móvil); statement con segunda frase en cursiva; `footline` en tres bloques (`copyright` | «VOLVER ARRIBA ↑» | redes + email + WhatsApp). Iconos sociales outline; hover: círculo `#ffffff18`, `translateY(-2px)`.
- **Contact**: CTA «Enviar por WhatsApp ↗» en variante `dark` (fondo ink, texto paper), ancho 100% de la columna.
- **Portfolio**: sección oscura; grid de 4 columnas en desktop (2 entre 651–850px); tarjetas paper con tipografía compacta y flecha a la derecha.
- **Portafolio**: grid de marcas + `<dialog>`; dots cambian medios; flechas cambian marca; teclado ←/→ y swipe en medios.
- **FadeUp**: reveal con IntersectionObserver; respetar `prefers-reduced-motion`.

## Motion

- Reveal: opacity + translateY ~24px, una sola vez.
- Funnel: elevación secuencial; se detiene con interacción.
- Hero / express: pausa y `prefers-reduced-motion` sin autoplay agresivo.
- Sin librerías nuevas de animación salvo decisión explícita.

## Composición de la home

Orden: Navbar → Hero (video full-bleed) → Marquee → Problems → Services → Allies (`About`) → Contact → Team → Portfolio → Funnel → Express → FAQ → Footer → WhatsApp flotante.

- Una composición por viewport inicial: marca, un titular, un párrafo, CTAs, video.
- Sin cards decorativas innecesarias; cards solo cuando hay interacción (problemas, servicios, portafolio).
- Textos de UI en español.

## Contacto

- WhatsApp único: `+52 221 582 7771` (`src/data/contact.ts`).
- Formulario = radios + un CTA a `wa.me` con mensaje precargado.
- Redes: Instagram `dante.creativa`, Facebook `DanteCreativeAgency`, correo `dante.creativa@gmail.com`.

## Portada remodelación (`ComingSoon`)

- Fondo `#e97525`, tipografías DM Sans + DM Serif Display Italic.
- Solo Instagram; sin WhatsApp.
- Asset: `public/dante-remodelacion.png`.
- Controlado por `SITE_MODE` en `src/data/siteMode.ts`.

## Assets

- Rutas kebab-case en `public/` (sin espacios).
- Imágenes con `next/image` cuando aporte tamaño/lazy.
- Video con `poster`, `preload="metadata"`, pausa off-screen cuando aplique.
- Logos: `public/logos/dante-oscuro.png` / `dante-blanco.png`.
- Preview de enlace (Open Graph): `public/og-image.png` (1200×630, fondo paper + logo oscuro).

## Qué no hacer

- Duplicar botones o sistemas de color.
- Pegar CSS monolítico de entregas HTML (`#dante-study`).
- Copiar textos fuera de `src/data/`.
- Cambiar tokens sin actualizar este styleguide y `variables.css`.
