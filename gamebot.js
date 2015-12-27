var Discord = require('discord.js');
var rl = require('readline');

var client = new Discord.Client();

module.exports = function ask(question, callback) {
  var r = rl.createInterface({
    input: process.stdin,
    output: process.stdout});
  r.question(question + '\n', function(answer) {
    r.close();
    callback(null, answer);
  });
}

ask('Did you find this usefull?', function(answer) {
  var playingChoice = answer
  console.log(answer)
});

client.on("message", function(message){
  if(message.content.startsWith(`!#memes`)){
  client.setStatus('online', playingChoice)
  return;
}
});
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
