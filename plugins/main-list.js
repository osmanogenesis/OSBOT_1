let handler = async (m, { conn, usedPrefix, command}) => {
      let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
      let pp = './Assets/list.jpg'
      let more = String.fromCharCode(8206);
      let readMore = more.repeat(850); 
    
      let lkr;
      switch (command) {
        case 'list':
lkr = "*Get ready for the ride, here are your ticket options:*\n\n" +
"🤖 *" + usedPrefix + "botmenu* - The Bot's secret control panel. What's your command, oh great one?\n\n" +
"👑 *" + usedPrefix + "ownermenu* - The sacred scroll only for the chosen one. Yep, that's you, Boss!\n\n" +
"🧑‍🤝‍🧑 *" + usedPrefix + "groupmenu* - Group shenanigans central! Unite, chat, conquer!\n\n" +
"📥 *" + usedPrefix + "dlmenu* - 'DL' stands for 'Delicious Loot'. Come grab your goodies!\n\n" +
"🎉 *" + usedPrefix + "funmenu* - The bot's party hat. Games, jokes and instant ROFLs. Let's get this party started!\n\n" +
"🎮 *" + usedPrefix + "gamemenu* - Enter the gaming arena. May the odds be ever in your favor!\n\n" +
"🎨 *" + usedPrefix + "stickermenu* - A rainbow of stickers for your inner artist. Make your chats pop!\n\n" +
"🧰 *" + usedPrefix + "toolmenu* - Your handy-dandy toolkit. What's your pick, genius?\n\n" +
"🎩 *" + usedPrefix + "logomenu* - Create a logo that screams YOU. Or whispers. You choose the volume.\n\n";
break;

          
        
        

        case 'botmenu':
                  pp = './Assets/Bot.jpg';
          lkr = `
┏━━━❬ 🤖 BOT Menu ❭━━━┓
❖ _${usedPrefix}ping_
❖ _${usedPrefix}uptime_
❖ _${usedPrefix}bot_
❖ _${usedPrefix}runtime_
❖ _${usedPrefix}infobot_
❖ _${usedPrefix}donate_
❖ _${usedPrefix}groups_
❖ _${usedPrefix}blocklist_
┗━━━❬ 🤖 BOT Menu ❭━━━┛`; // Your bot menu message here
          break;
        case 'ownermenu':
          pp = './Assets/Owner.jpg';
          lkr = `
┏━━━❬ 👑 Owner Menu ❭━━━┓
❖ _${usedPrefix}banchat_
❖ _${usedPrefix}unbanchat_
❖ _${usedPrefix}banuser_
❖ _${usedPrefix}unbanuser_
❖ _${usedPrefix}Broadcast_
❖ _${usedPrefix}Broadcastgc_
❖ _${usedPrefix}join_
❖ _${usedPrefix}setppbot_
❖ _${usedPrefix}setprefix_
❖ _${usedPrefix}resetprefix_
❖ _${usedPrefix}getfile_
❖ _${usedPrefix}getplugin_
┗━━━❬ 👑 Owner Menu ❭━━━┛`; // 
          break;
          case 'groupmenu':
          pp = './Assets/Group.jpg';
          lkr = `
┏━━━❬ 🧑‍🤝‍🧑 Group Menu ❭━━━┓
❖ _${usedPrefix}kick *<@tag>*_
❖ _${usedPrefix}promote *<@tag>*_
❖ _${usedPrefix}demote *<@tag>*_
❖ _${usedPrefix}infogroup_
❖ _${usedPrefix}resetlink_
❖ _${usedPrefix}link_
❖ _${usedPrefix}setpp *<image>*_
❖ _${usedPrefix}setname *<text>*_
❖ _${usedPrefix}setdesc *<text>*_
❖ _${usedPrefix}setwelcome *<text>*_
❖ _${usedPrefix}setbye *<text>*_
❖ _${usedPrefix}hidetag *<text/image/audio/vid>*_
❖ _${usedPrefix}warn *<@tag>*_
❖ _${usedPrefix}unwarn *<@tag>*_
❖ _${usedPrefix}group *<open/close>*_
❖ _${usedPrefix}enable
┗━━━❬ 🧑‍🤝‍🧑 Group Menu ❭━━━┛`; // 
          break;
          case 'downloadermenu':
            case 'dlmenu' :
                  pp = './Assets/Download.jpg';
          lkr = `
┏━━━❬ 📥 Downloader Menu ❭━━━┓
❖_${usedPrefix}play_
❖_${usedPrefix}song_
❖ _${usedPrefix}yta <link>_
❖ _${usedPrefix}ytv <link>_
❖ _${usedPrefix}ytmp3 <link>_
❖ _${usedPrefix}ytmp4 <link>_
❖ _${usedPrefix}gimage_
❖ _${usedPrefix}pinterest_
❖ _${usedPrefix}mediafire <link>_
❖ _${usedPrefix}gdrive <link>_
❖ _${usedPrefix}gitclone <link>_
❖ _${usedPrefix}twitter <link>_
❖ _${usedPrefix}tiktok <link>_
❖ _${usedPrefix}tiktokstalk_
❖ _${usedPrefix}instagram <link>_
❖ _${usedPrefix}spotify_
❖ _${usedPrefix}facebook <link>_
┗━━━❬ 📥 Downloader Menu ❭━━━┛`; // 
          break;
          case 'funmenu':
                  pp = './Assets/Fun.jpg';
          lkr = `
┏━━━❬ 🎉 Fun Menu ❭━━━┓
❖ _${usedPrefix}character_
❖ _${usedPrefix}truth_
❖ _${usedPrefix}dare_
❖ _${usedPrefix}flirt_
❖ _${usedPrefix}shayeri_
❖ _${usedPrefix}ship_
❖ _${usedPrefix}waste_
❖ _${usedPrefix}ytcomment_
❖ _${usedPrefix}stupid_
❖ _${usedPrefix}lolicon_
┗━━━❬ 🎉 Fun Menu ❭━━━┛`; // 
          break;
          case 'gamemenu':
                  pp = './Assets/Games.jpg';
          lkr = `
┏━━━❬ 🎮 Games Menu ❭━━━┓   
❖ _${usedPrefix}tictactoe_
❖ _${usedPrefix}delttt_
❖ _${usedPrefix}math_
❖ _${usedPrefix}math answer_
❖ _${usedPrefix}ppt_
❖ _${usedPrefix}casino_
❖ _${usedPrefix}teri mummy_
❖ _${usedPrefix}chess <Help | Create | Start | Join>_
┗━━━❬ 🎮 Games Menu ❭━━━┛`; // 
          break;
          case 'stickermenu':
                  pp = './Assets/Sticker.jpg';
          lkr = `
┏━━━❬ 🎨 Sticker Menu ❭━━━┓
❖ _${usedPrefix}sticker_
❖ _${usedPrefix}take_
❖ _${usedPrefix}scircle_
❖ _${usedPrefix}smaker_
❖ _${usedPrefix}sremovebg_
❖ _${usedPrefix}getsticker_
❖ _${usedPrefix}emojimix_
❖ _${usedPrefix}toimg_
❖ _${usedPrefix}tovid_
❖ _${usedPrefix}ttp_
❖ _${usedPrefix}telesticker_
❖ _${usedPrefix}attp_
❖ _${usedPrefix}attp2_
❖ _${usedPrefix}attp3_
┗━━━❬ 🎨 Sticker Menu ❭━━━┛`; 
          break;
          case 'toolmenu':
                  pp = './Assets/Tools.jpg';
          lkr = `
┏━━━❬ 🧰 Tools Menu ❭━━━┓
❖ _${usedPrefix}autosticker_
❖ _${usedPrefix}pdf_
❖ _${usedPrefix}whatmusic_
❖ _${usedPrefix}calc_
❖ _${usedPrefix}google_
❖ _${usedPrefix}lyrics_
❖ _${usedPrefix}readmore_
❖ _${usedPrefix}ssweb_
❖ _${usedPrefix}tts_
❖ _${usedPrefix}translate_
❖ _${usedPrefix}tourl_
❖ _${usedPrefix}wikipedia_
❖ _${usedPrefix}qrmaker_
❖ _${usedPrefix}readqr_
❖ _${usedPrefix}fancy_
❖ _${usedPrefix}weather_
❖ _${usedPrefix}dalle_
❖ _${usedPrefix}tocartoon_
❖ _${usedPrefix}quote_
❖ _${usedPrefix}technews_
❖ _${usedPrefix}define_
❖ _${usedPrefix}pokedex_
❖ _${usedPrefix}removebg_
❖ _${usedPrefix}apk_
❖ _${usedPrefix}tinyurl/shorturl_
❖ _${usedPrefix}readvo_
❖ _${usedPrefix}true_
┗━━━❬ 🧰 Tools Menu ❭━━━┛`; // 
          break;
          case 'logomenu':
                  pp = './Assets/Logo.jpg';
          lkr = `use ${usedPrefix}logo to see all options \ngfx cmd upto 12`; // 
          break;
        default:
          lkr = `Invalid command. Type ${usedPrefix}list to see available options.`;
      }
    
      conn.sendFile(m.chat, pp, 'https://i.ibb.co/RpDMgWt/guru.jpg', lkr, m, false, { mentions: [who] });
    
      let done = '📃';
      m.react(done);
    };
    
    handler.help = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'funmenu', 'gamemenu', 'stickermenu', 'logomenu', 'toolmenu'];
    handler.tags = ['main'];
    handler.command = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'funmenu', 'gamemenu', 'stickermenu', 'logomenu', 'toolmenu'];
    
    export default handler
    

