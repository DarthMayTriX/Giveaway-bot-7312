const Discord = require('discord.js');
module.exports = {
  async execute(giveaway, member, reaction) {
    reaction.users.remove(member.user);
    member.send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor("#2F3136")
                       .setDescription(
                        'Hey ${member.user} **[${giveaway.prize}](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})** that you reacted has already ended :sob:\nBe quick next time!'
                        ),
        ],
      })
      .catch((e) => {});
  },
};
