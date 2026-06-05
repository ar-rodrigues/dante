# Design Tokens

Fuente de verdad: [`src/styles/variables.css`](../src/styles/variables.css)

## Colores de marca

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | `#C0251A` | Rojo principal, CTAs, acentos |
| `--color-accent` | `#F5C842` | Amarillo, tags, highlights |
| `--color-bg` | `#FAF6EF` | Fondo crema |
| `--color-text` | `#1A1209` | Texto y bordes oscuros |
| `--color-text-muted` | `#3D2B1A` | Texto secundario |
| `--color-white` | `#FFFFFF` | Texto sobre fondos oscuros |

## Espaciado

| Token | Valor |
|-------|-------|
| `--space-xs` | `0.25rem` |
| `--space-sm` | `0.5rem` |
| `--space-md` | `1rem` |
| `--space-lg` | `1.5rem` |
| `--space-xl` | `3rem` |

## Tipografía

| Token | Familia |
|-------|---------|
| `--font-display` | Playfair Display |
| `--font-body` | DM Sans |

Clase global: `.font-display` para titulares.

## Layout

| Token | Valor |
|-------|-------|
| `--border-width` | `1.5px` |
| `--border-color` | `var(--color-text)` |
| `--radius-sm` | `4px` |
| `--breakpoint-md` | `900px` |

## Ant Design

Los tokens de Ant Design se configuran en [`src/theme/antdTheme.ts`](../src/theme/antdTheme.ts) con valores estáticos (hex). Ant Design genera variables `--ant-*` internamente con `cssVar: { key: 'dante' }`.

**No** pasar `var(--color-primary)` directamente en `ThemeConfig.token` — Ant Design requiere valores estáticos para calcular el tema.
