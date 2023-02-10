const task = document.getElementById('add-task');
const Container = document.getElementById('task-container');
const input = document.getElementById('input-task')

task.addEventListener('click', function(){
    let tasks = document.createElement('div')
    tasks.classList.add('task');

    let li = document.createElement('li');
    li.innerText = input.value;
    tasks.appendChild(li)
    
    console.log(tasks)


let button1 = document.createElement('input')
    button1.classList.add('button1')
button1.type = 'checkBox'
tasks.appendChild(button1)

let button2 = document.createElement('button');
button2.innerHTML = 'NO'
button2.classList.add('button2') 
tasks.appendChild(button2)
console.log(button2)

if(input.value == ""){
    alert('thambi oluga paru ')
}
else {
    Container.appendChild(tasks)
}
input.value = ""

button1.addEventListener ('click', function(){
    button1.parentElement.style.textDecoration = "line-through"
    console.log(button1)
} )
button2.addEventListener('click', function(e){
    let target = e.target;
    target.parentElement.parentElement.remove();
});
})
