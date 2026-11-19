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
  wordmark: 'Estudio', // palabra gigante del footer (se ajusta al ancho; cuanto más corta, más grande)
};

// CTA final (sección #contacto)
export const closing = {
  eyebrow: 'Tu próximo proyecto empieza aquí',
  title: ['Construyamos algo', 'que valga la pena.'] as [string, string],
  text: 'Cuéntanos qué tienes en mente. Llevaremos buenas preguntas y una opinión honesta.',
  button: { label: 'Escríbenos', href: `mailto:${site.email}?subject=Nuevo%20proyecto` },
};

// Footer
export const footer = {
  title: ['Software bien pensado.', 'Relaciones que duran.'] as [string, string],
  availability: 'Disponibles para nuevos proyectos',
  contact: [
    { label: 'Iniciar un proyecto', href: `mailto:${site.email}?subject=Nuevo%20proyecto` },
    { label: 'Escribir al estudio', href: `mailto:${site.email}` },
  ],
};

// Textos del hero (pantalla inicial)
export const hero = {
  eyebrow: 'Ingeniería independiente. Criterio compartido.',
  title: ['Software que se nota.', 'Hecho para durar.'], // 2.ª línea en gris metálico
  lead:
    'Cuatro ingenieros que diseñan, construyen y mantienen productos digitales. Web, plataformas, datos y videojuegos.',
  primary: { label: 'Agendar una llamada', href: '#contacto' },
  secondary: { label: 'Ver proyectos', href: '#proyectos' },
  proof: ['Estrategia y código', 'Hecho a tu medida', 'Pensado para crecer'],
  scrollCue: { label: 'Conoce nuestro trabajo', href: '#proyectos' },
  // Foto de fondo opcional (se muestra en blanco y negro). Ej.: '/images/equipo.webp'
  image: '' as string,
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
