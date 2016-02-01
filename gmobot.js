var Discord = require('discord.js');
var client = new Discord.Client();
var ytdl = require('ytdl-core');
var request = require('superagent');
var url = require('url');

var VideoFormat = require('./lib/video-format.js');
var YoutubeStream = require('./lib/youtube-stream.js');
//var Saved = require('./lib/saved.js');
//Saved.read();

//var Config = require('./lib/config.js');
//var CURRENT_REV = 2;

var playQueue = [];
var boundChannel = false;
var currentStream = false;

// Video that is currently being played
var currentVideo = false;

var botMention = false;

var shouldStockpile = false;
var stockpile = '';

// Handling api key

client.on('message', function(message){
  if (client.user.id === message.author.id) return;
  if (message.content.startsWith('?help')) { // help
    client.reply(message, 'TBA');
    return; 
  }

  if (message.content.startsWith('?init')) { // init
    if (boundChannel) return;
    var channelToJoin = spliceArguments(message.content)[1];
    for (var channel of message.channel.server) {
      if (channel instanceof Discord.VoiceChannel) {
        if (!channelToJoin || channel.name === channelToJoin) {
          boundChannel = message.channel;
          client.reply(message, `Binding to textmeme channel <#${boundChannel.id}> and meme channel **${channel.name}** \`(${channel.id})\``);
          client.joinVoiceChannel(channel).catch(error);
          break;
        }
      }
    }
  }

  if (message.content.startsWith('?destroy')) { // destroy
    if (!boundChannel) return;
    client.reply(message, `Unbinding from <#${boundChannel.id}> and destroying meme connection`);
    playQueue = [];
    client.internal.leaveVoiceChannel();
    boundChannel = false;
    currentStream = false;
    currentVideo = false;
    return;
  }

  // Only respond to other messages inside the bound channel
  if (!message.channel.equals(boundChannel)) return;
  
  if(message.content.toLowerCase().startsWith('what is the best GMO food?') || message.content.toLowerCase().startsWith('?gimo')){
    var meme = ytdl("https://www.youtube.com/watch?v=P1j5cVj5miA", options = { filter: (format) => format.container === 'mp3', quality: 'lowest'});
    if (client.internal.voiceConnection) {
        var connection = client.internal.voiceConnection;
        currentStream = YoutubeStream.getStream(meme);
    }
  return;
  }
 /* if (m.content.startsWith(`${botMention} y`) // youtube
    || m.content.startsWith(`${botMention} q`) // queue
    || m.content.startsWith(`${botMention} p`)) { // play

    if (!checkCommand(m, 'yt')) return;

    var vidList = spliceArguments(m.content)[1];

    var vids = vidList.split(',');
    var suppress = 0;
    vids.forEach((vid, idx) => {
      if (idx == 1) suppress = vids.length - 2;
      if (idx == 2) suppress = -1;
      parseVidAndQueue(vid, m, suppress);
    });
  }
*/
/*function parseVidAndQueue(vid, m, suppress) {
  vid = resolveVid(vid, m);
  if (!vid) {
    client.reply(m, 'You need to specify a video!');
    return;
  }

  getInfoAndQueue(vid, m, suppress);
}


function getInfoAndQueue(vid, m, suppress) {
  requestUrl = 'http://www.youtube.com/watch?v=' + vid;
  ytdl.getInfo(requestUrl, (err, info) => {
    if (err) handleYTError(err);
    else {
      info.vid = vid;
      info.obtainedFromGetInfo = true;
      possiblyQueue(info, m.author.id, m, suppress);
    }
  });
}
*/
function handleYTError(err) {
  if (err.toString().indexOf('Code 150') > -1) {
  // Video unavailable in country
   boundChannel.sendMessage('This video is unavailable in the country the bot is running in! Please try a different video.');
  } else if (err.message == 'Could not extract signature deciphering actions') {
    boundChannel.sendMessage('YouTube streams have changed their formats, please update `ytdl-core` to account for the change!');
  } else if (err.message == 'status code 404') {
    boundChannel.sendMessage('That video does not exist!');
  } else {
    boundChannel.sendMessage('An error occurred while getting video information! Please try a different video.');
  }

  console.log(err.toString());
}
function spliceArguments(message, after) {
  after = after || 2;
  var rest = message.split(' ');
  var removed = rest.splice(0, after);
  return [removed.join(' '), rest.join(' ')];
}

function play(vid2beplayed) {
  currentVideo = vid2beplayed;
  if (client.internal.voiceConnection) {
    var connection = client.internal.voiceConnection;
    currentStream = YoutubeStream.getStream(video2beplayed);

    currentStream.on('error', (err) => {
      boundChannel.sendMessage(`There was an error during playback, error: **${err}**`);
    });
}
}
});
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
