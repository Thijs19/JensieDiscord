const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var banUser = message.guild.member(messgae.mentions.users.first() || message.guild.members(arguments[0]));

        if(!banUser) return message.channel.send("Gebruiker is niet gevonden");

        var reason = arguments.join(" ").slice(22);

        if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("sorry jij kan dit niet doen");

        if(banUser.hasPermission("MANAGE_MESSAGE")) return message.channel.send("Deze gebruiker kan je niet kicken");

        var ban = new discord.RichEmbed()
        .setDescription("ban")
        .setColor("#ee0000")
        .addField("banned gebruiker", kickUser)
        .addField("gebanned door", message.author)
        .addField("Reden", reason);

        var banChannel = message.guild.channels.find(`name`, "meldingen");
        if(!banChannel) return message.guild.send("Kan het kanaal niet vinden");

        message.guild.member(banUser).ban(reason);

        banChannel.send(ban);

        return;


}

module.exports.help = {

    name: "ban"
}