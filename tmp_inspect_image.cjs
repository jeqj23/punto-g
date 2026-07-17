const https = require('https');
const fs = require('fs');
const url = 'https://free-game.virgilabloh.com/assets/images/free-game.png';
https.get(url, res => {
  const chunks = [];
  res.on('data', c => chunks.push(c));
  res.on('end', () => {
    const buf = Buffer.concat(chunks);
    fs.writeFileSync('free-game.png', buf);
    console.log('downloaded', buf.length);
    console.log(buf.slice(0,16));
    console.log(buf.slice(0,64).toString('ascii'));
  });
}).on('error', e => console.error('error', e.message));
