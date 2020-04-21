function validateTextbox(){
	
	var box= document.getElementById("name");
	if(box.value==""){
		alert("Fill the mandatory fields");
		return false;
	}
	
	var box= document.getElementById("address");
	if(box.value==""){
		alert("Fill the mandatory fields");
		return false;
	}
	var box= document.getElementById("phone");
	if(box.value==""){
		alert("Fill the mandatory fields");
		return false;
	}
	var box= document.getElementById("email");
	if(box.value==""){
		alert("Fill the mandatory fields");
		return false;
	}
	
	var box= document.getElementById("enquiry");
	if(box.value==""){
		alert("Fill the mandatory fields");
		return false;
	}
	
}
