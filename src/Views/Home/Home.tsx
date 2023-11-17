import { Link } from "react-router-dom";
import Tooltip2 from "../../Single/Tooltip_chatgpt";
import "./Home.css";

// todo, do a struct that contains each article in one subdomain

export const Pages = new Map<string, string>([
  ["/chess", "chess"],
  ["/trips", "trips"],
  ["/maths", "maths"],
  ["/guitar", "guitar"],
  ["/cs", "computer science"],
  ["/piano", "piano"],
  ["/sport", "sport"],
  ["/books", "books"],
  ["/physics", "physics"],
  ["/climate", "climate"],
  ["/languages", "languages"],

]);

export const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 items-center">
        <div className="p-10 font-bold text-4xl text-center"> Topics</div>

        <div className="border-b-2 border-blue-500 rounded" />
        <div className="flex flex-wrap justify-evenly p-10 font-bold">
          {Array.from(Pages.entries())
            .sort(() => Math.random() - 0.5)
            .map(([key, value]) => (
              <div className="px-4 pt-1 hover:underline">
                {value == "climate" ? (
                  <Link to={key} className="text-green-400 text-lg my-link">
                    {value}
                  </Link>
                ) : (
                  <Link to={key} className="text-black text-lg my-link">
                    {value}
                  </Link>
                )}
              </div>
            ))}
        </div>
        <div className=" border-b-2 border-blue-500 rounded" />
        <div className="mt-8 text-center">
          <Tooltip2 text="How to contact me and know more about me">
            <Link to={"/recruiter"}>

              <div className="bg-blue-300 rounded p-2 w-fit hover:bg-blue-400 text-xl font-bold">You are a recruiter ?</div>
            </Link>
          </Tooltip2>
        </div>
        <div className="fixed bottom-4 right-4 text-gray-500 text-sm">
          made with love by Eloi and chatgpt
        </div>
      </div>
    </div>
  );
};
