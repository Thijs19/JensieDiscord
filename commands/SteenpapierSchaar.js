module.exports.run = async(bot, message, args) => {

if(args[0]) return message.channel.send("Gebruiker: sps <steen, papier, schaar>");
var options = ["steen", "papier", "schaar"];
var result = options[Math.floor(Math.random() * options.length)];

if(agrs[0] == "steen"){
    if(result == "papier"){
        message.channel.send(`Ik heb ${result}: :notepad_spiral:, Ik win!`);
    }else if(result == "schaar"){
        message.channel.send(`Ik heb ${result}: :scissors:, Jij wint!`);  
    }else if (result == "steen"){
        message.channel.send(`Ik heb ${result}: :moyai:, Het is gelijkspel.`);
    }
}
else if(agrs[0] == "papier"){
    if(result == "steen"){
        message.channel.send(`Ik heb ${result}: :moyai:, Ik win!`);
    }else if(result == "schaar"){
        message.channel.send(`Ik heb ${result}: :scissors:, Jij wint!`);  
    }else if (result == "papier"){
        message.channel.send(`Ik heb ${result}: :notepad_spiral:, Het is gelijkspel.`);
    }
}
else if(agrs[0] == "schaar"){
    if(result == "steen"){
        message.channel.send(`Ik heb ${result}: :moyai:, Ik win!`);
    }else if(result == "papier"){
        message.channel.send(`Ik heb ${result}: :notepad_spiral:, Jij wint!`);  
    }else if (result == "schaar"){
        message.channel.send(`Ik heb ${result}: :scissors:, Het is gelijkspel.`);
    }
}
}

module.exports.help = {
    name: "sps"
}