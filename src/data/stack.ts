// =========================================================
// ARSENAL (STACK) — se muestra como logs de consola
// level: 1-5 (barra de potencia)
// =========================================================

export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  note?: string;
}

export interface SkillGroup {
  module: string; // nombre del módulo en la consola
  skills: Skill[];
}

export const stack: SkillGroup[] = [
  {
    module: 'FRONTEND',
    skills: [
      { name: 'Astro', level: 4, note: 'islands / SSG' },
      { name: 'TypeScript', level: 4 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'React', level: 3 },
    ],
  },
  {
    module: 'BACKEND_DATA',
    skills: [
      { name: 'C# / .NET', level: 4 },
      { name: 'Azure SQL', level: 4, note: 'T-SQL / índices' },
      { name: 'Node.js', level: 3 },
      { name: 'REST APIs', level: 4 },
    ],
  },
  {
    module: 'GAME_DEV',
    skills: [
      { name: 'Unity', level: 4, note: 'URP / 2D + 3D' },
      { name: 'C# gameplay', level: 4 },
      { name: 'Blender', level: 3 },
    ],
  },
  {
    module: 'OPS_TOOLS',
    skills: [
      { name: 'Git / GitHub', level: 5 },
      { name: 'Azure', level: 3 },
      { name: 'Figma', level: 3 },
    ],
  },
];
