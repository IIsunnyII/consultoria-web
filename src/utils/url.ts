// Antepone la ruta base del sitio (p. ej. '/consultoria-web' en GitHub Pages) a una ruta local.
// Úsalo para cualquier enlace o recurso de /public: withBase('/og.png'), withBase('/').
export function withBase(path: string): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
