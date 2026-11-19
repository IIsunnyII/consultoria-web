// =========================================================
// STACK TÉCNICO — tarjetas principales + lista de herramientas adicionales
// `mark` es el monograma que aparece en el recuadro de cada tarjeta.
// =========================================================

export interface Tool {
  name: string;
  category: string;
  description: string;
  mark: string;
}

export const stackIntro = {
  eyebrow: 'Nuestro stack',
  title: ['Herramientas probadas.', 'Elegidas con criterio.'] as [string, string],
  text: 'Trabajamos con tecnologías maduras y bien soportadas. Si tu equipo ya usa otras, nos adaptamos.',
  link: { label: 'Cuéntanos qué usas', href: '#contacto' },
};

export const tools: Tool[] = [
  { name: 'Astro', category: 'Frontend', description: 'Sitios rápidos que cargan solo lo necesario.', mark: 'As' },
  { name: 'TypeScript', category: 'Lenguaje', description: 'Código tipado que escala con el equipo.', mark: 'TS' },
  { name: 'C# / .NET', category: 'Backend', description: 'APIs robustas, seguras y bien probadas.', mark: 'C#' },
  { name: 'Azure SQL', category: 'Datos', description: 'Modelos consistentes y consultas eficientes.', mark: 'SQL' },
  { name: 'Unity', category: 'Videojuegos', description: 'Mundos jugables para PC y móvil.', mark: 'U' },
  { name: 'Azure', category: 'Nube', description: 'Despliegues seguros que crecen contigo.', mark: 'Az' },
  { name: 'GitHub', category: 'Colaboración', description: 'Revisión de código y CI/CD en cada cambio.', mark: 'GH' },
  { name: 'Figma', category: 'Diseño', description: 'Interfaces acordadas antes de programar.', mark: 'Fg' },
];

// Herramientas adicionales (se muestran como etiquetas)
export const moreTools = ['React', 'Node.js', 'Tailwind CSS', 'Blender', 'Docker', 'Postman'];
