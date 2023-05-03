const Discord = require("discord.js")
const { EmbedBuilder, ApplicationCommandType } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

module.exports =  {
name: "chatgpt",
description: "Ask something for Chat GPT",
type: ApplicationCommandType.ChatInput,
userPerms: ['ManageRoles'],
options: [
        {
            name: "input",
            type: 3,
            description: "Your question",
            required: true
            
      },
],


run: async (client, interaction, args) => {


        let prompt = interaction.options.getString("input") 
           
        interaction.reply({
          content: `Let me think...`,
          ephemeral: true,
        })
  
      const configuration = new Configuration({
        apiKey: "your api key goes here",
      });
      const openai = new OpenAIApi(configuration);
      
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 2048,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
  
      let responseMessage = '> ' + prompt + response.data.choices[0].text;
  
      if (responseMessage.length >= 2000) {
        const attachment = new AttachmentBuilder(Buffer.from(responseMessage, 'utf-8'), { name: 'response.txt' });
        await interaction.editReply({ files: [attachment] })
      } else {
        await interaction.editReply(responseMessage);    
      }
    },
  };

    
