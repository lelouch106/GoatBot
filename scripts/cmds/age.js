const axios = require('axios');
const fs = require('fs-extra');

module.exports = {
  config: {
    name: "age",
    version: "1.0",
    author: "JISHAN76",
    countDown: 10,
    role: 0,
    shortDescription: "calculate your age",
    longDescription: "",
    category: "image",
    guide: {
      en: "{p}{n} text",
    }
  },

  onStart: async function ({ message, args, event, api }) {
    if (!args || args.length < 1) {
      return message.reply(`Please enter the date of birth in the format dd/mm/yyyy.`);
    }

    const dateOfBirth = args[0].split('/');
    const day = dateOfBirth[0];
    const month = dateOfBirth[1];
    const year = dateOfBirth[2];

    try {
      const response = await axios.get(`https://api.tanvir00.repl.co/age?day=${day}&month=${month}&year=${year}&apikey=test-api`, { responseType: 'arraybuffer' });

      const form = {
        body: "Your Age is ;",
        attachment: []
      };

      const outputData = Buffer.from(response.data, 'binary');
      const filePath = 'output.png';
      await fs.writeFile(filePath, outputData);

      form.attachment[0] = fs.createReadStream(filePath);
      await message.reply(form);

      await fs.remove(filePath); // Remove the temporary file
    } catch (error) {
      console.error(error);
      await message.reply("An error occurred while generating the output. Please try again later.");
    }
  }
};
