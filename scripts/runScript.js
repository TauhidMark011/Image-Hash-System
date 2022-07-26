const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

const filePath = path.join(__dirname, '../assets/pdfodo.png');
// const filePath = path.join(__dirname, '../data/metadata.json');

pinFileToIPFS(filePath);

