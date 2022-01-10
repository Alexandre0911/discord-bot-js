const Discord = require("discord.js")

var status = require("minecraft-server-status")

require("dotenv").config()



//const welcomeChannelId = "929633937779728414"                         // TEST SERVER
const welcomeChannelId = "929673138193694791"                           // Despauterianos
//const minecraftChannelId = "929639886464614400"                       // TEST SERVER
const minecraftChannelId = "929670287157510204"                         // Despauterianos

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})


client.on("ready", (message) => {
    console.log(`Logged in as ${client.user.tag}`)
    //message.channels.cache.get(minecraftChannelId).send("```\nMy Commands:\n\n!server >>> Shows whether minecraft server is online```")
})


client.on("messageCreate", (message) => {
    if (message.content.toLowerCase() == 'hi'){
        message.reply("Hello World!")
    }
})


client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`Hey, <@${member.id}>, welcome to the server!`)
})



client.on("messageCreate", (message) => {

    if (message.content.toLowerCase() == '!server'){

        status('alexandre2206.ddns.net', 25565, response => {
            console.log(response.online)
            console.log(response.players.now)

        if (response.online){
            message.reply(`Server is online and there are ${response.players.now} players playing right now!`)
        }
        
        else{
            message.reply("Server is closed!")
        }
        
    })
    }
})



client.login(process.env.TOKEN)