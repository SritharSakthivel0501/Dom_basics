// let button = document.getElementById('button')
// let modaloverlay = document.getElementById('modal')
// let closebtn = document.getElementById('btn')


// button.addEventListener('click',()=>{
//     modaloverlay.classList.add("show_display")
// });
// closebtn.addEventListener('click',()=>{
//     modaloverlay.classList.remove("show_display")
// })

let btn =  document.getElementById("button")
console.log(btn);
let modaloverlay = document.getElementById("modal")
console.log(modaloverlay);
let closebtn = document.getElementById("btn")
console.log(closebtn);

button.addEventListener("click", function(){
    modaloverlay.classList.toggle("show_display")
})
closebtn.addEventListener("click", () =>{
    modaloverlay.classList.remove("show_display")
})