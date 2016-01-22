var Discord = require('discord.js'); //to view the command list/et. go to https://discordjs.readthedocs.org/en/latest/
var client = new Discord.Client(); 

client.on("message", function(message){ //standard message syntax
    if(message.content === `what is the best gmo?`){
  client.sendMessage(message.channel, "Corn!"
  return;
}
});
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
