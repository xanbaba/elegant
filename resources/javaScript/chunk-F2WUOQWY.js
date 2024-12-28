import {
  ProductModel
} from "./chunk-RQ6PWEEG.js";

// src/utils/cartService.ts
var CartService = class {
  static {
    this._productsPath = "cartProducts";
  }
  static getAllProducts() {
    const productsSerialized = localStorage.getItem(this._productsPath);
    if (!productsSerialized) {
      return null;
    }
    const products = JSON.parse(productsSerialized).map((product) => Object.assign(new ProductModel(), product));
    return products;
  }
  static getProductById(id) {
    const productsSerialized = localStorage.getItem(this._productsPath);
    if (!productsSerialized) {
      return null;
    }
    const product = Object.assign(new ProductModel(), JSON.parse(productsSerialized).find((product2) => product2.id === id));
    return product;
  }
  static addProduct(product) {
    let productsSerialized = localStorage.getItem(this._productsPath);
    const products = !productsSerialized ? [] : JSON.parse(productsSerialized);
    products.push(JSON.stringify(product));
    localStorage.setItem(this._productsPath, JSON.stringify(products));
  }
  static deleteProduct(id) {
    const productsSerialized = localStorage.getItem(this._productsPath);
    if (!productsSerialized) {
      return false;
    }
    const products = !productsSerialized ? [] : JSON.parse(productsSerialized);
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      return false;
    }
    products.splice(productIndex, 1);
    return true;
  }
};

export {
  CartService
};
