/**
 * Created by DevMiau on 30-Mar-18.
 */
let taxRate = 0.02;
let phonePrice = 200;
let accessoryPrice = 20;
let spendingTreshold = 200;
let bankAccountBalance = 500;


function purchase(){
    if(bankAccountBalance > 200){
       bankAccountBalance -= (phonePrice + taxCalculator(phonePrice));
       bankAccountBalance -= (accessoryPrice + taxCalculator(accessoryPrice));
       console.log(priceFormatter(bankAccountBalance));
    }
    if(bankAccountBalance < 200){
        bankAccountBalance -= (accessoryPrice + taxCalculator(accessoryPrice));
        console.log(priceFormatter(bankAccountBalance));
    }
}

function taxCalculator(price) {
    return price * taxRate;
}

function priceFormatter(price) {
    return '$ ' + price.toFixed(2);
}

while(bankAccountBalance > 0 && bankAccountBalance > accessoryPrice){
    purchase();
    if (bankAccountBalance < accessoryPrice) {
        console.log("You can't afford this purchase. :(");
    }

}

