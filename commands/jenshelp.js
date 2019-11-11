const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
    .setDescription("Jens Bot - Help Menu")
    .setColor("#fcba03")
    .setThumbnail(icon)
    .addField("De Jens kreten:", "ban, broodje, buik, hallo, info, jensheld, kick, kutjens, serverinfo, tbg");

    return message.channel.send(serverEmbed);


}

module.exports.help = {

    name: "jensiehelp"
}