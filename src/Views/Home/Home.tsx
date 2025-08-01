import { useEffect, useState } from "react";
import { ListOfPostsHeader } from "../../Single/ListOfPostsHeader";
import { BlogCategory, blogPostsArray, BlogPostType } from "./Data";
import "./Home.css";
import bg from "../../data/pics/wallpaper/wp4.jpg"


// todo, do a struct that contains each article in one subdomain

export const Pages = new Map<string, string>([
  ["/chess", "chess"],
  ["/trips", "trips"],
  ["/maths", "maths"],
  ["/cs", "computer science"],
  ["/music", "music & video"],
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
    // Save the filter value to localStorage
    // localStorage.setItem('selectedFilter', category);
    const filteredPosts = blogPostsArray.filter(post => post.category === category);
    setSortedPosts(filteredPosts);
    setValue(category);
  };
  return (
    <div className="flex justify-center " style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <div className="md:w-1/2 w-3/4 items-center mb-2">
        <div className="flex flex-wrap justify-evenly mt-2 font-bold px-2 bg-slate-500 rounded-md">
          {Array.from(Pages.entries())
            .map(([key, value]) => (
              <div className="p-1">
                <div className="px-4 hover:underline p-1" >
                  <div className={value == "climate" ? 'text-green-400 text-lg' : 'text-lg  -500'} onClick={() => { handleSort(value as BlogCategory); setValue(value); }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex items-align mt-2 justify-between">

          <div className="font-bold text-lg ">
            filters: {value}
          </div>
          <div onClick={() => { setSortedPosts(blogPostsArray); setValue(" "); }} className=" text-md italic hover:bg-slate-600 bg-slate-500  rounded-md">
            <div className="p-1">
              Reset
            </div>
          </div>
        </div>


        <div className="justify-between flex items-align mt-10">
          <div className="font-bold text-2xl">
            Post
          </div>
          <div className="font-bold text-2xl">
            Last updated
          </div>
        </div>
        <ListOfPostsHeader blogPosts={sortedPosts} />
        <div className="fixed bottom-4 right-4 text-gray-500 text-sm">
          made with love by Osgood and chatgpt
        </div>

      </div>
      {/* <div className="fixed bottom-0 w-full">
        <svg className="wave" viewBox="0 0 1440 160">
          <path fill="#003366" fill-opacity="1" d="M0,64L30,58.7C60,53,120,43,180,48C240,53,300,75,360,96C420,117,480,139,540,138.7C600,139,660,117,720,106.7C780,96,840,96,900,106.7C960,117,1020,139,1080,138.7C1140,139,1200,117,1260,106.7C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          <path fill="#0073e6" fill-opacity="1" d="M0,128L30,122.7C60,117,120,107,180,112C240,117,300,139,360,160C420,181,480,203,540,202.7C600,203,660,181,720,170.7C780,160,840,160,900,170.7C960,181,1020,203,1080,202.7C1140,203,1200,181,1260,170.7C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          <path fill="#ffffff" fill-opacity="1" d="M0,160L30,154.7C60,149,120,139,180,144C240,149,300,171,360,192C420,213,480,235,540,234.7C600,235,660,213,720,202.7C780,192,840,192,900,202.7C960,213,1020,235,1080,234.7C1140,235,1200,213,1260,202.7C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div> */}
    </div >
  );
};
