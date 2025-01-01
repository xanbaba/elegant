import $ from "jquery";
import {CardsService} from "../../utils/cardsService";
import {CartProduct} from "../../models/cartProduct";
import {CartService} from "../../utils/cartService";
// @ts-ignore
import styles from "./CartElement.module.css";

export const CartElement = async (product : CartProduct) => {
    const cartProduct = await CardsService.getCardById(product.id);
    if (!cartProduct) {
        console.error("Product not found");
        return null;
    }

    const base = $(`
        <li class="${styles.cartElement}">
            <img src="${cartProduct.colors ? cartProduct.colors[product.colorIndex].imageSrc : ''}" alt="${cartProduct.title ?? ''}">
            <div>
                <h3>${cartProduct.title ?? ''}</h3>
                <p>Color: ${cartProduct.colors ? cartProduct.colors[product.colorIndex].name : ''}</p>
                <!-- Counter -->
            </div>
            
            <div>
                <strong>$${cartProduct.activePrice ?? ''}</strong>
                <button aria-label="Delete">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
                              fill="#6C7275"/>
                    </svg>
                </button>
            </div>
        </li>
    `);

    const closeButton = base.find("button[aria-label=Delete]");
    closeButton.on("click", () => {
        CartService.deleteProduct(product.id);
    })

    return base;
}