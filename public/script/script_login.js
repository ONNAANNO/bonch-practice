function validate() {  
	var result = "";	
	result += validateName();
	result += validatePassword();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}

function validatePassword() {
	var password = valueOf("password");
	
	if (password.length <= 6) 
		return "Password should be at least 6 characters.\n";
}


function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}