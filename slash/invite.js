const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'invite',
    description: '➕ Invite the bot to your server!',
    run: async (client, interaction) => {
    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setLabel(`Invite ${client.user.username}`)
        .setStyle(ButtonStyle.Link)
        .setEmoji('✅')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=1046502659248635915&permissions=8&scope=bot`),
        new ButtonBuilder()
        .setLabel('YouTube')
        .setStyle(ButtonStyle.Link)
        .setEmoji('📺')
        .setURL("https://www.youtube.com/@darthmaytrix4235"),
        new ButtonBuilder()
        .setLabel('Support')
        .setStyle(ButtonStyle.Link)
        .setEmoji('971675354555121675')
        .setURL("https://discord.gg/4BFgVquTuY"),
    )
    let invite = new EmbedBuilder()
      .setAuthor({ 
          name: `Invite ${client.user.username}`, 
          iconURL: client.user.displayAvatarURL() 
      })    
    .setTitle("Invite & Support Link!")
    .setDescription(`I'm The Perfect Giveaway bot to host Giveaways easily on your server with multiple options, Including role requirements, bonus roles, bonus points and server joinings. Get started with Darth today!`)
    .setImage('https://i.imgur.com/1TLIl08.png')  
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail('https://i.imgur.com/krlhpIo.png')
    .setFooter({
        text: `©️ Darth`, 
        iconURL: ('https://i.imgur.com/krlhpIo.png')
    })
    
    interaction.reply({ embeds: [invite], components: [row]});
}
}
