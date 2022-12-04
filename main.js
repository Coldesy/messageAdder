const schedule = require('node-schedule');
const {Messages} = require('./schema.js')
const fs = require('fs');
const { Client, Collection, Intents,MessageEmbed,WebhookClient} = require('discord.js');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');
const { builtinModules } = require('module');
const { hyperlink } = require('@discordjs/builders');
require('dotenv').config()
const webhook =new WebhookClient({url : 'https://discord.com/api/webhooks/1044631685700010064/8R9M_gIZ7cz7tRwTCYual3UD0rj-JNjOuAp3sB_LnQBxlojujXlkM2vfQqAFk76TddDU'})
const All = new Intents(7796)
const client = new Client({partials:['MESSAGE','CHANNEL','GUILD_MEMBER','USER'], intents: [Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILDS,Intents.FLAGS.MESSAGE_CONTENT,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_INTEGRATIONS] });
const webFunc = async ()=>{
let week = await Messages.find({}).sort({'messages': -1}).exec()
let day = await Messages.find({}).sort({'dailyMsg': -1}).exec()
let month = await Messages.find({}).sort({'monthlyMsg': -1}).exec()

let guild = await client.guilds.fetch('752105258481877073')
let members = await guild.members.fetch()
await members.get(week[0].userid).roles.add('1048571605116264458')
await members.get(day[0].userid).roles.add('1048554544197537804')
await members.get(month[0].userid).roles.add('1048571221081591869')
let monthname = 'December'
let weekname = 'First Week of December'

let dailyembed = {
    color: '#58bee0',
    Title: `<a:snowflake:1048612029423964190> Today's Rankings\nㅤ`,
    fields: [
        {
            name: `<a:crownkingblue:1048612972043456523>𝐓𝐨𝐩 𝟏 <:blue_arrow:1048615147108827286> <@${day[0].userid}>`,
            value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[0].dailyMsg}**`

    },
    {
        name: `<a:darkflame:1048613668809605200>𝐓𝐨𝐩 𝟐 <:blue_arrow:1048615147108827286> <@${day[1].userid}>`,
        value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[1].dailyMsg}**`

},
{
    name: `<a:fire_blue:1048614487831359588>𝐓𝐨𝐩 𝟑 <:blue_arrow:1048615147108827286> <@${day[2].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[2].dailyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟒 <:blue_arrow:1048615147108827286> <@${day[3].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[3].dailyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟓 <:blue_arrow:1048615147108827286> <@${day[4].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[4].dailyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟔 <:blue_arrow:1048615147108827286> <@${day[5].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[5].dailyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟕 <:blue_arrow:1048615147108827286> <@${day[6].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[6].dailyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟖 <:blue_arrow:1048615147108827286> <@${day[7].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[7].dailyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟗 <:blue_arrow:1048615147108827286> <@${day[8].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[8].dailyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩𝟏𝟎<:blue_arrow:1048615147108827286> <@${day[9].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${day[9].dailyMsg}**`

},

],
image: {
    url: `https://media.discordapp.net/attachments/1046400542550802445/1048826790992416858/imageedit_10_3531532722.jpg`
}
}












let monthlyembed = {
    color: '#58bee0',
    Title: `<a:snowflake:1048612029423964190> ${monthname} Rankings\nㅤ`,
    fields: [
        {
            name: `<a:crownkingblue:1048612972043456523>𝐓𝐨𝐩 𝟏 <:blue_arrow:1048615147108827286> <@${month[0].userid}>`,
            value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[0].monthlyMsg}**`

    },
    {
        name: `<a:darkflame:1048613668809605200>𝐓𝐨𝐩 𝟐 <:blue_arrow:1048615147108827286> <@${month[1].userid}>`,
        value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[1].monthlyMsg}**`

},
{
    name: `<a:fire_blue:1048614487831359588>𝐓𝐨𝐩 𝟑 <:blue_arrow:1048615147108827286> <@${month[2].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[2].monthlyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟒 <:blue_arrow:1048615147108827286> <@${month[3].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[3].monthlyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟓 <:blue_arrow:1048615147108827286> <@${month[4].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[4].monthlyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟔 <:blue_arrow:1048615147108827286> <@${month[5].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[5].monthlyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟕 <:blue_arrow:1048615147108827286> <@${month[6].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[6].monthlyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟖 <:blue_arrow:1048615147108827286> <@${month[7].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[7].monthlyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟗 <:blue_arrow:1048615147108827286> <@${month[8].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[8].monthlyMsg}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩𝟏𝟎<:blue_arrow:1048615147108827286> <@${month[9].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${month[9].monthlyMsg}**`

},

],
image: {
    url: `https://media.discordapp.net/attachments/1046400542550802445/1048826790992416858/imageedit_10_3531532722.jpg`
}
}

let embed = {
    color: '#58bee0',
    Title: `<a:snowflake:1048612029423964190> ${weekname}\nㅤ`,
    fields: [
        {
            name: `<a:crownkingblue:1048612972043456523>𝐓𝐨𝐩 𝟏 <:blue_arrow:1048615147108827286> <@${week[0].userid}>`,
            value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[0].messages}**`

    },
    {
        name: `<a:darkflame:1048613668809605200>𝐓𝐨𝐩 𝟐 <:blue_arrow:1048615147108827286> <@${week[1].userid}>`,
        value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[1].messages}**`

},
{
    name: `<a:fire_blue:1048614487831359588>𝐓𝐨𝐩 𝟑 <:blue_arrow:1048615147108827286> <@${week[2].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[2].messages}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟒 <:blue_arrow:1048615147108827286> <@${week[3].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[3].messages}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟓 <:blue_arrow:1048615147108827286> <@${week[4].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[4].messages}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟔 <:blue_arrow:1048615147108827286> <@${week[5].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[5].messages}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟕 <:blue_arrow:1048615147108827286> <@${week[6].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[6].messages}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟖 <:blue_arrow:1048615147108827286> <@${week[7].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[7].messages}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩 𝟗 <:blue_arrow:1048615147108827286> <@${week[8].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[8].messages}**`

},
{
    name: `:snowflake:𝐓𝐨𝐩𝟏𝟎<:blue_arrow:1048615147108827286> <@${week[9].userid}>`,
    value: `<:Message:1048617252724953109> <:blue_arrow:1048615147108827286> **${week[9].messages}**`

},

],
image: {
    url: `https://media.discordapp.net/attachments/1046400542550802445/1048826790992416858/imageedit_10_3531532722.jpg`
}
}


 
await webhook.editMessage('',{embeds:[dailyembed]})
await webhook.editMessage(process.env.MONTHLY,{embeds:[monthlyembed]})
await webhook.editMessage(process.env.ALL,{embeds:[embed]})
}

// section for events schedules


 
// When the client is ready, run this code (only once)
client.once('ready', async () => {
	console.log('ai ai captain');
    


});

const msgLd = schedule.scheduleJob('*/5 * * * *',async (firedTime) => {

    await webFunc()
    
});
msgLd
client.login(process.env.TOKEN);
