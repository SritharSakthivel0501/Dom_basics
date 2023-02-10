const buttons = document.querySelectorAll("#btn")

for(let i=0;i<buttons.length;i++){

    function changeColor(){
        buttons[i].classList.toggle("change")
    }
    buttons[i].addEventListener("click",changeColor)

}

function kutty (){
    document.getElementsByTagName("h2").innerHTML="srikutty"
}

function srithar() {
    alert ("this thaim is....")
    document.getElementById("jathu").innerHTML = Date();
  }


  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


  document.getElementById("btnClick").addEventListener("click", clicked);
    function clicked()
    {
   		 alert("You clicked me!!!");
    }


    function password(input){
        let result = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/
        for (let i=0;i<input.length;i++){
          if(input.match(result)){
            alert("this is strong possword")
           return "this strong password"
          }
          else {
            alert("this is weak password")
            return "this is weak password"
          }
        }
      }
    
      function srikutty() {
        alert("plese enter passwerd!");
      }

let btn = document.querySelector('#deepak');

function thambi() {
    alert('my name deepak');
}

btn.addEventListener('click',thambi);





const form = document.getElementById('signup');
const form = document.getElementById('subscribe');
document.forms
document.forms[0]
const form  = document.getElementById('signup');

form.addEventListener('submit', (event) => {
 
  event.preventDefault();
});
form.elements[0]; // by index
form.elements['name']; // by name
form.elements['name']; // by id (name & id are the same in this case)

form.elements[1]; // by index
form.elements['email']; //  by name
form.elements['email']; // by id
const form = document.getElementById('signup');
const name = form.elements['name'];
const email = form.elements['email'];

// getting the element's value
let fullName = name.value;
let emailAddress = email.value;