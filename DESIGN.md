# Sistema de diseño

Sitio de la consultoría de software (Astro 7 + Tailwind CSS v4). El estilo visual, el layout y las interacciones
se inspiran en la plantilla Relay (relay-theme.pages.dev). **No** se usan su logo, textos, fotos
ni marca: todo el contenido es propio o placeholder.

## Principios
- **Monocromo.** Negro puro, texto casi blanco, grises para jerarquía. Sin color de acento.
- **Una sola fuente.** Rethink Sans Variable (`@fontsource-variable/rethink-sans`).
- **Titulares en dos tonos.** Primera línea en `text`, segunda en `subtle` (`.tone-2`) o con
  degradado metálico en el hero (`.tone-chrome`).
- **Mucho aire.** Secciones de 90 px de padding vertical y un contenedor de 1280 px máximo.
- **Movimiento suave.** Solo `transform` y `opacity`, curva `--ease-out-soft`, y todo se
  desactiva con `prefers-reduced-motion`.

## Tokens (`src/styles/global.css` → `@theme`)
| Token | Valor | Uso |
|---|---|---|
| `bg` | `#000` | fondo |
| `surface` | `#151515` | superficies sólidas |
| `text` | `#f5f5f5` | texto principal, botón primario |
| `muted` | `#b3b3b8` | párrafos, eyebrows, etiquetas |
| `subtle` | `#66666c` | segunda línea de titulares |
| `ink` | `#0b0b0b` | texto sobre blanco |
| `line` | `rgb(255 255 255 / .16)` | bordes de 1 px |
| `radius-card` | `26px` (20 px en móvil) | tarjetas |
| `ease-out-soft` | `cubic-bezier(.22,1,.36,1)` | transiciones |

## Tipografía
| Utilidad | Tamaño | Peso | Tracking |
|---|---|---|---|
| `text-display` | `clamp(54px, min(10.6vw, 17vh), 176px)` | 700 | −0.055em |
| `text-heading` | `clamp(40px, 6vw, 86px)` | 600 | −0.045em |
| `text-title` | 24px | 600 | −0.035em |
| `text-lead` | 21px / 1.55 | 400 | — |
| `text-body` | 17px / 1.6 | 400 | — |
| `label` | 11px, mayúsculas | 400 | +0.14em |

## Layout
- `container-site`: `min(1280px, 100% - 2 × gutter)`, con gutter de 48 / 32 / 20 px
  (cortes en 1100 y 600 px).
- `section-y`: 90 / 85 / 65 px de padding vertical (cortes en 850 y 600 px).

## Componentes base (`@layer components`)
- `.eyebrow`: texto de 13 px con un punto luminoso delante ("• Proyectos").
- `.pill`: etiqueta en píldora con borde sutil (hero).
- `.btn` + `.btn-primary` / `.btn-secondary`: píldora con flecha; la flecha se desplaza en hover.
- `.card`: degradado blanco al 6 % → 2 %, borde interior luminoso y sombra profunda.
- `.arrow-circle`: círculo de 38 px con flecha que gira 45° y se invierte en hover de `.group`.

## Header (`src/components/Header.astro`)
- Píldora de vidrio fija: 1180 px máx, 60 px de alto, `top: 14px` (58 px y `100% - 24px` en móvil).
- Nav centrada; los items con `menu` en `src/data/site.ts` abren un panel (Proyectos con 3
  destacados de `projects.ts`, Servicios con los 6 servicios de `services.ts`).
- Paneles: clic para abrir, uno a la vez; se cierran con Escape (devuelve el foco), clic fuera o
  al elegir un enlace. Animación con `opacity` + `transform`, `inert` cuando están cerrados.
- ≤ 1100 px: nav oculta, botón circular de 34 px que abre el menú móvil (bloquea el scroll).
- El vidrio se vuelve más opaco tras 24 px de scroll (`.is-scrolled`).
- Iconos de línea en `src/components/Icon.astro`.

## Hero (`src/components/Hero.astro`)
- Pantalla completa (`100svh`, mín. 760 px; en móvil `max(720px, 100svh)`), contenido centrado.
- Textos en `src/data/site.ts` → `hero`. Titular con `text-display` (10.2vw en móvil); la 2.ª
  línea usa `tone-chrome`.
- Fondo: si `hero.image` tiene una ruta, se usa esa foto en blanco y negro al 40 % con blur de
  1 px; si está vacío, una escena abstracta (luz cenital, suelo en perspectiva y grano).
  Encima va siempre la viñeta que funde a negro.
- Entrada escalonada con CSS (`.hero-in`, opacidad + 28 px, `--d` = retraso).
- Parallax del fondo con el puntero (±1.2 %), solo con ratón y sin `prefers-reduced-motion`.
- Indicador de scroll abajo a la izquierda con flecha que oscila.

## Proyectos (`Projects.astro`, `ProjectCard.astro`, `SplitHeading.astro`)
- `SplitHeading`: eyebrow + titular en dos tonos a la izquierda; texto y `.text-link` a la
  derecha, alineados abajo (en columna ≤ 850 px).
- Tarjetas de 750 px de alto (máx. `100svh - 140px`), radio 32 px, `position: sticky; top: 110px`
  y 85 px de separación. Al cubrirse, la anterior se escala hasta 0.94, sube 14 px y se
  oscurece (`--shade`); calculado en `requestAnimationFrame`, solo transform/opacity.
- Arte: captura `image` o vista previa dibujada en CSS (`preview` en `projects.ts`, tonos
  `bone`, `graphite`, `steel`). Su tipografía escala con unidades `cqi` del contenedor.
- Panel de vidrio abajo a la izquierda (categoría, título 46 px, estado · año y tags) y
  círculo con flecha arriba a la derecha que gira en hover.
- Toda la tarjeta es un enlace (`.card-link`); "Repositorio" queda por encima como enlace aparte.
- ≤ 850 px: sin sticky ni escalado, arte con `aspect-ratio` y panel debajo.

## Fases
0 base · 1 header · 2 hero · 3 proyectos (tarjetas apiladas sticky) · 4 stack · 5 footer ·
6 movimiento · 8 rendimiento/a11y/SEO · 9 deploy. Un commit por fase.

## Reglas de implementación
- JS vanilla en `<script>` de Astro, sin React, Alpine ni GSAP.
- Si se activa `ClientRouter`, re-inicializar los scripts en `astro:page-load`.
- Contenido editable en `src/data/*.ts`.
