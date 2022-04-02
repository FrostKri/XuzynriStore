let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • AXIS [081360482998]
│ • GOPAY: [081360482998]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
