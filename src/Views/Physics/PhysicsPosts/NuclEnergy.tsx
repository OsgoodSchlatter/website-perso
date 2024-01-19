import { Bold } from "../../../Single/Bold";
import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import React from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const NuclEnergy = ({ title, date }: { title: string, date: string }) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="max-w-2xl">
          <HeaderCategory
            name={title}
            date={date}
            back={`/physics/`}
          />
          <div className="p-4 my-20 justify-center">
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
              <div className="underline ">Connaissances des énergies</div>
            </a>
            <a
              href={
                "https://www.edf.fr/groupe-edf/espaces-dedies/l-energie-de-a-a-z/tout-sur-l-energie/produire-de-l-electricite/le-nucleaire-en-chiffres"
              }
            >
              <div className="underline">EDF</div>
            </a>
            <a
              href={
                "https://world-nuclear.org/information-library/current-and-future-generation/nuclear-power-in-the-world-today.aspx#:~:text=The%20first%20commercial%20nuclear%20power,of%20the%20total%20in%202020)."
              }
            >
              <div className="underline pb-8">World Nuclear Association</div>
            </a>
            <div className="text-3xl pb-6">1/7 Quick insight</div>

            <div className="rounded-2xl bg-slate-200">
              <div className="flex-col">
                <div>
                  - In the world in 2021, <Bold text={"440 "} />
                  nuclear plants supplied
                  <span className="font-bold"> 2600 TWh </span> of electricity,
                  which is roughly <span className="font-bold">10% </span> of
                  the world electricity production.
                </div>
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
                  - Nuclear fission is used in most nuclear plants and can be
                  used as a way to{" "}
                  <span className="font-bold">produce electricity.</span>
                </div>
              </div>
            </div>
            <div className="text-3xl pb-6 pt-6">2/7 Definition & units</div>
            <div className="text-2xl font-bold pb-4"> Definitions: </div>
            <div>
              {" "}
              - <span className="font-bold"> Nuclear energy</span> lies within
              the energy of the bounds between the components of the nucleus.
              This nucleus is made of <span className="font-bold">protons</span>
              , (electrically positively charged) and{" "}
              <span className="font-bold">neutrons</span> (without charge). The
              protons, since they have the same charge, repel each other like
              two same poles of two magnets would do. The neutrons are there to
              maintain the whole structure.
            </div>
            <div className="pt-4">
              - <span className="font-bold"> Nuclear fission: </span> in heavy
              atoms , with a lot of protons and neutrons inside the nucleus, the
              mutual repellency of all the protons can make it go unstable and
              break into two lighter nucleus and release energy at the same
              time.
            </div>
            <div className="pt-4">
              - <span className="font-bold"> Nuclear fusion: </span> in light
              atoms, with few protons and neutrons inside the nucleus, two atoms
              can merge together and form a bigger and more stabler atom, while
              also releasing energy.
            </div>
            <div className="pt-4">
              - <span className="font-bold">Radiation: </span>
              it is the emission of energy in the form of particles or waves.
            </div>
            <div className="pt-4">
              - <span className="font-bold">Radioactivity: </span>
              it is process by which an atomic nucleus loses energy by
              radiation.
            </div>
            <div className="text-2xl font-bold pt-4"> Relevant Units: </div>

            <div className="pt-4">
              <span className="font-bold">Energy: </span> measured in{" "}
              <span className="font-bold">Joule (J) </span>. The energy is what
              can make systems change their state. To move a car from point A to
              point B, you need energy. Roughly, a joule of energy is equal to
              the amount of work done when a force of 1 Newton moves a mass
              through a distance of 1 meter. It can also be written in{" "}
              <span className="font-bold">Wh</span>. In France for instance,
              379,5 TWh of electrical energy is produced by nuclear plants.
            </div>
            <div className="pt-4">
              <span className="font-bold">Power: </span> measured in{" "}
              <span className="font-bold">Watt (W)</span>. The power is derived
              from the energy by dividing it by unit of time. It is the amount
              of energy transferred by time. I.E. it takes that many energy (J)
              to climb up the Eiffel Tower. But if you want to compare the time
              you took to climb up, then you're talking about power (W).
            </div>
            <div className="pt-4">
              <span className="font-bold">Radioactivity: </span> measured in{" "}
              <span className="font-bold">Curie </span> (big unit). Therefore,
              another unit was used: the{" "}
              <span className="font-bold">Becquerel </span> (1 disintegration /
              second).
            </div>
            <div className="pt-4">
              <span className="font-bold">Absorbed doses </span>:{" "}
              <span className="font-bold">Gray </span> (it represents the energy
              of ionising ray providing energy of 1 joule to a mass of 1 kg). It
              can also be measured in{" "}
              <span className="font-bold">Sievert </span>, which is homogenous
              to Gray, but rather focus on the impact it has on the cells (can
              it break DNA, cause cancer ?)
            </div>
            <div className="text-3xl pt-6 pb-6 ">
              3/7 How it works in more details
            </div>
            <div className="text-2xl font-bold ">
              {" "}
              Binding Energy and missing mass:{" "}
            </div>
            <div className="pt-4 pb-4">
              It is possible to calculate the mass of a single neutron or a
              single proton, and also the mass of an nucleus. But, when doing
              the computation, we find that the mass of the{" "}
              <Latex>{"$Z$"}</Latex> protons + the mass of
              <Latex>{" $A-Z$"}</Latex> neutrons does not match the total mass
              of the nucleus. Einstein's famous equation{" "}
              <Latex>{"$E=mc^2$"}</Latex> solves this problem of missing mass:
              the mass left is under the form of energy, binding the nucleons
              together. This energy, if provided, can break apart the nucleus
              into its nucleons.
            </div>

            <div className="text-2xl font-bold "> Fission: </div>
            <div className="pt-4">
              When a neutron hits the nucleus of certain large atoms, there is a
              probability that the large atom's nucleus splits in two lighter
              nucleus.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuclEnergy;
