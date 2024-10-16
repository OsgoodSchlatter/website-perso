import { useState } from "react";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import { BlogCategory, blogPostsArray, BlogPostType } from "./Data";
import "./Home.css";

// todo, do a struct that contains each article in one subdomain

export const Pages = new Map<string, string>([
  ["/chess", "chess"],
  ["/trips", "trips"],
  ["/maths", "maths"],
  ["/cs", "computer science"],
  ["/music", "music"],
  ["/sport", "sport"],
  ["/books", "books"],
  ["/physics", "physics"],
  ["/climate", "climate"],
  ["/languages", "languages"],
]);

export const Home = () => {
  const [sortedPosts, setSortedPosts] = useState<BlogPostType[]>(blogPostsArray);
  const [value, setValue] = useState<string>(" ");



  const handleSort = (category: BlogCategory) => {
    const filteredPosts = blogPostsArray.filter(post => post.category === category );
    setSortedPosts(filteredPosts);
  };
  return (
    <div className="flex bg-white justify-center">
      <div className="w-3/4 items-center">
        <div className="p-10 font-bold text-4xl text-center" >Osgood's website</div>
        <div className="border-b-2 border-blue-500 rounded" />
        <div className="flex flex-wrap justify-evenly p-10 font-bold">
          {Array.from(Pages.entries())
            .map(([key, value]) => (
              <div className="px-4 pt-1 hover:underline">
                <div className={value == "climate" ? 'text-green-400 text-lg my-link' : 'text-black text-lg my-link'} onClick={() => { handleSort(value as BlogCategory); setValue(value); }}>
                  {value}
                </div>

              </div>
            ))}
        </div>
        <div className="border-b-2 border-blue-500 rounded" />
        <div className="justify-between flex items-align">
          <div className="font-bold rounded w-fit p-1 mt-2">
            {value}
          </div>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 p-1 mt-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => { (setSortedPosts(blogPostsArray)); setValue("") }}>
            Display all
          </button>
        </div>
        <ListOfPostsHeader main={true} blogPosts={sortedPosts} />
        <div className="fixed bottom-4 right-4 text-gray-500 text-sm">
          made with love by Eloi and chatgpt
        </div>
      </div>
    </div >
  );
};
