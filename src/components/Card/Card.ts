import $ from "jquery";
import {ProductModel} from "../../models/productModel";
import {CartService} from "../../utils/cartService";
// @ts-ignore
import styles from "./Card.module.css";
import {messenger} from "../App/App";
import {MessageType} from "../../models/messageType";

export const Card = (product: ProductModel) => {
    return $("<li>")
        .append(
            $(`<article class="${styles.productCard}">`)
                .append(`
                    <div class="${styles.content}">
                       <ol class="${styles.ratingGroup}">
                           <li></li>
                           <li></li>
                           <li></li>
                           <li></li>
                           <li></li>
                       </ol>
                    
                       ${!product.title ? '' : `<h4>${product.title}</h4>`}
                    
                       <div class="${styles.priceSection}">
                           <p>$${product.activePrice}</p>
                           ${!product.oldPrice ? '' : `<p class="${styles.oldPrice}">$${product.oldPrice}</p>`}
                       </div>
                    </div>
                `)
                .append(
                    $(`<div class="${styles.card}">`)
                        .append(`
                           <ul class="${styles.infoLabels}">
                               ${!product.isNew ? '' : `<li class="${styles.newProductLabel}">new</li>`}
                               ${!product.salePercent? '' : `<li class="${styles.saleProductLabel}">-${product.salePercent}%</li>`}
                           </ul>
                        `)
                        .append($(`<button class="${styles.addToCartBtn}">Add to cart</button>`).on("click", () => {
                            CartService.addProduct(product, 1, 0);
                            messenger(MessageType.Success, "Added!", "This product was added to your cart.");
                        }))
                        .append(`${!product.colors || !product.colors[0] ? '' : `<img class="${styles.cardImage}" src="${product.colors[0].imageSrc}" alt="${product.title}">`}`)
                )
        );
}