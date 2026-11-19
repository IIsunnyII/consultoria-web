// =========================================================
// SERVICIOS — se usa en el menú del header y en la sección de servicios
// icon: nombre de uno de los iconos de src/components/Icon.astro
// =========================================================

export interface Service {
  title: string;
  kicker: string; // texto pequeño
  description: string;
  icon: 'web' | 'game' | 'api' | 'data' | 'tools' | 'support';
}

export const services: Service[] = [
  {
    title: 'Desarrollo web',
    kicker: 'Rápido y accesible',
    description: 'Sitios y aplicaciones con Astro y TypeScript que cargan al instante y se mantienen fácil.',
    icon: 'web',
  },
  {
    title: 'Videojuegos indie',
    kicker: 'Unity y C#',
    description: 'Prototipos y juegos completos con sistemas de juego que se sienten bien en las manos.',
    icon: 'game',
  },
  {
    title: 'APIs y backend',
    kicker: '.NET y Node.js',
    description: 'Servicios REST seguros, probados y listos para crecer con tu producto.',
    icon: 'api',
  },
  {
    title: 'Bases de datos',
    kicker: 'Azure SQL',
    description: 'Modelado, consultas eficientes e índices pensados para datos reales.',
    icon: 'data',
  },
  {
    title: 'Herramientas internas',
    kicker: 'Hechas a medida',
    description: 'Paneles y utilidades que ahorran horas de trabajo repetitivo a tu equipo.',
    icon: 'tools',
  },
  {
    title: 'Soporte continuo',
    kicker: 'Después del lanzamiento',
    description: 'Mantenimiento, mejoras y monitoreo para que el proyecto siga en forma.',
    icon: 'support',
  },
];
