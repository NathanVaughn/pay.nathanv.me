const capture = require('capture-chrome');
const fs = require('fs');
const pngToJpeg = require('png-to-jpeg');

capture({
  url: 'http://localhost:8080',
  width: 450,
  height: 450
}).then(screenshot => {
  fs.writeFileSync('img/opg.png', screenshot);
  console.log('Screenshot taken');
  let buffer = fs.readFileSync('img/opg.png');
  pngToJpeg({
      quality: 90
    })(buffer)
    .then(output => fs.writeFileSync('img/opg.jpg', output));
  fs.unlinkSync('img/opg.png');
});