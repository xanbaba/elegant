export class ProductModel {
    public id: number | null = null;
    public title: string | null = null;
    public activePrice: number | null = null;
    public oldPrice: number | null = null;
    public isNew: boolean | null = null;
    public salePercent: number | null = null;
    public description : string | null = null;
    public colors : {name : string, imageSrc : string}[] | null = null;
}