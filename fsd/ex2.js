2. Code a basic Node.Js application to implement user registration form.
Source code:
RegistrationForm.html:


<!DOCTYPE html>
<html>
<head>
 <title>
 Registration Page
 </title>
 <script type="text/javascript">
 function MyDetails(){
 var Gen='';
 var ele = document.getElementsByName('gender'); 
 for(i = 0; i < ele.length; i++) {
 if(ele[i].checked){
 Gen = ele[i].value;
 }
 }
 window.alert('First Name: 
'+document.getElementById('fname').value+' 
'+document.getElementById('lname').value+
 '\nCourse: '+document.getElementById('scourse').value+
 '\nGender: '+Gen+
 '\nPhone: +91 '+document.getElementById('phone').value+
 '\nAddress: '+document.getElementById('address').value+
 '\nEmail: '+document.getElementById('email').value+
 '\nPassword: '+document.getElementById('pass').value);
 }
 </script>
</head>
<body>
 <form>
 <center>
 <table>
 <tr>
 <h3 style="color:blue">Registration Form</h3>
 </tr>
 <tr>
 <td>Firstname</td>
<td><input type="text" id ="fname" /></td>
 </tr>
 <tr>
 <td>Lastname:</td>
<td><input type="text" id="lname" /></td>
 </tr>
 <tr>
 <td>Course:</td>
 <td><select id="scourse">
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
 <input type="text" id="phone" size="10" /> 
<br> <br>
 </td>
 </tr>
 <tr>
 <td> Address</td>
<td><textarea cols="60" rows="5" id="address">
 </textarea></td>
 </tr>
 <tr>
 <td>Email:</td>
<td><input type="email" id="email" /></td>
 </tr>
 <tr>
 <td>Password:</td>
<td><input type="Password" id="pass"></td>
 </tr>
 <tr>
 <td>Re-type password:</td>
<td><input type="Password" id="repass">
</td>
 </tr>
 <tr>
 <td><input type="submit" value="submit" 
onclick="MyDetails()"/></td>
 </tr>
 </table>
 </center>
 </form>
</body>
</html>

DeployRegistrationForm.js:


var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "html/RegistrationForm.html";
http.createServer(function (req, res) {
 var urlObj = url.parse(req.url, true, false);
 fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
 if (err) {
 res.writeHead(404);
 res.end(JSON.stringify(err));
 return;
 }
 res.writeHead(200);
 res.end(data);
 });
}).listen(8081);
