const Commando = require('discord.js-commando');
const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const bot = new Commando.Client({unknownCommandResponse: false});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == message.mentions.users.first() +'null help cmds')
    {
        message.channel.sendMessage(message.mentions.users.first() + "Hi hooman, here are my commands, use them wisely.\n\n```Here are the commands that will need you to tag me first followed by a space.\n\n hello \n   - You will be receiving the best greeting in the world.\n\n Chill \n   - WIll ask Matz to chill.\n\n chill \n   - Will ask Xenon to chill.\n\n Bully \n   - Will ask Xenon to stop bullying Matz.\n\n bully \n   - WIll axk Matz to stop bullying Xenon.```");
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == 'help cmds null')
    {
        message.channel.sendMessage("Hi hooman, here are my commands, use them wisely.\n\n```Here are the commands that will need you to tag me first followed by a space.\n\n hello \n   - You will be receiving the best greeting in the world.\n\n Chill \n   - WIll ask Matz to chill.\n\n chill \n   - Will ask Xenon to chill.\n\n Bully \n   - Will ask Xenon to stop bullying Matz.\n\n bully \n   - WIll axk Matz to stop bullying Xenon.```");
    }
});


//-------------------------TEXT COMMANDS END---------------------------//

var xenon = [" Weirdest hooman that had ever lived.", "Xenon? Xenon? Idk him.", "AKA Cheeyin.", "He's actually a nice person. Sometimes."];
var icetag = ["<a:partyroblob:561806621995433985>", " How bored can you be that you tag me for no reason?", " I don't know what you want. Srsly.", " I know I'm a bot but hoomans are dumb, tag me when you actually want me to do something."];
var pubg = [" No.", " Play alone.", " I'm sick, I can't carry heavy loads."];

bot.on('message' , function(message){
    if(message.content == bot.user + ' hello')
    {
        message.channel.sendMessage("Hello Hooman, what's up?");
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == message.mentions.users.first() + ' chill')
    {
        message.channel.sendMessage(message.mentions.users.first() + " chiiiiillllll.");
    }
});


bot.on('message' , function(message){
    if(message.content.toLowerCase() == message.mentions.users.first() + ' bully')
    {
        message.channel.sendMessage(message.mentions.users.first() + " stop bullying " + message.author + ".");
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == bot.user + message.mentions.users.first() + ' matz')
    {
        message.channel.sendMessage(message.mentions.users.first() + " Matz? My mom, my creator.");
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == bot.user + ' matz')
    {
        message.channel.sendMessage("Matz? My mom, my creator.");
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == bot.user + ' wru')
    {
        message.channel.sendMessage("Hey " + message.author + ", I see you're interested in me hooman. My name is Ice, created on April 9, 2019 by my mom, creator, and an overall amazing hooman Matz. She is the only hooman I will ever love.\n\nFun fact, I was named after Ice Bear of We Bare Bears.");
    }
 
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == bot.user + message.mentions.users.first() + ' info')
    {
        message.channel.sendMessage("Hey " + message.mentions.users.first() + ", I see you're interested in me hooman. My name is Ice, created on April 9, 2019 by my mom, creator, and an overall amazing hooman Matz. She is the only hooman I will ever love.\n\nFun fact, I was named after Ice Bear of We Bare Bears.");
    }
 
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == bot.user + ' wake up matz')
    {
        message.channel.sendMessage('Mom, ' + message.author + ' wants you to wake up. I know, ' + message.author + ' sucks.');
    }

  
});


bot.on('message' , function(message){
    if(message.content.toLowerCase() == "pubg?")
    {
        var response = pubg[Math.floor(Math.random()*pubg.length)]
        message.channel.sendMessage(message.author + response).then().catch(console.error);
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == bot.user)
    {
        var response = icetag[Math.floor(Math.random()*icetag.length)]
        message.channel.sendMessage(message.author + response).then().catch(console.error);
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == bot.user + ' xenon')
    {
        var response = xenon[Math.floor(Math.random()*xenon.length)]
        message.channel.sendMessage(response).then().catch(console.error);
    }
});


  bot.on('message', message => {
        if (message.content.toLowerCase() == "help cmds") {
   
      const embed = new RichEmbed()
       
        .setTitle('i c e 。 Commands')
        .setColor(0xFF0000)
        //.setDescription("Hi " + message.author + " these are my commands, please use them wisely, I'm fragile, and fat.\n\n")
                                .addField("hello",
                                 "- Get a greeting back from me.\n\n")
                      
                                .addField("bully",
                                 "- Ok ok, I'll ask the person to stop bullying you.\n"+   "```@mention bully, so I know who is bullying you.```", true)
      
                                .addField("chill",
                                 "- Someone needs to chill?\n"+   "```@mention chill, so I know who needs a chill pill.```")
      
                                 .addField("chill",
                                 "- Someone needs to chill?\n"+   "```@mention chill, so I know who needs a chill pill.```")
                   
        .setFooter("help cmds to see cmds", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        .setTimestamp(new Date())
         message.channel.send(embed);
      }
  });



  bot.on('message', message => {
     if(message.content.toLowerCase() == "dm " + message.mentions.users.first() + ' help cmds'){
         
      const embed = new RichEmbed()
       
        .setTitle('i c e 。 Commands')
        .setColor(0xFF0000)
        //.setDescription("Hi " + message.author + " these are my commands, please use them wisely, I'm fragile, and fat.\n\n")
                                .addField("hello",
                                 "- Get a greeting back from me.\n\n")
                      
                                .addField("bully",
                                 "- Ok ok, I'll ask the person to stop bullying you.\n"+   "```@mention bully, so I know who is bullying you.```", true)
      
                                .addField("chill",
                                 "- Someone needs to chill?\n"+   "```@mention chill, so I know who needs a chill pill.```")
                   
        .setFooter("help cmds to see cmds", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        .setTimestamp(new Date())
         message.mentions.users.first().sendMessage(embed);
      }
  });

  bot.on('message', message => {
    // If the message is "how to embed"
    if (message.content.toLowerCase() == bot.user + ' sotd info') {
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

//-------------------------DM COMMANDS---------------------------//

bot.on('message' , function(message){
    if(message.content.toLowerCase().startsWith ("whisper"))
    {
        if (message.mentions.users.first() == null)
        {
            return;
        }
            
        message.delete(10);
        message.mentions.users.first().sendMessage(message.content.slice (29));

    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == message.mentions.users.first() + " quiet")
    {
        message.delete();
        message.channel.sendMessage("Kkay, " + message.author + " dmed a warning to " + message.mentions.users.first());
        message.mentions.users.first().sendMessage(message.author + " wants you to STFU.");
    }
});



//-------------------------DM COMMANDS END---------------------------//

bot.login('NTY1MTkwNzMyMjY5NDg2MTAw.XK3wNA.Xh3Fhz8tADPj0iEjXVaGwvkqW8k');
bot.on('ready', () => {
    bot.user.setGame('with twigs.')
  })

  bot.on('ready',function(){
    console.log("Matz I'm ready")
});
