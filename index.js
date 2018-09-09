const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

      if(message.content == 'tb!ping') {
             message.reply('pong!');
       }

      if(message.content == 'tb!commands') {
             message.reply('tb!ping tb!Amar tb!Twails tb!Twailserver');

       }

      if(message.content == 'tb!Amar') {
             message.channel.send('Amar created me.');

       }

});

bot.login('NDg4MTg5Mjg3ODM4NTE1MjAw.DnYrSg.S31nkzwlkikpyzAoaz5bFRUkd4s');