import { useParams } from 'react-router-dom';
import { Pages2 } from '../Views/Main';
import { BlogPostType } from '../Views/Home/Data';
import { ListOfPostsHeader } from './ListOfPostsHeader';

export const CategoryDisplayer = ({ blogPosts, route }: { blogPosts: BlogPostType[], route: string }) => {

    const toDisplayBlogPosts = Object.values(blogPosts)
        .filter((post: BlogPostType) => (
            post.category === Pages2.get(route)
        ));
    return (
        <ListOfPostsHeader
            blogPosts={toDisplayBlogPosts}
        />
    )
};


export const PostDisplayer = ({ blogPosts, route }: { blogPosts: BlogPostType[], route: string }) => {
    const { postID } = useParams<{ postID: string }>();

    const toDisplayBlogPosts = Object.values(blogPosts)
        .filter((post: BlogPostType) => post.category === Pages2.get(route));

    // Find the post with the matching ID
    const post: BlogPostType | undefined = toDisplayBlogPosts.find(post => post.id === parseInt(postID ?? ''));

    if (!post) {
        return <div>Loading...</div>;
    }

    const Component = post.content;

    return <Component title={post.title} date={post.date} />;
};