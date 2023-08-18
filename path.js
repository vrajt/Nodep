const os =require('os')//built in function
const { uptime } = require('process')


//info about current user
const user=os.userInfo()
console.log(user)
//method return the system uptime in seconds
console.log(os.uptime())

//more methods
const currentos={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentos);

//path module
const path = require('path');

const filepath = path.join('//content', 'subfolder', 'text.txt');
console.log(`the file path is: ${filepath}`);
console.log(`the path separation is ${path.sep}`);
//only last name
const base=path.basename(filepath)
console.log(base)
//result path(absolute path)
const absolute=path.resolve(__dirname,'content')
console.log(absolute)
