const Discord = require("discord.js")

var status = require("minecraft-server-status")

require("dotenv").config()



const welcomeChannelId = "929633937779728414"

const minecraft = "929639886464614400"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
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