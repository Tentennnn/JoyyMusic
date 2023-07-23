const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'about',
  category: 'Information',
  aliases: ['botinfo'],
  description: 'See description about this project',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Invite').setStyle('LINK').setURL(client.config.links.invite),
      new MessageButton()
        .setLabel('GitHub')
        .setStyle('LINK')
        .setURL('https://github.com/Tentennnn'),
      new MessageButton().setLabel('Support').setStyle('LINK').setURL(client.config.links.support),
    );
    const mainPage = new MessageEmbed()
      .setAuthor({
        name: 'TENMusic',
        iconURL:
          'https://media.discordapp.net/attachments/966675680907657256/966675755453018133/20220411_160253.png',
      })
      .setThumbnail(
        'https://media.discordapp.net/attachments/966675680907657256/966675755453018133/20220411_160253.png',
      )
      .setColor('#303236')
      .addFields([
        { name: 'Creator' , value: '[TEN](https://github.com/Tentennnn)', inline: true },
        { name: 'Organization' , value: '[TEN](https://github.com/Tentennnn)' , inline: true },
        { name: 'Github', value: '[Here](https://github.com/Tentennnn)' , inline: true },
        { name: '\u200b' , value: `[TEN](https://github.com/Tentennnn)'s Was created by blacky and Venom. He really wants to make his first open source project ever. Because he wants more for coding experience. In this project, he was challenged to make project with less bugs. Hope you enjoy using TENMusic!` }
      ])
    return message.reply({ embeds: [mainPage], components: [row] });
  },
};