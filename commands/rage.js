 const { SlashCommandBuilder } = require('@discordjs/builders');

 module.exports = {
     data: new SlashCommandBuilder()
         .setName('rage')
         .setDescription('Announces that the user is raging'),
     async execute(interaction) {
         const userTag = interaction.user.tag;
         await interaction.reply(`${userTag} is raging right now!`);
     },
 };