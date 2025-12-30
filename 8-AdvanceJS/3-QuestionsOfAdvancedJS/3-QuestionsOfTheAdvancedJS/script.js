let product = {
    name: "Laptop",
    price: 75000,
    descount : function(discountPercent) {
        let discountAmount = (this.price * discountPercent) / 100;
        return this.price - discountAmount;
    }
}
console.log(`Price after discount: ${product.descount(10)}`);
console.log(`Price after discount: ${product.descount(50)}`);