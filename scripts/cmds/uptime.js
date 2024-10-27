const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Manila');
const os = require('os');

module.exports = {
  config: {
    name: "uptime",
    aliases: ["up","prime"],
    version: "1.0",
    countDown: 10,
    author: "lelouch ",
    role: 0,
    shortDescription: {
      en: "check your status bot"
    },
    longDescription: {
      en: "check your status bot"
    },
    category: "system",
    guide: {
      en: "{pn}"
    }
  },
  
onStart: async function ({ message, event, usersData, threadsData }) {
     const uptime = process.uptime();
     const startTime = Date.now();
     const hours = Math.floor(uptime / 3600);
     const minutes = Math.floor((uptime % 3600) / 60);
     const seconds = Math.floor(uptime % 60);
     
     const arif = `${hours} hours ${minutes} minutes ${seconds} seconds`;
     
     const edi = "https://www.facebook.com/Im.ericsontyz";
     const vania = await global.utils.getStreamFromURL("https://i.imgur.com/V1Ysg5O.jpeg");
   
     const now = moment();
     const riley = now.format('DD-MMMM-Y/hh.mm.ss A');
     
     const veli = `${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`;
     const putra = await usersData.getAll();
     const loufi = await threadsData.getAll(); 
     const luxion = `${os.type()} ${os.release()}`;
     const rizky = `${os.cpus()[0].model} (${os.cpus().length} cores)`
     
     const endTime = Date.now();
     const raffa = endTime - startTime;
     
     const hadi = `${arif}\n━━━━━━━━━━━\nBot Ping: ${raffa}\nTotal User: ${putra.length}\nTotal Grup: ${loufi.length}\nMemory: ${veli}\nOS: ${luxion}\nCPU: ${rizky}\n\ninfo: ${riley}\nDevelover: ${edi}`

     message.reaction("✔", event.messageID);
     message.reply({ body: hadi, attachment: vania }, event.threadID);
  },
};
