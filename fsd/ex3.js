//3. Code a Node.Js application to perform various Buffer Operations.
//Source Code:
/* Implementing NodeJs Application to perform various Buffer
operations*/
//Buffer Write
buf1 = new Buffer.alloc(30); 
buf1.fill(0);
buf1.write("BAPATLA COLLEGE");
console.log(buf1.toString());
buf1.write("ENGINEERING COLLEGE", 8, 19);
console.log(buf1.toString()); 
//Buffer Read
buf2 = new Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
 buf2[i] = i + 65;
} 
console.log( buf2.toString('ascii')); 
console.log( buf2.toString('ascii',0,5)); 
console.log( buf2.toString('utf8',0,5)); 
console.log( buf2.toString(undefined,0,5));
//Buffer Length
var buffer3 = new Buffer.from('BAPATLA ENGINEERING COLLEGE');
console.log("buffer length: " + buffer3.length);
//Buffer Concatenate
var buffer4 = new Buffer.from('BAPATLA ENGINEERING COLLEGE');
var buffer5 = new Buffer.from(' BAPATLA');
var buffer6 = Buffer.concat([buffer4,buffer5]);
console.log("buffer3 content: " + buffer6.toString());
//Buffer Slicing
var buffer7 = new Buffer.from('Hello, from FSD Lab');
console.log("buffer7 content: " + buffer7.toString());
var buffer8 = buffer7.slice(7,19);
console.log("buffer8 content: " + buffer8.toString());
console.log("\n");
