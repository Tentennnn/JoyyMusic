const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'loop',
  aliases: ['l'],
  category: 'Music',
  description: 'Toggle music loop',
  args: true,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  dj: true,
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const player = client.manager.players.get(message.guild.id);

    if (!player.queue.current) {
      let thing = new MessageEmbed().setColor('RED').setDescription('There is no music playing.');
      return message.reply({ embeds: [thing] });
    }
    const emojiloop = client.emoji.loop;

    if (['q', 'queue'].includes(args[0])) {
      await player.setLoop('queue');
      let thing = new MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(`${emojiloop} Loop queue is now **enable**`);
      return message.reply({ embeds: [thing] });
    } else if (['track', 't', 'song'].includes(args[0])) {
      await player.setLoop('track');

      let thing = new MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(`${emojiloop} Loop track is now **enable**`);
      return message.reply({ embeds: [thing] });
    } else if (['off', 'c', 'clear', 'reset'].includes(args[0])) {
      await player.setLoop('none');

      let thing = new MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(`${emojiloop} Loop is now **disabled**`);
      return message.reply({ embeds: [thing] });
    }
  },
};
