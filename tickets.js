// Date
const dateInput = document.getElementById("dateInput");
const displayDate = document.getElementById("selected_date");

dateInput.addEventListener("change", ()=>{
  displayDate.innerText = dateInput.value;
  localStorage.setItem("date", dateInput.value);
});

// Counter

localStorage.setItem("normal_count", 0);
localStorage.setItem("peak_count", 0);

localStorage.setItem("sl_adult_total", 0);
localStorage.setItem("sl_child_total", 0);
localStorage.setItem("foreign_adult_total", 0);
localStorage.setItem("foreign_child_total", 0);
localStorage.setItem("infant_total", 0);
localStorage.setItem("total_payable", 0);
localStorage.setItem("count1", 0);
localStorage.setItem("count2", 0);
localStorage.setItem("count3", 0);
localStorage.setItem("count4", 0);
localStorage.setItem("count5", 0);

// Counter 1

const plus1 = document.getElementById("plus1");
const minus1 = document.getElementById("minus1");
const num1 = document.getElementById("num1");

let a = 0;

plus1.addEventListener("click", ()=>{
  a++;
  a = (a < 10) ? a : a;
  num1.innerText = a;
  
  if (a==1) {
    var tr1 = document.createElement('tr');
    tr1.id = "tr1";

    var td1_1 = tr1.appendChild(document.createElement('td'));
    var td1_2 = tr1.appendChild(document.createElement('td'));

    td1_1.innerHTML = a + " SL Adult ($)";
    td1_2.innerHTML = get_i_total(a,4,6); localStorage.setItem("sl_adult_total", get_i_total(a,4,6));
    td1_1.id = "td1_1";
    td1_2.id = "td1_2";

    document.getElementById('summary_table_1').appendChild(tr1);
  }

  else {
    var td1_1 = document.getElementById('td1_1');
    var td1_2 = document.getElementById('td1_2');
    td1_1.innerHTML = a + " SL Adult ($)";
    td1_2.innerHTML = get_i_total(a,4,6); localStorage.setItem("sl_adult_total", get_i_total(a,4,6));
  }
  
  localStorage.setItem("count1", a);
  set_total();
});

minus1.addEventListener("click", ()=>{
  if(a > 0){
    a--;
    a = (a < 10) ? a : a;
    num1.innerText = a;

    if (a==0) {
      var select_tr1 = document.getElementById('tr1');
      select_tr1.parentNode.removeChild(select_tr1);
      localStorage.setItem("sl_adult_total", get_i_total(a,4,6));
    }

    else {
      var td1_1 = document.getElementById('td1_1');
      var td1_2 = document.getElementById('td1_2');
      td1_1.innerHTML = a + " SL Adult ($)";
      td1_2.innerHTML = get_i_total(a,4,6); localStorage.setItem("sl_adult_total", get_i_total(a,4,6));
    }

    localStorage.setItem("count1", a);
    set_total();
  }
});

// Counter 2

const plus2 = document.getElementById("plus2");
const minus2 = document.getElementById("minus2");
const num2 = document.getElementById("num2");

let b = 0;

plus2.addEventListener("click", ()=>{
  b++;
  b = (b < 10) ? b : b;
  num2.innerText = b;

  if (b==1) {
    var tr2 = document.createElement('tr');
    tr2.id = "tr2";

    var td2_1 = tr2.appendChild(document.createElement('td'));
    var td2_2 = tr2.appendChild(document.createElement('td'));

    td2_1.innerHTML = b + " SL Child ($)";
    td2_2.innerHTML = get_i_total(b,2,3); localStorage.setItem("sl_child_total", get_i_total(b,2,3));
    td2_1.id = "td2_1";
    td2_2.id = "td2_2";

    document.getElementById('summary_table_1').appendChild(tr2);
  }

  else {
    var td2_1 = document.getElementById('td2_1');
    var td2_2 = document.getElementById('td2_2');
    td2_1.innerHTML = b + " SL Child ($)";
    td2_2.innerHTML = get_i_total(b,2,3); localStorage.setItem("sl_child_total", get_i_total(b,2,3));
  }

  localStorage.setItem("count2", b);
  set_total();
});

minus2.addEventListener("click", ()=>{
  if(b > 0){
    b--;
    b = (b < 10) ? b : b;
    num2.innerText = b;

    if (b==0) {
      var select_tr2 = document.getElementById('tr2');
      select_tr2.parentNode.removeChild(select_tr2);
      localStorage.setItem("sl_child_total", get_i_total(b,2,3));
    }

    else {
      var td2_1 = document.getElementById('td2_1');
      var td2_2 = document.getElementById('td2_2');
      td2_1.innerHTML = b + " SL Child ($)";
      td2_2.innerHTML = get_i_total(b,2,3); localStorage.setItem("sl_child_total", get_i_total(b,2,3));
    }

    localStorage.setItem("count2", b);
    set_total();
  }
});

// Counter 3

const plus3 = document.getElementById("plus3");
const minus3 = document.getElementById("minus3");
const num3 = document.getElementById("num3");

let c = 0;

plus3.addEventListener("click", ()=>{
  c++;
  c = (c < 10) ? c : c;
  num3.innerText = c;

  if (c==1) {
    var tr3 = document.createElement('tr');
    tr3.id = "tr3";

    var td3_1 = tr3.appendChild(document.createElement('td'));
    var td3_2 = tr3.appendChild(document.createElement('td'));

    td3_1.innerHTML = c + " Foreign Adult ($)";
    td3_2.innerHTML = get_i_total(c,10,13); localStorage.setItem("foreign_adult_total", get_i_total(c,10,13));
    td3_1.id = "td3_1";
    td3_2.id = "td3_2";

    document.getElementById('summary_table_1').appendChild(tr3);
  }

  else {
    var td3_1 = document.getElementById('td3_1');
    var td3_2 = document.getElementById('td3_2');
    td3_1.innerHTML = c + " Foreign Adult ($)";
    td3_2.innerHTML = get_i_total(c,10,13); localStorage.setItem("foreign_adult_total", get_i_total(c,10,13));
  }

  localStorage.setItem("count3", c);
  set_total();
});

minus3.addEventListener("click", ()=>{
  if(c > 0){
    c--;
    c = (c < 10) ? c : c;
    num3.innerText = c;

    if (c==0) {
      var select_tr3 = document.getElementById('tr3');
      select_tr3.parentNode.removeChild(select_tr3);
      localStorage.setItem("foreign_adult_total", get_i_total(c,10,13));
    }

    else {
      var td3_1 = document.getElementById('td3_1');
      var td3_2 = document.getElementById('td3_2');
      td3_1.innerHTML = c + " Foreign Adult ($)";
      td3_2.innerHTML = get_i_total(c,10,13); localStorage.setItem("foreign_adult_total", get_i_total(c,10,13));
    }

    localStorage.setItem("count3", c);
    set_total();
  }
});

// Counter 4

const plus4 = document.getElementById("plus4");
const minus4 = document.getElementById("minus4");
const num4 = document.getElementById("num4");

let d = 0;

plus4.addEventListener("click", ()=>{
  d++;
  d = (d < 10) ? d : d;
  num4.innerText = d;

  if (d==1) {
    var tr4 = document.createElement('tr');
    tr4.id = "tr4";

    var td4_1 = tr4.appendChild(document.createElement('td'));
    var td4_2 = tr4.appendChild(document.createElement('td'));

    td4_1.innerHTML = d + " Foreign Child ($)";
    td4_2.innerHTML = get_i_total(d,5,8); localStorage.setItem("foreign_child_total", get_i_total(d,5,8));
    td4_1.id = "td4_1";
    td4_2.id = "td4_2";

    document.getElementById('summary_table_1').appendChild(tr4);
  }

  else {
    var td4_1 = document.getElementById('td4_1');
    var td4_2 = document.getElementById('td4_2');
    td4_1.innerHTML = d + " Foreign Child ($)";
    td4_2.innerHTML = get_i_total(d,5,8); localStorage.setItem("foreign_child_total", get_i_total(d,5,8));;
  }

  localStorage.setItem("count4", d);
  set_total();
});

minus4.addEventListener("click", ()=>{
  if(d > 0){
    d--;
    d = (d < 10) ? d : d;
    num4.innerText = d;

    if (d==0) {
      var select_tr4 = document.getElementById('tr4');
      select_tr4.parentNode.removeChild(select_tr4);
      localStorage.setItem("foreign_child_total", get_i_total(d,5,8));
    }

    else {
    var td4_1 = document.getElementById('td4_1');
    var td4_2 = document.getElementById('td4_2');
    td4_1.innerHTML = d + " Foreign Child ($)"
    td4_2.innerHTML = get_i_total(d,5,8); localStorage.setItem("foreign_child_total", get_i_total(d,5,8));;
    }

    localStorage.setItem("count4", d);
    set_total();
  }
});

// Counter 5

const plus5 = document.getElementById("plus5");
const minus5 = document.getElementById("minus5");
const num5 = document.getElementById("num5");

let f = 0;

plus5.addEventListener("click", ()=>{
  f++;
  f = (f < 10) ? f : f;
  num5.innerText = f;

  if (f==1) {
    var tr5 = document.createElement('tr');
    tr5.id = "tr5";

    var td5_1 = tr5.appendChild(document.createElement('td'));
    var td5_2 = tr5.appendChild(document.createElement('td'));

    td5_1.innerHTML = f + " Infant ($)";
    td5_2.innerHTML = get_i_total(f,0,0); localStorage.setItem("infant_total", get_i_total(f,0,0));
    td5_1.id = "td5_1";
    td5_2.id = "td5_2";

    document.getElementById('summary_table_1').appendChild(tr5);
  }

  else {
    var td5_1 = document.getElementById('td5_1');
    var td5_2 = document.getElementById('td5_2');
    td5_1.innerHTML = f + " Infant ($)";
    td5_2.innerHTML = get_i_total(f,0,0); localStorage.setItem("infant_total", get_i_total(f,0,0));
  }

  localStorage.setItem("count5", f);
  set_total();
});

minus5.addEventListener("click", ()=>{
  if(f > 0){
    f--;
    f = (f < 10) ? f : f;
    num5.innerText = f;

    if (f==0) {
      var select_tr5 = document.getElementById('tr5');
      select_tr5.parentNode.removeChild(select_tr5);
      localStorage.setItem("infant_total", get_i_total(f,0,0));
    }

    else {
    var td5_1 = document.getElementById('td5_1');
    var td5_2 = document.getElementById('td5_2');
    td5_1.innerHTML = f + " Infant ($)";
    td5_2.innerHTML = get_i_total(f,0,0); localStorage.setItem("infant_total", get_i_total(f,0,0));
    }

    localStorage.setItem("count5", f);
    set_total();
  }
});

// Dropdown

const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");

const select_start_time = document.getElementById("start_time");
const select_end_time = document.getElementById("end_time");

const select_normal_count = document.getElementById("normal_count");
const select_peak_count = document.getElementById("peak_count");

const select_duration = document.getElementById("duration");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked");
    let btnText = document.querySelector(".btn-text");

    let selectedTimes = [];
    let normal_array = [];
    let peak_array = [];
    let startTime = 7;
    let endTime = 8;
    let normal_array_length = 1;
    let peak_array_length = 0;
    let duration;

    checked.forEach((checkedItem) => {
      const selected_checkbox_id = checkedItem.querySelector(".item-text").id
      if (selected_checkbox_id == "normal_1") {
        selectedTimes.push(7);
        selectedTimes.push(8);
        normal_array.push('n');
      }
      if (selected_checkbox_id == "normal_2") {
        selectedTimes.push(8);
        selectedTimes.push(9);
        normal_array.push('n');
      }
      if (selected_checkbox_id == "normal_3") {
        selectedTimes.push(9);
        selectedTimes.push(10);
        normal_array.push('n');
      }
      if (selected_checkbox_id == "peak_1") {
        selectedTimes.push(10);
        selectedTimes.push(11);
        peak_array.push('p');
      }
      if (selected_checkbox_id == "peak_2") {
        selectedTimes.push(11);
        selectedTimes.push(12);
        peak_array.push('p');
      }
      if (selected_checkbox_id == "peak_3") {
        selectedTimes.push(12);
        selectedTimes.push(13);
        peak_array.push('p');
      }
      if (selected_checkbox_id == "normal_4") {
        selectedTimes.push(13);
        selectedTimes.push(14);
        normal_array.push('n');
      }
      if (selected_checkbox_id == "normal_5") {
        selectedTimes.push(14);
        selectedTimes.push(15);
        normal_array.push('n');
      }
      if (selected_checkbox_id == "peak_4") {
        selectedTimes.push(15);
        selectedTimes.push(16);
        peak_array.push('p');
      }
      if (selected_checkbox_id == "peak_5") {
        selectedTimes.push(16);
        selectedTimes.push(17);
        peak_array.push('p');
      }
      if (selected_checkbox_id == "peak_6") {
        selectedTimes.push(17);
        selectedTimes.push(18);
        peak_array.push('p');
      }
      startTime = Math.min(...selectedTimes);
      endTime = Math.max(...selectedTimes);
      normal_array_length = normal_array.length;
      peak_array_length = peak_array.length;

    });

    // Store the array in local storage
    localStorage.setItem("selected_times", JSON.stringify(selectedTimes));
    localStorage.setItem("startTime", startTime);
    localStorage.setItem("endTime", endTime);
    localStorage.setItem("normal_count", normal_array_length);
    localStorage.setItem("peak_count", peak_array_length);

    select_start_time.innerText = startTime + ":00";
    select_end_time.innerText = endTime + ":00";

    select_normal_count.innerText = normal_array_length;
    select_peak_count.innerText = peak_array_length;

    duration = normal_array_length + peak_array_length;
    select_duration.innerText = duration;
    localStorage.setItem("duration", duration);

    try {
      td1_2.innerHTML = get_i_total(a,4,6); localStorage.setItem("sl_adult_total", get_i_total(a,4,6));
    }

    catch (error) {
      //console.log(error);
    }

    try {
      td2_2.innerHTML = get_i_total(b,2,3); localStorage.setItem("sl_child_total", get_i_total(b,2,3));
    }

    catch (error) {
      // console.log(error);
    }

    try {
      td3_2.innerHTML = get_i_total(c,10,13); localStorage.setItem("foreign_adult_total", get_i_total(c,10,13));
    }

    catch (error) {
      // console.log(error);
    }

    try {
      td4_2.innerHTML = get_i_total(d,5,8); localStorage.setItem("foreign_child_total", get_i_total(d,5,8));
    }

    catch (error) {
      // console.log(error);
    }

    try {
      td5_2.innerHTML = get_i_total(f,0,0); localStorage.setItem("infant_total", get_i_total(f,0,0));
    }

    catch (error) {
      // console.log(error);
    }

    set_total();
    

    if (checked && checked.length > 0) {
      btnText.innerText = `${checked.length} Selected`;
    } else {
      btnText.innerText = "Select Time Slot";
    }
  });
});

function get_i_total(x, y, z) {
  return x*parseFloat(localStorage.getItem("normal_count"))*y + x*parseFloat(localStorage.getItem("peak_count"))*z;
} 

const select_total_payable = document.getElementById("total_payable");

function set_total() {
  const totalPayable = parseFloat(localStorage.getItem("sl_adult_total")) + parseFloat(localStorage.getItem("sl_child_total")) + parseFloat(localStorage.getItem("foreign_adult_total")) + parseFloat(localStorage.getItem("foreign_child_total")) + parseFloat(localStorage.getItem("infant_total"));

  localStorage.setItem("total_payable", totalPayable);
  select_total_payable.innerText = totalPayable;
}

// Function to validate the form
function validateForm(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form element
  const form = document.getElementById('tickets_form');

  // Get all the input elements
  const selectedDate = form.elements['dateInput'];

  // Validation results
  let isValid = true;
  let errorMessage = '';

  if (selectedDate.value == '') {
    isValid = false;
    errorMessage += ' Select a date ';
    // If there are validation errors, display the error message
    alert(errorMessage);
  }

  else if (localStorage.getItem('count1') == '0' && localStorage.getItem('count2') == '0' && localStorage.getItem('count3') == '0' && localStorage.getItem('count4') == '0' && localStorage.getItem('count5') == '0') {
    isValid = false;
    errorMessage += ' Select guest type';
    // If there are validation errors, display the error message
    alert(errorMessage);
  }

  else if (localStorage.getItem('normal_count') == '0' && localStorage.getItem('peak_count') == '0') {
    isValid = false;
    errorMessage += ' Select duration ';
    // If there are validation errors, display the error message
    alert(errorMessage);
  }

  // If the form is valid, submit the form to payment.html
  else if (isValid) {
    form.submit();
  }
}

// Add event listener to the button for validation
document.addEventListener('DOMContentLoaded', function () {
const submitButton = document.getElementById('button');
submitButton.addEventListener('click', validateForm);
});



