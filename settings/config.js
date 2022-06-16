const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

// Other
global.owner = ['919961857267','919633927168','919744646559']
global.premium = ['919961857267','919633927168']
global.botname = 'THAKKU-MD'
global.ownername = 'TOXICKICHU'
global.packname = 'THAKKU-MD'
global.author = 'TOXICKICHU'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: 'This Feature Is Only For Admin!',
botAdmin: 'Bot Must Be Admin First!',
owner: 'This Feature Is Only For Owner!',
group: 'Feature Used Only For Groups!',
private: 'Features Used Only For Private Chat!',
bot: 'This Feature Is Only For Bot',
wait: 'Loading...',
error: 'Error! Maybe Api Key Is Expired🤔!',
endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
premium: "Infinity",
free: 20
}
global.thumb = fs.readFileSync('./media/thakku.jpg')
global.visoka = { url: 'https://a.uguu.se/suPOANin.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
