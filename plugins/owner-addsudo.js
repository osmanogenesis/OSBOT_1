import { Sticker } from "wa-sticker-formatter";
let handler = async (m, { conn, text }) => {
    let stiker;
    let who;
    m.react("🕛");
    if (m.isGroup) {
        who = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text;
    } else {
        who = m.chat;
    }
    let name = await conn.getName(m.quoted.sender);
    if (!who) throw "Tag the person you want to make an SUDO!";
    if (global.owner.includes(who.split("@")[0]))
        throw "This person is already an SUDO!";
    global.owner.push([who.split("@")[0], name, true]);
    async function createSticker(img, url, packName, authorName, quality) {
        let stickerMetadata = {
            type: "full",
            pack: packName,
            author: authorName,
            quality,
        };
        return new Sticker(img ? img : url, stickerMetadata).toBuffer();
    }
    stiker = await createSticker(false, "./Assets/congrads.gif", "Congratulations", "Dr.Osman", 20);
    const caption = `🔓 SUDO Unlocked | @${who.split("@")[0]} \n✅ Now has been made an *SUDO user*! 🥳`;
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption),
    });
    m.reply(stiker);
    m.react("✅");
};
handler.help = ["addsudo", "givesudo"];
handler.tags = ["owner"];
handler.command = /^(add|give|-)(sudo)$/i;
handler.owner = true;

export default handler;
