# Stack técnico

## Framework

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**

## UI

- **Ant Design 6** — componentes interactivos
- **@ant-design/nextjs-registry** — SSR sin parpadeo de estilos
- **CSS Modules** — estilos por componente
- **Variables CSS** — tokens de diseño globales en `src/styles/variables.css`

## Sin Tailwind

No usar Tailwind ni otras utilidades CSS-in-JS para layout. Todo estilo custom pasa por variables CSS y CSS Modules.

## Fuentes

- **Playfair Display** — titulares (`--font-display`)
- **DM Sans** — cuerpo y UI (`--font-body`)

Cargadas con `next/font/google` en `src/app/layout.tsx`.

## Alias de importación

`@/*` apunta a `src/*`.

## Scripts

```bash
npm run dev    # desarrollo
npm run build  # producción
npm run lint   # ESLint
```
