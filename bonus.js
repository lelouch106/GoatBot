module.exports.config = {
  name: "bonus",
  version: "1.0",
  author: "JISHAN76",
  shortDescription: {
    en: "Add $100.000 to the balance",
  },
  longDescription: {
    en: "This command adds $100.000 to the user's balance if they have less than $50.",
  },
  category: "Economy",
};

module.exports.onStart = async function ({ message, event, usersData }) {
  const { senderID } = event;
  const userData = await usersData.get(senderID);
  const currentBalance = userData.money;

  if (currentBalance >= 100.000) {
    return message.reply("Sorry, you are not eligible for the bonus as you already have $100.000 or more in your balance.");
  }

  // Add $500 to the user's balance
  await usersData.set(senderID, {
    money: currentBalance + 100.000,
    data: userData.data,
  });

  return message.reply("Successfully added $100.000 to your balance!");
};
