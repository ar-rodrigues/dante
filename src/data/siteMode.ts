/**
 * Modo del sitio público.
 * - `construction`: portada de remodelación en `/`
 * - `live`: sitio completo en `/`
 *
 * El sitio completo siempre queda disponible en `/sitio` como respaldo.
 */
export const SITE_MODE = 'construction' as const;

export const isUnderConstruction = SITE_MODE === 'construction';
