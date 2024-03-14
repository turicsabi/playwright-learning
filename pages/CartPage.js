exports.CartPage = class CartPage{
    constructor(page){
        this.page = page;
        this.numberOfProductsInCart = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductInCart(productName){
        const productList = await this.page.$$(this.numberOfProductsInCart);
        for (const product of productList){
            if(productName === await product.textContent()){
                return true;
                break;
            }
            
        }         
        return `Product ${productName} is not in the cart`;
        
    }
}