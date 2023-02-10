let btn = document.querySelector("#submit")
// console.log(btn);
let input = document.querySelector('input')
// console.log(input);
let main_container = document.querySelector(".grocery-container")
// console.log(main_container);
let groceryList = document.querySelector('.grocery-list')

let alert = document.querySelector('.alert')

btn.addEventListener('click',function(e){
// let input = document.querySelector("input")

    // alert('hi')
    e.preventDefault()
    main_container.style.visibility = "visible"
    let li = document.createElement('li')
    li.innerText = input.value
    groceryList.append(li)

   let button1 = document.createElement('button')
   button1.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
   li.appendChild(button1)
   input.value = ''
   display_alert('item to added')
   button1.addEventListener('click',function(e){
    console.log(e.target);
    e.target.parentElement.parentElement.remove()
    display_alert('item removed')
   })
   
})

   

function display_alert(name){
    alert.innerText = name
    window.setTimeout(function(){
        alert.innerText = ""
    }, 1000)
}