const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Geen toegang");
    if(!args[0]) return message.reply("Gebruik: !prefix <prefix hier>");
    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));
    prefixes[message.guild.id] = {
        prefixes: args[0]
    };
    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) =>{
        if(err) console.log(err);
    });

    var stringEmbed = new discord.richEmbed()
    .setColor("#F00")
    .setTitle("Prefix")
    .setDescription(`Prefix aangepast naar ${args[0]}`);

    message.channel.send(stringEmbed);

}

module.exports.help = {

    name: "prefix"
}