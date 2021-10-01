window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
  // Get the inputs from the DOM
  let loanAmount = document.getElementById("loan-amount");
  let term = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");
  
  // Put some default values in the inputs 
  if (loanAmount.value === "") {
    loanAmount.value = 0.00;
  }
  
  if (term.value === "") {
    term.value = 0;
  }
  
  if (rate.value === "") {
    rate.value = 0.00;
  }
  
  // Call a function to calculate the current monthly payment 
  values = {
    loanAmount: loanAmount.value,
    term: term.value,
    rate: rate.value,
  }
  let monthlyPayment = calculateMonthlyPayment(values);
  
  // Update Monthly Payment in the DOM 
  updateMonthly(monthlyPayment);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let loanAmount = document.getElementById("loan-amount");
  let term = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");
  
  let values = {
    loanAmount: loanAmount.value,
    term: term.value,
    rate: rate.value,
  }
  
  let monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // Get our variables 
  let periodicInterest = parseFloat(parseFloat(values.rate) / 12);
  let principle = parseFloat(values.loanAmount);
  let numPayments = parseFloat(values.term * 12);
  
  let monthlyPayment = 0;
  
  // Check for zero monthly payment 
  if (numPayments == 0 || principle == 0) {
    return monthlyPayment.toFixed(2).toString();
  }
  
  // Calculate monthly payment 
  let numerator = (principle * periodicInterest);
  let interestSum = 1 + periodicInterest;
  let exponent = Math.pow(interestSum, (-numPayments));
  let denominator = 1 - exponent;
  monthlyPayment = (numerator / denominator).toFixed(2);
  
  return monthlyPayment.toString();
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  // Get monthly payment element in the DOM
  let monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = monthly;
}
