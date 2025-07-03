// Add event on element
const addEventonelem = function(elem, type, callback){
  if(elem.length > 1){
    elem.forEach((element) => {
      element.addEventListener(type, callback);
    });
  }else{
    elem.addEventListener(type, callback);
  }
} 

// navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navtogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toogleNavbar = function(){
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
} 
addEventonelem(navtogglers, "click", toogleNavbar);

// active header when window scroll down to 100px
const header = document.querySelector("[data-header]");
const activeElemonScroll = function(){
  if(window.scrollY > 100){
    header.classList.add('active');
  }else{
    header.classList.remove("active");
  }
}
addEventonelem(window, "scroll", activeElemonScroll);

const Promos = [
  {
    icon_name: "<ion-icon name='share-social-outline' aria-hidden='true'></ion-icon>",
    card_title: "Best Trading Platform",
    card_text: "Cryptocurrency does not exist in physical form like paper money and is typically not issued by a central authority."
  },{
    icon_name: "<ion-icon name='pricetags-outline' aria-hidden='true'></ion-icon>",
    card_title: "Transparent Pricing",
    card_text: "Cryptocurrency does not exist in physical form like paper money and is typically not issued by a central authority."
  },{
    icon_name: "<ion-icon name='shield-checkmark-outline' aria-hidden='true'></ion-icon>",
    card_title: "Trusted Security",
    card_text: "Cryptocurrency does not exist in physical form like paper money and is typically not issued by a central authority."
  }
];  

const promoGridList = document.querySelector(".grid-list");
let promoData = '';

function generatePromoData(){
  Promos.forEach((promo) => {
    promoData += `<li>
      <div class="promo-card bg-gray">
        <div class="card-icon">
          ${promo.icon_name}
        </div>
  
        <h3 class="h3 card-title">${promo.card_title}</h3>
  
        <p class="card-text">
          ${promo.card_text}
        </p>
  
        <a href="#" class="btn-link">
          <span class="span">Explore More</span>
  
          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </li>`;
  });
  return promoData;
}
promoGridList.innerHTML = generatePromoData();