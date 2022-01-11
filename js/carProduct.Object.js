class carProductObject {
    constructor (nameProduct, priceProduct, amountProduct) {
        this.nameProduct = nameProduct;
        this.priceProduct = priceProduct;
        this.amountProduct = amountProduct;
        this.idProduct = idProduct
    }
    getInfoProductToAddCar (){
        return `${this.nameProduct} ${this.amountProduct} ${this.priceProduct}`
    }
}