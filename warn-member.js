//A simple warn member comand

const Discord = require("discord.js")
const { QuickDB } = require('quick.db')
const db = new QuickDB()
const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports =  {
name: "warn",
description: "[ Admins ] Warn a member!",
type: ApplicationCommandType.ChatInput,
userPerms: ['ManageRoles'],
options: [
    {
        name: "user",
        type: 6,
        description: "Select the user that will be punished",
        required: true
        
        },
        {
            name: "reason",
            type: 3,
            description: "Reason",
            required: false
            
      },
],


run: async (client, interaction, args) => {


        let user = interaction.options.getUser("user"); //Getting the user
        let motivo = interaction.options.getString("reason") || "Was not infomed a reason" //Getting the reason, if have not reason, "Was not informed a reason" will appear

            const data = new Date();
            data.setHours(data.getHours() -3 ); //Getting the date (-3 cause I from Brazil)

          

          const aviso = new Discord.EmbedBuilder()
           .setTitle("Warn applied!")
           .setColor("#2F3136")
           .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
           .setFields(
            {
                name: '👤 User punished:',
                value: `> ${user}\n> 🆔: ${user.id}`,
            },
            {
                name: '⏰ Date:',
                value: `> ${data}`,
            },
            {
                name: '🔰 Author:',
                value: `> ${interaction.user}\n> 🆔: ${interaction.user.id}`
            },
            {
                name: '📢 Reason:',
                value: `> ${motivo}`
            }
        )

           interaction.reply({content: `Success! The warn was applied.`})
          
     

         
          
        }
}

    
