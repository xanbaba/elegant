import {ProductModel} from "../models/productModel";

export class CartService {

    private static _productsPath : string = "cartProducts"
    public static getAllProducts()
    {
        const productsSerialized = localStorage.getItem(this._productsPath);
        if (!productsSerialized) {
            return null;
        }

        const products : ProductModel[] = JSON.parse(productsSerialized).map((product : any) => Object.assign(new ProductModel(), product));
        return products;
    }

    public static getProductById(id : number)
    {
        const productsSerialized = localStorage.getItem(this._productsPath);
        if (!productsSerialized) {
            return null;
        }

        const product : ProductModel = Object.assign(new ProductModel(), JSON.parse(productsSerialized).find((product: any) => product.id === id));
        return product;
    }

    public static addProduct(product : ProductModel)
    {
        let productsSerialized = localStorage.getItem(this._productsPath);

        const products : any[] = !productsSerialized ? [] : JSON.parse(productsSerialized);
        products.push(JSON.stringify(product));
        localStorage.setItem(this._productsPath, JSON.stringify(products));
    }

    public static deleteProduct(id: number)
    {
        const productsSerialized = localStorage.getItem(this._productsPath);
        if (!productsSerialized) {
            return false;
        }

        const products : any[] = !productsSerialized ? [] : JSON.parse(productsSerialized);
        const productIndex = products.findIndex((product: any) => product.id === id);

        if (productIndex === -1) {
            return false;
        }

        products.splice(productIndex, 1);
        return true;
    }
}