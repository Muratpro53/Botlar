const { Client, MessageAttachment } = require('discord.js');


// Create an instance of a Discord client

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Ben Hazırım!');
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content.toLowerCase() === 'sa') {
    // Send "pong" to the same channel
    message.channel.send('Aleyküm Selam');
  }
});
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content.toLowerCase() === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Denetim günlüklerinde görüntülenecek isteğe bağlı neden')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Başarıyla atıldı ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('Üyeyi atamadım');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Bu kullanıcı bu loncada değil!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("Kullanıcıdan tekme atmasını söylemedin!");
    }
  }
});
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'Onlar kötüydü!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Başarıyla yasaklandı ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Üyeyi yasaklayamadım');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Bu kullanıcı bu loncada değil!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Kullanıcıdan yasaklanacağını söylemedin!");
    }
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content.toLowerCase() === '!yardım') {
    // Send "pong" to the same channel
    message.reply('Daha 0.0.1 sürümünde olduğum için sadece 4 komuta sahibim fakat bana yeni kodlar eklemesi için yapımcıma danışabilirsiniz(!ban,!kick,sa,avatar):https://discord.gg/PCGy85gc9Q');
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('NzY5NDc4ODEyNjUwOTYyOTY1.X5Pm_Q.8kxGfPu8RT-CuHpFiTbgPu7Wsyk');
