// =========================================================
// MISIONES (PROYECTOS) — placeholders editables
// Añade, quita o reordena objetos; la sección se genera sola.
// =========================================================

export type MissionStatus = 'DEPLOYED' | 'IN_PROGRESS' | 'CLASSIFIED' | 'ARCHIVED';

export interface Project {
  id: string;          // código de misión, p. ej. 'M-001'
  title: string;
  codename?: string;   // subtítulo táctico
  description: string;
  status: MissionStatus;
  version: string;
  year: string;
  tags: string[];
  repo?: string;       // URL del repositorio
  demo?: string;       // URL de la demo / build jugable
  featured?: boolean;  // ocupa dos columnas en escritorio
}

export const projects: Project[] = [
  {
    id: 'M-001',
    title: 'Proyecto Insignia',
    codename: 'OPERATION_IRONCLAD',
    description:
      'Plataforma web full-stack con panel de control en tiempo real, autenticación y reportes. Sustituye este texto por el resumen de tu proyecto principal.',
    status: 'DEPLOYED',
    version: 'v2.3.0',
    year: '2026',
    tags: ['Astro', 'TypeScript', 'Azure SQL', 'Tailwind'],
    repo: 'https://github.com/tu-usuario/proyecto-insignia',
    demo: 'https://proyecto-insignia.dev',
    featured: true,
  },
  {
    id: 'M-002',
    title: 'Juego Indie',
    codename: 'OPERATION_EMBER',
    description:
      'Videojuego de acción táctica en desarrollo con Unity. Sistemas de IA enemiga, guardado y HUD diegético.',
    status: 'IN_PROGRESS',
    version: 'v0.8.2-BETA',
    year: '2026',
    tags: ['Unity', 'C#', 'Blender'],
    repo: 'https://github.com/tu-usuario/juego-indie',
    demo: 'https://tu-usuario.itch.io/juego-indie',
  },
  {
    id: 'M-003',
    title: 'API de Servicios',
    codename: 'OPERATION_RELAY',
    description:
      'API REST con .NET y Azure SQL: autenticación JWT, pruebas automatizadas y despliegue continuo.',
    status: 'DEPLOYED',
    version: 'v1.4.1',
    year: '2025',
    tags: ['C#', '.NET', 'Azure SQL', 'CI/CD'],
    repo: 'https://github.com/tu-usuario/api-servicios',
  },
  {
    id: 'M-004',
    title: 'Herramienta Interna',
    codename: 'OPERATION_GHOST',
    description:
      'Proyecto bajo acuerdo de confidencialidad. Describe el problema resuelto y el impacto sin revelar detalles sensibles.',
    status: 'CLASSIFIED',
    version: 'v1.0.0',
    year: '2025',
    tags: ['TypeScript', 'Node.js'],
  },
];
