const Commando = require('discord.js-commando');
const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const bot = new Commando.Client({unknownCommandResponse: false});



//-------------------------TEXT COMMANDS--------------------------//

var xenon = [" Weirdest hooman that had ever lived.", "Xenon? Xenon? Idk him.", "AKA Cheeyin.", "He's actually a nice person. Sometimes."];
var icetag = ["<a:partyroblob:561806621995433985>", " How bored can you be that you tag me for no reason?", " I don't know what you want. Srsly.", " I know I'm a bot but hoomans are dumb, tag me when you actually want me to do something."];
var pubg = [" No.", " Play alone.", " I'm sick, I can't carry heavy loads."];
var bears = ["https://i.pinimg.com/236x/cf/a2/78/cfa2780926f72cc26a83d17bd03a47b1.jpg", "https://i.pinimg.com/564x/d6/53/ce/d653ce37b5d00a5bb2ce6cf60da01799.jpg" , "https://i.pinimg.com/564x/a8/8b/29/a88b29a65568564eccbb70e943f82147.jpg", "https://i.pinimg.com/564x/0a/37/95/0a37956a47bc006459e343c4b8a7b87b.jpg", "https://i.pinimg.com/564x/d0/99/ff/d099ff7afa62ff9f0416d81ccebf5831.jpg", "https://i.pinimg.com/564x/72/cc/3d/72cc3d7f04e8357a8719d47828333fda.jpg", "https://i.pinimg.com/564x/f9/d1/9d/f9d19d58faa0cdaf63489219864f7e72.jpg"]
var beartext = ["Raaaaawwrrrrr", "I'm more adorable than you." , "Beaaaaaaaaaaaaaaar" , "B- b- buh beaar"]

let pref = ["ice "];
const cooldown = new Set();
   
let cdseconds = 1000;

bot.on('message' , async message => {
   
   
    if(message.content == pref + 'hello')
    {
        message.channel.sendMessage("Hello Hooman, what's up?");
    }
      
});


bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + message.mentions.users.first() + ' bully')
    {
        message.channel.sendMessage(message.mentions.users.first() + " stop bullying " + message.author + ".");
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + message.mentions.users.first() + ' matz')
    {
        message.channel.sendMessage(message.mentions.users.first() + " Matz? My mom, my creator.");
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + 'matz')
    {
        message.channel.sendMessage("Matz? My mom, my creator.");
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + 'info')
    {
        message.channel.sendMessage("Hey " + message.author + ", I see you're interested in me hooman. My name is Ice, created on April 9, 2019 by my mom, creator, and an overall amazing hooman Matz. She is the only hooman I will ever love.\n\nFun fact, I was named after Ice Bear of We Bare Bears.");
    }
 
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + message.mentions.users.first() + ' info')
    {
        message.channel.sendMessage("Hey " + message.mentions.users.first() + ", I see you're interested in me hooman. My name is Ice, created on April 9, 2019 by my mom, creator, and an overall amazing hooman Matz. She is the only hooman I will ever love.\n\nFun fact, I was named after Ice Bear of We Bare Bears.");
    }
 
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + 'wake up matz')
    {
        message.channel.sendMessage('Mom, ' + message.author + ' wants you to wake up. I know, ' + message.author + ' sucks.');
    }

  
});


bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + "pubg?")
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
    if(message.content.toLowerCase() == pref + 'xenon')
    {
        var response = xenon[Math.floor(Math.random()*xenon.length)]
        message.channel.sendMessage(response).then().catch(console.error);
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + 'send bear')
    {
          var sendbear = bears[Math.floor(Math.random()*bears.length)]
          message.channel.sendMessage(sendbear).then().catch(console.error);
    
      }
  });



//-------------------------HELP COMMANDS---------------------------//
  bot.on('message', message => {
        if (message.content.toLowerCase() == pref + "help cmds") {
   
      const embed = new RichEmbed()
       
        .setTitle('Commands')
        .setColor(0xFF0000)
        .setDescription("\n"+"hello,bully,chill,whisper,info,rules")
                           .addField("Misc Commands","matz,xenon,pubg?,send bear,wake up matz"+"\n")
                          
        .setFooter("ice 'cmd' info | use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        .setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });


  bot.on('message', message => {
     if(message.content.toLowerCase() == pref + 'hello info'){
      
           const embed = new RichEmbed()
       
        .setTitle('hello')
        .setColor(0xFF0000)
        .setDescription("Receive a greeting back from me.")
             .addField("Usage","hello")
        .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });

  bot.on('message', message => {
     if(message.content.toLowerCase() == pref + 'bully info'){
      
           const embed = new RichEmbed()
       
        .setTitle('bully')
        .setColor(0xFF0000)
        .setDescription("I will ask the person bullying you to stop.")
            .addField("Usage","@mentionbully bully")
        .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });

  bot.on('message', message => {
     if(message.content.toLowerCase() == pref + 'chill info'){
      
           const embed = new RichEmbed()
       
        .setTitle('chill')
        .setColor(0xFF0000)
        .setDescription("I will ask the mentioned person to chill.")
            .addField("Usage","@mentionperson chill")
         .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });

 bot.on('message', message => {
     if(message.content.toLowerCase() == pref + 'whisper info'){
      
           const embed = new RichEmbed()
       
        .setTitle('whisper')
        .setColor(0xFF0000)
        .setDescription("Lazy? Let me dm someone for you.")
            .addField("Usage","whisper @mention 'your message here'.")
       .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });

  bot.on('message', message => {
     if(message.content.toLowerCase() == pref + 'info'){
      
           const embed = new RichEmbed()
       
        .setTitle('info')
        .setColor(0xFF0000)
        .setDescription("Learn more about me with this command")
            .addField("Usage","info")
       .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });



  bot.on('message', message => {
     if(message.content.toLowerCase() == pref + 'matz info'){
      
           const embed = new RichEmbed()
       
        .setTitle('matz')
        .setColor(0xFF0000)
        .setDescription("Who is Matz?")
            .addField("Usage","matz")
        .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });
  bot.on('message', message => {
     if(message.content.toLowerCase() == pref + 'xenon info'){
      
           const embed = new RichEmbed()
       
        .setTitle('xenon')
        .setColor(0xFF0000)
        .setDescription("Who is Xenon?")
            .addField("Usage","xenon")
        .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });

  bot.on('message', message => {
     if(message.content.toLowerCase() == pref + 'pubg? info'){
      
           const embed = new RichEmbed()
       
        .setTitle('xenon')
        .setColor(0xFF0000)
        .setDescription("Maybe I wanna play pubg?")
            .addField("Usage","pubg?")
        .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });

  bot.on('message', message => {
     if(message.content.toLowerCase() == pref + 'send bear info'){
      
           const embed = new RichEmbed()
       
        .setTitle('send bear')
        .setColor(0xFF0000)
        .setDescription("Check out more adorable we bare bear pics.")
            .addField("Usage","send bear")
        .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });

  bot.on('message', message => {
     if(message.content.toLowerCase() == 'wake up matz info'){
      
           const embed = new RichEmbed()
       
        .setTitle('xenon')
        .setColor(0xFF0000)
        .setDescription("Let's try to wake up Matz, shall we?")
            .addField("Usage","wake up matz")
        .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });

  bot.on('message', message => {
     if(message.content.toLowerCase() == 'rules info'){
      
           const embed = new RichEmbed()
       
        .setTitle('xenon')
        .setColor(0xFF0000)
        .setDescription("Check out the rules fam! Don't get baned now.")
            .addField("Usage","rules,@mention rules,dm @mention rules")
        .setFooter("| use ice before each command", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        //.setTimestamp(new Date())
         message.channel.send(embed);
      }
  });


//-------------------------HELP COMMANDS END---------------------------//

//-------------------------RULES---------------------------//

bot.on('message', message => {
        if (message.content.toLowerCase() == "rules") {
   
      const embed = new RichEmbed()
       
        .setTitle('Rules')
        .setColor(0xFF0000)
        //.setDescription("Hi " + message.mentions.users.first()+".")
                                      .addField("Rule 1.","Will add rules soon.")
                                      .addField("Rule 2.","Will add rules soon.")
                                      .addField("Rule 3.","Will add rules soon.")
                                      .addField("Rule 4.","Will add rules soon.")
                                      .addField("Rule 5.","Will add rules soon.")
                                      .addField("Rule 6.","Will add rules soon.")
                                      .addField("Rule 7.","Will add rules soon.")
                                      .addField("Rule 8.","Will add rules soon.")
                                      .addField("Rule 9.","Will add rules soon.")
                                      .addField("Rule 10.","Will add rules soon.")
      
                   
        .setFooter("Rules are for babies.", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        .setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        .setTimestamp(new Date())
         message.channel.send(embed);
      }
  });


bot.on('message', message => {
        if (message.content.toLowerCase() == message.mentions.users.first() + " rules") {
   
      const embed = new RichEmbed()
       
        .setTitle('Rules')
        .setColor(0xFF0000)
        .setDescription("Hi " + message.mentions.users.first()+".")
                                      .addField("Rule 1.","Will add rules soon.")
                                      .addField("Rule 2.","Will add rules soon.")
                                      .addField("Rule 3.","Will add rules soon.")
                                      .addField("Rule 4.","Will add rules soon.")
                                      .addField("Rule 5.","Will add rules soon.")
                                      .addField("Rule 6.","Will add rules soon.")
                                      .addField("Rule 7.","Will add rules soon.")
                                      .addField("Rule 8.","Will add rules soon.")
                                      .addField("Rule 9.","Will add rules soon.")
                                      .addField("Rule 10.","Will add rules soon.")
      
                   
        .setFooter("Rules are for babies.", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        .setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        .setTimestamp(new Date())
         message.channel.send(embed);
      }
  });

bot.on('message', message => {
        if (message.content.toLowerCase() == "dm " + message.mentions.users.first() + " rules") {
      
      message.delete(1000);
      const embed = new RichEmbed()
       
        .setTitle('Rules')
        .setColor(0xFF0000)
        //.setDescription("Hi " + message.mentions.users.first()+".")
                                      .addField("Rule 1.","Will add rules soon.")
                                      .addField("Rule 2.","Will add rules soon.")
                                      .addField("Rule 3.","Will add rules soon.")
                                      .addField("Rule 4.","Will add rules soon.")
                                      .addField("Rule 5.","Will add rules soon.")
                                      .addField("Rule 6.","Will add rules soon.")
                                      .addField("Rule 7.","Will add rules soon.")
                                      .addField("Rule 8.","Will add rules soon.")
                                      .addField("Rule 9.","Will add rules soon.")
                                      .addField("Rule 10.","Will add rules soon.")
      
                   
        .setFooter("Rules are for babies.", "https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        .setThumbnail("https://i.ibb.co/rp1Ptp8/unnamed-1.png")
        .setTimestamp(new Date())
         message.mentions.users.first().sendMessage(embed);
      }
  });

//-------------------------RULES END---------------------------//



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
            
        message.delete(100);
        message.mentions.users.first().sendMessage(message.content.slice (29));

    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == message.mentions.users.first() + " quiet")
    {
        message.delete();
        message.channel.sendMessage("Kkay " + message.author + ", dmed a warning to " + message.mentions.users.first());
        message.mentions.users.first().sendMessage(message.author + " wants you to STFU.");
    }
});



//-------------------------DM COMMANDS END---------------------------//

bot.login('NTY1MTkwNzMyMjY5NDg2MTAw.XK3wNA.Xh3Fhz8tADPj0iEjXVaGwvkqW8k');
bot.on('ready', () => {
    bot.user.setGame('with twigs. | ice help cmds')
  })

  bot.on('ready',function(){
    console.log("Matz I'm ready")
});
