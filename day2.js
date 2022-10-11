const book = {
    title : "Naruto",
    category : "Comics",
    author : "Masashi Kishimoto",
    price : 100000,
    onSale : true,
    discount : 10,
    stock : 10,
    wantToBuy : 13,
    tax :10,
    priceAfterDiscount : function(){
        if (this.onSale){
        return this.price - (this.price * (this.discount/100));
    }{return `Sorry, The Item is currently not on sale with the normal price after tax = ${this.priceAfterTax()}`;
}},
    priceAfterTax : function(){
        return this.price + (this.price * (this.tax/100));
    },
    finalPrice : function(){
        if (this.onSale){
            return this.priceAfterDiscount() + (this.priceAfterDiscount() * (this.tax/100));
        }{
            return this.priceAfterTax();
        }
    }
}
let purchasedBook = 0
let bookDetails = {
    title : book.title,
    category : book.category,
    author : book.author,
    discount : `${book.discount}%`,
    finalPrice : book.finalPrice()
}

let amountPrice = 0;
let totalPrice = function(){
    for(let i= 1; i <= book.wantToBuy; i++){
        if(book.stock > 0){
            amountPrice += book.finalPrice();
            book.stock -= 1;
            purchasedBook = i

        }else{
            break;
        }
    }
    console.log(`The total price is:
    ${purchasedBook} x RP ${book.finalPrice()} = RP ${amountPrice}`)
    console.log(`Our available stock: ${book.stock}`)
    if(book.stock > 0){
        console.log(`You can still buy ${book.stock} of our book`)
    }else{
        console.log(`Im Sorry, but our book is out of stock`)
    }
}


console.log(bookDetails)
console.log(`The amount of discount is ${book.discount}%,
price after discount is RP ${book.priceAfterDiscount()},
The amount of tax is ${book.tax}%,
price after tax (without discount) is RP ${book.priceAfterTax()},
And the final price including discount and tax is RP ${book.finalPrice()}
`);
totalPrice()


