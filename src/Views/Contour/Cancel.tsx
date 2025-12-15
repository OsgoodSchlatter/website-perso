import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import { StandardHeaderContour } from "../../Single/StandardHeader";

const ShopContourC = () => {
    return (
        <>
            <div>

                <div className="mt-8 text-center text-4xl font-fatkat mb-6 text-black">

                    Sorry that it didnt work! Try again
                </div>
                <div className="mt-24 text-center ">
                    <Link to="/contour/3" className="hover:bg-yellow-600 bg-yellow-500 p-2 rounded text-3xl italic text-black font-fatkat"> Back to shop</Link>

                </div>
            </div>

        </>
    )
}

export const CancelShopContour = () => {
    return (

        <StandardHeaderContour link={"/contour/1"} content={<ShopContourC />} />

    );
};
