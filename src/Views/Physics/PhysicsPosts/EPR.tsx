import { HeaderPost } from "../../../Single/HeaderPost";
import "katex/dist/katex.min.css";
import React from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const EPR = ({ postID }: { postID: string }) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="max-w-4xl">
          <HeaderPost
            name={"How does an EPR work"}
            date={"06/05/2023"}
            back={`/physics/`}
          />
          <div className="my-20 justify-center">
            <div className="text-3xl pt-8 pb-2">Intro</div>
            <div>In this article, I wish to explain how an EPR works</div>

            <Latex>{"Latex"}</Latex>
            <div className="text-3xl pt-8 pb-2">Source</div>

            <a
              href={
                "https://www.connaissancedesenergies.org/fiche-pedagogique/reacteur-nucleaire-epr"
              }
              className="max-w-4xl"
            >
              <div className="underline">Connaissances des énergies</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EPR;
