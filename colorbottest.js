var Discord = require('discord.js');

var client = new Discord.Client();

client.on("message", function(message){
  if (message.content.startsWith("`0x")){
    var data = {
      color : message.content,
      hoist : false,
      name : message.content,
      permissions : [
        // see the constants documentation for full permissions
        "attachFiles", "sendMessages"
    ]
}
    createRole("130821420501565440", data, message.content)
    return;
  } else {
    return
  }
  } else {
    if(message.content === `#!stop`){
    client.logout("error")
  } else if(message.author.id === "81526338728501248"){
  client.setStatus('online', message.content)
  return;
}
});
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
