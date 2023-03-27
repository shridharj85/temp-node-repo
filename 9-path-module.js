const path = require('path')
console.log(path.sep);

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);
const filePath2 = path.join('content','subfolder','test.txt')

const base = path.basename(filePath)
console.log(base);

//see the difference
const absolute1 = path.resolve(__dirname,`${filePath}`)
console.log(absolute1);

const absolute2 = path.resolve(__dirname,`${filePath2}`)
console.log(absolute2);