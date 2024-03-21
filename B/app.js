const navtoggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navtoggle.addEventListener('click', () => {
    console.log(links.classList)
    console.log(links.classList.contains('links'))
//     if(links.classList.contains('show-links')){
//         links.classList.remove('show-links')
//     }else{
//         links.classList.add('show-links')
//    }
    links.classList.toggle('show-links')
})

// vis mis

var coll = document.getElementsByClassName("collapsible");
var i;

document.addEventListener("click", function(event) {
  for (i = 0; i < coll.length; i++) {
    coll[i].nextElementSibling.style.display = "none";
    coll[i].classList.remove("active");
  }
});

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(event) {
    event.stopPropagation();
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// faqs

// pakita na jay popup
function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.classList.toggle("show");
}

// close na nu nag click ka ulit
document.addEventListener("click", function(event) {
  var popups = document.querySelectorAll(".popuptext");
  for (var i = 0; i < popups.length; i++) {
    var popup = popups[i];
    if (event.target !== popup.previousElementSibling && !popup.contains(event.target)) {
      popup.classList.remove("show");
    }
  }
});

// temporary fix for popups above until may maisip na solusyon
document.querySelectorAll('.popup').forEach(item => {
  item.addEventListener('click', event => {
    event.stopPropagation();
    var popups = document.querySelectorAll(".popuptext");
    for (var i = 0; i < popups.length; i++) {
      var popup = popups[i];
      if (popup !== item.querySelector(".popuptext")) {
        popup.classList.remove("show");
      }
    }
  });
});

// menu items

const menu = [
    {
      id: 1,
      title: "Ducky Tinker 65 POM Edition",
      category: "keyboard",
      price: 129,
      img: "src/ducky1.jpg",
      desc: `65% Form Factor, Hotswappable to Any Mech switches, Kailh Box Cream Pro colorway`,
    },
    {
      id: 2,
      title: "Ducky One 3 Mini",
      category: "keyboard",
      price: 124,
      img: "src/ducky5.jpg",
      desc: `60% Form Factor, Cherry MX/ Kailh/ Gateron Switch Options, Hotswappable, Mist Grey colorway`,
    },
    {
      id: 3,
      title: "Ducky Outlaw 65",
      category: "keyboard",
      price: "SOLD OUT",
      img: "src/ducky7.jpg",
      desc: `65% Form Factor, Fully Customizable, Gun Metal colorway`,
    },
    {
      id: 4,
      title: "Keychron K4 PRO QMK/VIA",
      category: "keyboard",
      price: 150,
      img: "src/key1.webp",
      desc: `96% Form Factor, Wireless, K Pro Red/Blue/Brown Switch options`,
    },
    {
      id: 5,
      title: "Keychron Q12 QMK",
      category: "keyboard",
      price: 205,
      img: "src/k4.webp",
      desc: `96% Form Factor, Fully Assembled with Knob, Gateron G Pro Brown/Red Switch options, Southpaw`,
    },
    {
      id: 6,
      title: "GMMK Pro",
      category: "keyboard",
      price: 350,
      img: "src/gmmkpro1.webp",
      desc: `75% Form Factor, Fully Hotswappable, Fully Customizable, with Knob`,
    },
    {
      id: 7,
      title: "RoyalKludge RK61 Wireless Mechanical",
      category: "keyboard",
      price: 54,
      img: "src/rk1.webp",
      desc: `60% Form Factor, Wireless, Blue/Red/Brown Switch options, White/Black colorway`,
    },
    {
      id: 8,
      title: "RoyalKludge RK87 Wireless TKL",
      category: "keyboard",
      price: 59,
      img: "src/rk4.webp",
      desc: `Tenkeyless, Tactile Brown Switches, Wireless, Black/White colorway`,
    },
    {
      id: 9,
      title: "RoyalKludge RK920 Full Size Mechanical",
      category: "keyboard",
      price: 43,
      img: "src/rk7.webp",
      desc: `Full Size Form Factor, Blue/Brown/Red Switch options`,
    },
    {
      id: 10,
      title: "SteelSeries APEX PRO",
      category: "keyboard",
      price: 210,
      img: "src/ss1.png",
      desc: `Full Form Factor, World's Fastest Keyboard, Rapid Trigger, OLED Smart Display, Magnetic Wrist Rest, Omnipoint 2.0 Adjustable HyperMagnetic Switches`,
    },
    {
      id: 11,
      title: "SteelSeries APEX PRO TKL Wireless",
      category: "keyboard",
      price: 290,
      img: "src/ss3.png",
      desc: `Tenkeyless Form Factor, World's Fastest Keyboard, Rapid Trigger, Quantum 2.0 Wireless (Dual Channel), OLED Smart Display, Magnetic Wrist Rest, Omnipoint 2.0 Adjustable HyperMagnetic Switches`,
    },
    {
      id: 12,
      title: "SteelSeries APEX PRO Mini Wireless",
      category: "keyboard",
      price: 280,
      img: "src/ss5.png",
      desc: `60% Form Factor, World's Fastest Keyboard, Rapid Trigger, Quantum 2.0 Wireless (Dual Channel), OLED Smart Display, Magnetic Wrist Rest, Omnipoint 2.0 Adjustable HyperMagnetic Switches`,
    },
    {
      id: 13,
      title: "Denji Devil Form",
      category: "keycap",
      price: 5,
      img: "src/cm4.webp",
      desc: `Custom Resin Chainsaw Man Keycap`,
    },
    {
      id: 14,
      title: "Denji + Pochita",
      category: "keycap",
      price: 9,
      img: "src/cm5.webp",
      desc: `Custom Resin Chainsaw Man + Pochita Keycap Set`,
    },
    {
      id: 15,
      title: "Pochita",
      category: "keycap",
      price: 5,
      img: "src/cm3.webp",
      desc: `Custom Resin Pochita Keycap`,
    },
    {
      id: 16,
      title: "Denji + Power",
      category: "keycap",
      price: 9,
      img: "src/cm1.webp",
      desc: `Custom Resin Denji + Power Keycap Set`,
    },
    {
      id: 17,
      title: "Zenitsu",
      category: "keycap",
      price: 5,
      img: "src/dm5.jpg",
      desc: `Custom Resin Zenitsu Keycap`,
    },
    {
      id: 18,
      title: "Tanjiro Set",
      category: "keycap",
      price: 20,
      img: "src/dm1.avif",
      desc: `Full Tanjiro Keycap Set`,
    },
    {
      id: 19,
      title: "Water Tribe Keyboard",
      category: "custom keyboard",
      price: 50,
      img: "src/a4.jpg",
      desc: `Custom Built Avatar Water Tribe 65% Keyboard`,
    },
    {
      id: 20,
      title: "Appa",
      category: "keycap",
      price: 5,
      img: "src/a3.jpg",
      desc: `Avatar Appa Keycap`,
    },
    {
      id: 21,
      title: "Gojo Satoru",
      category: "keycap",
      price: 5,
      img: "src/11.webp",
      desc: `Gojo Blindfolded Keycap`,
    },
    {
      id: 22,
      title: "Kento Nanami",
      category: "keycap",
      price: 5,
      img: "src/12.webp",
      desc: `Custom Nanami Keycap`,
    },
    {
      id: 23,
      title: "Geto Suguru",
      category: "keycap",
      price: 5,
      img: "src/13.webp",
      desc: `Geto Suguru Stitches Keycap`,
    },
    {
      id: 24,
      title: "Itadori Yuji",
      category: "keycap",
      price: 5,
      img: "src/1.avif",
      desc: `Itadori Custom Keycap`,
    },
    {
      id: 25,
      title: "Sukuna Ryomen",
      category: "keycap",
      price: 5,
      img: "src/2.avif",
      desc: `Sukuna Tattoo Keycap`,
    },
    {
      id: 26,
      title: "Yuji + Satoru + Ryomen",
      category: "keycap",
      price: 14.99,
      img: "src/7.webp",
      desc: `Yuji + Satoru + Ryomen Set`,
    },
    {
      id: 27,
      title: "Avatar Fire Nation Custom Keyboard",
      category: "custom keyboard",
      price: 50,
      img: "src/a1.avif",
      desc: `Custom Built Avatar FIre Nation 65% Keyboard`,
    },
    {
      id: 28,
      title: "Nezuko",
      category: "keycap",
      price: 5,
      img: "src/dm3.avif",
      desc: `Demon Slayer Nezuko Keycap`,
    },
    {
      id: 29,
      title: "Tanjiro",
      category: "keycap",
      price: 5,
      img: "src/dm4.avif",
      desc: `Demon Slayer Tanjiro Keycap`,
    },
    {
      id: 30,
      title: "Zenitsu",
      category: "keycap",
      price: 5,
      img: "src/dm5.jpg",
      desc: `Demon Slayer Zenitsu Keycap`,
    },
    {
      id: 31,
      title: "Inosuke",
      category: "keycap",
      price: 5,
      img: "src/dm6.avif",
      desc: `Demon Slayer Inosuke Keycap`,
    },
    {
      id: 32,
      title: "Gojo Satoru Theme Keyboard Build",
      category: "custom keyboard",
      price: 50,
      img: "src/gs2.avif",
      desc: `Full Form Factor Gojo Satoru Keybaord`,
    },
    {
      id: 33,
      title: "Avatar MP Large",
      category: "mousepad",
      price: 15,
      img: "src/mousepad.avif",
      desc: `ATLA Gang Mousepad`,
    },
    {
      id: 34,
      title: "Avatar MP Small",
      category: "mousepad",
      price: 12,
      img: "src/mousepad2.avif",
      desc: `ATLA Gang Mousepad Small`,
    },
    {
      id: 35,
      title: "My Neighbor Totoro MP Large",
      category: "mousepad",
      price: 15,
      img: "src/mouse3.avif",
      desc: `Totoro Mousepad Minimalist Large`,
    },
    {
      id: 36,
      title: "My Neighbor Totoro MP Small",
      category: "mousepad",
      price: 13,
      img: "src/mouse4.jpg",
      desc: `Totoro Mousepad Minimalist Small`,
    },
    {
      id: 37,
      title: "Nezuko MP Large",
      category: "mousepad",
      price: 15,
      img: "src/mouse5.avif",
      desc: `Demon Slayer Nezuko Mousepad Large`,
    },
    {
      id: 38,
      title: "Nezuko MP Small",
      category: "mousepad",
      price: 13,
      img: "src/mouse6.jpg",
      desc: `Demon Slayer Nezuko Mousepad Small`,
    },
    {
      id: 39,
      title: "Appa MP Large",
      category: "mousepad",
      price: 15,
      img: "src/mouse7.avif",
      desc: `Pastel Theme with Appa Mousepad Large`,
    },
    {
      id: 40,
      title: "Appa MP Small",
      category: "mousepad",
      price: 13,
      img: "src/mouse8.avif",
      desc: `Pastel Theme with Appa Mousepad Small`,
    },
    {
      id: 41,
      title: "One Piece Theme Keycap Set",
      category: "keycap",
      price: 20,
      img: "src/op1.avif",
      desc: `One Piece Theme Keycap Set for TKL KB`,
    },
    {
      id: 42,
      title: "One Piece Theme Custom Built KB",
      category: "custom keyboard",
      price: 50,
      img: "src/op2.avif",
      desc: `One Piece Theme Tenkeyless Custom Keyboard`,
    },
    
  ];

  const sectionCenter = document.querySelector('.section-center')
  const container = document.querySelector('.btn-container')
  
    window.addEventListener('DOMContentLoaded', () => {
      displayMenuItems(menu)
      displayMenuButtons()
  })
  
    displayMenuItems = (menuItems) => {
      let displayMenu = menuItems.map((item) => {
          return `<article class="menu-item">
          <img src="${item.img}" alt="${item.title}" class="photo">
          <div class="item-info">
              <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                  ${item.desc}
              </p>
          </div>
      </article>`
      }).join("")
      sectionCenter.innerHTML = displayMenu
    }
  
    displayMenuButtons = () => {
      const categories = menu.reduce(() => {
          let unique = []
          unique.push('all')
          menu.forEach((item) => {
              if(!unique.includes(item.category)){
                  unique.push(item.category)
              }
              
          })
          return unique
      })
      console.log(categories)
      const displayBtn = categories.map((category) => {
          return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
      }).join("")
      console.log(displayBtn)
  
      container.innerHTML = displayBtn
      const filterBtns = document.querySelectorAll('.filter-btn')
      filterBtns.forEach((btn) => {
          btn.addEventListener('click', (e) => {
              const category = e.currentTarget.dataset.id
              console.log(category)
              const menuCategory =
              menu.filter((menuItems) =>{
                  if(menuItems.category ===category) {
                      return menuItems
                  }
              }) 
              if(category === 'all'){
                  displayMenuItems(menu)
              }
              else{
                  displayMenuItems(menuCategory)
              }
          })
      })
    }