//5. Create a CRUD application using data from the local file system.
//Source code:


var fs = require('fs');
fs.writeFileSync('output.txt', 'Hello content!', function (err) {
 if (err) throw err;
});
console.log('Saved!');
// Synchronous read
var data = fs.readFileSync('output.txt');
console.log("Synchronous read: " + data.toString());
//Update file
fs.appendFileSync('output.txt', ' This is my text.', function (err) {
 if (err) throw err;
});
console.log('Updated!');
// Asynchronous read
fs.readFile('output.txt', function (err, data) {
 if (err) {
 return console.error(err);
 }
 console.log("Asynchronous read: " + data.toString());
});
//Delete file
fs.unlink('output.txt', function (err) {
 if (err) throw err;
 console.log('File deleted!');
});
