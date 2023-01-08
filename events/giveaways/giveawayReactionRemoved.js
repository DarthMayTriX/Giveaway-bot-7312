const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  async execute(giveaway, member) {
    return member.send({

      components: [new ActionRowBuilder()
                    .addComponents(
                          new ButtonBuilder()
                      .setLabel("Jump to the Giveaway")
                      .setStyle(ButtonStyle.Link)
                      .setURL(`https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}`)
                      .setEmoji('973495590921043968'))],
      
      embeds: [new EmbedBuilder()
        .setTimestamp()
        .setAuthor({name: "Reaction Removed!", iconURL: "https://i.imgur.com/Jjo00oT.png"})
        .setTitle('Did You Just Remove a Reaction From A Giveaway?')
        .setColor("#2F3136")
        .setDescription(
          ` Your entery to **${giveaway.prize}** on [This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) have been removed!\n This means you're removed as a valid giveaway participant.\n  Think It was a mistake? **Go react again!**`
        )
        .setFooter({ text: "©️ Darth", iconURL: ('https://i.imgur.com/krlhpIo.png') })
      ]
    }).catch(e => {})

  }
}
