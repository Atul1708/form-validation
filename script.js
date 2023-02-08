
const clearError = () => {
    let errorMsg = document.getElementsByClassName("errorMsg")
    for(let item of errorMsg) {
        item.innerHTML = "";
    }
}

const validateForm = () => {
    clearError();
  let name = document.forms["myForm"]["fname"].value;
  if (name.length == 0) {
    let errorMsg = document.querySelector(".nameError");
    errorMsg.innerHTML =
      "<span class='material-symbols-outlined'> error</span> Name cannot be blank";
    return false;
  }
  if (name.length < 5) {
    let errorMsg = document.querySelector(".nameError");
    errorMsg.innerHTML =
      "<span class='material-symbols-outlined'> error</span> Length of username is too short";
    return false;
  }

  let phone = document.forms["myForm"]["fphone"].value;
  let regxForNumber = /^\+91\d{10}$/;
  if (!phone.match(regxForNumber)) {
    let errorMsg = document.querySelector(".phoneError");
    errorMsg.innerHTML =
      "<span class='material-symbols-outlined'> error</span> please enter number in valid form";
    return false;
  }
  if (phone.length < 10) {
    let errorMsg = document.querySelector(".phoneError");
    errorMsg.innerHTML =
      "<span class='material-symbols-outlined'> error</span> Number should be of 10 digit";
    return false;
  }

  let email = document.forms["myForm"]["femail"].value;
  let regexpForEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  if (!email.match(regexpForEmail)) {
    let errorMsg = document.querySelector(".mailError");
    errorMsg.innerHTML =
      "<span class='material-symbols-outlined'> error</span> Please enter mail in valid format";
    return false;
  }

  let password = document.forms["myForm"]["fpass"].value;
  if (password.length < 8) {
    let errorMsg = document.querySelector(".passError");
    errorMsg.innerHTML =
      "<span class='material-symbols-outlined'> error</span> Lenght of password should be greater than 8 digit";
    return false;
  }

  let confirmPassword = document.forms["myForm"]["fcpass"].value;
  if (confirmPassword != password) {
    let errorMsg = document.querySelector(".conPassError");
    errorMsg.innerHTML =
      "<span class='material-symbols-outlined'> error</span> Password should be same";
    return false;
  }
  return true;
};
