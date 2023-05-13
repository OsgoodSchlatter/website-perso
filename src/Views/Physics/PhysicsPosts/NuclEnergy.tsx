import { HeaderPost } from "../../../Single/HeaderPost";
import "katex/dist/katex.min.css";
import React from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const NuclEnergy = ({ postID }: { postID: string }) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="max-w-4xl">
          <HeaderPost
            name={"How does Nuclear Energy work"}
            date={"06/05/2023"}
            back={`/physics/`}
          />
          <div className="my-20 justify-center">
            <div className="text-3xl pt-8 pb-2">Intro</div>
            <div>
              In this article, I wish to explain how{" "}
              <span className="font-bold">Nuclear Energy </span> works
            </div>

            <div className="text-3xl pt-8 pb-2">Sources:</div>

            <a
              href={
                "https://www.connaissancedesenergies.org/fiche-pedagogique/energie-nucleaire"
              }
              className="max-w-4xl"
            >
              <div className="underline">Connaissances des énergies</div>
            </a>
            <div className="text-3xl pt-8 pb-2">1/7 Quick insight</div>

            <div className="flex-col">
              <div>
                - Nuclear energy comes from{" "}
                <span className="font-bold">nuclear reactions </span> that
                happen at the scale of the nucleus of atoms.
              </div>
              <div>
                - There are different forms of nuclear reactions, but the most
                famous are nuclear <span className="font-bold">fission </span>{" "}
                and nuclear <span className="font-bold">fusion</span>.
              </div>
              <div>
                - Nuclear fission is used in most nuclear plants and can be used
                as a way to{" "}
                <span className="font-bold">produce electricity.</span>
              </div>
            </div>
            <div className="text-3xl pt-8 pb-2">2/7 Definition & units</div>
            <div>
              {" "}
              Nuclear energy lies within the energy of the bounds between the
              components of the nucleus. This nucleus is made of{" "}
              <span className="font-bold">protons</span>, (electrically
              positively charged) and{" "}
              <span className="font-bold">neutrons</span> (without charge). The
              protons, since they have the same charge, repel each other like
              two same poles of two magnets would do. The neutrons are there to
              maintain the whole structure.
            </div>
            <div className="pt-4">
              In heavy atoms, with a lot of protons and neutrons inside the
              nucleus, the mutual repellency of all the protons can make it go
              unstable and break into two lighter nucleus and release energy at
              the same time. That is what we call{" "}
              <span className="font-bold">nuclear fission</span>.
            </div>
            <div className="pt-4">
              In light atoms, with few protons and neutrons inside the nucleus,
              two atoms can merge together and form a bigger and more stabler
              atom, while also releasing energy. That is what we call{" "}
              <span className="font-bold">nuclear fusion</span>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuclEnergy;
