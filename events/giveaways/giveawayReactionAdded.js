const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  async execute(giveaway, reactor, messageReaction) {

    const noice = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel('My YouTube')
          .setStyle(ButtonStyle.Link)
          .setEmoji('📺')
          .setURL("https://www.youtube.com/@darthmaytrix4235"),
        new ButtonBuilder()
          .setLabel("Invite Me")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.com/api/oauth2/authorize?client_id=1046502659248635915&permissions=8&scope=bot")
          .setEmoji('✅'),
    );
    
    let approved =  new EmbedBuilder()
    .setTimestamp()
    .setColor("#2F3136")
    .setAuthor({name: "Entry Confirmed!", iconURL: "https://i.imgur.com/Lf1IHlA.png"})    
    .setDescription(
      ` Your entry to **${giveaway.prize}** on [This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) has been approved! \n Earn extra points by **Voting**. \n Hosted By: ${giveaway.hostedBy}`
    )
    .setFooter({ text: "©️ Darth", iconURL: ('https://i.imgur.com/krlhpIo.png') })
    .setTimestamp()

    const lol = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setLabel('My YouTube')
        .setStyle(ButtonStyle.Link)
        .setEmoji('📺')
        .setURL("https://www.youtube.com/@darthmaytrix4235"),
      new ButtonBuilder()
        .setLabel("Invite Me")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.com/api/oauth2/authorize?client_id=1046502659248635915&permissions=8&scope=bot")
        .setEmoji('✅'),
    );
    
   let denied =  new EmbedBuilder()
    .setTimestamp()
    .setColor("#2F3136")
    .setAuthor({name: "Entry Denied!", iconURL: "https://i.imgur.com/Jjo00oT.png"})    
    .setDescription(
      `<:DotPink:1002212468870877304> Your entry to **${giveaway.prize}** on [This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) has been denied! \n<:DotPink:1002212468870877304> Please review the requirements to enter the giveaway properly. \n<:DotPink:1002212468870877304> Hosted By: ${giveaway.hostedBy}`
    )
    .setFooter({ text: "©️ Darth", iconURL: ('https://i.imgur.com/krlhpIo.png') })

    let client = messageReaction.message.client
    if (reactor.user.bot) return;
    if(giveaway.extraData) {      
      if (giveaway.extraData.role !== "null" && !reactor.roles.cache.get(giveaway.extraData.role)){ 
        messageReaction.users.remove(reactor.user);
        return reactor.send({
          embeds: [denied],
          components: [lol]
        }).catch(e => {})
      }

      return reactor.send({
        embeds: [approved],
        components: [noice]
      }).catch(e => {})
    } else {
        return reactor.send({
          embeds: [approved]
        }).catch(e => {})
    }
    }
  }
