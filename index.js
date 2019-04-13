const Commando = require('discord.js-commando');
const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const bot = new Commando.Client({unknownCommandResponse: false});
const cooldownhello = new Set();
const cooldownbully = new Set();



//-------------------------TEXT COMMANDS--------------------------//

var xenon = [" Weirdest hooman that had ever lived.", "Xenon? Xenon? Idk him.", "AKA Cheeyin.", "He's actually a nice person. Sometimes."];
var icetag = ["<a:partyroblob:561806621995433985>", " How bored can you be that you tag me for no reason?", " I don't know what you want. Srsly.", " I know I'm a bot but hoomans are dumb, tag me when you actually want me to do something."];
var pubg = [" No.", " Play alone.", " I'm sick, I can't carry heavy loads."];
var bears = ["https://i.pinimg.com/564x/6c/66/01/6c6601ee0816cf07271d29c5b5d88b26.jpg",
             "https://i.pinimg.com/564x/d6/53/ce/d653ce37b5d00a5bb2ce6cf60da01799.jpg", 
             "https://i.pinimg.com/564x/a8/8b/29/a88b29a65568564eccbb70e943f82147.jpg", 
             "https://i.pinimg.com/564x/0a/37/95/0a37956a47bc006459e343c4b8a7b87b.jpg", 
             "https://i.pinimg.com/564x/d0/99/ff/d099ff7afa62ff9f0416d81ccebf5831.jpg", 
             "https://i.pinimg.com/564x/72/cc/3d/72cc3d7f04e8357a8719d47828333fda.jpg", 
             "https://i.pinimg.com/564x/f9/d1/9d/f9d19d58faa0cdaf63489219864f7e72.jpg",
             "https://i.pinimg.com/564x/c4/b7/9c/c4b79c65c6d9a4002104abedd783fd0f.jpg",
             "https://i.pinimg.com/564x/05/78/88/05788879ea1457e7b4ab2370b33acc08.jpg",
             "https://i.pinimg.com/564x/76/7e/25/767e25397f428d35233d3e3efe0b46aa.jpg",
             "https://i.pinimg.com/564x/38/62/4f/38624ffdfdf65d20a3ad4a4dcff5dc32.jpg",
             "https://i.pinimg.com/564x/ed/28/b1/ed28b19b2754695cc5275f544fdcaf6d.jpg",
             "https://i.pinimg.com/564x/75/db/ac/75dbac0869b8d71a8d0285478ee422ac.jpg",
             "https://i.pinimg.com/564x/8c/8c/4b/8c8c4b85c9b48f88c8297fdf2b944534.jpg",
             "https://i.pinimg.com/564x/71/a0/4b/71a04bdf5f8229f5b363b2634fae6b28.jpg",]

var beartext =  ["Raaaaawwrrrrr",
                "I'm more adorable than you." ,
                "Beaaaaaaaaaaaaaaar" ,
                "B- b- buh beaar",
                "Cuteness = me",
                "awwwwww",
                "we bare bears",
                "Hooman, I love you.",
                "I know, I'm cute."]

let pref = ["ice "];

bot.on('message' , async message => {
    if(message.content.toLowerCase() == pref + 'hello'){
    if(cooldownhello.has(message.author.id)) {
    const embed = new RichEmbed()
        .setTitle('Not too fast hooman.')
        .setColor(0xFF0000)
        .setDescription("hello command is set to 1 minute cooldown. Please wait 1 minute after your last hello command was sent.")
      
         message.channel.send(embed);
         } else {
  
        message.channel.sendMessage("Hello Hooman, what's up?");
      
     cooldownhello.add(message.author.id);
     setTimeout(() => {
     cooldownhello.delete(message.author.id);
         }, 60000);
    }
    }
      
});


bot.on('message' , async message => {
 
    if(message.content.toLowerCase() == pref + message.mentions.users.first() + ' bully')
    {    if (cooldownbully.has(message.author.id)) {
            const embed = new RichEmbed()
       
        .setTitle('Not too fast hooman.')
        .setColor(0xFF0000)
        .setDescription("bully command is set to 1 minute cooldown. Please wait 1 minute after your last bully command was sent.")
      
         message.channel.send(embed);
       } else {
         
        message.channel.sendMessage(message.mentions.users.first() + " stop bullying " + message.author + ".");
       cooldownbully.add(message.author.id);
        setTimeout(() => {
        
          cooldownbully.delete(message.author.id);
        }, 60000);
    }
    }
      
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + message.mentions.users.first() + ' matz')
          {    if (cooldownbully.has(message.author.id)) {
            const embed = new RichEmbed()
       
        .setTitle('Not too fast hooman.')
        .setColor(0xFF0000)
        .setDescription("bully command is set to 1 minute cooldown. Please wait 1 minute after your last bully command was sent.")
      
         message.channel.send(embed);
       } else {
    
        message.channel.sendMessage(message.mentions.users.first() + " Matz? My mom, my creator.");
           cooldownbully.add(message.author.id);
        setTimeout(() => {
        
          cooldownbully.delete(message.author.id);
        }, 60000);
    }
    }
      
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + 'matz')
    {    if (cooldownbully.has(message.author.id)) {
            const embed = new RichEmbed()
       
        .setTitle('Not too fast hooman.')
        .setColor(0xFF0000)
        .setDescription("bully command is set to 1 minute cooldown. Please wait 1 minute after your last bully command was sent.")
      
         message.channel.send(embed);
       } else {
        message.channel.sendMessage("Matz? My mom, my creator.");
           cooldownbully.add(message.author.id);
        setTimeout(() => {
        
          cooldownbully.delete(message.author.id);
        }, 60000);
    }
    }
 });
  
bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + 'info')
   {    if (cooldownbully.has(message.author.id)) {
            const embed = new RichEmbed()
       
        .setTitle('Not too fast hooman.')
        .setColor(0xFF0000)
        .setDescription("bully command is set to 1 minute cooldown. Please wait 1 minute after your last bully command was sent.")
      
         message.channel.send(embed);
       } else {
        message.channel.sendMessage("Hey " + message.author + ", I see you're interested in me hooman. My name is Ice, created on April 9, 2019 by my mom, creator, and an overall amazing hooman Matz. She is the only hooman I will ever love.\n\nFun fact, I was named after Ice Bear of We Bare Bears.");
    cooldownbully.add(message.author.id);
        setTimeout(() => {
        
          cooldownbully.delete(message.author.id);
        }, 60000);
    }
    }
});

bot.on('message' , function(message){
    if(message.content.toLowerCase() == pref + message.mentions.users.first() + ' info')
   {    if (cooldownbully.has(message.author.id)) {
            const embed = new RichEmbed()
       
        .setTitle('Not too fast hooman.')
        .setColor(0xFF0000)
        .setDescription("bully command is set to 1 minute cooldown. Please wait 1 minute after your last bully command was sent.")
      
         message.channel.send(embed);
       } else {
        message.channel.sendMessage("Hey " + message.mentions.users.first() + ", I see you're interested in me hooman. My name is Ice, created on April 9, 2019 by my mom, creator, and an overall amazing hooman Matz. She is the only hooman I will ever love.\n\nFun fact, I was named after Ice Bear of We Bare Bears.");
       cooldownbully.add(message.author.id);
        setTimeout(() => {
        
          cooldownbully.delete(message.author.id);
        }, 60000);
    }
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
     {    if (cooldownbully.has(message.author.id)) {
            const embed = new RichEmbed()
       
        .setTitle('Not too fast hooman.')
        .setColor(0xFF0000)
        .setDescription("bully command is set to 1 minute cooldown. Please wait 1 minute after your last bully command was sent.")
      
         message.channel.send(embed);
       } else {
        var response = pubg[Math.floor(Math.random()*pubg.length)]
        message.channel.sendMessage(message.author + response).then().catch(console.error);
       cooldownbully.add(message.author.id);
        setTimeout(() => {
        
          cooldownbully.delete(message.author.id);
        }, 60000);
    }
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
          var sendbeartext = beartext[Math.floor(Math.random()*beartext.length)]
          let imageEmbed = new RichEmbed() .setTitle(sendbeartext) .setImage(sendbear) 
                  
          
          message.channel.send(imageEmbed);
      
     cooldownbully.add(message.author.id);
     setTimeout(() => {
     cooldownbully.delete(message.author.id);
          }, 3000);
    }
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
     if(message.content.toLowerCase() == pref+'wake up matz info'){
      
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
     if(message.content.toLowerCase() == pref + 'rules info'){
      
           const embed = new RichEmbed()
       
        .setTitle('rules')
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
        if (message.content.toLowerCase() == pref + "rules") {
   
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
        if (message.content.toLowerCase() == pref + message.mentions.users.first() + " rules") {
   
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
        if (message.content.toLowerCase() == pref + "dm " + message.mentions.users.first() + " rules") {
      
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
    if(message.content.toLowerCase().startsWith (pref + "whisper"))
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
    if(message.content.toLowerCase() == pref + message.mentions.users.first() + " quiet")
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
