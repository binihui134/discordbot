const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('action')
        .setDescription('Perform an action')
        .addStringOption(option =>
            option.setName('action')
                .setDescription('Action description')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('rarity')
                .setDescription('Rarity description')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('damage_type')
                .setDescription('Type of damage (e.g., oofs, falls, hits)')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('damage')
                .setDescription('Amount of damage')
                .setRequired(true))
        .addUserOption(option =>
            option.setName('target')
                .setDescription('Target user')
                .setRequired(true)),
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const rarity = interaction.options.getString('rarity');
        const damageType = interaction.options.getString('damage_type');
        const damage = interaction.options.getInteger('damage');
        const target = interaction.options.getUser('target');
        const user = interaction.user;

        await interaction.reply({
            content: `${user} uses ${action} (${rarity}) and does ${damage} ${damageType} to ${target}`,
            ephemeral: false
        });
    },
};