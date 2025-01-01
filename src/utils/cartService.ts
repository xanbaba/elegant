import {ProductModel} from "../models/productModel";
import {CartProduct} from "../models/cartProduct";

type Handler<E> = (event: E) => void;

class EventDispatcher<E> {
    private handlers: Handler<E>[] = [];
    fire(event: E) {
        for (let h of this.handlers)
            h(event);
    }
    register(handler: Handler<E>) {
        this.handlers.push(handler);
    }
}

export interface CartChangedEvent {}

export class CartService {
    private static cartChangedEventDispatcher = new EventDispatcher<CartChangedEvent>();
    public static onCartChanged(handler: Handler<CartChangedEvent>) {
        this.cartChangedEventDispatcher.register(handler);
    }
    private static fireCartChanged(event: CartChangedEvent) {
        this.cartChangedEventDispatcher.fire(event);
    }

    private static _productsPath : string = "cartProducts"

    public static getAllProducts()
    {
        const productsSerialized = localStorage.getItem(this._productsPath);
        if (!productsSerialized) {
            return null;
        }

        const products : CartProduct[] = JSON.parse(productsSerialized).map((product : any) => Object.assign(new CartProduct(), product));
        return products;
    }

    public static getProductById(id : number)
    {
        const productsSerialized = localStorage.getItem(this._productsPath);
        if (!productsSerialized) {
            return null;
        }

        const product : CartProduct = Object.assign(new CartProduct(), JSON.parse(productsSerialized).find((product: any) => product.id === id));
        return product;
    }

    public static addProduct(product : ProductModel, quantity : number, colorIndex : number)
    {
        if (product.id === null || product.id === undefined)
        {
            throw new Error("Product with id must be provided");
        }

        let productsSerialized = localStorage.getItem(this._productsPath);

        const products : any[] = !productsSerialized ? [] : JSON.parse(productsSerialized);
        const cartProduct = new CartProduct();
        cartProduct.quantity = quantity;
        cartProduct.colorIndex = colorIndex;
        cartProduct.id = product.id;
        products.push(cartProduct);
        localStorage.setItem(this._productsPath, JSON.stringify(products));
        this.fireCartChanged({})
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
        localStorage.setItem(this._productsPath, JSON.stringify(products));
        this.fireCartChanged({})
        return true;
    }
}