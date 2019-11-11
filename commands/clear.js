const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    // !clear 21
    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming");
    if(!args[0]) return message.reply("Geef een aantal op");
    if(Number.isInteger(parseInt(args[0]))){

        var amount = parseInt(args[0]) + 2;
        message.channel.bulkDelete(amount).then(() => {
            if(args[0] == 0){
                message.channel.send(`Ben je loemp? Ik kan toch geen 0 berichetn verwijderen`).then(msg => msg.delete(3000));

            }else if(args[0] == 1){
                message.channel.send(`Ik heb 1 bericht verwijderd`).then(msg => msg.delete(3000));
            }else {
            message.channel.send(`Ik heb ${args[0]} berichten verwijderd`).then(msg => msg.delete(3000));
            }
        });

    }else {
        return message.channel.send("Geef een getal op");
    }


}

module.exports.help = {

    name: "clear"
}