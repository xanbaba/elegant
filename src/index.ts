import $ from "jquery";
import {App} from "./components/App/App";
import {ProductModel} from "./models/productModel";

async function changePage(installmentElement: JQuery, componentName: string, ...componentParams: any[]) {
    installmentElement.empty()
    const componentModule = await import(`/resources/javaScript/components/pages/${componentName}/${componentName}.js`);
    const component = componentModule[componentName](...componentParams);
    installmentElement.append(component)
}

$(async () => {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
        throw new Error("No root element found!");
    }
    rootElement.innerHTML = App();

    const appMain = $(".page-content");
    const cards = (await (await fetch("/resources/data/products.json")).json()).map((card: Object) => Object.assign(new ProductModel(), card));
    await changePage(appMain, "Homepage", cards.filter((card : ProductModel) => card.isNew));

    const scrollTopBtn = $("#scroll-top");
    scrollTopBtn.on("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    })
})