import $ from "jquery";
import {CartElement} from "../CartElement/CartElement";
import {CartService} from "../../utils/cartService";
// @ts-ignore
import styles from "./CartModal.module.css";

export const CartModal = async () => {
    const base = $<HTMLDialogElement>(`
        <dialog class="${styles.cartDialog}" id="cart-dialog">
            <section class="cart-content">
                <header>
                    <h2>Cart</h2>
                    <button class="${styles.closeCartBtn}" id="close-cart-btn">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
                                  fill="#6C7275"/>
                        </svg>
                    </button>
                </header>
        
                <ul class="cart-elements">
                    
                </ul>
            </section>
            <section class="cart-checkout"></section>
        </dialog>
    `);

    const updateCart = async () => {
        const products = CartService.getAllProducts();
        const cartElements = base.find(".cart-elements");
        cartElements.empty();
        if (products !== null && products.length !== 0) {
            for (let product of products) {
                const cartElement = await CartElement(product);
                if (!cartElement) {
                    console.error("Cart element could not be created")
                    continue;
                }
                cartElements.append(cartElement);
            }
        } else {
            cartElements.append("No content");
        }
    }

    CartService.onCartChanged( async () => {
        await updateCart();
    })

    await updateCart();

    const closeCartBtn = base.find("#close-cart-btn");

    closeCartBtn.on("click", () => {
        base.addClass(styles.close);
        base.one("animationend", () => {
            base.removeClass(styles.close);
            base[0].close();
        })
    })

    const modalOpener = () => {
        base[0].showModal();
    }

    return {base, modalOpener};
}