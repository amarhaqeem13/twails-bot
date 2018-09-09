const Discord = require('discord.js');
const bot - new Discord.Client();

bot.on('message', (message) => {
  
  if(message.content == 't!ping') {
      message.reply('pong!');
  }
  
});

bot.login('NDg4MTg5Mjg3ODM4NTE1MjAw.DnYrSg.S31nkzwlkikpyzAoaz5bFRUkd4s'):
