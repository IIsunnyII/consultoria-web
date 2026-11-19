// =========================================================
// DATOS GENERALES DEL SITIO — edita tu información aquí
// =========================================================

export const site = {
  name: 'Nombre del Estudio', // nombre provisional de la consultoría
  initials: 'NE', // monograma del logo
  role: 'Consultoría de software',
  location: 'México',
  tagline: 'Cuatro socios desde México. Trabajamos en remoto con todo el mundo.',
  cta: { label: 'Agendar llamada', href: '#contacto' },
  description:
    'Consultoría de desarrollo de software: web, backend, datos y videojuegos.',
  email: 'hola@tuestudio.dev',
};

// `menu` abre un panel desplegable en escritorio ('projects' | 'services')
export const nav: { href: string; label: string; menu?: 'projects' | 'services' }[] = [
  { href: '#proyectos', label: 'Proyectos', menu: 'projects' },
  { href: '#servicios', label: 'Servicios', menu: 'services' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#stack', label: 'Stack' },
  { href: '#equipo', label: 'Equipo' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/tu-estudio' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tu-estudio' },
  { label: 'Instagram', href: 'https://www.instagram.com/tu-estudio' },
  { label: 'Email', href: `mailto:${site.email}` },
];
