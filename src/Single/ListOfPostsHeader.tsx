import { BlogCategory } from "../Views/Home/Data";
import { Header } from "./Header";
import { HeaderPost } from "./HeaderPost";


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

    return (
        <>
            {main ?? <Header name={topic ?? ""} posts={Object.keys(blogPosts).length} />}
            <div className={main?.valueOf() ? "flex m-2" : "flex m-2 justify-center"}>
                <div className="grid grid-rows-4 gap-1 w-full">
                    {Object.keys(blogPosts).filter((postID) => blogPosts[postID as keyof typeof blogPosts].category !== BlogCategory.Recruiter).map((postID) => {
                        const post = blogPosts[postID as keyof typeof blogPosts];
                        const contentName = post && post.content ? (post.content.displayName || post.content.name || "Unknown Component") : "Unknown Component";
                        return (
                            <HeaderPost
                                choice={post.id}
                                date={post.date}
                                title={post.title}
                                category={post.category}
                                route={post.route}
                                content_name={contentName}
                                main={main?.valueOf()}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};