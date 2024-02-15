import { Sticker } from "wa-sticker-formatter";
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    // m.relpy("This Command Is Disabled By Dr.Osman");
    let stiker;
    let result = Math.floor(Math.random() * 6) + 1;
    let pp;
    switch (result) {
        case 1:
            pp = "./Assets/dice/die_1.gif";
            break;
        case 2:
            pp = "./Assets/dice/die_2.gif";
            break;
        case 3:
            pp = "./Assets/dice/die_3.gif";
            break;
        case 4:
            pp = "./Assets/dice/die_4.gif";
            break;
        case 5:
            pp = "./Assets/dice/die_5.gif";
            break;
        case 6:
            pp = "./Assets/dice/die_6.gif";
            break;
    }
    // conn.sendFile(m.chat, pp);
    async function createSticker(img, url, packName, authorName, quality) {
        let stickerMetadata = {
            type: "full",
            pack: packName,
            author: authorName,
            quality,
        };
        return new Sticker(img ? img : url, stickerMetadata).toBuffer();
    }
    stiker = await createSticker(false, pp, "Dice", "Dr.Osman", 100);
    m.reply(stiker);
    m.react("🎲");
};

handler.help = ["dice"];
handler.tags = ["dice"];
handler.command = ["dice"];

export default handler;
