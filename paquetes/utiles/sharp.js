const sharp = require('sharp')

sharp('original.png')
  .resize(80)
  .grayscale()
  .toFile('original-80x80.png')