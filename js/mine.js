// show window loading

setTimeout(() => {
  document.getElementById("show").style.display = "block";
  document.getElementById("big_video").style.display = "none";
}, 3500);

// open & close menu

let Ul = document.querySelector(".ul");
function openMenu() {
  Ul.classList.toggle("active");
}
function closeMenu() {
  Ul.classList.remove("active");
}

// open cart
let cart = document.querySelector(".cart");
function openCart() {
  cart.classList.add("active");
}

// close cart
function closeCart() {
  cart.classList.remove("active");
}

// show header
let showHeader = 0;
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > showHeader) {
    header.style.top = "-700px";
  } else {
    header.style.top = "0";
  }
  showHeader = scrollTop;
});

// addToCard

let all_product_json;
let item_in_cart = document.querySelector(".item-in-cart");
let item_product = [];

function addToCard(id, btn) {
  item_product.push(all_product_json[id]);
  btn.classList.add("active");
  // increase the number of card
  updateCount(1);

  getCardItem();
}

fetch("js/items.json")
    .then(response => response.json())
    .then(data =>{
        const swiper_items_sale = document.getElementById("swiper_items_sale");
        const other_product_swiper = document.getElementById("other_product_swiper");
        const other_product_swiper2 = document.getElementById("other_product_swiper2");
        all_product_json =data

        data.forEach( product => {
            if(product.old_price){
                const percentDiscount = Math.floor((product.old_price - product.price) / product.old_price * 100)  
                swiper_items_sale.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick="addToCard(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <span class="sale-present">%${percentDiscount}</span>
                    <div class="img-product">
                        <img src="${product.img}" alt="">
                        <img class="img-hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name-product"><a href="">Lorem ipsum dolor sit  </a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old-price" >$${product.old_price}</p>
                    </div>
                </div>
                `
            }
        })

        data.forEach( product => {

                other_product_swiper.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick="addToCard(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <div class="img-product">
                        <img src="${product.img}" alt="">
                        <img class="img-hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name-product"><a href="">Lorem ipsum dolor sit  </a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old-price" >$${product.old_price}</p>
                    </div>
                </div>
                `
        })

        data.forEach( product => {

            other_product_swiper2.innerHTML += `
            <div class="product swiper-slide">
                <div class="icons">
                    <span><i onclick="addToCard(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>
                <div class="img-product">
                    <img src="${product.img}" alt="">
                    <img class="img-hover" src="${product.img_hover}" alt="">
                </div>
                <h3 class="name-product"><a href="">Lorem ipsum dolor sit  </a></h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                    <p class="old-price" >$${product.old_price}</p>
                </div>
            </div>
            `

    })

    })


// update price of card
let cart_count_top = document.querySelector(".cart_count_top");
let priceCart = document.querySelector(".price-cart");
let priceCartTotal = document.querySelector(".price-cart-total");
function getCardItem() {
  let totalPrice = 0;
  let totalPriceEnd = 0;
  let item_c = "";
  for (let i = 0; i < item_product.length; i++) {
    item_c += `
                <div class="item-cart">
            <img src="${item_product[i].img}" alt="">
            <div class="content">
                <h4>${item_product[i].name}</h4>
                <p class="price-cart" >${item_product[i].price}</p>
            </div>
            <button onclick="removeFromCart(${i})" class="delete-item" >
                <i  class="fa-solid fa-trash-can"></i>
            </button>
        </div>
        `;
    totalPrice += item_product[i].price;
    totalPriceEnd += item_product[i].price;
  }
  item_in_cart.innerHTML = item_c;
  priceCart.innerHTML = totalPrice + "$";
  priceCartTotal.innerHTML = totalPriceEnd + "$";
  cart_count_top.innerHTML = item_product.length + "  " + "item in card";
}

// remove from cart

function removeFromCart(index) {
  item_product.splice(index, 1);
  getCardItem();
  let cartButton = document.querySelectorAll(".fa-cart-plus");
  for (let i = 0; i < cartButton.length; i++) {
    cartButton[i].classList.remove("active");

    item_product.forEach((product) => {
      if (product.id == i) {
        cartButton[i].classList.add("active");
      }
    });
  }
  // Reduce the number of card
  updateCount(-1);
}

// increase the number of card
let productCount = document.getElementById("productCount");
let count = parseInt(localStorage.getItem("productCount")) || 0;
function updateCount(increment) {
  count += increment;
  if (count < 0) count = 0;
  productCount.innerText = count;
  localStorage.setItem("productCount", count);
}
document.addEventListener("DOMContentLoaded", function () {
  productCount.innerText = count;
});

// local storage
window.addEventListener("beforeunload", function () {
  localStorage.setItem("cart", JSON.stringify(item_product));
});

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("cart")) {
    item_product = JSON.parse(localStorage.getItem("cart"));
    getCardItem();
  }
});

// back_to_top

const back_to_top = document.querySelector(".back_to_top");
back_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Responsive




//chang img

let img_bored = document.querySelector("#img_bored");
let img = document.querySelectorAll("#img");
img.forEach((fun) => {
  fun.addEventListener("click", (e) => {
    img_bored.src = e.target.src;
  });
});

