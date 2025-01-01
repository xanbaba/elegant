import $ from "jquery";
// @ts-ignore
import styles from "./ImageSlider.module.css";

export const ImageSlider = (imageSources : string[]) => {
    const base = $(`
        <section class="${styles.imageSlider}">
            <h2 class="visually-hidden">Image slider</h2>
            <div class="${styles.imagesWrapper}">
                <ul class="${styles.images}">
                    ${imageSources.map((imageSource) => `<li><img src="${imageSource}" alt="Slider"></li>`).join('\n')}
                </ul>
            </div>
        
            <nav class="${styles.arrowNavigation}">
                <button class="left-arrow"></button>
                <button class="right-arrow"></button>
            </nav>
        </section>
    `);

    let pageNum = 0;

    const imagesContainer = base.find(`.${styles.images}`);
    imagesContainer.css("left", `-${pageNum * 100}%`);

    base.find(".left-arrow").on("click", () => {
        if (pageNum === 0) return;
        --pageNum;
        imagesContainer.css("left", `-${pageNum * 100}%`);
    });

    base.find(".right-arrow").on("click", () => {
        if (pageNum === imageSources.length - 1) return;
        ++pageNum;
        imagesContainer.css("left", `-${pageNum * 100}%`);
    });

    return base;
}