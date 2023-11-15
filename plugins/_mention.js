//Guru ka Maal Hai 
//Made For Guru Bot
//created on Diwali(12th Nov)
//copy with credits
//lodusheks stay away



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://raw.githubusercontent.com/Imarju/A17/master/Assets/audio/Kuzgun_(Minnet_Eylemem)_Slowed(256k).mp3"
    let url = "https://github.com/Imarju/A17"
    let murl = "https://instagram.com/gmx_grand_master_x?igshid=a2UxZ3ZyZjNicmUw"
    let hash = global.botname
    let img = "https://i.postimg.cc/v8tVdHcG/nan.jpg"
    let num = "919131652091"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "ARJU.mp3",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷|   ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler

