import $ from 'jquery';
import {Card} from "../../Card/Card";
import {ProductModel} from "../../../models/productModel";
// @ts-ignore
import styles from "./ShopPage.module.css";

export const ShopPage = (products: ProductModel[]) => {
    const base = $(`
<div class="content-wrapper">
    <section class="${styles.shopHead}">
        <nav class="${styles.headNav}">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
            </ul>
        </nav>
        
        <h2>Shop Page</h2>
        <p class="${styles.motto}">Let’s design the place you always imagined.</p>
    </section>        
    
    <section class="${styles.productCards}">
        <h2>Living Room</h2>
        <ul></ul>
    </section>
</div>
    `);

    const productsList = base.find(`.${styles.productCards} > ul`);

    for (const product of products) {
        productsList.append(Card(product));
    }

    return base;

}