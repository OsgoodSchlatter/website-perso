import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { HeaderPost } from "./HeaderPost";
import { HeaderPostTrips } from "./HeaderPostTrips";


export const ListOfPostsHeader = ({
    topic,
    blogPosts,
    trips,
    main,
}: {
    topic?: string;
    blogPosts?: any;
    trips?: boolean;
    main?: boolean;
}) => {

    // const navigate = useNavigate();

    // const handleClick = (postId: number, route: string) => {
    //     navigate(`/${route}/${postId}`);
    // };
    return (
        <>
            {main ?? <Header name={topic ?? ""} posts={Object.keys(blogPosts).length} />}
            <div className="flex justify-center py-12 m-2">
                <div className="grid grid-rows-4 gap-4">
                    {trips ? Object.keys(blogPosts).map((postID) => {
                        const post = blogPosts[postID as keyof typeof blogPosts];
                        return (
                            <HeaderPostTrips
                                choice={post.id}
                                date={post.date}
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
                                title={post.title}
                                category={post.category}
                                route={post.route}
                                main={main?.valueOf()}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};