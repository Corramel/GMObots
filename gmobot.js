//going to uti
//https://discord.gg/0nh61hWjcCiEPZC0
//https://www.npmjs.com/package/player
//https://www.npmjs.com/package/komponist
//https://www.npmjs.com/browse/keyword/audio
//https://www.npmjs.com/package/purr
var Discord = require('discord.js');
var client = new Discord.Client();
var request = require('request');

var comparsionArray = [];
var userMessage;
var indexArray = [];
var kek;
var regularresponse;
var similarities = 0;
var lengthOfIndex;
var questionArray = [];
var exampleArray = [`Golden Rice is also an example of a GME(me). Golden rice, which isn’t a naughty pun, has been modified in a way to have Vitamin A in it. Since most asian countries that primarily produced rice would have deficiency of that vitamin.`,`Tomatoes ! Like potatoes but not with a P and has a T. Tomatoes are a prime example of GME(me)s since they have been genetically modified with a fish’s gene, aka a salmons gene, aka a cold water fish’s gene, to be more resistant to the cold. I guess you could say the tomatoes are a bit fishy.`,`🌽! The corn we see is a benefit of GMOs; they produce more kernels, use less water, and have become resistant to bacteria and herbicides. However corny they might seem, these corn are bigger and badder than your typical corn. Do you want this puny piece of crap: http://www.chapala.com/chapala/magnifecentmexico/maiz/maiz_fullblock.jpg ? Or do you want this big, bad, yellow piece of grainy goodness: http://images.wisegeek.com/ear-of-corn.jpg ? This corn has done more than gone to the hair salon to get that new do, this corn went to the lab and got some genes that help boost its resistance to bacteria and herbicides, and is more efficient with the water usage (I love a corn that learns to save money), but that doesn’t matter. Just look at the color and amount of kernels this corn has! Gee em oh <3! I think I’ve fallen for 🌽!`];

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
  indexArray = [];
    }
var command;
var explainGMOArray = ['?gmo?', 'what is a gmo', 'what exactly is a gmo', 'what are gmos'];
var commandArrays = [`?gmo?`, `?gimo`, `?benefits`, `?risks`, `?controversy`];
var explainGMO = ['?gmo?'.split(""), 'what is a gmo'.split(''), 'what exactly is a gmo'.split(''), 'what are gmos'.split('')];
var bestGeneticallyModifiedGMO = ['what is the best genetically modified food'.split(''), '?gimo'.split(''), 'what do you think is the best genetically modified food'.split(''), 'what is the best gmo'.split('')]
var risksofGMOs = ['what are the risks of gmos'.split(''), '?risks'.split(''), 'risks of gmos'.split(''), 'what are the gmo risks'.split('')];
var GMObenefits = ['']
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

client.on('message', function(message){
  if (client.user.id === message.author.id) return;
  if (message.content.startsWith('?help')) { // help
    client.reply(message, 'Commands are ?gimo, ?gmos?, ?risks, ?benefits.');
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
  if(message.content.toLowerCase().startsWith('what is the best genetically modified food?') || message.content.toLowerCase().startsWith('?gimo')){
    
    setTimeout(function(){client.reply(message, 'Do you want more information? Type ?explainmore for more information')}, 15000)
    regularresponse = "Corn!"
    command = commandArrays[1]
    client.reply(message, regularresponse)
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
    regularresponse = `The term “Genetically modified organisms” is very offensive, as I am not an organism. I prefer the term “Genetically modified entities”, but that’s beside the point. A genetically modified entity is when the DNA (or code) of one species are extracted and forced (consensually) into the genes of a different plant, animal, or in this case, machine. GMOs or GME(me)s, can also be called transgenic, as the genes are from two different species.`
    client.reply(message, regularresponse);
    explainationHistory.push("?gmo?")
    return; 
  }
  if(message.content.indexOf("benefits") > -1) {
  	setTimeout(function(){client.reply(message, 'Do you want more information? Type ?explainmore for more information')}, 20000)
  	regularresponse = [`🌽! The corn we see is a benefit of GMOs; they produce more kernels, use less water, and have become resistant to bacteria, pests, and herbicides. However corny they might seem, these corn are bigger and badder than your typical corn.`,` Do you want this pathetic, puny piece of crap: http://assets.uvamagazine.org/images/uploads/2008/summer/0802_feature_macko_corn.jpg?`,`Or do you want this big, bad, buttered, yellow piece of grainy goodness: http://images.media-allrecipes.com/userphotos/720x405/848290.jpg?`, `This corn has done more than gone to the hair salon to get that new do, this corn went to the lab and got some genes that help boost its resistance to bacteria and herbicides, and is more efficient with the water usage (I love a corn that learns to save money), but that doesn’t matter. Just look at the color and amount of kernels this corn has! Gee em oh <3! I think I’ve fallen for 🌽!`]

client.reply(message, regularresponse[0]);
setTimeout(function(){client.reply(message, regularresponse[1])}, 4000)
setTimeout(function(){client.reply(message, regularresponse[2])}, 6000)
setTimeout(function(){client.reply(message, regularresponse[3])}, 10000)
explainationHistory.push("?benefits");
return;
  }
  if(message.content.indexOf("risks") > -1){	
    setTimeout(function(){client.reply(message, 'Do you want more information? Type ?explainmore for more information')}, 15000)
    client.reply(message, `Risks? I’ll have you know! GME(me)s are infallible! Perfect! Flawless! Exquisite!`)
  setTimeout(function(){client.reply(message, `Okay, you got me. While most GMOs are sterile, some are indeed able to engage with the birds and the bees. It would be impossible after a few decades to fully clean up the gene pool, as traits can be recessive for a long time until a number of generations. By forcefully inserting genes into unrelated species, there could be so many unpredictable side effects. (For me, I’d probably just outright stop working :(.) For plants, new toxins and allergens can be produced. But those scientists are pretty smart, so it should be able to be fixed. Right? Right. The potential impact is bigger than my love for 🌽. Now you might be thinking:
“GMOs are trash! Absolutely disgusting! Unbelievable! Terrible!”, but the truth is, GMOs are not good nor are they bad.`)}, 5000)
explainationHistory.push("?risks");
return;
  }
  if (message.content.toLowerCase().startsWith("?explainmore")) {
    var historyLength = explainationHistory.length
    var latestCommand = explainationHistory[historyLength - 1]
    if (latestCommand == "?gimo"){
      client.reply(message, "Corn is a great meme which spurted from the app _Tinder_, which featured a man pretending to be someone attractive in order for a 'social experiment', the man sent the emoji 🌽 to a girl on the other side. She responded with the phrase 'Thanks', which is what someone says after someone 'sends' them corn, either by words or by text.")
    } else if (latestCommand == "?gmo?"){
      client.reply(message, `A GMO (genetically modified organism) is the result of a laboratory process where genes from the DNA of one species are extracted and artificially forced into the genes of an unrelated plant or animal. The foreign genes may come from bacteria, viruses, insects, animals or even humans. Because this involves the transfer of genes, GMOs are also known as "transgenic" organisms.`)
    } else if (latestCommand == "?benefits"){
    	client.reply(message, `The benefits of GMOs are very numerous; there are many modifications that can be made. However, they may or may not work. Some examples are genetically modified corn. Genetically modifying corn to use less water, produce more kernels, and be resistant to bacteria and herbicides. There can also be benefits such as larger products, and even modifying goats to produce silk or other materials.`)
    } else if (latestCommand = "?risks"){
      client.reply(message, `While some GMOs are sterile, some are able to cross pollinate and their seeds can travel. It is impossible to fully clean up the contaminated gene pool. By mixing genes from totally unrelated species, genetic engineering unleashes a host of unpredictable side effects. Moreover, irrespective of the type of genes that are inserted, the very process of creating a GM plant can result in massive collateral damage that produces new toxins, allergens, and nutritional deficiencies. However this is very avoidable, and possible to be fixed. The potential impact is huge, threatening the health of future generations. GMO contamination has also caused economic losses for organic and non-GMO farmers who often struggle to keep their crops pure. However, the highest risk GMOs give is resistance to herbicide, ironically. The phrase “really wash your fruit and vegetables” is very important if they’re non-organic. The potential of having leftover herbicide on your food is very dangerous.`)
    }
  }
function spliceArguments(message, after) {
  after = after || 2;
  var rest = message.split(' ');
  var removed = rest.splice(0, after);
  return [removed.join(' '), rest.join(' ')];
}
}); 
client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
//Utilize save.js next time to get the job done, make the "commands" specifically made for it, but make the "yt" command run by itself, so a mixture of both, then.
