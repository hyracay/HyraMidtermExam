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