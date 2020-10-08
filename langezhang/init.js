const fs = require('fs');
const number = process.argv[2] || '';
const title = process.argv[3] || '';
fs.mkdir(number, () => {});
fs.writeFile(`${number}/${number}_1.ts`, '', () => {});
fs.writeFile(`${number}/${number}.md`, `### 剑指 Offer ${number}. ${title}`, () => {});
