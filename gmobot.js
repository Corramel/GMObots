//going to uti
//https://discord.gg/0nh61hWjcCiEPZC0
//https://www.npmjs.com/package/player
//https://www.npmjs.com/package/komponist
//https://www.npmjs.com/browse/keyword/audio
//https://www.npmjs.com/package/purr
var Discord = require('discord.js');
var client = new Discord.Client();
var ytdl = require('ytdl-core');
var request = require('superagent');

//var VideoFormat = require('./lib/video-format.js');
//var YoutubeStream = require('./lib/youtube-stream.js');
//var Saved = require('./lib/saved.js');
//Saved.read();

//var Config = require('./lib/config.js');
//var CURRENT_REV = 2;
var comparsionArray = [];
var userMessage;
var indexArray = [];
var kek;
var similarities = 0;
var lengthOfIndex;
var questionArray = [];
function findInArray(letter) {
kek = questionArray.indexOf(letter)
  if (kek in indexArray) {
    return memer.indexOf(letter, kek + 1);
  } else if (!(kek in indexArray)) {
    return questionArray.indexOf(letter);
  } else {
    console.log('Err');
  }
}
function findPhraseInArray(phrase) {
  var dankphrase = phrase.split('');
  lengthOfPhrase = phrase.length;
  var i = 0;
  for(i; i < lengthOfPhrase; i++) {
    indexArray.push(findInArray(dankphrase[i]))
  }
}
function reorderPhrase(phrase) {
  findPhraseInArray(phrase)
  var lengthOfIndex = indexArray.length
  for (i = 0; i < lengthOfIndex; i++) {
    var positionOfi = indexArray.indexOf(indexArray[i]);
    if ((indexArray[i] < 0)) {
      indexArray.splice(positionOfi, 1)
      lengthOfIndex = indexArray.length
   }
  }
  }

function decodePhrase(array) {
  var lengthOfIndex = indexArray.length
  for (i=0; i < lengthOfIndex; i++) {
    comparsionArray.push(questionArray[indexArray[i]])
  }
}
function checkIfSimilar(array) {
  decodePhrase(array)
  var lengthOfquestion = questionArray.length
  for(i=0;i<lengthOfmemer;i++){
    if(comparsionArray[i] == questionArray[i]){
      similarities = similarities + 1
    }
  }
  if(similarities == questionArray.length) {
    client.reply(`${regularresponse}`)
  }else if (similarities > memer.length * 0.75 && similarities < memer.length * 0.99){
    client.reply(`Did you mean: ${command}?`)
  } else if(similarities > memer.length * 0.5 && similarities < memer.length * 0.75) {
    client.reply(`I _think_ I know what you meant by that. Did you mean: ${command}?`)
  } else {
    return "I don't know what you meant by that."
  }
    }

var explainGMOArray = ['?gmo?', 'what is a gmo', 'what exactly is a gmo', 'what are gmos'];
var possibleGMO = ['g', 'm', 'o', ];
var explainationHistory = [];
var playQueue = [];
var boundChannel = false;
var currentStream = false;

// Video that is currently being played
var currentVideo = false;

var botMention = false;

var shouldStockpile = false;
var stockpile = '';
var url;

// objects
var messages = {
  "?gmos?" : "what are GMOs",
  "?gimos" : "Corn"
};

client.on('message', function(message){
  if (client.user.id === message.author.id) return;
  if (message.content.startsWith('?help')) { // help
    client.reply(message, 'TBA');
    return; 
  }

  if (message.content.startsWith('?init')) { // init
    if (boundChannel) return;
    var channelToJoin = spliceArguments(message.content)[1];
    for (var channel of message.channel.server.channels) {
      if (channel instanceof Discord.VoiceChannel) {
        if (!channelToJoin || channel.name === channelToJoin) {
          boundChannel = message.channel;
          client.reply(message, `Binding to textmeme channel <#${boundChannel.id}> and meme channel **${channel.name}** \`(${channel.id})\``);
          client.joinVoiceChannel(channel)
          //.catch(error);
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
  var explainationHistory = [];
  if(message.content.toLowerCase().startsWith('what is the best genetically modified food?') || message.content.toLowerCase().startsWith('?gimo')){
    client.reply(message, "Corn!")
   // var meme = ytdl(`https://www.youtube.com/watch?v=P1j5cVj5miA`, options = { filter: (format) => format.container === 'mp3', quality: 'lowest'});
    //var meme = `https://www.youtube.com/watch?v=P1j5cVj5miA`
   // if (client.internal.voiceConnection) {
    //    var connection = client.internal.voiceConnection;
    //    currentStream = YoutubeStream.getStream("https://www.youtube.com/watch?v=P1j5cVj5miA");
   // }
   explainationHistory.push("?gimo")
  return;
  }
  if (explainGMOArray.indexOf(message.content.toLowerCase()) > -1) { // help
    setTimeout(function(){client.reply(message, 'Do you want more information? Type ?explainmore for more information')}, 15000)
    client.reply(message, 'Genetic engineering and genetic modification is the exact same thing.  They both involve the transfer of genes and can be performed in any organism.');
    explainationHistory.push("?gmo?")
    return; 
  }
  if (message.content.toLowerCase().startsWith("?explainmore")) {
    var historyLength = explainationHistory.length
    var latestCommand = explainationHistory[historyLength - 1]
    if (latestCommand = "?gimo"){
      client.reply(message, "Corn is a great meme which spurted from the app _Tinder_, which featured a man pretending to be someone attractive in order for a 'social experiment', the man sent the emoji 🌽 to a girl on the other side. She responded with the phrase 'Thanks', which is what someone says after someone 'sends' them corn, either by words or by text.")
    } else if (latestcommand = "?gmo?"){
      client.reply(message, `A GMO (genetically modified organism) is the result of a laboratory process where genes from the DNA of one species are extracted and artificially forced into the genes of an unrelated plant or animal. The foreign genes may come from bacteria, viruses, insects, animals or even humans. Because this involves the transfer of genes, GMOs are also known as "transgenic" organisms.`)
    }
  }
  
//  if (message.content.toLowerCase().startsWith("?")) {
    
//  }
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
/*function handleYTError(err) {
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
} */
function spliceArguments(message, after) {
  after = after || 2;
  var rest = message.split(' ');
  var removed = rest.splice(0, after);
  return [removed.join(' '), rest.join(' ')];
}
/*
function play(vid2beplayed) {
  currentVideo = vid2beplayed;
  if (client.internal.voiceConnection) {
    var connection = client.internal.voiceConnection;
    currentStream = YoutubeStream.getStream(video2beplayed);

    currentStream.on('error', (err) => {
      boundChannel.sendMessage(`There was an error during playback, error: **${err}**`);
    });
}
} */
}); 
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
//Utilize save.js next time to get the job done, make the "commands" specifically made for it, but make the "yt" command run by itself, so a mixture of both, then.
