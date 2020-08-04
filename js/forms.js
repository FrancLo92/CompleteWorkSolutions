



/* ------------------FORMS SCRIPT------------------------------- */

/* SUBMIT BUTTON --------------------------- */

var buttonDiv = document.getElementsByClassName('buttonDiv');
for(i = 0; i < buttonDiv.length; i++){
buttonDiv[i].style.width = '90%';
buttonDiv[i].style.margin = '0 auto';
}

/* SUBMIT BUTTONS STYLE--------------------------------------------- */
var buttonStyle = document.getElementsByClassName('buttonStyle');
    for(i = 0; i < buttonStyle.length; i++) {
      buttonStyle[i].style.background = '#68D117';
	  buttonStyle[i].style.color = 'white';
	  buttonStyle[i].style.fontSize = '20px';
	  buttonStyle[i].style.margin = '0 auto';
	  buttonStyle[i].style.fontWeight = 'bold';
	  buttonStyle[i].style.border = 'solid #CBFDA5 3px';
	  buttonStyle[i].style.height = '40px';	
	  buttonStyle[i].style.borderRadius = '30px';	
    }

	
/* FIELD SET STYLE----------------------------------------------- */
var fieldSetStyle = document.getElementsByClassName('fieldSetStyle');
    for(i = 0; i < fieldSetStyle.length; i++) 
	{ 
		fieldSetStyle[i].style.fontWeight = 'bold'; 
		fieldSetStyle[i].style.width = '90%'; 
		fieldSetStyle[i].style.margin = '0 auto';		
    }
	
/* LEGEND STYLE----------------------------------------------- */
var legendStyle = document.getElementsByClassName('legend');
    for(i = 0; i < legendStyle.length; i++) 
	{
		legendStyle[i].style.fontSize = '20px';	  	  
		legendStyle[i].style.fontWeight = 'normal'; 	  
    }
	
/* ERRORMESSAGE STYLE----------------------------------------------- */
var errorMessageStyle = document.getElementsByClassName('errorMessageStyle');
    for(i = 0; i < errorMessageStyle.length; i++) {
      errorMessageStyle[i].style.fontSize = '15px';	  	  
	  errorMessageStyle[i].style.color = 'red'; 
	  errorMessageStyle[i].style.fontWeight = 'normal';	  
    }

/* SUBMIT BUTTON ENQUIRY FORM CLICK EVENT FUNCTION------------------------------------------------------------------- */
function validateForm()
{
	var Name = document.getElementsByClassName('Name');
	var NameErrMessage = document.getElementsByClassName('NameErrMessage');	
	var postcode = document.getElementsByClassName('postcode');
	var postcodeErrMessage = document.getElementsByClassName('postcodeErrMessage');
	var email = document.getElementsByClassName('email');
	var emailErrMessage = document.getElementsByClassName('emailErrMessage');
	var txtArea = document.getElementsByClassName('txtArea');
	var txtAreaErrMessage = document.getElementsByClassName('txtAreaErrMessage');
	

	
	/* VALIDATION FIRST NAME-------------------------------- */
	
	for(i = 0; i < Name.length; i++) 
	{
		if(Name[i].value == "")
		{
			NameErrMessage[i].innerHTML='*Field cannot be left empty.';
			Name[i].focus();
			return false;			
		}
		break;			  
    }
	NameErrMessage[i].innerHTML='';
	
	
	/* VALIDATION EMAIL-------------------------------- */
	for(i = 0; i < email.length; i++) 
	{
		if(email[i].value == "")
		{
			emailErrMessage[i].innerHTML='*Field cannot be left empty.';
			email[i].focus();
			return false;	
		}
		
		
		if(email[i].value.length <8)
		{
			emailErrMessage[i].innerHTML='*Email Must be at least 8 characters long.';
			email[i].focus();
			return false;	
		}
		
		if(email[i].value.indexOf(".")== -1||email[i].value.indexOf("@")== -1)
		{
			emailErrMessage[i].innerHTML='*Email Must contain "@" and atleast one "."(dot).';
			email[i].focus();
			return false;	
		}
		break;
    }
	emailErrMessage[i].innerHTML='';
	
	/* VALIDATION POSTCODE-------------------------------- */
	for(i = 0; i < postcode.length; i++) 
	{
		if(postcode[i].value == "")
		{
			postcodeErrMessage[i].innerHTML='*Field cannot be left empty.';
			postcode[i].focus();
			return false;	
		}
		
		if(postcode[i].value.length != 4||isNaN(postcode[i].value))
		{
			postcodeErrMessage[i].innerHTML='*Post Code must be 4 Number.';
			postcode[i].focus();
			return false;	
		}
		break;	
	}
	postcodeErrMessage[i].innerHTML='';
	
	/* VALIDATION TEXT AREA-------------------------------- */
	for(i = 0; i < txtArea.length; i++) 
	{
		if(txtArea[i].value == "")
		{
			txtAreaErrMessage[i].innerHTML='*Field cannot be left empty.';
			txtArea[i].focus();
			return false;	
		}
		break;	
	}
	txtAreaErrMessage[i].innerHTML='';
	
	
	alert('Enquiry Form Was Successfully Submitted!')	
	return true;
}


/* SUBMIT QUOTE BUTTON CLICK EVENT FUNCTION------------------------------------------------------------------- */
function validateQuoteForm()
{
	var NameQ = document.getElementById('NameQ');
	var NameQErrMessage = document.getElementById('NameQErrMessage');	
	var postcode = document.getElementById('postcodeQ');
	var postcodeErrMessage = document.getElementById('postcodeQErrMessage');
	var email = document.getElementById('emailQ');
	var emailErrMessage = document.getElementById('emailQErrMessage');
	var phone = document.getElementById('phoneQ');
	var phoneErrMessage = document.getElementById('phoneQErrMessage');
	var budget = document.getElementById('budgetQ');
	var budgetErrMessage = document.getElementById('budgetQErrMessage');
	var txtArea = document.getElementById('txtAreaQ');
	var txtAreaErrMessage = document.getElementById('textAreaQErrMessage');

	
	
	/* VALIDATION NAME-------------------------------- */
	if(NameQ.value == "")
	{
		NameQErrMessage.innerHTML='*Field cannot be left empty.';
		NameQ.focus();
		return false;	
	}
	NameQErrMessage.innerHTML='';	
	
	/* VALIDATION EMAIL-------------------------------- */
	
	if(emailQ.value == "")
	{
		emailQErrMessage.innerHTML='*Field cannot be left empty.';
		emailQ.focus();
		return false;	
	}
	emailQErrMessage.innerHTML='';
	
	if(emailQ.value.length <8)
	{
		emailQErrMessage.innerHTML='*Email Must be at least 8 characters long.';
		emailQ.focus();
		return false;	
	}
	emailQErrMessage.innerHTML='';
	
	if(emailQ.value.indexOf(".")== -1||emailQ.value.indexOf("@")== -1)
	{
		emailQErrMessage.innerHTML='*Email Must contain "@" and atleast one "."(dot).';
		emailQ.focus();
		return false;	
	}
	emailQErrMessage.innerHTML='';
	
	/* VALIDATION POSTCODE-------------------------------- */	
	if(postcodeQ.value == "")
	{
		postcodeQErrMessage.innerHTML='*Field cannot be left empty.';
		postcodeQ.focus();
		return false;	
	}
	postcodeQErrMessage.innerHTML='';
	
	if(postcodeQ.value.length != 4||isNaN(postcodeQ.value))
	{
		postcodeQErrMessage.innerHTML='*Post Code must be 4 Number.';
		postcodeQ.focus();
		return false;	
	}
	postcodeQErrMessage.innerHTML='';
	
	/* VALIDATION PHONE-------------------------------- */	
	if(phoneQ.value == "")
	{
		phoneQErrMessage.innerHTML='*Field cannot be left empty.';
		phoneQ.focus();
		return false;	
	}
	phoneErrMessage.innerHTML='';
	
	if(phoneQ.value.length != 10||isNaN(phone.value))
	{
		phoneQErrMessage.innerHTML='*Phone must a 10 digit Number.';
		phoneQ.focus();
		return false;	
	}
	phoneQErrMessage.innerHTML='';
	
	/* VALIDATION BUDGET-------------------------------- */	
	if(budgetQ.value == "")
	{
		budgetQErrMessage.innerHTML='*Field cannot be left empty.';
		budgetQ.focus();
		return false;	
	}
	budgetQErrMessage.innerHTML='';
	
	if(isNaN(budgetQ.value))
	{
		budgetQErrMessage.innerHTML='*Budget available must be a number';
		budgetQ.focus();
		return false;	
	}
	budgetQErrMessage.innerHTML='';
	
	if(txtAreaQ.value == "")
	{
		txtAreaQErrMessage.innerHTML='*Field cannot be left empty.';
		txtAreaQ.focus();
		return false;	
	}
	budgetQErrMessage.innerHTML='';
	
	alert('Quote was succesfuly logded!\n\nWe will get back to you shortly.')	
	return true;
}


/* ON FOCUS FUNCTION----------------------------------------------------------------------------- */

function changeBackgroundFocus(textField)
{
	textField.style.backgroundColor='lightBlue';
}

/* ON BLUR FUNCTION----------------------------------------------------------------------------- */
function resetBackgroundBlur(textField)
{
	textField.style.backgroundColor='';
}



