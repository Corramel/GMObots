var Discord = require('discord.js');
var prompt = require('prompt.js');

var client = new Discord.Client();
prompt.start()
prompt.get(['playing'], function(err, result){
  var playingChoice = result.playing
  return;
});
client.on("message", function(message){
  if(message.content.startsWith(`!#memes`)){
  client.setStatus('online', "with Uni 💕")
  return;
}
});
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
