const fs = require('fs');
const axios = require('axios');
const path = require('path');

module.exports = {
    config: {
        name: "eren",
        version: "1.0",
        author: "𝐂𝐈𝐃×͜×𝐊𝐀𝐆𝐄𝐍𝐎",
        countDown: 5,
        role: 0,
        shortDescription: "Envoie une vidéo d'Eren",
        longDescription: "Cette commande envoie une vidéo emblématique d'Eren Yeager.",
        category: "fun",
    },
    onStart: async function ({ api, event }) {
        try {
            const videoUrl = "https://i.imgur.com/CpiRUKy.mp4";
            const tmpFolderPath = path.join(__dirname, 'tmp');

            if (!fs.existsSync(tmpFolderPath)) {
                fs.mkdirSync(tmpFolderPath);
            }

            const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
            const videoPath = path.join(tmpFolderPath, 'eren_video.mp4');

            fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

            await api.sendMessage({
                body: '𝐑𝐈𝐏 𝐄𝐑𝐄𝐍😭',
                attachment: fs.createReadStream(videoPath)
            }, event.threadID);

            // Supprimez le fichier temporaire
            fs.unlinkSync(videoPath);
        } catch (error) {
            console.error('Erreur dans la commande Eren:', error);
            api.sendMessage('⚠ Une erreur est survenue lors de l\'envoi de la vidéo.', event.threadID);
        }
    }
};
