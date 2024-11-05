
import { Link } from "react-router-dom";
import Pdf2 from "../../Green_Tracking_Article.pdf";
import { StandardHeader } from "../../Single/StandardHeader";


const PubliArticleContent = () => {
    return (
        <>


            <div className="mt-4 justify-center">
                <div className="flex">
                    <a href="https://link.springer.com/article/10.1007/s42786-024-00051-0" className="hover:underline"> <div className="text-xl font-bold">(1) Towards trustworthy and privacy preserving decentralized auctions. </div>  <div className="font-bold">
                    </div>Henry, T., Hatin, J., Besnard, E. et al. Towards trustworthy and privacy-preserving decentralized auctions. J BANK FINANC TECHNOL (2024). </a>
                </div>
                <Link
                    to="/cs/3"

                >
                    <div className="mt-4 hover:underline">
                        <a href={Pdf2} target="_blank">  <div className="text-xl font-bold">(2) Green Tracking: decentralized and private electricity tokens matching </div> <div className="font-bold">
                        </div>
                            Tutors: Antonella DelPozzo, Sara Tucci; Intern: Eloi Besnard. 2023
                        </a>
                    </div>
                </Link>
            </div>
        </>
    );
};



export const PubliArticle = () => {
    return (<StandardHeader title={"Publications"} date={"2024"}
        content={< PubliArticleContent />} />)
}
