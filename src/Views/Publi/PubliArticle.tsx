import { useParams } from "react-router-dom";
import { HeaderCategory } from "../../Single/HeaderCategory";
import Pdf2 from "../../Green_Tracking_Article.pdf";


export const PubliArticle = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={title}
                        date={date}
                        back={`/publi_talks/`}
                    />

                    <div className="p-4 my-20 justify-center">
                        <div className="flex">
                            <a href="https://link.springer.com/article/10.1007/s42786-024-00051-0" className="hover:underline"> <div className="text-xl font-bold">(1) Towards trustworthy and privacy preserving decentralized auctions. </div>  <div className="font-bold">
                            </div>Henry, T., Hatin, J., Besnard, E. et al. Towards trustworthy and privacy-preserving decentralized auctions. J BANK FINANC TECHNOL (2024). </a>
                        </div>
                        <div className="mt-4 hover:underline">
                            <a href={Pdf2} target="_blank">  <div className="text-xl font-bold">(2) Green Tracking: decentralized and private electricity tokens matching </div> <div className="font-bold">
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

    return <Component title={post.title} date={post.date} />;
};



