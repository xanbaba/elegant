import {ProductModel} from "../models/productModel";

export class CardsService {
    private static _cards: ProductModel[] | null = null;

    public static async getAllCards() {

        const cards : ProductModel[] = await fetch("/resources/data/products.json")
            .then((response) => response.json())
            .then((data: any[]) => data.map((card: any) => Object.assign(new ProductModel(), card)));

        CardsService._cards = cards;
        return cards;
    }

    public static async getCardById(id: number) {
        if (CardsService._cards === null) {
            await CardsService.getAllCards()
        }

        const product = CardsService._cards!.find((product) => product.id === id);
        if (!product) {
            return null;
        }

        return product;
    }
}