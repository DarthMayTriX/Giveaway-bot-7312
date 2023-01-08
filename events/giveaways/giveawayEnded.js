const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
        .setLabel("Jump to the Giveaway")
        .setStyle(ButtonStyle.Link)
        .setURL(`https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}`)
        .setEmoji('973495590921043968'),
        new ButtonBuilder()
        .setLabel('My YouTube')
        .setStyle(ButtonStyle.Link)
        .setEmoji('📺')
        .setURL("https://www.youtube.com/@darthmaytrix4235"),
      new ButtonBuilder()
        .setLabel("Invite Me")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.com/api/oauth2/authorize?client_id=1046502659248635915&permissions=8&scope=bot")
        .setEmoji('✅'))],
        embeds: [new EmbedBuilder()
          .setAuthor({name: "Congratulations!", iconURL: "https://i.imgur.com/krlhpIo.png"})
          .setColor("#2F3136")
          .setThumbnail('https://i.imgur.com/krlhpIo.png')
          .setDescription(` Hello there ${member.user}\n Congrats!! you have won **${giveaway.prize}!**\n DM ${giveaway.hostedBy} to claim your prize!`)
          .setImage('https://i.imgur.com/xs2d60V.png')
          .setTimestamp()
          .setFooter({
            text: `©️ Darth`, 
            iconURL: ('https://i.imgur.com/krlhpIo.png')
           })
        ]
      }).catch(e => {})
    });

  }
}
