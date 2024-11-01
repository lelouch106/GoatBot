module.exports = {
  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "ncs pro",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },
 
  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);
 
      const permission = ["××","61552422054139"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "𝐅𝐮𝐜𝐤 𝐲𝐨𝐮 𝐨𝐧𝐥𝐲 𝐦𝐲 𝐛𝐨𝐬𝐬 𝙚𝙧𝙞𝙘𝙨𝙤𝙣 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐜𝐧𝐝 👊 𝐑𝐞𝐬𝐩𝐞𝐜𝐭 ",
          event.threadID,
          event.messageID
        );
      }
 
      const threadID = event.threadID;
      const adminID = event.senderID;
 
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);
 
      api.sendMessage(
        `I respect you my boss!👏 You are now an admin in this thread.`,
        threadID
      );
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      api.sendMessage("Apologies, my kings. An error occured when trying to make you admin😭.", event.threadID);
    }
  },
};
