fetch("js/items.json")
    .then(response => response.json())
    .then(data =>{
            const products_dev = document.getElementById("products_dev");
   
            all_product_json =data

        data.forEach( product => {
            
                const old_price_paragraph =  product.old_price ?  `<p class="old-price" >$${product.old_price}</p>` : "" ;
                const percentDiscount = Math.floor((product.old_price - product.price) / product.old_price * 100) + "%" ; 

                const percentDiscount_div = product.old_price ?  `<span class="sale-present">${percentDiscount}</span>` : "" ;


                products_dev.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick="addToCard(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                   ${percentDiscount_div}
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
                        <p class="old-price" >${old_price_paragraph}</p>
                    </div>
                </div>
                `
        })

    })


// show  btn_filter 

let showFilter = document.querySelector(".filter")
function ShowFilter(){
    showFilter.classList.toggle("active")
}

