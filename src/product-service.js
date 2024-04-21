import { getProductById, getProducts } from "./database";

export class ProductService {
    static findById(id) {
        return getProductById(id)
    }

    static findAll() {
        return getProducts()
    }
}