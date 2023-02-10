// document object....

// console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title)
// document.title = 'srithar';
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

// document.getElementById...

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle)
// headerTitle.textContent = "hello"
// headerTitle.innerText = 'good boys'
// headerTitle.innerHTML = '<h3>srithar </h3>'
// headerTitle.style.borderBottom = "solid 2px #000"

// getElementsByClassName...

// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'hello';
// items[1].style.fontWeight = "bold"
// items[1].style.backgroundColor = "yellow"

// for (let i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// getElementsByTagName...

// var li = document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1])
// li[1].textContent = 'hello';
// li[1].style.fontWeight = "bold"
// li[1].style.backgroundColor = "yellow"

// for (let i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

// querySelector...

// var header = document.querySelector('#main-header');
// header.style.borderBotton = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello';
// console.log(input)

// var sumbit = document.querySelector('input[type="submit"]');
// sumbit.value = 'send'

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lostitem = document.querySelector('.list-group-item:last-child');
// lostitem.style.color = "blue"

// var seconitem = document.querySelector('.list-group-item:nth-child(2)');
// seconitem.style.color = "pink"

// querySelectorAll...

// var titles = document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent = 'hello'

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (let i =0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }

// TRAVERSING THE DOM...

// var itemlist = document.querySelector('#items');

//parentNode...
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode)

// parentElement...

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement) 

// childNode...

// console.log(itemlist.childNodes)
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.backgroundColor = 'yellow'

// // fastChild...

// console.log(itemlist.firstChild)

// // firstElementChild...

// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent = 'hello'

// // lastElementChild...

// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent = 'hello2'

// nextSibling...

// console.log(itemlist.nextSibling)

// // nextElementSibling...

// console.log(itemlist.nextElementSibling)

// previousSibling...

// console.log(itemlist.previousSibling)

// // parentElementSibling...

// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color = 'green'

// createElement...

// var newDiv = document.createElement('div');
// //add class
// newDiv.className = 'className'
// newDiv.id = 'class'
// newDiv.setAttribute = ('title', 'hello')
// newDivText = document.createTextNode('welcome')
// newDiv.appendChild(newDivText)

// var container = document.querySelector('.title');
// var h1 = document.querySelector('from')

// // console.log(newDiv)

// container.insertBefore(newDiv,h1)

//events

// var button = document.getElementById('button')
// document.addEventListener('click' , buttonClick)



// function buttonClick (e){
    // console.log('buttonClick')
    // document.getElementById('header-title').textContent = "sri"
    // document.getElementById('main').style.backgroundColor = '#f4f4f4'
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.calsslist);
// console.log(e.type);
// console.log(e.clientX);
// console.log(e.offsetX);
// console.log(e.offsetY);
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

// var button = document.getElementById('button')
// document.addEventListener('click' , eventClick)
// function eventClick(){
//     console.log('event type : '+eventClick.type);
// }