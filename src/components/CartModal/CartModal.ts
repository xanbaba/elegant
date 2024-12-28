import $ from "jquery"
import {CartElement} from "./CartElement/CartElement";
import {CartService} from "../../utils/cartService";
import {ProductModel} from "../../models/productModel";

export const CartModal = () => {
    setTimeout(() => {
        console.log("called");
        const openCartBtn = document.getElementById("open-cart-btn");
        const closeCartBtn = document.getElementById("close-cart-btn");
        const cartDialog = document.querySelector<HTMLDialogElement>("#cart-dialog");

        if (cartDialog === null) throw new Error("No cart dialog found!");

        // if (cartDialog === null) return;

        openCartBtn?.addEventListener("click", () => {
            cartDialog.showModal();
        })

        closeCartBtn?.addEventListener("click", () => {
            cartDialog.classList.add("close");
            cartDialog.addEventListener("animationend", () => {
                cartDialog.classList.remove("close");
                cartDialog.close();
            }, {once: true});
        })
    }, 0);

    return `
        <dialog class="cart-dialog" id="cart-dialog">
            <section class="cart-content">
                <header>
                    <h2>Cart</h2>
                    <button class="close-cart-btn" id="close-cart-btn">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
                                  fill="#6C7275"/>
                        </svg>
                    </button>
                </header>
        
                <ul class="cart-elements">
                    ${CartService.getAllProducts()?.map((product : ProductModel) => {CartElement(product)}).join('\n') ?? "No Content"}
                </ul>
            </section>
            <section class="cart-checkout"></section>
        </dialog>
    `
}