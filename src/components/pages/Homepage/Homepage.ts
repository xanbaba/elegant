import $ from "jquery";
import {ProductModel} from "../../../models/productModel";
import {Card} from "../../Card/Card";
import {ImageSlider} from "../../ImageSlider/ImageSlider";
// @ts-ignore
import styles from "./Homepage.module.css";
import {pageChanger} from "../../App/App";

export const Homepage = (cards: ProductModel[] | null) => {
    const base = $("<div>")
        .append(
            $(`<div class="content-wrapper">`)
                .append(
                    ImageSlider(
                        [
                            "/resources/images/slider-image-1.png",
                            "/resources/images/slider-image-1.png",
                            "/resources/images/slider-image-1.png"
                        ])
                )
        )
        .append(`
            <section class="${styles.mottoSection} content-wrapper">
                <h2 class="visually-hidden">Motto of the elegant</h2>
                <p class="${styles.motto}">Simply Unique<span class="neutral-04-formatted-text">/</span> Simply Better<span
                        class="neutral-04-formatted-text">.</span></p>
            
                <p class="${styles.companyName}">
                    <span class="${styles.companyInfo}">3legant</span> <span class="neutral-04-formatted-text">is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</span>
                </p>
            </section>
        `)
        .append(`
            <section class="${styles.productsByRooms} content-wrapper">
                <h2 class="visually-hidden">Links to products depending on the room of the interior</h2>
            
                <ul class="${styles.categories}">
                    <li class="${styles.livingRoom}">
                        <article>
                            <h3>Living Room</h3>
                            <a class="${styles.moreInfoLink}" href="#">
                                <span>Shop Now</span>
                                <img class="${styles.arrow}" alt="arrow" src="/resources/images/arrow-right.svg">
                            </a>
                        </article>
                    </li>
            
                    <li class="${styles.bedroomRoom}">
                        <article>
                            <h3>Bedroom</h3>
                            <a class="${styles.moreInfoLink}" href="#">
                                <span>Shop Now</span>
                                <img alt="arrow" draggable="false" src="/resources/images/arrow-right.svg">
                            </a>
                        </article>
                    </li>
            
                    <li class="${styles.kitchenRoom}">
                        <article>
                            <h3>Kitchen</h3>
                            <a class="${styles.moreInfoLink}" href="#">
                                <span>Shop Now</span>
                                <img alt="arrow" draggable="false" src="/resources/images/arrow-right.svg">
                            </a>
                        </article>
                    </li>
                </ul>
            </section>
        `)
        .append(
            $(`<section class="${styles.newArrivals} content-wrapper">`)
                .append(`
                    <div class="${styles.topSection}">
                        <h2>
                            New <br>
                            Arrivals
                        </h2>
                    
                        <a class="${styles.moreInfoLink} ${styles.moreProductsLink}" href="#">
                            <span>More Products</span>
                            <img alt="arrow" draggable="false" src="/resources/images/arrow-right.svg">
                        </a>
                    </div>
                `)
                .append(
                    $(`<section class="${styles.productCards}">`)
                        .append(`<h3 class="visually-hidden">Product Cards</h3>`)
                        .append(
                            $("<ul>").append(cards ? cards.map(card => Card(card)) : '')
                        )
                )
        );

    base.find(`.${styles.moreInfoLink}`).on("click", async e => {
        e.preventDefault();

        await pageChanger("ShopPage");
    })

    return base;
}