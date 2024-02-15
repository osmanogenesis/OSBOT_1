let handler = async (m, { conn, text }) => {
    if (!text) throw "No Text";

    // Generate a random integer between min (inclusive) and max (exclusive)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    var randomInteger = getRandomInt(1, 10); // Example: generates a random integer between 1 (inclusive) and 10 (exclusive)

    const avatar = await conn
        .profilePictureUrl(m.sender, "image")
        .catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
    const displayName = conn.getName(m.sender);
    const username = m.sender.split("@")[0];
    const replies = `${getRandomInt(400, 250)}`; // Replace with the desired value
    const retweets = `${getRandomInt(300, 450)}`; // Replace with the desired value
    const theme = "dark"; // Replace with the desired value

    const url = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(
        displayName
    )}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(
        avatar
    )}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(
        replies
    )}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(
        theme
    )}`;

    conn.sendFile(m.chat, url, "tweet.png", "*Exclusive tweet*", m);
};

handler.help = ["tweet <comment>"];
handler.tags = ["maker"];
handler.command = /^(tweet)$/i;

export default handler;
