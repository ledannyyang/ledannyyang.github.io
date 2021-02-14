// const TelegramBot = require("node-telegram-bot-api");
// const token = "1640720531:AAEj-A2KP2hRP1ltRHdar5IWtzfG-_NLtxU"
// const bot = new TelegramBot(token, {polling: true});
// const chatId = 920224495
//
// function sendMessage() {
//     // const date = new Date().toLocaleString()
//     const helloBot = "A wild recruiter is visiting your page ";
//     bot.sendMessage(920224495, helloBot);
// }

const TELEGRAM_BOT_TOKEN = "1640720531:AAEj-A2KP2hRP1ltRHdar5IWtzfG-_NLtxU"

const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

const chatId = 920224495
const date = new Date().toLocaleString()
const helloBot = "A wild recruiter is visiting your page at " + date;

bot.sendMessage(chatId, helloBot);