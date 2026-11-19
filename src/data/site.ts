// =========================================================
// DATOS GENERALES DEL SITIO — edita tu información aquí
// =========================================================

export const site = {
  name: 'Tu Nombre',
  initials: 'TN', // monograma del logo
  role: 'Software Engineer / Indie Game Dev',
  location: 'México',
  tagline: 'Desde México. Trabajo en remoto con todo el mundo.',
  cta: { label: 'Hablemos', href: '#contacto' },
  description:
    'Portafolio de ingeniería de software y desarrollo de videojuegos independientes.',
  email: 'hola@tudominio.dev',
};

// `menu` abre un panel desplegable en escritorio ('projects' | 'services')
export const nav: { href: string; label: string; menu?: 'projects' | 'services' }[] = [
  { href: '#proyectos', label: 'Proyectos', menu: 'projects' },
  { href: '#servicios', label: 'Lo que hago', menu: 'services' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#stack', label: 'Stack' },
  { href: '#sobre-mi', label: 'Sobre mí' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/tu-usuario' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tu-usuario' },
  { label: 'itch.io', href: 'https://tu-usuario.itch.io' },
  { label: 'Email', href: `mailto:${site.email}` },
];
