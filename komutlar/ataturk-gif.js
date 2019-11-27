const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let gifler = ['https://tenor.com/view/gazi-mustafa-kemal-atat%c3%bcrk-pa%c5%9fa-gif-13586806',
        'https://tenor.com/view/atat%c3%bcrk-mustafa-kemal-atat%c3%bcrk-gif-13988802',
        'https://tenor.com/view/atat%c3%bcrk-mustafakemalataturk-bayrak-gif-dalgalanan-bayrak-gif-atat%c3%bcrk-ve-bayrak-gif-gif-11841207',
        'https://tenor.com/view/atat%c3%bcrk-mustafa-kemal-atat%c3%bcrk-gazi-mustafa-kemal-imza-atat%c3%bcrk-imza-gif-12506094',
        'https://tenor.com/view/mustafa-kemal-atat%c3%bcrk-president-serious-gif-11431292',
        'https://tenor.com/view/ya%c5%9fa-mustafa-kemal-pa%c5%9fa-atat%c3%bcrk-bayrak-t%c3%bcrk-bayra%c4%9f%c4%b1-cumhurba%c5%9fkan%c4%b1-gif-12498394',
        'https://tenor.com/view/atat%c3%bcrk-mustafa-kemal-ataturk-gazi-mustafa-kemal-at-t%c3%bcrkiye-gif-12846618',
        'https://tenor.com/view/atat%c3%bcrk-mustafa-kemal-ataturk-bayrak-t%c3%bcrk-bayra%c4%9f%c4%b1-gif-13272087']
    let gif = Math.floor((Math.random() * gifler.length));

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Atatürk GIF")
    .setImage(gif)
    .setTimestamp()
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['atatürkgif'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'atatürk-gif',
    description: 'avatar',
    usage: 'avatar'
  };