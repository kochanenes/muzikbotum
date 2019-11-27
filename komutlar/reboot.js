const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
   
  var embed2 = new Discord.RichEmbed()   
      .setTitle('Merhaba,' + message.member.user.username)
      .setDescription('Sadece sahibim bu komutu  kullanabilir! ')
      .setColor('RED') 
  

  if(message.author.id !== "617418426390020104") return message.channel.sendEmbed(embed2)
     
  var embed = new Discord.RichEmbed()   
      .setTitle('**Merhaba Sahibim,**')
      .setDescription('Beni yeniden başlatmak  istediğine eminsen aşağıdaki **TİK** işaretine, bir kere dokunur musun?')
      .setColor('RANDOM')
message.channel.send(embed).then(async function (sentEmbed) {
            const emojiArray = [":white_check_mark:"];
            const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
            await sentEmbed.react(emojiArray[0]).catch(function () { });
            var reactions = sentEmbed.createReactionCollector(filter, {
                time: 30000
            });
reactions.on("end", () => sentEmbed.edit("İşlemi iptal ettim! "));
    reactions.on("collect", async function (reaction) {
                if (reaction.emoji.name === ":x:") {
message.channel.send('İşlem onaylandı! ')
    
          
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
     
        }
    })
})

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r"],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'reboot',
  usage: 'reboot'
};
