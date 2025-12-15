import React, { useState } from "react";
import { StandardHeaderContour } from "../../Single/StandardHeader";
// src/data/products.ts
import hoodie from "../../data/pics/contour-shop/hoodie.png";
import tshirt from "../../data/pics/contour-shop/tshirt.png";
import pantalon from "../../data/pics/contour-shop/fut.jpg";
import tshirt_tournee from "../../data/pics/contour-shop/real-merch/tshirt-tournee.png";
import tshirt_tournee_2 from "../../data/pics/contour-shop/real-merch/tshirt-tournee-2.png";
import tshirt_special from "../../data/pics/contour-shop/real-merch/tshirt-special.png";
import tshirt_alice from "../../data/pics/contour-shop/real-merch/tshirt-alice.png";
import tshirt_leo from "../../data/pics/contour-shop/real-merch/tshirt-leo.png";
import tshirt_anna from "../../data/pics/contour-shop/real-merch/tshirt-anna.png";
import tshirt_eloi from "../../data/pics/contour-shop/real-merch/tshirt-eloi.png";
import tshirt_martial from "../../data/pics/contour-shop/real-merch/tshirt-martial.png";

import { CheckoutButton } from "../../Single/CheckoutButton";


// src/data/productTypes.ts
export type Product = {
    id: number;
    name: string;
    price: number;
    image: string[];
    description?: string;
    category: string;
    colors?: string[];
    sizes?: string[];
    priceId: string;
};


const ProductList: Product[] = [


    {
        id: 5,
        name: "Contour T-Shirt - Les Disquaires Edition",
        price: 25,
        image: [tshirt_special],
        category: "Clothes",
        description: "Premium cotton T-shirt with Anna's face.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        priceId: "price_1SeifqD7dKcn0q5142yWxI5n"
    },
    {
        id: 1,
        name: "Contour T-Shirt - Classic Edition",
        price: 25,
        image: [tshirt],
        category: "Clothes",
        description: "Premium cotton T-shirt with Contour logo.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Yellow"],
        priceId: "price_1SeifqD7dKcn0q5142yWxI5n"
    },
    {
        id: 4,
        name: "Contour T-Shirt - Tournee Edition",
        price: 35,
        image: [tshirt_tournee, tshirt_tournee_2],
        category: "Clothes",
        description: "Premium cotton T-shirt with Contour tour.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        priceId: "price_1SeifqD7dKcn0q5142yWxI5n"
    },
    {
        id: 5,
        name: "Contour T-Shirt - Anna Edition",
        price: 35,
        image: [tshirt_anna, tshirt_special],
        category: "Clothes",
        description: "Premium cotton T-shirt with Anna's face.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        priceId: "price_1SeifqD7dKcn0q5142yWxI5n"
    },
    {
        id: 6,
        name: "Contour T-Shirt - Martial Edition",
        price: 35,
        image: [tshirt_martial, tshirt_special],
        category: "Clothes",
        description: "Premium cotton T-shirt with Martial's face.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        priceId: "price_1SeifqD7dKcn0q5142yWxI5n"
    },
    {
        id: 7,
        name: "Contour T-Shirt - Alice Edition",
        price: 35,
        image: [tshirt_alice, tshirt_special],
        category: "Clothes",
        description: "Premium cotton T-shirt with Alice's face.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        priceId: "price_1SeifqD7dKcn0q5142yWxI5n"
    },
    {
        id: 8,
        name: "Contour T-Shirt - Leonard Edition",
        price: 35,
        image: [tshirt_leo, tshirt_special],
        category: "Clothes",
        description: "Premium cotton T-shirt with Leo's face.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        priceId: "price_1SeifqD7dKcn0q5142yWxI5n"
    },
    {
        id: 10,
        name: "Contour T-Shirt - Eloi Edition",
        price: 35,
        image: [tshirt_eloi, tshirt_special],
        category: "Clothes",
        description: "Premium cotton T-shirt with eloi's face.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        priceId: "price_1SeifqD7dKcn0q5142yWxI5n"
    },

    {
        id: 2,
        name: "Contour Logo Hoodie",
        price: 45,
        image: [hoodie],
        category: "Clothes",
        description: "Soft fleece hoodie with chest print.",
        sizes: ["M", "L", "XL"],
        colors: ["Black"],
        priceId: "price_1SejaqD7dKcn0q51Zy5ben9k"
    },
    {
        id: 3,
        name: "Le pantalon de Martial",
        price: 75,
        image: [pantalon],
        category: "Clothes",
        description: "Un beau futal",
        sizes: ["M", "L", "XL"],
        colors: ["Black"],
        priceId: "price_1SejYRD7dKcn0q51o8r1hiiX"
    },
];

const ShopContent = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="text-4xl font-fatkat mb-6 text-black">
                SHOP
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-yellow-100 bg-opacity-80 flex justify-center items-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full" />
                </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ProductList.map(product => (
                    <div
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="bg-white rounded-lg shadow-md p-3 cursor-pointer hover:shadow-xl flex flex-col w-fit"
                    >
                        <div className="flex overflow-x-auto">

                            <img
                                onClick={(e) => {
                                    e.stopPropagation(); // stops the click from reaching parent
                                    setSelectedImage(product.image[0]); // only set the image
                                }}

                                src={product.image[0]} className=" w-full rounded-md" />
                            {product.image.length > 1 && <img
                                onClick={(e) => {
                                    e.stopPropagation(); // stops the click from reaching parent
                                    setSelectedImage(product.image[1]); // only set the image
                                }}

                                src={product.image[1]} className=" w-full rounded-md ml-2" />

                            }

                        </div>
                        {product.image.length > 1 &&
                            <div className="text-xs text-black text-center">
                                scrolle l'image horizontallement pour voir les deux côtés !
                            </div>}


                        <div className="mt-auto">

                            <div className=" text-center mt-2 font-fatkat text-black">
                                {product.name}
                            </div>

                            <div className=" text-center text-yellow-500 font-bold">
                                {product.price}€
                            </div>
                            <div className="flex justify-center">

                                <button
                                    className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                                >
                                    Buy Article
                                </button>
                            </div>



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
                                src={selectedProduct.image[0]}
                                className="rounded-md mb-4 w-1/3 object-contain"
                            />
                        </div>

                        <h2 className="text-3xl font-fatkat mb-2 text-black">
                            {selectedProduct.name}
                        </h2>

                        <p className="text-lg text-black">{selectedProduct.description}</p>

                        <div className="mt-3 text-xl text-yellow-500 font-bold">
                            {selectedProduct.price}€
                        </div>

                        <CheckoutButton priceId={selectedProduct.priceId} />
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
