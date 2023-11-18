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

            <div className="text-xl font-bold p-2 ">1- See my CV</div>
            <div className="text-xl font-bold p-2 ">2- See my publications</div>
            <div className="text-xl font-bold p-2 ">3- Explore my website</div>
            <div className="text-xl font-bold p-2 ">4- Write me
              <div className="pl-20 font-normal hover:none">tel: +33 7 83 67 76 20</div>
              <div className="pl-20 font-normal hover:none">mail: eloiposeidon@gmail.com</div>
              <div className="pl-20 font-normal hover:none">mail2: eloi.besnard@ensta-paris.fr</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
