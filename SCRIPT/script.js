// jquery

$(document).ready(function () {
  $("#login").click(function () {
    $(".login-form").addClass("popup");
  });

  $(".login-form form .fa-times").click(function () {
    $(".login-form").removeClass("popup");
  });

  $(window).on("load scroll", function () {
    $(".login-form").removeClass("popup");
  });
});

//Form validation using Javascript

function validateForm() {
  let name = document.forms["myForm"]["fname"].value;
  let mail = document.forms["myForm"]["mail"].value;
  let pass = document.forms["myForm"]["pass"].value;
  let phone = document.forms["myForm"]["phone"].value;
  let address = document.forms["myForm"]["queries"].value;
  if (name == "") {
    alert("Please Enter Your Name");
    return false;
  } else if (mail == "") {
    alert("please enter mail");
    return false;
  } else if (pass == "") {
    alert("Please Enter Password");
    return false;
  } else if (phone == "") {
    alert("Enter your Phone Number");
    return false;
  } else if (address == "") {
    alert("Enter your Address");
    return false;
  }
}
