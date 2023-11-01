import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { HeaderPost } from "./HeaderPost";
import { HeaderPostTrips } from "./HeaderPostTrips";


export const ListOfPostsHeader = ({
    topic,
    blogPosts,
    route,
    trips,
}: {
    topic: string;
    blogPosts?: any;
    route: string;
    trips?: boolean;
}) => {

    const navigate = useNavigate();

    const handleClick = (postId: number) => {
        navigate(`/${route}/${postId}`);
    };
    return (
        <>
            <Header name={topic} posts={Object.keys(blogPosts).length} />
            <div className="flex justify-center py-12 m-2">
                <div className="grid grid-rows-4 gap-4">
                    {trips ? Object.keys(blogPosts).map((postID) => {
                        const post = blogPosts[postID as keyof typeof blogPosts];
                        return (

                            <HeaderPostTrips
                                choice={post.id}
                                date={post.date}
                                handleClick={handleClick}
                                title={post.title}
                                CO2={post.C02}
                            />
                        );
                    }) : Object.keys(blogPosts).map((postID) => {
                        const post = blogPosts[postID as keyof typeof blogPosts];
                        return (

                            <HeaderPost
                                choice={post.id}
                                date={post.date}
                                handleClick={handleClick}
                                title={post.title}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};