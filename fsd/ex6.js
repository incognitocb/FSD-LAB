//6. Code an Express application to implement user registration form.
//Source code:

//Index.html:

<!DOCTYPE html>
<html>
 <head>
<title>Welcome Home</title>
 </head>
 <body>
. . <!-- link to login page-->
<a href="/Login">Please Login Here!</a>
 </body>
</html>
Login.html:
<!DOCTYPE html>
<Html>
<head>
 <title>
 Registration Page
 </title>
</head>
<body>
 <form action="Login" method="post">
 <center>
 <table>
 <tr>
 <h3 style="color:blue">Registration Form</h3>
 </tr>
 <tr>
 <td>Firstname</td>
<td><input type="text" name ="fname" /></td>
 </tr>
 <tr>
 <td>Lastname:</td>
<td><input type="text" name="lname" /></td>
 </tr>
 <tr>
<td>Course:</td>
<td><select name="scourse">
 <option value="Course">Course</option>
 <option value="CSE">CSE</option>
<option value="CB">CB</option>
<option value="DS">DS</option>
<option value="ECE">ECE</option>
<option value="EEE">EEE</option>
 </select></td>
 </tr>
 <tr>
 <td>Gender:</td>
<td><input type="radio" name="gender" value="male" 
/> Male <br>
 <input type="radio" name="gender" 
value="female" /> Female <br>
 <input type="radio" name="gender" 
value="other" /> Other
 </td>
 </tr>
 <tr>
 <td>Phone:</td>
<td> <input type="text" name="country code" 
value="+91" size='2'/>
 <input type="text" name="phone" size="10" /> 
<br> <br>
 </td>
 </tr>
 <tr>
 <td> Address</td>
<td><textarea cols="60" rows="5" name="address">
 </textarea></td>
 </tr>
 <tr>
 <td>Email:</td>
<td><input type="email" name="email" /></td>
 </tr>
 <tr>
 <td>Password:</td>
<td><input type="Password" name="pass"></td>
 </tr>
 <tr>
 <td>Re-type password:</td>
<td><input type="Password" id="repass">
</td>
 </tr>
<tr>
 <td><input type="submit" value="submit"/></td>
 </tr>
 </table>
 </center>
 </form>
</body>
</html>

//ExpressServer.js:

const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Route to Homepage
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/Index.html');
});
// Route to Login Page
app.get('/login', (req, res) => {
 res.sendFile(__dirname + '/Login.html');
});
app.post('/login', (req, res) => {
 // Insert Login Code Here
 let fname = req.body.fname;
 let lfname = req.body.lname;
 let course = req.body.scourse;
 let gender = req.body.gender;
 let phone = req.body.phone;
 let address = req.body.address;
 let email = req.body.email;
 let password = req.body.pass;
 res.send(`Name: ${fname}${lfname} \
 Course: ${course} \
 Gender: ${gender} \
 Phone: ${phone} \
 Address: ${address} \
 Email: ${email} \
 Password: ${password} `);
 console.log(`Name: ${fname}+${lfname} \n\
 Course: ${course} \n\
 Gender: ${gender} \n\
 Phone: ${phone} \n\
 Address: ${address} \n\
 Email: ${email} \n\
 Password: ${password} `);
});
const port = 5000 // Port we will listen on
// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port${port}`));
