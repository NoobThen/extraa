module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoşgeldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};