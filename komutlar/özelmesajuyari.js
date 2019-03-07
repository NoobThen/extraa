const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Sistem Tarafından Saptanan Duyurular")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**[BİLGİ]**",'**S-Güvenlik sunucu üzerine bağlı olmadığından kısa bir süreliğine 7/24 aktif durumda olamayacaktır.**')
  .addField("**[15.12.2018] [22:26]**",'Yeni komutlar eklenmeye başlanmıştır. Zaman zaman !yardım listesinde yeni komutlar görebilirsiniz.')
  .addField("**[15.12.2018] [23:30]**",'Komutların bir çok dil üzerinden kullanımı sağlanabilmesi için çalışmalara başladı')
  .addField("**[16.12.2018] [04:53]**", 'Müzik desteği için gerekli çalışmalara başlanıldı.')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru','duyurular'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'Bot tarafından yapılan duruyuları görebilirsiniz',
  usage: 'duyuru'
};
