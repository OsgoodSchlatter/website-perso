import React, { useState } from "react";
import { StandardHeaderContour } from "../../Single/StandardHeader";
// src/data/products.ts
import hoodie from "../../data/pics/contour-shop/hoodie.jpg";
import tshirt from "../../data/pics/contour-shop/tshirt.jpg";
import pantalon from "../../data/pics/contour-shop/fut.jpg";
import { CheckoutButton } from "../../Single/CheckoutButton";


// src/data/productTypes.ts
export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
    category: string;
    colors?: string[];
    sizes?: string[];
};


const ProductList: Product[] = [
    {
        id: 1,
        name: "Contour T-Shirt - Yellow Edition",
        price: 25,
        image: tshirt,
        category: "Clothes",
        description: "Premium cotton T-shirt with Contour logo.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Yellow"],
    },
    {
        id: 2,
        name: "Contour Logo Hoodie",
        price: 45,
        image: hoodie,
        category: "Clothes",
        description: "Soft fleece hoodie with chest print.",
        sizes: ["M", "L", "XL"],
        colors: ["Black"],
    },
    {
        id: 3,
        name: "Le pantalon de Martial",
        price: 75,
        image: pantalon,
        category: "Clothes",
        description: "Un beau futal",
        sizes: ["M", "L", "XL"],
        colors: ["Black"],
    },
];

const ShopContent = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <>
            <div className="text-4xl font-fatkat mb-6 text-black">
                SHOP
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ProductList.map(product => (
                    <div
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="bg-white rounded-lg shadow-md p-3 cursor-pointer hover:shadow-xl flex flex-col"
                    >
                        <img src={product.image} className="w-full rounded-md" />

                        <div className="mt-auto">

                            <div className=" text-center mt-2 font-fatkat text-black">
                                {product.name}
                            </div>

                            <div className=" text-center text-yellow-500 font-bold">
                                {product.price}€
                            </div>
                            <CheckoutButton />


                        </div>
                    </div>
                ))}
            </div>


            {/* Product Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="bg-white rounded-lg max-w-lg w-11/12 p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-2xl"
                            onClick={() => setSelectedProduct(null)}
                        >
                            ×
                        </button>
                        <div className="flex justify-center">

                            <img
                                src={selectedProduct.image}
                                className="w-full rounded-md mb-4 w-1/2"
                            />
                        </div>

                        <h2 className="text-3xl font-fatkat mb-2 text-black">
                            {selectedProduct.name}
                        </h2>

                        <p className="text-lg text-black">{selectedProduct.description}</p>

                        <div className="mt-3 text-xl text-yellow-500 font-bold">
                            {selectedProduct.price}€
                        </div>

                        <CheckoutButton />
                    </div>
                </div>
            )}
        </>
    );
};
export const ShopPage = () => {
    return (
        <div className="bg-yellow-400 w-screen min-h-screen">
            <StandardHeaderContour link={"/contour/1"} content={<ShopContent />} />
        </div>
    );
};
