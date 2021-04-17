require("dotenv").config();
const imageToAscii = require("asciify-image");
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
    message.channel.send("!play - plays bad apple at 40 fpm (frames per minute) and it takes 2hrs 44 mins and 18 secs (I could run it faster but discord cant)");
  }
  if (message.content === "!play") {
    console.log(`[${message.author.tag}]: ${message.content}`);
      var img = 1;
      var newImg = 1;
      var max = 6572;
      for (var i = 0; i < max; i++) {
        setTimeout(() => {
          var newImg = `0${img}`;
          for (var c = 0; c < 5; c++) {
            if (newImg.length < 5) {
              newImg = `0${newImg}`;
            }
          }
          imageToAscii(`./imgs/${newImg}.png`, {
            fit:    'box',
            width:  36,
            height: 36,
            color: false
          }, (err, converted) => {
            if (err) {
              return console.log(err);
            }
<<<<<<< HEAD
            var persent = (Math.round((img/max)*1000))/10;
            var edited = "```\n"+converted+"\n```"+persent+"%";
=======
            var edited = "```\n"+converted+"\n```";
>>>>>>> 0fbe47c6b548e4dc54a994f859f42aed03352d9f
            var newMsg = edited;
            img++;
            message.channel.send(newMsg);
          })
        }, 1500 * i);
      }
    }
  });

client.login(process.env.Token);
