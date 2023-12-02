import { Header } from "../../Single/Header";
import { HeaderCategory } from "../../Single/HeaderCategory";
import ptef from "./ptef.jpeg";

type BooksType = [string, number, string, string];

const BooksArray: BooksType[] = [
  ["Plan de Transformation de l'Economie Française, The Shift Project  ", 2020, "ptef", "climate"],

];
export const Books = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="max-w-4xl">
          <HeaderCategory
            name={"Books I recommend"}
            date={"2023"}
            back={`/home/`}
          />

          <div className="p-4 my-20 justify-center">

            <a className="flex items-center text-xl p-2 hover:underline" href="https://theshiftproject.org/article/ptef-livre-et-site-web/">
              Plan de Transformation de l'Economie Française, The Shift Project 2023
              <img src={ptef} className="px-2 border-b-2" width="100" alt="Image" /> </a>

          </div>
        </div>

      </div>
    </>
  );
};
