    const input1 = document.getElementById('input1');
    const btn = document.querySelectorAll('#btn')

    // btn[i].addEventListener('click', () => { 

    for (let i=0; i<btn.length; i++) {
        btn[i].addEventListener('click', (e) => { 

            let one = e.target.innerText
            input1.append(one)

            if(e.target.innerHtml='enter'){
                input1.innerText=" "
            }
    })
    }
