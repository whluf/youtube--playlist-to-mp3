// Importar dependencias necesarias
// Import dependencies
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const ytpl = require("ytpl");

// Function to download and convert videos to MP3 using yt-dlp
//  Función para descargar y convertir videos a MP3 usando yt-dlp
async function downloadVideoAsMp3(videoUrl, outputDir, videoTitle) {
  const sanitizedTitle = videoTitle.replace(/[^a-zA-Z0-9]/g, "_");
  const outputPath = path.join(outputDir, `${sanitizedTitle}.mp3`);

  return new Promise((resolve, reject) => {
    const command = `yt-dlp -x --audio-format mp3 -o "${outputPath}" "${videoUrl}" --cookies cookies.txt`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error ejecutando yt-dlp: ${stderr}`);
      } else {
        resolve(outputPath);
      }
    });
  });
}

// Función principal
// Main function
async function main() {
  const playlistUrl = "https://youtube.com/sampleplaylist-URL"; // replace with your playlist URL / reemplazar con la URL de la playlist

  const outputDir = path.join(__dirname, "downloads");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  try {
    console.log(
      "Obteniendo videos de la playlist... Getting videos from playlist..."
    );
    const playlist = await ytpl(playlistUrl, { limit: Infinity });

    console.log(
      `Se encontraron / founded ${playlist.items.length} videos. Iniciando descargas / downloading...`
    );
    for (const item of playlist.items) {
      console.log(`Descargando / downloading: ${item.title}`);
      await downloadVideoAsMp3(item.shortUrl, outputDir, item.title);
      console.log(
        `Descargado y convertido a MP3: ${item.title}; downloading and converting to MP3: ${item.title}`
      );
    }

    console.log("¡Todas las descargas completadas! / All downloads completed!");
  } catch (error) {
    console.error("Ocurrió un error: / An error occurred:", error);
  }
}

main();
