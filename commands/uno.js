const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('post')
        .setDescription('Post a message with a format')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('The message to post')
                .setRequired(true)),
    async execute(interaction) {
        const postMessage = interaction.options.getString('message');
        const userTag = interaction.user.tag;

        await interaction.reply({ content: `uno ${postMessage} -${userTag}`, ephemeral: false });
    },
};