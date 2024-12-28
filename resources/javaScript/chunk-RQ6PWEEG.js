// src/models/productModel.ts
var ProductModel = class {
  constructor() {
    this.id = null;
    this.title = null;
    this.activePrice = null;
    this.oldPrice = null;
    this.isNew = null;
    this.salePercent = null;
    this.imageSrc = null;
  }
};

export {
  ProductModel
};
