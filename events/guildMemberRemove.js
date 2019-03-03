module.exports = member => {
  let guild = member.guild;
  member.send('Niye Gittin?');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};