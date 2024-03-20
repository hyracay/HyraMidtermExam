const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

const questions= document.querySelectorAll('.question')
questions.forEach((question) => {
    console.log(question)
    const btn = question.querySelector('.question-btn')
    //btn event
    btn.addEventListener('click', () => {
        //one question at a time
        questions.forEach((item) => {
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        //show answer to question
        question.classList.toggle('show-text')
    })
})

const questions2= document.querySelectorAll('.question2')
questions2.forEach((question2) => {
    console.log(question2)
    const btn = question2.querySelector('.question-btn2')
    //btn event
    btn.addEventListener('click', () => {
        //one question at a time
        questions2.forEach((item) => {
            if(item !== question2){
                item.classList.remove('show-text')
            }
        })
        //show answer to question
        question2.classList.toggle('show-text')
    })
})

document.addEventListener("DOMContentLoaded", function() {
    if(location.pathname === '/A/synergy.html') {
        loadPokeTypes();
    }

    // always use async for api requests
    // refer to: javascript async/await or javascript promises
    async function loadPokeTypes()
    {
        const res = await fetch('https://pokeapi.co/api/v2/type');
        const response = await res.json();
        const typesContainerEl = document.getElementsByClassName('types-icons')[0];
        response.results.forEach(function (typeObj) {
            const typeEl = document.createElement('div');
            typeEl.className = 'typeLetters';
            let imgsString = '<a class="pokeTypeButton" onclick="buttonClicked()">';
            const typeName = typeObj.name.toLowerCase();
            for(const letter of typeName) {
                imgsString += `<img src="src/key_${letter}.png">`;
            }
            imgsString += '</a>'
            typeEl.innerHTML = imgsString;
            typesContainerEl.appendChild(typeEl);
        });

    }
});

function buttonClicked()
{
    alert('button clicked');
}

