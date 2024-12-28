import $ from "jquery";
import {ProductModel} from "../../../models/productModel";
import {Card} from "../../Card/Card";
export const Homepage = (cards: ProductModel[] | null) => {
    return `
        <div class="content-wrapper">
            <section class="image-slider">
                <h2 class="visually-hidden">Image slider</h2>
                <div class="images-wrapper">
                    <ul class="images">
                        <li><img src="resources/images/slider-image-1.png" alt="slider-image-1"></li>
                        <li><img src="resources/images/slider-image-1.png" alt="slider-image-1"></li>
                        <li><img src="resources/images/slider-image-1.png" alt="slider-image-1"></li>
                    </ul>
                </div>
            
                <nav class="arrow-navigation">
                    <button class="left-arrow"></button>
                    <button class="right-arrow"></button>
                </nav>
            
                <nav class="dot-navigation">
                    <ul>
           
           
                    </ul>
                </nav>
            </section>
        </div>
        
        <section class="motto-section content-wrapper">
            <h2 class="visually-hidden">Motto of the elegant</h2>
            <p class="motto">Simply Unique<span class="neutral-04-formatted-text">/</span> Simply Better<span
                    class="neutral-04-formatted-text">.</span></p>
        
            <p class="company-info">
                <span class="company-name">3legant</span> <span class="neutral-04-formatted-text">is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</span>
            </p>
        </section>
        
        <section class="products-by-rooms content-wrapper">
            <h2 class="visually-hidden">Links to products depending on the room of the interior</h2>
        
            <ul class="categories">
                <li class="living-room">
                    <article>
                        <h3>Living Room</h3>
                        <a class="more-info-link" href="#">
                            <span>Shop Now</span>
                            <img class="arrow" alt="arrow" src="resources/images/arrow-right.svg">
                        </a>
                    </article>
                </li>
        
                <li class="bedroom-room">
                    <article>
                        <h3>Bedroom</h3>
                        <a class="more-info-link" href="#">
                            <span>Shop Now</span>
                            <img alt="arrow" draggable="false" src="resources/images/arrow-right.svg">
                        </a>
                    </article>
                </li>
        
                <li class="kitchen-room">
                    <article>
                        <h3>Kitchen</h3>
                        <a class="more-info-link" href="#">
                            <span>Shop Now</span>
                            <img alt="arrow" draggable="false" src="resources/images/arrow-right.svg">
                        </a>
                    </article>
                </li>
            </ul>
        </section>
        
        <section class="new-arrivals content-wrapper">
            <div class="top-section">
                <h2>
                    New <br>
                    Arrivals
                </h2>
        
                <a class="more-info-link more-products-link" href="#">
                    <span>More Products</span>
                    <img alt="arrow" draggable="false" src="resources/images/arrow-right.svg">
                </a>
            </div>
        
            <section class="product-cards">
                <h3 class="visually-hidden">Product Cards</h3>
        
                <ul>
                    ${cards == null ? '' : cards.map(card => Card(card)).join('\n')}
                </ul>
            </section>
        </section>
    `
}