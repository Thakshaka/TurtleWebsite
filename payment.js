// Function to validate the form
function validateForm(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Get the form element
    const form = document.getElementById('paymentForm'); // or const form = document.querySelector('form');
  
    // Get all the input elements
    const cardNumberInput = form.elements['cardNumber'];
    const expiryDateInput = form.elements['expiryDate'];
    const cvvInput = form.elements['cvv'];
    const nameOnCardInput = form.elements['nameOnCard'];
  
    // Regular expressions for validation
    const cardNumberRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3}$/;
  
    // Validation results
    let isValid = true;
    let errorMessage = '';
  
    // Validate card number
    if (!cardNumberRegex.test(cardNumberInput.value)) {
      isValid = false;
      errorMessage += 'Invalid card number. ';
    }
  
    // Validate expiry date
    if (!expiryDateRegex.test(expiryDateInput.value)) {
      isValid = false;
      errorMessage += 'Invalid expiry date. ';
    }
  
    // Validate CVV/CVC
    if (!cvvRegex.test(cvvInput.value)) {
      isValid = false;
      errorMessage += 'Invalid CVV/CVC. ';
    }
  
    // Validate name on card
    if (nameOnCardInput.value.trim() === '') {
      isValid = false;
      errorMessage += 'Name on card is required. ';
    }
  
    // If the form is valid, redirect to confirmation.html
    if (isValid) {
      form.submit();
    } else {
      // If there are validation errors, display the error message
      alert(errorMessage);
    }
  }
  
  // Function to check if all fields are filled and enable/disable the button accordingly
  function checkFields() {
    const form = document.getElementById('paymentForm');
    const cardNumberInput = form.elements['cardNumber'];
    const expiryDateInput = form.elements['expiryDate'];
    const cvvInput = form.elements['cvv'];
    const nameOnCardInput = form.elements['nameOnCard'];
    const submitButton = document.getElementById("button");
  
    // Check if all fields are filled
    const allFieldsFilled =
      cardNumberInput.value.trim() !== '' &&
      expiryDateInput.value.trim() !== '' &&
      cvvInput.value.trim() !== '' &&
      nameOnCardInput.value.trim() !== '';
  
    // Enable or disable the button based on the allFieldsFilled flag
    submitButton.disabled = !allFieldsFilled;
  
    // Change button color based on disabled status
    submitButton.style.backgroundColor = allFieldsFilled ? '#171156' : '#dcdcdc';
    submitButton.style.cursor = allFieldsFilled ? 'pointer' : 'not-allowed';
  }
  
  // Add event listener to the button for validation
document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('button');
  submitButton.addEventListener('click', validateForm);

  // Add event listener to each input field to check for changes
  const inputFields = document.querySelectorAll('#paymentForm input');
  inputFields.forEach((input) => {
    input.addEventListener('input', checkFields);
  });

  // Initially, check if all fields are filled to enable/disable the button
  checkFields();
});

  // Summary Table

const displayDate = document.getElementById("selected_date");
const startTime = document.getElementById("start_time");
const endTime = document.getElementById("end_time");
const normalCount = document.getElementById("normal_count");
const peakCount = document.getElementById("peak_count");
const duration = document.getElementById("duration");
const totalPayable = document.getElementById("total_payable");
const totalAmmount = document.getElementById("totalAmount");

if (localStorage.getItem("date") != null) {
  displayDate.innerText = localStorage.getItem("date");
}
else {
  displayDate.innerText = "Not Selected"
}


if (localStorage.getItem("startTime") != null && localStorage.getItem("endTime") != null) {
  startTime.innerText = localStorage.getItem("startTime") + ":00";
  endTime.innerText = localStorage.getItem("endTime") + ":00";
}
else {
  startTime.innerText = "Start Time";
  endTime.innerText = "End Time";
}

if (localStorage.getItem("duration") != null) {
  duration.innerText = localStorage.getItem("duration");
}
else {
  duration.innerText = "0";
}

normalCount.innerText = localStorage.getItem("normal_count");
peakCount.innerText = localStorage.getItem("peak_count");
totalPayable.innerText = localStorage.getItem("total_payable");
totalAmmount.innerText = localStorage.getItem("total_payable");

if (localStorage.getItem("sl_adult_total") != '0') {
  createRow("count1", "SL Adult", "sl_adult_total");
}

if (localStorage.getItem("sl_child_total") != '0') {
  createRow("count2", "SL Child", "sl_child_total");
}

if (localStorage.getItem("foreign_adult_total") != '0') {
  createRow("count3", "Foreign Adult", "foreign_adult_total");
}

if (localStorage.getItem("foreign_child_total") != '0') {
  createRow("count4", "Foreign Child", "foreign_child_total");
}

if (localStorage.getItem("infant_total") != '0') {
  createRow("count5", "Infant", "infant_total");
}

function createRow(count, guest_type, total) {
  var tr = document.createElement('tr');

  var td1_1 = tr.appendChild(document.createElement('td'));
  var td1_2 = tr.appendChild(document.createElement('td'));

  td1_1.innerHTML = localStorage.getItem(count) + " " + guest_type + " ($)";
  td1_2.innerHTML = localStorage.getItem(total);

  document.getElementById("summary_table_1").appendChild(tr);
}
  
  