// Form Pre loader
$(window).on("load", function () {
  $(".loader").hide();
});

function checkEmpty(){

	var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var fnum = document.getElementById("fnum").value;
  var femail = document.getElementById("femail").value;
  var address = document.getElementById("address").value;
  var doctor = document.getElementById("doctor").value;
  var hospital = document.getElementById("hospital").value;


	if(fname == null || fname == ""){
		alert("Fill the First Name Field!");
	}
  else if(lname == null || lname == ""){
		alert("Fill the Last Name Field!");
	}
  else if(fnum == null || fnum == ""){
		alert("Fill the Mobile Number Field!");
	}
  else if(femail == null || femail == ""){
		alert("Fill the Email Field!");
	}
  else if(address == null || address == ""){
		alert("Fill the Address Field!");
	}
  else if(doctor == null || doctor == ""){
		alert("Fill the preferred doctor Field!");
	}
  else if(hospital == null || hospital == ""){
		alert("Fill the preferred hospital Field!");
	}

	else{
    cuteAlert({
      type: "success",
      title: "Your Request has been sent",
      message: "Thank You !!",
      buttonText: "Okay",
    });
	}

}


function checkLetterf(){
  var fname = document.getElementById("fname").value;
  var letters = /^[A-Za-z]+$/;
  
  if(fname.match(letters)){
    return true;
  }
  else{
    confirm("Please Enter Letters only!");
    return false;
  }
}

function checkLetterl(){
  var lname = document.getElementById("lname").value;
  var letters = /^[A-Za-z]+$/;
  
  if(lname.match(letters)){
    return true;
  }
  else{
    confirm("Please Enter Letters only!");
    return false;
  }
}


function checkEmpty(){

	var fname = document.getElementById("fname").value;
  var pass = document.getElementById("pass").value;



	if(fname == null || fname == ""){
		alert("Fill the First Name Field!");
	}
  else if(pass == null || pass == ""){
		alert("Fill the password Field!");
	}

	else{
		Swal.fire({
			icon: "success",
			title: "Logging Successfully!",
			text: "Thank you!",
			showConfirmButton: false,
			footer:
			  '<button type="button"><a href="../index.html">Home</a></button>',
		  });
	}

}
