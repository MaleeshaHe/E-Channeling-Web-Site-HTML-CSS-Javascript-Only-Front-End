function formValid() {
  nameValid();
  numberValid();
}

function nameValid() {
  var letters = /^[A-Za-z ]+$/;

  var name = document.getElementById("name").value;

  if (name.match(letters)) {
    cuteAlert({
      type: "success",
      title: "Your Request has been sent",
      message: "We will contact you soon",
      buttonText: "Close",
    });
  } else {
    cuteToast({
      type: "error",
      title: "Name",
      message: "You can enter only Characters",
      timer: 10000,
    });
  }
}

function numberValid() {
  var numbers = /^[0-9]+$/;

  var mobileNum = document.getElementById("mobileNum").value;

  if (mobileNum.match(numbers)) {
  } else {
    cuteToast({
      type: "error",
      title: "Phone Number",
      message: "You can enter only Numbers",
      timer: 10000,
    });
  }
}
