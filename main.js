const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '='
client.on('ready', () =>{
  console.log('online!')
  client.user.setActivity(' this server', { type: 'WATCHING'}).catch(console.error);

})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('hello Server!');
    } else if (command == 'help'){
        message.channel.send('i heard someone needs help! the prefix is ^ here is an example command ^prefix');
    } else if (command == 'prefix'){
        message.channel.send('prefix is ^');
    } else if (command == 'eggdog')
        message.channel.send('https://th.bing.com/th/id/OIP.xTzB32685TLVTbwSXc-ZcwHaEK?w=313&h=180&c=7&o=5&pid=1.7');
      else if (command == 'pooistasty')
        message.channel.send('https://th.bing.com/th/id/OIP.FtoAvDX3UDQYemuxkTr67gHaEK?w=295&h=180&c=7&o=5&pid=1.7');
      else if (command == 'carbreak')
        message.channel.send('https://media.tenor.com/images/97d6783304bd95d265f9c44d43a0b3ad/tenor.gif')

})

client.login('NzM4MzExNTIwOTU3NDk3NDA2.XyKELw.g6aqJruzr8CD1txBraKV_lECZvs');
