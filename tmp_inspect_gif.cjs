const https = require('https');
const fs = require('fs');
const url = 'https://free-game.virgilabloh.com/assets/images/virgil-spinning.gif';
https.get(url, res => {
  const chunks = [];
  res.on('data', c => chunks.push(c));
  res.on('end', () => {
    const buf = Buffer.concat(chunks);
    fs.writeFileSync('virgil-spinning.gif', buf);
    console.log('downloaded', buf.length);
  });
}).on('error', e => console.error('error', e.message));
