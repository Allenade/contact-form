const form = document.getElementById('form')
const firstname  = document.querySelector('fname');
const lastName = document.querySelector('lname');
const email = document.querySelector('email');
const password = document.querySelector('password')
const formControl = document.querySelectorAll('.border-control')

form.addEventListener('submit', (e) => {
    e.preventDefault();
  const lastName = e.target['lname'].value;
const firstName = e.target['fname'].value;
const email = e.target['email'].value;
const password = e.target['password'].value;

let inputValue = document.forms['contact-form'] ['fname', 'lname', 'email'] .value
if(inputValue === ""){

console.log(inputValue)

} else {
 
}



});




