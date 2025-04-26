//.checked = property that determines the checked state of an HTML
//checkbox or radio button element
            
//      
let myCheckBox = document.getElementById("myCheckBox");
let visaBtn = document.getElementById("visaBtn");
let masterCardBtn = document.getElementById("masterCardBtn");
let payPalBtn = document.getElementById("payPalBtn");
let mySubmitBtn = document.getElementById("mySubmitBtn");
let subResult = document.getElementById("subResult");
let paymentResult = document.getElementById("paymentResult");

mySubmitBtn.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "you are subscribed";
    }
  else {
      subResult.textContent = "you are not subscribed";
    }
    if (visaBtn.checked) {
        paymentResult.textContent = "you are paying with visa";
    }
    else if (payPalBtn.checked) {
        paymentResult.textContent = "you are paying with payPal";
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = "you are paying with masterCard";
    } else {
        paymentResult.textContent = "payment Method not selected";
    }
};