import { useNavigate } from "react-router-dom";
import { blogPosts } from "../Views/Climate/ClimatePosts/ClimatePosts";
import { Header } from "./Header";
import { HeaderPost } from "./HeaderPost";

export const ListOfPostsHeader = ({
    topic,
    blogPosts,
}: {
    topic: string;
    blogPosts: any;
}) => {

    const navigate = useNavigate();

    const handleClick = (postId: number) => {
        navigate(`/${topic}/${postId}`);
    };
    return (
        <>
            <Header name={topic} posts={Object.keys(blogPosts).length} />
            <div className="flex justify-center py-12">
                <div className="grid grid-rows-4 gap-4">
                    {Object.keys(blogPosts).map((postID) => {
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