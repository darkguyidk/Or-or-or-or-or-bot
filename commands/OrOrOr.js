const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js')
module.exports = {
  data: new  ContextMenuCommandBuilder().setName("OrOrOr").setType(ApplicationCommandType.User)
  async execute(interaction) {
    await interaction.reply({content: 'Or or or or or', ephemeral: false})
  }
}
