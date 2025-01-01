import $ from "jquery";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {CartModal} from "../CartModal/CartModal";
import {ProductModel} from "../../models/productModel";
import {CardsService} from "../../utils/cardsService";
import {Homepage} from "../pages/Homepage/Homepage";
import {ShopPage} from "../pages/ShopPage/ShopPage";
import {MessageType} from "../../models/messageType";
// @ts-ignore
import styles from "./App.module.css";
import {SuccessMessage} from "../SuccessMessage/SuccessMessage";

async function changePage(installmentElement: JQuery, componentFunction : Function, ...componentParams: any[]) {
    installmentElement.empty()
    installmentElement.append(componentFunction(...componentParams));
    window.scrollTo({top: 0, left: 0, behavior: "instant"})
}

export let pageChanger : (pageName: string) => Promise<void> = null!;

export let messenger : (messageType: MessageType, message : string, description: string) => void = null!;


export const App = async () => {

    const cartModalResult = await CartModal();

    const base = $("<div>")
        .append(`<h1 class="visually-hidden">Elegant e-commerce store</h1>`)
        .append(Header(cartModalResult.modalOpener))
        .append(`
                <main class="app-main">
                    <article class="page-content">
                        <h2 class="visually-hidden">Page Content</h2>
                    </article>
                </main>
    `)
        .append(Footer())
        .append(`
                <div class="scroll-top-wrapper">
                    <button class="scroll-top" id="scroll-top">
                        <svg class="scroll-svg-icon" viewBox="0 0 384 512">
                            <path
                                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                            ></path>
                        </svg>
                    </button>
                </div>
    `)
        .append(cartModalResult.base);

    const appMain = base.find(".page-content");
    const scrollTopBtn = base.find("#scroll-top");
    const cards = await CardsService.getAllCards();

    pageChanger = async (pageName: string) => {
        switch (pageName) {
            case "Homepage":
                await changePage(appMain, Homepage, cards.filter((card: ProductModel) => card.isNew));
                history.pushState(pageName, '', "home")
                break;
            case "ShopPage":
                await changePage(appMain, ShopPage, cards);
                history.pushState(pageName, '', "shop")
                break;
        }
    }

    messenger = (messageType, message, description) => {
        const messageContainer = $(`<div class="${styles.messageContainer}">`);

        let messageComponent : JQuery | null = null;

        switch (messageType) {
            case MessageType.Success:
                messageComponent = SuccessMessage(message, description);
                messageContainer.append(messageComponent);
                break;
            default:
                throw Error("Incorrect message type")
        }

        messageComponent.one("close:", () => {
            messageComponent?.remove();
        })

        base.append(messageContainer);

        setTimeout(() => {
            console.log("Timeout")
            messageComponent?.trigger("close:");
        }, 5000)
    }

    addEventListener("popstate", (e) => {
        pageChanger(e.state)
    })


    await pageChanger("Homepage");

    scrollTopBtn.on("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    })

    return base;
}