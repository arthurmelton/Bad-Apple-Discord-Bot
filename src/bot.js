require("dotenv").config();
  const { Client } = require('discord.js');
  const client = new Client();
fs = require('fs');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
  console.log(`${client.user.tag} bot is on`);
   client.user.setActivity(`!help`, { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
})
client.on('message', (message) => {
  if (message.author.bot === true) return;
  if (message.content === "!help") {
    message.channel.send("!play - plays bad apple at 30 fpm (frames per minute) and it takes 2hrs and 26 mins (I could run it faster but discord cant)");
  }
  if (message.content === "!play") {
    console.log(`[${message.author.tag}]: ${message.content}`);
    fs.readFile('input.txt', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      var newData = data.replaceAll("1", ":white_medium_square:").replaceAll("0", ":black_large_square:");
      //const lines = data.split("\n");
      const lines = data.split("\n");
      var line = 0;
      for (var i = 0; i < 4382; i++) {
        setTimeout(() => {
          var newMsg = "";
          for (var c = 0; c < 28; c++) {
            newMsg = `${newMsg}\n${lines[line]}`;
            line++;
          }
          newMsg = `${newMsg}`;
          message.channel.send(newMsg);
        }, 2000 * i);
      }
    });
  }
})

client.login(process.env.Token);
