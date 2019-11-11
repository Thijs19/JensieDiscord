const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var kickUser = message.guild.member(messgae.mentions.users.first() || message.guild.members(arguments[0]));

    if(!kickUser) return message.channel.send("Gebruiker is niet gevonden");

    var reason = arguments.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("sorry jij kan dit niet doen");

    if(kickUser.hasPermission("MANAGE_MESSAGE")) return message.channel.send("Deze gebruiker kan je niet kicken");

    var kick = new discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#ee0000")
    .addField("kicked gebruiker", kickUser)
    .addField("Gekicked door", message.author)
    .addField("Reden", reason);

    var kickChannel = message.guild.channels.find(`name`, "meldingen");
    if(!kickChannel) return message.guild.send("Kan het kanaal niet vinden");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

    return;


}

module.exports.help = {

    name: "kick"
}