//importing libraries
var Discord = require('discord.js'); //to view the command list/et. go to https://discordjs.readthedocs.org/en/latest/
var ytdl = require('ytdl-core');
var request = require('superagent');
var url = require('url');
var client = new Discord.Client(); 

//videos
var infoVids = [];
var currentStream = false;

client.on("message", function(message){ //standard message syntax
    if(message.content === `what is the best gmo?` || message.content = `?GIMO`){
  client.sendMessage(message.channel, "Corn!"
  return;
}
});
function play(video) { //video will be the selected video
    var selectedVid = video || defaultVideo
  if (client.internal.voiceConnection) {
    var connection = client.internal.voiceConnection;
    currentStream = video.getStream();

    currentStream.on('error', (err) => {
      if (err.code === 'ECONNRESET') {
        if (!Config.suppressPlaybackNetworkError) {
          boundChannel.sendMessage(`There was a network error, the connection to youtube may be unstable.`);
        }
      } else {
        boundChannel.sendMessage(`There was an error during playback **${err}**`);
      }

      playStopped(); // skip to next video
    });
  })
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
