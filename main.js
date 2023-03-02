
function submitbutton(){
  var isValidated=true;
if (document.getElementById('fname').value == 0){
document.getElementById("fname").style.border = "1px solid red";
isValidated= false;
}
else{
document.getElementById("fname").style.border="1px solid green";
isValidated=true;
}
if (document.getElementById('lname').value == 0){
document.getElementById("lname").style.border = "1px solid red";
isValidated= false;
}
else{
document.getElementById("lname").style.border="1px solid green";
isValidated=true;
}



if( document.getElementById('email').value == 0)
{ document.getElementById("email").style.border = "1px solid red";
 document.getElementsByName('email')[0].placeholder = 'email@example.com '; 
 
}
else if (!isEmail(emailValue)) {
  setErrorFor(email, " Not a valid Email");
        } else{
          setSuccessFor(email);
  document.getElementById("email").style.border="1px solid hsl(249, 10%, 26%)";
        }
        /* to validate the email*/
        function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

if( document.getElementById('phone').value ==0)
{ document.getElementById("phone").style.border = "1px solid red";
  
 
}
}

