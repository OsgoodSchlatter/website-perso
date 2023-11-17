import { HeaderCategory } from "../../Single/HeaderCategory";
import Pdf2 from "../../Green_Tracking_Article.pdf";

export const Recruiter = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="max-w-4xl">
          <HeaderCategory
            name={"How to contact / recruit me"}
            date={"2023"}
            back={`/home/`}
          />

          <div className="p-4 my-20 justify-center">

            <div className="text-xl font-bold p-2 hover:underline">1- See my CV</div>
            <div className="text-xl font-bold p-2 hover:underline">2- See my publications</div>
            <div className="text-xl font-bold p-2 hover:underline">3- Explore my website</div>
            <div className="text-xl font-bold p-2 hover:underline">4- Write me</div>
          </div>

        </div>
      </div>
    </>
  );
};
