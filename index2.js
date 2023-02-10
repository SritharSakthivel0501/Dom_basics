const button = document.getElementById('new-quote');
const paiyan = document.querySelector('.person');
const kathai = document.querySelector('.quote');

const quotes = [{
        quote: `The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson`,
        person: `Mandela`
    },{
        quote: `The way to get started is to quit talking and begin doing.`,
        person: `Walt Disney`
    },{
        quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma`,
        person: `Steve Jobs`
    },{
        quote: `If life were predictable it would cease to be life, and be without flavor`,
        person: `Eleanor Roosevelt`
    },{
        quote: `Life is what happens when you're busy making other plans`,
        person: `John Lennon`
    },{
        quote: `Spread love everywhere you go. Let no one ever come to you without leaving happier`,
        person: `Mother Teresa`
    },{
        quote: `When you reach the end of your rope, tie a knot in it and hang on.`,
        person: `D. Roosevelt`
    },{
        quote: `Always remember that you are absolutely unique. Just like everyone else`,
        person: `Margaret Mead`
    },{
        quote: `The future belongs to those who believe in the beauty of their dreams`,
        person: `Eleanor Roosevelt`
    },{
        quote: `It is during our darkest moments that we must focus to see the light.`,
        person: `Aristotle`
    },{
        quote: `Whoever is happy will make others happy too`,
        person: `Anne Frank`
    },];

    button.addEventListener('click', function(){

        let random = Math.floor(Math.random() * quotes.length);
    
        kathai.innerText = quotes[random].quote;
        paiyan.innerText = quotes[random].person;
    
    })  

    // const h2 = document.querySelector("#heading")