import { Link } from "react-router-dom";

export type article = {};

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
  ["/cryptography", "cryptography"],
  ["/physics", "physics"],
  ["/climate", "climate"],
]);

export const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 items-center">
        <div className="p-10 font-bold text-4xl text-center"> Topics</div>

        <div className=" border-b-2 border-blue-500 rounded" />
        <div className="flex flex-wrap justify-evenly p-10 font-bold">
          {Array.from(Pages.entries())
            .sort(() => Math.random() - 0.5)
            .map(([key, value]) => (
              <div className="p-2 hover:underline">
                {value == "climate" ? (
                  <Link to={key} className="text-green-400">
                    {value}
                  </Link>
                ) : (
                  <Link to={key} className="text-black">
                    {value}
                  </Link>
                )}
              </div>
            ))}
        </div>
        <div className=" border-b-2 border-blue-500 rounded" />
      </div>
    </div>
  );
};
