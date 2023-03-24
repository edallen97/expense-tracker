// selectors
const nameInput = document.querySelector('.nameInput')
const nameSubmitButton = document.querySelector('.nameSubmit')
const nameDiv = document.querySelector('.nameOutput')

// event listeners
nameSubmitButton.addEventListener('click', test)

// functions
function test() {
   // console.log(nameInput.value)
   let nameValue = document.createElement('ol');
   nameValue.innerText = nameInput.ariaValueMax;
   nameDiv.appendChild(nameValue);

} 
