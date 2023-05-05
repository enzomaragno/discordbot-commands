const traduzir = require("@vitalets/google-translate-api")
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: "translate",
    description: "Translate some phrase from PT to EN or EN to PT",
    default_member_permissions: 'ManageChannels', // permission required
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "pt",
            type: ApplicationCommandOptionType.String,
            description: "Write your text in portuguese to be translate in English",
            required: false

        },
        {
            name: "en",
            type: ApplicationCommandOptionType.String,
            description: "Write your text in English to be translate in Portuguese",
            required: false

        }
    ],

    run: async (client, interaction, args) => {

        let pt = interaction.options.getString("pt");
        let en = interaction.options.getString("en");

        if (!pt && !en) {
            interaction.reply({ content: `You need to choose some option!`, ephemeral: true })
        } else if (pt) {
            let traduzido = await traduzir(`${pt}`, { from: 'pt', to: 'en' });
            interaction.reply(`\`${traduzido.text}\``)
        } else if (en) {
            let traduzido = await traduzir(`${en}`, { from: 'en', to: 'pt' });
            interaction.reply(`\`${traduzido.text}\``)
        }
    }
}
