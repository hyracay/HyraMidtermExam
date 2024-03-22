const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const modal = document.querySelector(".modal-overlay");


// get pics ng mga poke
const imgFrontDefaultLinkBase =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () =>
  header.classList.toggle("show-mobile-menu")
);

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  console.log(question);
  const btn = question.querySelector(".question-btn");
  //btn event
  btn.addEventListener("click", () => {
    //one question at a time
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    //show answer to question
    question.classList.toggle("show-text");
  });
});

const questions2 = document.querySelectorAll(".question2");
questions2.forEach((question2) => {
  console.log(question2);
  const btn = question2.querySelector(".question-btn2");
  //btn event
  btn.addEventListener("click", () => {
    //one question at a time
    questions2.forEach((item) => {
      if (item !== question2) {
        item.classList.remove("show-text");
      }
    });
    //show answer to question
    question2.classList.toggle("show-text");
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// alan jy poketypes

document.addEventListener("DOMContentLoaded", function () {
  if (location.pathname === "/A/synergy.html") {
    loadPokeTypes();
  }

  // palagi async for api requests
  // refer moo to: javascript async/await or javascript promises
  async function loadPokeTypes() {
    const res = await fetch("https://pokeapi.co/api/v2/type");
    if (res.ok) {
      const response = await res.json();
      const typesContainerEl =
        document.getElementsByClassName("types-icons")[0];
      response.results.forEach(function (typeObj) {
        const typeEl = document.createElement("div");
        typeEl.className = "typeLetters";
        typeEl.addEventListener("click", toggleModal);
        const typeName = typeObj.name.toLowerCase();
        let imgsString = `<a class="pokeTypeButton" id="${typeName}" data-url="${typeObj.url}">`;
        // loop to spell the poketype using images
        for (const letter of typeName) {
          imgsString += `<img src="src/key_${letter}.png">`;
        }
        imgsString += "</a>";
        typeEl.innerHTML = imgsString;
        typesContainerEl.appendChild(typeEl);
      });
    }
  }
});

function toggleModal(event) {
  const toClose = event.target.getAttribute("alt") === "close-modal-btn";
  if (toClose) {
    modal.classList.toggle("open-modal");
    return;
  }

  let clickedButton = null;
  if (event.target.tagName == "IMG") {
    clickedButton = event.target.parentNode;
  } else if (event.target.tagName == "A") {
    clickedButton = event.target;
  }

  const pokeTypeName = clickedButton.getAttribute("id");
  populateData(pokeTypeName);
}

async function populateData(pokeTypeName) {
  const title = document.querySelector(".cardTypeName");
  title.textContent = pokeTypeName.toUpperCase();

  const res = await fetch(`https://pokeapi.co/api/v2/type/${pokeTypeName}`);
  console.log(res.ok);
  if (res.ok) {
    const response = await res.json();
    console.log(response);
    modal.classList.toggle("open-modal");
    const modalContainer = document.querySelector(".modal-container");

    modalContainer.style.backgroundImage = `url(src/${pokeTypeName}.png)`;
    modalContainer.style.backgroundColor = "white";
    modalContainer.style.backgroundSize = "cover";
    modalContainer.style.backgroundRepeat = "no-repeat";
    modalContainer.style.backgroundPosition = "center";

    // EXAMPLES
    const exampleSection = document.querySelector(".pokeTypeExamples");
    exampleSection.innerHTML = "";
    const pokes = response.pokemon;
    shuffleArray(pokes).slice(0, 6).forEach(function (poke) {
      const name = poke.pokemon.name;
      const splitLink = poke.pokemon.url.split("/");
      const pokemonId = splitLink[splitLink.length - 2];
      const newExample = `<div class="examplePokemon"><img src="${imgFrontDefaultLinkBase}/${pokemonId}.png" alt="${name}"/><p>${name}</p></div>`;
      exampleSection.innerHTML += newExample;
    });

    // STATS
    const statsSection = document.querySelector(".pokeTypeStats");
    statsSection.innerHTML = "";
    const damageRelsKeys = Object.keys(response.damage_relations);
    damageRelsKeys.forEach(function (key) {
        const joinedNames = response.damage_relations[key]
        .map((damRel) => damRel.name)
        .join(", ");
      const content = `<h4>${key}:</h4> <p>${joinedNames}</p>`;
      statsSection.innerHTML += content;
    });
  }
}
