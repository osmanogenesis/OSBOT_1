import fetch from 'node-fetch';
import {translate} from '@vitalets/google-translate-api'

let pickupLineHandler = async (m, { conn, text, args }) => {
  try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`);

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let lang= "ar";
    try {
       let result = await translate(json.pickupline, { to: lang, autoCorrect: true }).catch(_ => null) 
    let pickupLine = `اتفضل 😉: \n\n"${result.text}"`;
        m.reply(pickupLine);
    } catch (e) {
        throw err
    } 
   
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

pickupLineHandler.help = ['pickupline'];
pickupLineHandler.tags = ['fun'];
pickupLineHandler.command = /^(pickupline|pickup)$/i;

export default pickupLineHandler;
