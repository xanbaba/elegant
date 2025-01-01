import $ from "jquery";
import {App} from "./components/App/App";
$(async () => {
    const rootElement = $("#root");
    if (!rootElement) {
        throw new Error("No root element found!");
    }
    rootElement.append(await App());
})