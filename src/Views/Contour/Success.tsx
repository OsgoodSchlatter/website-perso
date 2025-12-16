import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import { StandardHeaderContour } from "../../Single/StandardHeader";

const ShopContourS = () => {
    return (
        <>
            <div>

                <div className="mt-8 text-center text-4xl font-fatkat mb-6 text-black">

                    Thanks for shopping with us!
                </div>
                <div className="mt-24 text-center">
                    <Link to="/shop/3" className="hover:bg-yellow-600 bg-yellow-500 p-2 rounded text-center text-3xl hover:underline italic text-black font-fatkat"> back to shop</Link>

                </div>
            </div>

        </>
    )
}

export const SuccessShopContour = () => {
    return (

        <StandardHeaderContour link={"/contour/1"} content={<ShopContourS />} />

    );
};
