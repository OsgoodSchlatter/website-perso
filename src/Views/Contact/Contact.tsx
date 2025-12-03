import { Link } from "react-router-dom";
import { StandardHeader } from "../../Single/StandardHeader";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { FaBookOpen, FaHome, FaUtensilSpoon } from "react-icons/fa";
import { BiLogoYoutube, BiSpreadsheet } from "react-icons/bi";
import Pdf from "../../CV-2025.pdf";
import { TfiWrite } from "react-icons/tfi";

const ContactContent = () => {
  return (
    <>
      <div className=" justify-center">
        <div className=" hover:bg-slate-600 rounded-lg">
          <a
            href={"https://www.linkedin.com/in/eloi-besnard-489a69170/"}
          >
            <div className="flex p-1 justify-between">
              <span className="px-2 mt-1 font-bold text-2xl">LinkedIn</span>{" "}
              <GrLinkedin size={30} />
            </div>
          </a>
        </div>
        <div className="hover:bg-slate-600 rounded-lg">
          <a href={"https://github.com/OsgoodSchlatter"}>
            <div className="flex p-1 justify-between">
              <span className="px-2 mt-1 font-bold text-2xl">GitHub</span>{" "}
              <GrGithub size={30} />
            </div>
          </a>
        </div>
        <div></div>
        <div className=" hover:bg-slate-600 rounded-lg">
          <Link to="/publi_talks/1">
            <div className="flex p-1 justify-between">
              <span className="px-2 mt-1 font-bold text-2xl">Publications</span>{" "}
              <FaBookOpen size={30} />
            </div>
          </Link>
        </div>
        <div className="rounded-lg  hover:bg-slate-600">
          {" "}
          <a href={Pdf} target="_blank">
            <div className="flex p-1 justify-between">
              <span className="px-2 mt-1 font-bold text-2xl">Resume</span>{" "}
              <BiSpreadsheet size={30} />
            </div>
          </a>
        </div>
        <div className="rounded-lg  hover:bg-slate-600">
          {" "}
          <a href={"https://www.youtube.com/@osgoodSchlatter16"}>
            <div className="flex p-1 justify-between">
              <span className="px-2 mt-1 font-bold text-2xl">YouTube</span>{" "}
              <BiLogoYoutube size={30} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};


export const Contact = () => {
  return (<StandardHeader title={"contact"} date={""}
    content={< ContactContent />} />)
}
