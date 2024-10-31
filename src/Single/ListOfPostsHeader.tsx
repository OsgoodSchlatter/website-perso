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
    const catToExclude = [BlogCategory.Recruiter, BlogCategory.About];
    return (
        <>

            <div className="grid grid-rows-4 gap-1 w-full">
                {Object.keys(blogPosts)
                    .filter((postID) => !catToExclude.includes(
                        blogPosts[postID as keyof typeof blogPosts].category)
                    )
                    .map((postID) => {
                        const post = blogPosts[postID as keyof typeof blogPosts];
                        return (
                            <HeaderPost
                                choice={post.id}
                                date={post.date}
                                title={post.title}
                                category={post.category}
                                route={post.route}
                                content_name={post.content_name}
                                main={main?.valueOf()}
                            />
                        );
                    })}
            </div>
        </>
    );
};
