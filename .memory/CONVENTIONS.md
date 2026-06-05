# Convenciones de código

## Estructura de carpetas

```
src/
├── app/           # Rutas y páginas (App Router)
├── components/
│   ├── ui/        # Primitivos reusables (Button, Tag, etc.)
│   └── layout/    # Contenedores y estructura (PageContainer, Section)
├── providers/     # Context providers (AntdProvider)
├── styles/        # variables.css + globals.css
└── theme/         # Configuración de Ant Design
```

## Cuándo crear un componente reusable

- El mismo patrón aparece **2 o más veces**
- El bloque tiene lógica o estilos propios que ensucian la página
- Es un primitivo de UI (botón, tag, heading, card)

## Estructura de componente

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.module.css
└── (opcional) index.ts
```

Exportar desde barrel files: `components/ui/index.ts`, `components/layout/index.ts`.

## Estilos

- Usar **siempre** `var(--token)` de `variables.css`
- No hardcodear colores, espaciados ni fuentes en CSS Modules
- Si falta un token, agregarlo a `variables.css` antes de usarlo

## Páginas

Las páginas **componen** componentes; no definen estilos que deberían vivir en `components/`.

## Idioma

Todo texto visible al usuario en **español**.

## Ant Design

- Envolver la app con `AntdProvider` (ya en layout)
- No usar sub-componentes con notación punto (`Select.Option`)
- Preferir wrappers en `components/ui/` sobre importar `antd` directamente en páginas
