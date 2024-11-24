const fs = require('fs');

// //Synchronous call
// writeFile overwrites the content
fs.writeFileSync('./test.txt', 'Hey There.'); //If I run this again with some other content it will overwrite the hey there


// Async always takes a callback function
fs.writeFile('./test.txt', 'Hello there in Async.', (err) => {}) //This will overwrite the above test file


result = fs.readFileSync('./test.txt', 'utf-8');

/* The readFileSync returns the result and can be stored in 
    a variable. */

/* Whereas the async one i.e readFile does not return directly
    It takes a call back function which will contain error and result*/

fs.readFile('./test.txt', 'utf-8', (err, result) => {
    if (err) { 
        console.log("Error: ", err);
    } else {
        console.log(result);
    }
});

fs.appendFileSync('./test.txt', " This is appended content.");

fs.appendFile('./test.txt', ' \nThis is done Asynchronously.', (err) => {});

fs.cpSync('./test.txt', './copy.txt');

fs.unlinkSync('./copy.txt'); // To delete a file

console.log(fs.statSync('./test.txt')); // To see the stats of the file

fs.mkdirSync('my-docs/a/b', { recursive: true }); // Create the directories recursively

