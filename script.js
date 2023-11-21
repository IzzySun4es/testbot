const TelegramBot = require('node-telegram-bot-api');
const token = '6042847893:AAEInh1GqiF_fovbbYpmsH0MgbD2OQa084U';

const bot = new TelegramBot(token, {polling: true});



bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  bot.sendMessage(chatId, msg.text);
});
