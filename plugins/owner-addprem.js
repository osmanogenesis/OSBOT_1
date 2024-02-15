// //import db from '../lib/database.js'

// let handler = async (m, { conn, text, usedPrefix, command}) => {
// let who
//     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
//     else who = m.chat
//     let user = global.db.data.users[who]
//     if (!who) throw `✳️ Tag or mention someone\n\n📌 Example : ${usedPrefix + command} @user`
// if (global.prems.includes(who.split`@`[0])) throw '✳️ The user Mentioned Already is premium';
// global.prems.push(`${who.split`@`[0]}`);

// conn.react(✅);
// let lkr = `✅ PREMIUM | @${who.split`@`[0]} now you become a premium user 🥳`;
// conn.sendFile(m.chat, './Assets/congrads.gif', 'https://i.ibb.co/RpDMgWt/guru.jpg', lkr, m, false, { mentions: [who] });

// // conn.reply(m.chat, `
// // ✅ PREMIUM

// // @${who.split`@`[0]} now you become a premium user
// // `, m, { mentions: [who] })

// }
// handler.help = ['addprem <@tag>']
// handler.tags = ['owner']
// // handler.command = ['addprem', 'addpremium']
// handler.command = /^(add|give|-)(prem|premium)$/i;
// handler.group = true
// handler.owner = true

// export default handler

// let handler = async (m, { conn, text }) => {
//     let who;
//     if (m.isGroup) {
//         who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
//     } else {
//         who = m.chat;
//     }
//     let name = await conn.getName(m.quoted.sender)
//     if (!who) throw 'Tag the person you want to make an Premium!';
//     if (global.prems.includes(who.split('@')[0])) throw '✳️ The user Mentioned Already is premium!';
//     global.prems.push(`${who.split`@`[0]}`);
//     const caption = `✅ PREMIUM | @${who.split`@`[0]} now you become a premium user 🥳`;
//     // await conn.reply(m.chat, caption, m, {
//     //     mentions: conn.parseMention(caption)
//     // });
//     await conn.sendFile(m.chat, './Assets/congrads.gif', 'https://i.ibb.co/RpDMgWt/guru.jpg', caption, m, false, { mentions: [who] });
// }
// handler.help = ['addprem @user']
// handler.tags = ['owner']
// handler.command = /^(add|give|-)(prem|premium)$/i;
// handler.rowner = true
// handler.group = true

// export default handler;
