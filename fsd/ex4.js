//4. Code a Node.Js application to demonstrate different ways of performing 
//stream operations.
//Source code:

const fs = require("fs");
const readable = fs.createReadStream("file1.txt", { highWaterMark: 20 });
const writable = fs.createWriteStream("file2.txt",{highWaterMark:20});
var data ='';
let bytesRead = 0;
readable.setEncoding('utf8');
console.log(`before attaching 'data' handler. is flowing: ${readable.readableFlowing}`);
readable.on("data", (chunk) => { console.log(`Read ${chunk.length} bytes`);
 bytesRead += chunk.length;
 data +=chunk;
 console.log("Data Read:"+data+"\n");
 writable.write(chunk);
 if (bytesRead === 60) {
 readable.pause();
 console.log(`after pause() call. is flowing: ${readable.readableFlowing}`);
 setTimeout(() => {
 readable.resume();
 console.log(`after resume() call. is flowing: ${readable.readableFlowing}`);
 }, 1000);
 }
});
readable.on("end",()=>{
 console.log(`Total number of bytes read from the readable stream: ${bytesRead}`);
});
console.log(`after attaching 'data' handler. is flowing: ${readable.readableFlowing}`);


file1.txt:
The Bapatla Engineering College(Autonomous), one of the seven 
educational institutions sponsored by the Bapatla Education Society, was 
established in 1981.

file2.txt:
The Bapatla Engineering College(Autonomous), one of the seven 
educational institutions sponsored by the Bapatla Education Society, was 
established in 1981.
