let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat] 
     if (/^استمارات$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `❆━━━━━═⏣⊰☁️⊱⏣═━━━━━❆

⎗ الــاسـتمـارات 🖨️ ↯

⇜ ترحيب ⎢ 👋🏻
⇜ترقية ⎢ 👮🏻‍♂️
⇜اعفاء ⎢ 👨🏻‍💼
⇜طرد مؤقت ⎢ ⭕
⇜اعلان انذار ⎢ 🚫
⇜تغيير لقب ⎢ 👥
❆━━━━━═⏣⊰☁️⊱⏣═━━━━━❆`, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 
return !0 }
export default handler
