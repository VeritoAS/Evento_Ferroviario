# Congreso Ferroviario Internacional Logístico

Sitio local de la segunda edición, hecho con Vite, Vue 3 y Vuetify 3. El diseño utiliza componentes, temas y clases utilitarias de Vuetify; no hay CSS personalizado.

## Estructura

- `src/App.vue`: ensambla las secciones y gestiona el enlace de boletos.
- `src/components/`: cabecera y pie de página.
- `src/sections/`: un archivo por sección visible de la página.
- `src/data/event.js`: contenido y enlaces pendientes de confirmación.
- `public/assets/`: logotipo, imágenes ilustrativas y fotografías del diseño de Canva.
- `public/videos/`: invitaciones originales.
- `public/docs/programa-ejemplo.pdf`: archivo de prueba para verificar la descarga.

## Ejecutar

```sh
npm install
npm run dev
```

Para comprobar la versión de producción:

```sh
npm run build
npm run preview
```

## Datos por completar

- `src/data/event.js`: colocar la URL de compra de NexoraPro en `ticketUrl`.
- Si se recibe el video introductorio, guardar el archivo en `public/videos/` y configurar `introVideoUrl` en `src/data/event.js`. Se abrirá a petición del visitante, sin reproducción automática.
- Sustituir los espacios del carrusel por nombres y logotipos oficiales de los patrocinadores.
- Sustituir el PDF de demostración por el programa oficial de la segunda edición cuando esté confirmado.
- Confirmar teléfono, correo y dirección de las oficinas del CCE antes de publicar. La dirección mostrada no representa la sede del evento.
- Las dos imágenes de la galería provienen del diseño de Canva y se identifican como imágenes de referencia, no como fotos de la segunda edición.

Los botones de compra muestran un aviso mientras falta la URL de NexoraPro.
