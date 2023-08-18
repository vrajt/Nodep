//asynchronous js

const { readFile, writeFileSync } = require('fs'); 

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(result); // Print the contents of the first file

    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result); // Print the contents of the second file

        const second = result;

        writeFileSync('./content/result-sync.txt', `here is the result: ${first}, ${second},\n`, { flag: 'a' });
    });
});
