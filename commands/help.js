const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    try{
        var text = "**Jens Bot - Help Menu** \n\n **__Commands__** \n !aap - Jens doet een aap na! \n !ban - ban een bepaald persoon \n !broodje - een mooie foto van Jens met een broodje \n !buik - het buikje van Jens \n !clear - clear de chat \n !info - krijg informatie over de bot \n !kick - kick een persoon \n !serverinfo - krijg informatie over de server \n !tbg - krijg een prachtige hashtag ";

        message.author.send(text);

        message.channel.send("Al de commands staan in je DM!");
        
    }catch (error){
        message.channel.send("Er is iets fout gegaan");

    }


}

module.exports.help = {

    name: "jenshelp"
}