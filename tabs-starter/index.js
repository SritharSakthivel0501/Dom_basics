// let btn = document.querySelectorAll('button')
// // console.log(btn);
// let history = document.getElementById('history')
// // console.log(history);
// let vision = document.getElementById('vision')
// // console.log(vision);
// let content = document.getElementById('content')
// // console.log(content);
// let aboutContent = document.querySelectorAll('.content')
// // console.log(aboutContent);


// for (let i=0; i<btn.length; i++) {
//     // console.log(btn[i]);
//     btn[i].addEventListener('click',function(e){
//         for (let j = 0 ; j<aboutContent.length; j++){
//             console.log(aboutContent[j]);
//             // aboutContent.classList.remove('active')
//         }
//         // aboutContent.classList.remove('active')
//         // console.log(e.target);
//         // console.log(e.target);

//         // if(e.target.classList.contains('history')){
//         //     // console.log(hii);
//         //     history.classList.toggle('play')
//         // }
//         // if(e.target.classList.contains('vision')){
//         //     // console.log(hii);
//         //     vision.classList.toggle('play')
//         // }

//     })
// }

let btns = document.querySelectorAll('button')
let content = document.querySelectorAll('.content')
// console.log(content);

for (let i =0; i<btns.length ; i++){
    // console.log(btns[i]);
    btns[i].addEventListener('click',function(e){
        // console.log(e.target);
        let id = e.target.dataset.id;
        // console.log(id);

        for(let i=0; i<content.length; i++){
            // console.log(content[i]);
            content[i].classList.remove('active')
        }
        // console.log(id);
        let element = document.getElementById(id)

    console.log(element);
        element.classList.add('active')
        for(let i=0; i<btns.length; i++) {
            btns[i].classList.remove('active')
        }
        btns[i].classList.add('active')

        })
    
   

    
}