var Discord = require('discord.js');
var client = new Discord.Client();
client.on("message", function(message){
  if(message.content.startsWith(`!#memes`)){
  client.setStatus('online', "with Uni 💕")
  return;
}
});
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
