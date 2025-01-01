import $ from "jquery";
// @ts-ignore
import styles from "./Header.module.css";
import {pageChanger} from "../App/App";

export const Header = (modalOpener : () => void | null) => {
    const base = $(`
        <header class="${styles.appHeader} content-wrapper">
            <h2 class="${styles.logo}"><a href="/index.html">3legant<span class="neutral-04-formatted-text">.</span></a></h2>
            <nav class="${styles.pagesNav}">
                <ul>
                    <li class="active"><a href="#" data-page="Homepage">Home</a></li>
                    <li><a href="#" data-page="ShopPage">Shop</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        
            <nav class="${styles.accountNav}">
                <ul>
                    <li>
                        <button><img src="/resources/images/search-icon.svg" alt="search-icon"></button>
                    </li>
                    <li>
                        <button><img src="/resources/images/profile-icon.svg" alt="profile-icon"></button>
                    </li>
                    <li class="${styles.cart}">
                        <button id="open-cart-btn">
                            <img src="/resources/images/shopping-bag.svg" alt="cart-icon">
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    `);

    const openCartBtn = base.find("#open-cart-btn");
    openCartBtn.on("click", () => {
        modalOpener();
    })

    const pageLinks = base.find<HTMLAnchorElement>(`.${styles.pagesNav} a`);

    pageLinks.on("click", async (e) => {
        e.preventDefault();

        const componentName = e.target.dataset.page;
        if (componentName === undefined) return;

        await pageChanger(componentName);
    })

    return base;
}