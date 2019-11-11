const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
    .setDescription("discord bot info")
    .setColor("#fcba03")
    .setThumbnail(botIcon)
    .addField("Bot naam", bot.user.username)
    .addField("Gemaakt op", bot.user.createdAt);

    return message.channel.send(botEmbed);  
 }

module.exports.help = {

    name: "info"
}