// =========================================================
// PROYECTOS — placeholders editables
// Cada proyecto se muestra como una tarjeta grande que se apila al hacer scroll.
// Si no hay `image`, la tarjeta dibuja una vista previa del sitio con `preview`.
// =========================================================

export type ProjectStatus = 'Lanzado' | 'En desarrollo' | 'Confidencial';
export type PreviewTone = 'bone' | 'graphite' | 'steel';

export interface Project {
  slug: string;
  title: string;          // nombre del proyecto o cliente
  category: string;       // texto corto, p. ej. 'Logística · Plataforma web'
  summary: string;        // una frase sobre el proyecto
  tags: string[];         // servicios o tecnologías
  year: string;
  status: ProjectStatus;
  demo?: string;          // enlace principal (sitio, demo o build jugable)
  repo?: string;          // repositorio público (opcional)
  featured?: boolean;     // aparece en el menú "Proyectos" del header
  image?: string;         // captura real en /public, p. ej. '/images/norte.webp'
  // Vista previa dibujada cuando no hay imagen
  preview: {
    tone: PreviewTone;
    brand: string;        // logotipo de texto dentro de la vista previa
    nav: [string, string, string];
    kicker: string;
    headline: [string, string];
    pill: string;
    caption: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'norte',
    title: 'Norte',
    category: 'Logística · Plataforma web',
    summary: 'Panel de seguimiento de envíos en tiempo real para una red de distribución regional.',
    tags: ['Astro', 'TypeScript', 'Azure SQL'],
    year: '2026',
    status: 'Lanzado',
    demo: 'https://norte.example.com',
    repo: 'https://github.com/tu-estudio/norte',
    featured: true,
    preview: {
      tone: 'bone',
      brand: 'norte',
      nav: ['Envíos', 'Rutas', 'Soporte'],
      kicker: 'Logística sin fricción.',
      headline: ['Cada envío.', 'A tiempo.'],
      pill: 'Rastrear un pedido',
      caption: 'Visibilidad completa, de la bodega a la puerta.',
    },
  },
  {
    slug: 'kairo',
    title: 'Kairo',
    category: 'Videojuego · Unity',
    summary: 'Roguelike táctico por turnos con generación procedural de niveles y guardado en la nube.',
    tags: ['Unity', 'C#', 'Diseño de juego'],
    year: '2026',
    status: 'En desarrollo',
    demo: 'https://tu-estudio.itch.io/kairo',
    featured: true,
    preview: {
      tone: 'graphite',
      brand: 'KAIRO',
      nav: ['El juego', 'Diario', 'Comunidad'],
      kicker: 'Un roguelike táctico.',
      headline: ['Cae. Aprende.', 'Vuelve.'],
      pill: 'Jugar la demo',
      caption: 'Cada partida cuenta una historia distinta.',
    },
  },
  {
    slug: 'vera',
    title: 'Clínica Vera',
    category: 'Salud · Sistema de citas',
    summary: 'Agenda en línea, expedientes y recordatorios automáticos para una clínica con tres sedes.',
    tags: ['.NET', 'Azure SQL', 'API REST'],
    year: '2025',
    status: 'Lanzado',
    demo: 'https://vera.example.com',
    featured: true,
    preview: {
      tone: 'steel',
      brand: 'vera',
      nav: ['Servicios', 'Sedes', 'Agenda'],
      kicker: 'Salud, bien organizada.',
      headline: ['Menos espera.', 'Más cuidado.'],
      pill: 'Agendar una cita',
      caption: 'Tu consulta, a dos clics de distancia.',
    },
  },
];
