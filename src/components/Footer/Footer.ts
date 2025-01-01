import $ from "jquery";
// @ts-ignore
import styles from "./Footer.module.css";
import {pageChanger} from "../App/App";

export const Footer = () => {
    const base = $(`
        <footer class="${styles.appFooter} content-wrapper">
            <div>
                <div class="${styles.logoWrapper}">
                    <h2 class="${styles.logo}"><a href="/index.html">3legant<span class="neutral-04-formatted-text">.</span></a></h2>
                    <p class="${styles.motto}">Gift & Decoration Store</p>
                </div>
                <nav class="${styles.pagesNav}">
                    <ul>
                        <li><a data-page="Homepage" href="/index.html">Home</a></li>
                        <li><a data-page="ShopPage" href="#">Shop</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        
            <p class="${styles.copyright}">Copyright © 2023 3legant. All rights reserved</p>
        </footer>
    `);

    const pageLinks = base.find<HTMLAnchorElement>(`.${styles.pagesNav} a`);

    pageLinks.on("click", async (e) => {
        e.preventDefault();

        const componentName = e.target.dataset.page;
        if (componentName === undefined) return;

        await pageChanger(componentName);
    })

    return base;
}