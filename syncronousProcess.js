//one over the other(differentr methods,call back functions)
const { readFileSync, writeFileSync } = require('fs');
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt',
 `here is the result: ${first}, ${second}`,{flag:'a'});// here we created aanother text file
console.log('done with this task')
console.log('starting with the next one')