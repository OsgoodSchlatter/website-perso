import { Link } from "react-router-dom";

export const Pages = new Map<string, string>([
  ["/chess", "chess"],
  ["/trips", "trips"],
  ["/maths", "maths"],
  ["/guitar", "guitar"],
  ["/cs", "computer science"],
  ["/piano", "piano"],
  ["/sport", "sport"],
  ["/books", "books"],
  ["/cryptography", "cryptography"],
  ["/physics", "physics"],
  ["/climate", "climate"],
]);

export const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-fill w-[1050px] items-center">
        {/* <div className="p-2 mt-2 rounded border-transparent bg-slate-200 px-4 py-2 font-medium text-blue-900 flex items-center">
          {" "}
          <div className="text-xl">Welcome to Eloi's website :)</div>
        </div>
        <div className="p-2 mt-2 rounded border-transparent bg-slate-200 px-4 py-2 font-medium text-blue-900 flex items-center">
          {" "}
          <div className="text-xl">
            Here are topics I like and my interactions with them so far
          </div>
        </div> */}
        <div className="p-10 font-bold text-3xl text-center"> Topics</div>

        <div className=" border-b-2 border-blue-500 rounded" />
        <div className="flex justify-evenly p-10 font-bold">
          {Array.from(Pages.entries())
            .sort(() => Math.random() - 0.5)
            .map(([key, value]) => (
              <div className="p-2 hover:underline">
                <Link to={key} className="text-black">
                  {value}
                </Link>
              </div>
            ))}
        </div>
        <div className=" border-b-2 border-blue-500 rounded" />
      </div>
    </div>
  );
};
