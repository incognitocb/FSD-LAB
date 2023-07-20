//7. Code an Express application using template-engine. (pug)
//Source Code:
//PugServer.js


// Code express application using template-engine (pug)
const express = require('express');
const app = express();
const port = 5000;
// Set the view engine to Pug
//app.set('views','./views');
 app.set('view engine', 'pug');
// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));
// Function to check if a number is a palindrome
function isPalindrome(number) {
 const reversedNumber = number.split('').reverse().join('');
 return number == reversedNumber;
}
// Render the initial form
app.get('/', (req, res) => {
 res.render('index');
});
// Handle POST request to check palindrome
app.post('/', (req, res) => {
const number = req.body.number;
 const palindrome = isPalindrome(number);
 const message = {
 text: palindrome ? 'The number is a palindrome!' : 'The number is 
not a palindrome.',
 class: palindrome ? 'success' : 'error'
 };
 res.render('index', { message });
});
// Start the server
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});


index.pug

doctype html
html
 head
 title Palindrome Checker
 body
 h1 Palindrome Checker:
 form(action="/" method="POST")
 label(for="number") Enter a number:
 input(type="text" name="number" id="number")
 button(type="submit") Check Palindrome
 if message
 p(class=message.class) #{message.text}
