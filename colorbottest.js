var Discord = require('discord.js');
var data;
var client = new Discord.Client();
// https://www.npmjs.com/package/karma
client.on("message", function(message){
  var updateRoleArray = message.content.slice(1).split("|");
  var colors = updateRoleArray[0];
  var role = updateRoleArray[1];
  if (message.content.startsWith(`?updatingRole`)){
    client.sendMessage(m.channel, "`The format for the updating role is #(Hex without hash-tag)|Rolename .`");
    return;
  }
  if (message.content.startsWith(`#`)){
    var data = {
      color: "0x" + colors, 
    name: role
    }
    client.updateRole(role, data, callback(error, role){})
    return;
  }
  });
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
