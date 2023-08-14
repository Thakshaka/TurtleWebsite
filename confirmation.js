// Summary Table

const fullName = document.getElementById("selected_fullName");
const emailInput = document.getElementById("selected_email");
const mobileNumberInput = document.getElementById("selected_mobile_number");
const displayDate = document.getElementById("selected_date");
const startTime = document.getElementById("start_time");
const endTime = document.getElementById("end_time");
const normalCount = document.getElementById("normal_count");
const peakCount = document.getElementById("peak_count");
const duration = document.getElementById("duration");
const totalPayable = document.getElementById("total_payable");

fullName.innerText = localStorage.getItem("fullNameInput");
emailInput.innerText = localStorage.getItem("emailInput");
mobileNumberInput.innerText = localStorage.getItem("mobileNumberInput");

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
  
  