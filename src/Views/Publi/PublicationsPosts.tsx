import { useParams } from "react-router-dom";
import { HeaderCategory } from "../../Single/HeaderCategory";
import Pdf2 from "/Users/eloi/dev/website/website-perso/src/Green_Tracking_Article.pdf";


export const PubliArticle = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Publications"}
                        date={"2023"}
                        back={`/publi_talks/`}
                    />

                    <div className="p-4 my-20 justify-center">
                        <div className="flex">
                            <a href="https://hal.science/hal-04145599/file/Manuscript__trustworthy_auctions_june_th.pdf" className="hover:underline"> <div className="text-xl font-bold">(1) Publication on HAL </div>  <div className="font-bold">Towards trustworthy and privacy preserving decentralized auctions.
                            </div> Tiphaine Henry, Julien Hatin, Eloi Besnard, Nassim Laga, Walid Gaaloul. 2023. ffhal-04145599f</a>
                        </div>
                        <div className="mt-4 hover:underline">
                            <a href={Pdf2} target="_blank">  <div className="text-xl font-bold">(2) My Master Thesis </div> <div className="font-bold"> Green Tracking: decentralized and private electricity tokens matching
                            </div>
                                Tutors: Antonella DelPozzo, Sara Tucci; Intern: Eloi Besnard. 2023
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};


export const blogPosts = {
    "1": {
        id: 1,
        date: "2023",
        title: "Publications",
        content: PubliArticle,
    },
};

export const PubliPosts = () => {
    const { postID } = useParams<{ postID: string }>();

    const post = blogPosts[postID as keyof typeof blogPosts];
    const Component = post ? post.content : null;

    if (!Component) {
        return <div>Loading...</div>;
    }

    return <Component postID={postID!} />;
};



