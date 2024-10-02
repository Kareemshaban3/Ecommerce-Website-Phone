fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=39e6f3680bb64290a778db0987f9161b')
.then((result) => {
let myData = result.json(); 
return myData;
}).then((currency)=>{
    let amount = document.querySelector(".amount")
    let egpPrice = document.querySelector(".egp")
    let sarPrice = document.querySelector(".sar")
    let jdPrice = document.querySelector(".jd")

    egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"] )+ " "+ "EGP"
    sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"] )+ " "+ "SAR"
    jdPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["BDT"] ) + " "+ "BDT"
})