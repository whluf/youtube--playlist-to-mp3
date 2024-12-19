# YouTube Playlist to MP3 Downloader

This Node.js script allows users to download all videos from a specified YouTube playlist and convert them into MP3 format. It automates the process of fetching video URLs, downloading the content, and converting it to audio files.

## Features

- Download all videos from a YouTube playlist.
- Convert downloaded videos to MP3 format.
- Save MP3 files to a designated directory.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- [youtube-dl](https://github.com/ytdl-org/youtube-dl) installed and accessible in your system's PATH.
- [ffmpeg](https://ffmpeg.org/download.html) installed and accessible in your system's PATH.

**IMPORTANT**
IF YOU are planning to download content that may be consider not recomended for young and childrens, you need to configure your cookies:
[more info](https://github.com/yt-dlp/yt-dlp/wiki/FAQ#how-do-i-pass-cookies-to-yt-dlp)

1. Install:
    - for Chrome browser the [Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc) extension
    - for Firefox browser the [cookies.txt](https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/) extension
2. Open your browser and navigate to the YouTube website and use the extension to get your cookies file.
3. Once you downloaded your cookies.txt file, you need to place it in the same directory as your script with "cookies.txt" name.

** DONE! you are ready to go! **

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. **Install Node.js dependencies**:

    ```bash
    npm install

3. **Ensure youtube-dl and ffmpeg are installed**:

- **For Windows**:
Download and install youtube-dl.
Download and install ffmpeg.

- **For macOS**:
Install via Homebrew:
    ```bash
    brew install youtube-dl ffmpeg

- **For Linux**:
    Install via your package manager. For Debian/Ubuntu:
    ```bash
    sudo apt-get install youtube-dl ffmpeg

# Usage
**Configure the script**:

1. Open script.js and replace 'https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID' with the URL of your desired YouTube playlist.

2. Run the script using Node.js:
    ```bash
    node script.js
    The MP3 files will be saved in the downloads directory within the project folder.

# Disclaimer
This script is provided for educational and personal use only. Downloading YouTube videos may violate YouTube's Terms of Service and could infringe on copyright laws. Users are solely responsible for ensuring that they have the right to download and use the content. The author assumes no liability for any misuse of this script.

Please respect copyright laws and only download content that you have permission to use.

# License
This project is licensed under the MIT License.

# Acknowledgements
- youtube-dl 
- ffmpeg
- Node.js

# Contact
- [LinkedIn](https://www.linkedin.com/in/pabloramos07/)
- [website](https://www.pabloramos.uy)

# Author
- [Pablo Ramos](https://www.pabloramos.uy)
