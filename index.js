const Commando = require('discord.js-commando');
const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const bot = new Commando.Client({unknownCommandResponse: false});



//-------------------------TEXT COMMANDS END---------------------------//

var xenon = ["Weirdest hooman that had ever lived.", "Xenon? Xenon? Idk him.", "AKA Cheeyin.", "He's actually a nice person. Sometimes."];
var icetag = ["How bored can you be that you tag me for no reason?", "I don't know what you want. Srsly.", "I know I'm a bot but hoomans are dumb, tag me when you actually want me to do something."];
var pubg = ["No.", "Play alone.", "I'm sick, I can't carry heavy loads."];

bot.on('message' , function(message){
    if(message.content == bot.user + 'Hello')
    {
        message.channel.sendMessage("Hello Hooman, what's up?");
    }
});


bot.on('message' , function(message){
    if(message.content == 'Bully')
    {
        message.channel.sendMessage("Xenon stop bullying Matz.");
    }
});

bot.on('message' , function(message){
    if(message.content == 'bully')
    {
        message.channel.sendMessage("Matz stop bullying Xenon.");
    }
});


bot.on('message' , function(message){
    if(message.content == bot.user + ' Matz')
    {
        message.channel.sendMessage("Matz? My mom, my creator.");
    }
});

bot.on('message' , function(message){
    if(message.content == bot.user + ' WRU')
    {
        message.channel.sendMessage("Hey " + message.author + ", I see you're interested in me hooman. My name is Ice, created on April 9, 2019 by my mom, creator, and an overall amazing hooman Matz. She is the only hooman I will ever love.\n\nFun fact, I was named after Ice Bear of We Bare Bears.");
    }

  
});

bot.on('message' , function(message){
    if(message.content == bot.user + ' Wake up Matz')
    {
        message.channel.sendMessage('Mom, ' + message.author + ' wants you to wake up. I know, ' + message.author + ' sucks.');
    }

  
});

bot.on('message' , function(message){
    if(message.content == bot.user + ' wake up matz')
    {
        message.channel.sendMessage('Mom, ' + message.author + ' wants you to wake up. I know, ' + message.author + ' sucks.');
    }

  
});

bot.on('message' , function(message){
    if(message.content == "pubg?")
    {
        var response = pubg[Math.floor(Math.random()*pubg.length)]
        message.channel.sendMessage(message.author + response).then().catch(console.error);
    }
});

bot.on('message' , function(message){
    if(message.content == bot.user)
    {
        var response = icetag[Math.floor(Math.random()*icetag.length)]
        message.channel.sendMessage(message.author + response).then().catch(console.error);
    }
});

bot.on('message' , function(message){
    if(message.content == bot.user + ' Xenon')
    {
        var response = xenon[Math.floor(Math.random()*xenon.length)]
        message.channel.sendMessage(response).then().catch(console.error);
    }
});


  bot.on('message', message => {
    // If the message is "how to embed"
    if (message.content == bot.user + ' SOTD') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('A lot to learn by Luke Christopher')
        // Set the color of the embed
        .setColor(0xFF0000)
        .setDescription("Hi " + message.author + " [click here](https://www.youtube.com/watch?v=k9elZm_EH_4) to listen to the song of the day.\n'SOTD info' to know more about the song.")
        .setFooter("Always tag me first before every command")
        .setImage("https://img.youtube.com/vi/k9elZm_EH_4/maxresdefault.jpg")
        // Set the main content of the embed
        .setTimestamp(new Date())
      // Send the embed to the same channel as the message
      message.channel.send(embed);
          }
  });

  bot.on('message', message => {
    // If the message is "how to embed"
    if (message.content == bot.user + ' SOTD info') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
              // Set the color of the embed
        .setColor(0xFF0000)
        
        // Set the main content of the embed
              // Send the embed to the same channel as the message
     
      message.channel.sendMessage("https://www.youtube.com/watch?v=k9elZm_EH_4");
          }
  });
//-------------------------TEXT COMMANDS END---------------------------//

bot.login('NTY1MTkwNzMyMjY5NDg2MTAw.XK3sow.cow6PG4QnHbYxzdoT47uKw7YIfI');
bot.on('ready', () => {
    bot.user.setGame('with twigs.')
  })

  bot.on('ready',function(){
    console.log("Matz I'm ready")
});
