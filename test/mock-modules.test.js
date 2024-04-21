import { getProductById, getProducts } from "../src/database.js";
import { ProductService } from "../src/product-service.js"

jest.mock("../src/database.js")

test('mock modules getProductById', () => {
    getProductById.mockImplementation(id => {
        return {
            id: id,
            name: "product mock"
        }
    })
    const product = ProductService.findById(1);


    expect(product).toEqual({
        id: 1,
        name: "product mock"
    })
})


test("mock modules getAllProduct", () => {
    const products = [
        {
            id: 1,
            name: "product mock"
        },
        {
            id: 2,
            name: "product mock"
        }
    ]
    getProducts.mockImplementation(() => {
        return products
    })

    expect(ProductService.findAll()).toEqual(products)

})