let iList = document.querySelectorAll('button');
//console.log(iList)
let questionOne = document.getElementById('one');
 //console.log(questionOne)
let questionTwo = document.getElementById('two');
// console.log(two)
let questionThree = document.getElementById('three');
// console.log(questionThree)
let open =document.querySelector('#open')

let close =document.querySelector('#close')

for (let i =0 ; i<iList.length; i++){
    iList[i].addEventListener('click',(e) =>{
        console.log(e.target)
        if(e.target.classList.contains("one")){
            // open.style.display='none'
            // close.style.display='block'
        questionOne.classList.toggle("display")
        questionTwo.classList.remove("display")
        questionThree.classList.remove("display")
        
        }
        if(e.target.classList.contains("second")){
            questionOne.classList.remove("display")
            questionThree.classList.remove("display")
            questionTwo.classList.toggle("display")
        }
        if(e.target.classList.contains("third")){
            questionTwo.classList.remove("display")
            questionOne.classList.remove("display")
            questionThree.classList.toggle("display")
        }
        if(e.target.classList.contains("one1")){
            questionOne.classList.add("minus")
            questionTwo.classList.remove("minus")
            questionThree.classList.remove("minus")
        }
        
    })
}


const buttons = document.querySelectorAll("button")
const questions = document.querySelectorAll("article")

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(e){
     questions[i].classList.toggle("show-text")
     if(e.target.contains('show-text')){
        questions.classList.remove('show-text')
     }
    })
} 