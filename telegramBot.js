const TELEGRAM_BOT_TOKEN = "1640720531:AAEj-A2KP2hRP1ltRHdar5IWtzfG-_NLtxU"

const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

const chatId = 920224495
const date = new Date().toISOString()
const helloBot = "A wild user is visiting your page at " + date;

bot.sendMessage(chatId, helloBot);