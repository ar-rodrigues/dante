/**
 * Modo del sitio público.
 * - `construction`: portada de remodelación en `/`
 * - `live`: sitio completo en `/`
 *
 * El sitio completo siempre queda disponible en `/sitio` como respaldo.
 */
export type SiteMode = 'construction' | 'live';

/** Cambia a `'construction'` para mostrar la portada de remodelación en `/`. */
export const SITE_MODE: SiteMode = 'live';

export function isSiteUnderConstruction(mode: SiteMode): boolean {
  return mode === 'construction';
}

export const isUnderConstruction = isSiteUnderConstruction(SITE_MODE);
