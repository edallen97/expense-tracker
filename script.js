// selectors
const addExpenseButton = document.querySelector('.addExpense')

// name
const nameInput = document.querySelector('.nameInput')
const nameSubmitButton = document.querySelector('.nameSubmit')
const nameDiv = document.querySelector('.nameOutput')

// amount
const amountInput = document.querySelector('.amountInput')
const amountSubmitButton = document.querySelector('.amountSubmit')
const amountDiv = document.querySelector('.amountOutput')

// date
const dateInput = document.querySelector('.dateInput')
const dateSubmitButton = document.querySelector('.dateSubmit')
const dateDiv = document.querySelector('.dateOutput')


// event listeners
//nameSubmitButton.addEventListener('click', addName)
//amountSubmitButton.addEventListener('click', addAmount)
//dateSubmitButton.addEventListener('click', addDate)

addExpenseButton.addEventListener('click', addExpense)

// functions

// adds name to div
function addExpense() {
   function addName() {
      // console.log(nameInput.value)
   const nameValue = document.createElement('ol');
   nameValue.innerText = nameInput.value;
   nameDiv.appendChild(nameValue);
   } 

   function addAmount() {
      // console.log(nameInput.value)
   const amountValue = document.createElement('ol');
   amountValue.innerText = amountInput.value;
   amountDiv.appendChild(amountValue);
   } 
   function addDate() {
      // console.log(nameInput.value)
   const dateValue = document.createElement('ol');
   dateValue.innerText = dateInput.value;
   dateDiv.appendChild(dateValue);
   } 
}
