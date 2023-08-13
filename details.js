// Function to validate the form
function validateForm(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Get the form element
    const form = document.getElementById('detailsForm');
  
    // Get all the input elements
    const fullNameInput = form.elements['fullName'];
    const mobileNumberInput = form.elements['mobileNumber'];
    const emailInput = form.elements['email'];
    const confirmEmailInput = form.elements['confirmEmail'];
  
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validation results
    let isValid = true;
    let errorMessage = '';
  
    // Validate full name (letters and spaces only)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(fullNameInput.value)) {
      isValid = false;
      errorMessage += 'Full name should contain letters and spaces only. ';
    }
  
    // Validate mobile number (only + and numbers allowed)
    const mobileRegex = /^[+0-9]+$/;
    if (!mobileRegex.test(mobileNumberInput.value)) {
      isValid = false;
      errorMessage += 'Mobile number should contain only numbers and + symbol. ';
    }
  
    // Validate email format
    if (!emailRegex.test(emailInput.value)) {
      isValid = false;
      errorMessage += 'Invalid email format. ';
    }
  
    // Check if email and confirm email fields match
    if (emailInput.value !== confirmEmailInput.value) {
      isValid = false;
      errorMessage += 'Email and Confirm Email should match. ';
    }
  
    // If the form is valid, submit the form to payment.html
    if (isValid) {
      form.submit();
    } else {
      // If there are validation errors, display the error message
      alert(errorMessage);
    }
  }
  
  // Function to check if all fields are filled and enable/disable the button accordingly
  function checkFields() {
    const form = document.getElementById('detailsForm');
    const fullNameInput = form.elements['fullName'];
    const mobileNumberInput = form.elements['mobileNumber'];
    const emailInput = form.elements['email'];
    const confirmEmailInput = form.elements['confirmEmail'];
    const submitButton = document.getElementById("button");
  
    // Check if all fields are filled
    const allFieldsFilled =
      fullNameInput.value.trim() !== '' &&
      mobileNumberInput.value.trim() !== '' &&
      emailInput.value.trim() !== '' &&
      confirmEmailInput.value.trim() !== '';
  
    // Enable or disable the button based on the allFieldsFilled flag
    submitButton.disabled = !allFieldsFilled;
  
    // Change button color based on disabled status
    submitButton.style.backgroundColor = allFieldsFilled ? '#171156' : '#DCDCDC';
    submitButton.style.cursor = allFieldsFilled ? 'pointer' : 'not-allowed';
  }
  
  // Add event listener to the button for validation
document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('button');
  submitButton.addEventListener('click', validateForm);

  // Add event listener to each input field to check for changes
  const inputFields = document.querySelectorAll('#detailsForm input');
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
  
  