var Discord = require('discord.js');

var client = new Discord.Client();

client.on("message", function(message){
  var messagecontent = message.content;
  if (message.content.startsWith(`#`) && message.content.length === 7){
    var data = {color:"0xD490BB", hoist : false, name : "test", permissions : [ "attachFiles", "sendMessages"]}
    client.createRole("81550379526914048", data, message.content);
    return;
  } else {
    if(message.content === `#!stop`){
    client.logout("error")
  } else if(message.author.id === "81526338728501248"){
  client.setStatus('online', message.content)
  return;
}
}
});
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
