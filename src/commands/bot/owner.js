const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Anya`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: ``,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `CoreWare`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: ``,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 