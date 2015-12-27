var Discord = require('discord.js');

var client = new Discord.Client();

client.on("message", function(message){
  if(message.content === `#!stop`){
    client.logout("error")
  } else if(message.author.id === "81526338728501248"){
  client.setStatus('online', message.content)
  return;
}
});
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
