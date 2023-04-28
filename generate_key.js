//A simple command to generate keys. 
//Dependencies: npm i keygen


const { TextInputStyle } = require('discord.js')
const { InteractionType } = require('discord.js')
const Discord = require('discord.js')
const keygen = require('keygen');
module.exports = {
    name: 'generate_key',
    description: 'Generate a key',
    default_member_permissions: 'ManageRoles', // permission required
    cooldown: 3000,
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
      {
        name: "type",
        type: Discord.ApplicationCommandOptionType.String,
        description: "Select the size of the key",
        required: true,
        choices: [
          {
            name: "Small Key",
            value: "small",
          },
          {
            name: "Medium Key",
            value: "medium",
          },
          {
            name: "Large Key",
            value: "large"
          },
      
        
        ],
      },
    ],
            
    run: async(client, interaction) => {
           
      let type = interaction.options.getString("type");






if (type == "small"){
  const embed = new Discord.EmbedBuilder()
  .setTitle('Key generated!')
  .setDescription(`**Key:** || ${keygen.url(keygen.small)} ||`)
  .setColor('Green')
  .setTimestamp()
  .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() });



interaction.reply({ embeds: [embed],  ephemeral: true })

} else if (type == "medium"){
  const embed = new Discord.EmbedBuilder()
  .setTitle('Key generated!')
  .setDescription(`**Key:** || ${keygen.url(keygen.medium)} ||`)
  .setColor('Green')
  .setTimestamp()
  .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() });



interaction.reply({ embeds: [embed],  ephemeral: true })
} else if (type == "large"){
  const embed = new Discord.EmbedBuilder()
  .setTitle('Key generated!')
  .setDescription(`**Key:** || ${keygen.url(keygen.large)} ||`)
  .setColor('Green')
  .setTimestamp()
  .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() });



interaction.reply({ embeds: [embed],  ephemeral: true })

}


    
              

             

            
            }

        }
        









        
