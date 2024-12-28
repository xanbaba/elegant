import $ from 'jquery';
import {ProductModel} from "../../models/productModel";

export const ProductCounter = (product: ProductModel) => {
    const decrement = () => {
        console.log("decrement");
    }

    const increment = () => {
        console.log("increment");
    }
    return `
        <div class="counter">
            <button onclick="${decrement}" class="product-counter-decrement">-</button>
            <span class="product-counter-value" aria-live="polite">2</span>
            <button onclick="${increment}" class="product-counter-increment">+</button>
        </div>
    `
}