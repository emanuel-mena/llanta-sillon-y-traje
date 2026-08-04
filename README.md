# La llanta, el sillón y los trajes

Libro interactivo desarrollado para el curso de Pensamiento Crítico de la Universidad CENFOTEC. El proyecto reúne una antología de relatos escritos a partir de una imagen polisémica: una misma imagen puede provocar interpretaciones, preguntas y narrativas diferentes.

La aplicación convierte esos resultados en una experiencia editorial digital, con una introducción al proyecto, un visor de páginas con efecto de libro y acceso al PDF completo.

## Qué incluye

- Página de inicio con la identidad visual del proyecto y una introducción a la actividad.
- Visor flipbook interactivo para leer `Cuentos_Imagen_Polisemica.pdf` dentro del sitio.
- Controles del visor para navegación, sonido y descarga del documento.
- Enlace para descargar el PDF completo.
- Sección de créditos con las personas editoras y de diseño.
- Diseño adaptable para distintos tamaños de pantalla.

## Tecnologías

- React 19
- TypeScript
- Vite
- DearFlip para el visor interactivo del PDF
- React Icons

## Requisitos

- Node.js y npm instalados.

## Desarrollo local

Instala las dependencias y levanta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local de la aplicación, normalmente `http://localhost:5173`.

## Comandos disponibles

```bash
npm run dev       # inicia el servidor de desarrollo
npm run build     # comprueba TypeScript y genera la versión de producción
npm run lint      # ejecuta ESLint
npm run preview   # previsualiza la compilación de producción
```

## Organización principal

```text
src/
├── App.tsx                    # estructura de la página y contenido editorial
├── Flipbook.tsx               # integración del visor DearFlip
├── App.css                    # estilos de la experiencia principal
├── index.css                  # estilos globales
└── components/
    └── ContributorBadge.tsx   # ficha visual de cada contribuyente

public/
├── Cuentos_Imagen_Polisemica.pdf  # libro que se muestra en el visor
└── dflip/                         # recursos locales de DearFlip y PDF.js
```

## Contenido y recursos

El PDF se sirve como un recurso estático desde `public/Cuentos_Imagen_Polisemica.pdf`. Si se sustituye por una nueva edición, debe conservarse esa ruta o actualizar la constante `pdfPath` en `src/App.tsx`. Los recursos de DearFlip dependen de la carpeta `public/dflip/`, por lo que esta carpeta debe mantenerse al desplegar el proyecto.

## Créditos

Proyecto académico creado por:

- Max Alonso Guzmán Rodríguez — editor principal
- Fabián Vargas Hidalgo — editor auxiliar
- Emanuel Mena Araya — diseñador