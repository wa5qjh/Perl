$(document).ready(function(){$("#newsletter_signInButton").bind('click',doNLSubmit);});function nlsignup()
{if(signup_clicked==1)
{setTimeout('nlsignup()',20000);signup_clicked=0;}
else if(signup_hovered==1)
{setTimeout('nlsignup()',5000);signup_hovered=0;}
else
{document.getElementById('nl-signup').style.display='none';}}
function doNLSubmit(){$("#nl-signup-error").hide();var email=$("#namecard").val();if(validate(email)){$("#nl-signup-error").text('* Invalid Email Address');$("#nl-signup-error").show();}else{$.ajax({type:"POST",url:"/newsletterReg",data:{email:email},dataType:"json",async:false,success:function(data)
{if(data.result=="success")
{$("#namecard").hide();$("#newsletter_signInButton").hide();$("#nl-signup-error").text('You\'ve successfully signed up to receive the Web Developer Update Newsletter.');$("#nl-signup-error").show();}
else
{$("#nl-signup-error").text('Error registering for newsletter.');$("#nl-signup-error").show();}},error:function()
{$("#nl-signup-error").text('Error registering for newsletter.');$("#nl-signup-error").show();}});}
return false;}
function validate(email){var reg=/^([A-Za-z0-9_\-\.]{2,})+\@([A-Za-z0-9_\-\.]{2,})+\.([A-Za-z]{2,4})$/;if(reg.test(email)==false)return true;else return false;}