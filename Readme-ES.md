# Descargador de Playlist de YouTube a MP3

Este script de Node.js permite a los usuarios descargar todos los videos de una lista de reproducción de YouTube y convertirlos en formato MP3. Automatiza el proceso de obtener direcciones URL de video, descargar el contenido y convertirlo en archivos de audio.

## Características

- Descarga todos los videos de una lista de reproducci n de YouTube.
- Convierte los videos descargados en formato MP3.
- Guarda los archivos MP3 en un directorio designado.

## Requisitos previos

- [Node.js](https://nodejs.org/) instalado en tu sistema.
- [youtube-dl](https://github.com/ytdl-org/youtube-dl) instalado y accesible en la ruta del sistema.
- [ffmpeg](https://ffmpeg.org/download.html) instalado y accesible en la ruta del sistema.

**IMPORTANTE**
SI EST S PLANIFICANDO DESCARGAR CONTENIDO QUE PUEDA SER CONSIDERADO NO ADECUADO PARA J VENES O NI OS, NECESITAR  CONFIGURAR SUS COOKIES:
[más información](https://github.com/yt-dlp/yt-dlp/wiki/FAQ#how-do-i-pass-cookies-to-yt-dlp)

1. Instalación:
    - para el navegador Chrome la [extensi n Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc)
    - para el navegador Firefox la [extensi n cookies.txt](https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/)
2. Abre tu navegador y navega hasta el sitio web de YouTube y utiliza la extensi n para obtener tu archivo de cookies.
3. Una vez que hayas descargado tu archivo de cookies.txt, debes colocarlo en el mismo directorio que tu script con el nombre "cookies.txt".

** LISTO! ya est  listo para ir! **

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. **instanación de dependencias de Node.js**:

    ```bash
    npm install

3. **Asegurate de tener youtube-dl y ffmpeg instaladas**:

- **En Windows**:
Descarga e instala youtube-dl.
Descarga e instala ffmpeg.

- **En macOS**:
Instalar via Homebrew:
    ```bash
    brew install youtube-dl ffmpeg

- **En Linux**:
    Instalar via package manager. En Debian/Ubuntu:
    ```bash
    sudo apt-get install youtube-dl ffmpeg

# Usage
**Configurar el script**:

1. Abrir ytmp3.js y reemplazar 'https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID' con la URL de la playlist de YouTube.

2. Ejecuta el script con Node.js:
    ```bash
    node ytmp3.js
    Los archivos descargados se guardan en el directorio 'downloads'.

# Descargo de responsabilidad
Este script se proporciona únicamente para uso educativo y personal. La descarga de videos de YouTube puede violar los Términos de servicio de YouTube y podría infringir las leyes de derechos de autor. Los usuarios son los únicos responsables de garantizar que tienen el derecho a descargar y usar el contenido. El autor no asume ninguna responsabilidad por el uso indebido de este script.

Respete las leyes de derechos de autor y descargue únicamente contenido para el que tenga permiso de uso.

# Licencia
Este proyecto se encuentra bajo la licencia MIT.

# Dependencias
- youtube-dl 
- ffmpeg
- Node.js

# Contacto
- [LinkedIn](https://www.linkedin.com/in/pabloramos07/)
- [website](https://www.pabloramos.uy)

# Autor
- [Pablo Ramos](https://www.pabloramos.uy)