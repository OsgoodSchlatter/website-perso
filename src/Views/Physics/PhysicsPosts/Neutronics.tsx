import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import Tooltip2 from "../../../Single/Tooltip_chatgpt";
import React, { useState } from "react";
import PWR from "./PWR.png";
import coulomb from "./coulomb_vs_strong_interaction.png"
import valley from "./valley_of_stability.png"
import { Title1 } from "../../../Single/Styles";

const UO2 = <Latex>{"$UO_2$"}</Latex>;
const CO2 = <Latex>{"$CO_2$"}</Latex>;
const D2O = <Latex>{"$D_2O$"}</Latex>;
const H2O = <Latex>{"$H_2O$"}</Latex>;
const H2O_b = <Latex>{"$H_2O$ (boiling)"}</Latex>;
const U3Si2 = <Latex>{"$U_3Si_2$ "}</Latex>;

export type Content_Tooltip = {
    content: string | JSX.Element;
    tooltip: string;
};

const fuelData: Content_Tooltip[][] = [
    [
        {
            content: "U (Metal)",
            tooltip:
                "Uranium alloys that have been used include uranium aluminum, uranium zirconium, uranium silicon",
        },
        { content: "0.72 (nat)", tooltip: "" },
        { content: "Graphite", tooltip: "Graphite" },
        { content: CO2, tooltip: "Carbon dioxyde" },
        { content: "AGR,UNGG", tooltip: "Advanced cooled gas reactor" },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "0.72 (nat)", tooltip: "" },
        { content: "Graphite", tooltip: "graphite" },
        { content: "CO2", tooltip: "Carbon Dioxyde" },
        { content: "HTR", tooltip: "High temperature reactor" },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "0.72 (nat)", tooltip: "" },
        { content: D2O, tooltip: "Deuterium oxyde, heavy water" },
        { content: D2O, tooltip: "Deuterium oxyde, heavy water" },
        {
            content: "CANDU",
            tooltip:
                "The CANDU (Canada Deuterium Uranium) is a Canadian pressurized heavy-water reactor design used to generate electric power",
        },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "3-4%", tooltip: "" },
        { content: H2O, tooltip: "water" },
        { content: H2O, tooltip: "water" },
        { content: "PWR", tooltip: "Pressurized water reactor" },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "2%", tooltip: "" },
        { content: "Graphite", tooltip: "Graphite" },
        { content: H2O_b, tooltip: "boiling water" },
        { content: "RBMK", tooltip: "Reaktor Bolshoy Moshchnosti Kanalny" },
    ],
    [
        { content: UO2, tooltip: "Dioxyde d'uranium" },
        { content: "3%", tooltip: "" },
        { content: H2O, tooltip: "water" },
        { content: H2O_b, tooltip: "boiling water" },
        { content: "BWR", tooltip: "Boiling water reactor" },
    ],
    [
        { content: U3Si2, tooltip: "Uranium disilicide" },
        { content: "20%", tooltip: "tooltip" },
        { content: H2O, tooltip: "water" },
        { content: H2O, tooltip: "water" },
        {
            content: "OSIRIS",
            tooltip: "Osiris was a research nuclear reactor of the CEA",
        },
    ],
    [
        {
            content: "U (metal)",
            tooltip:
                "Uranium alloys that have been used include uranium aluminum, uranium zirconium, uranium silicon",
        },
        { content: "90%", tooltip: "" },
        { content: H2O, tooltip: "Water" },
        { content: H2O, tooltip: "Water" },
        {
            content: "ORPHEE",
            tooltip: "Orphée was a research nuclear reactor of the CEA",
        },
    ],
    [
        { content: "UO2 and PuO2", tooltip: "Mixed oxide fuel" },
        { content: "15%", tooltip: "" },
        { content: "/", tooltip: "" },
        { content: "Na", tooltip: "Sodium" },
        { content: "SFR", tooltip: "Sodium-cooled fast reactor" },
    ],
];

const Neutronics = ({ title, date }: { title: string; date: string }) => {
    const [selectedNumber, setSelectedNumber] = useState(1);

    const handleChange = (event: any) => {
        setSelectedNumber(parseInt(event.target.value, 10));
    };

    const renderContent = () => {
        switch (selectedNumber) {
            case 1:
                return (
                    <>
                        <div className="text-4xl font-bold">
                            Chapter 1
                        </div>
                        <div className="font-bold text-lg mt-2">
                            General facts about nuclear energy
                        </div>
                        <div className="text-lg font-bold mt-2">
                            Summary
                        </div>
                        <div className="italic underline">
                            1.1 - History of Fermi's Pile
                        </div>
                        <div className="italic underline">
                            1.2 - Principle of nuclear power plant
                        </div>
                        <div className=" italic underline">
                            1.3 - Overview of nuclear power plant structure (of type PWR)
                        </div>
                        <div className=" italic underline">
                            1.4 - Fission
                        </div>
                        <div className="italic underline">
                            1.5 - Principle of chain reactions
                        </div>
                        <div className=" italic underline">
                            1.6 - Main moderator and coolants
                        </div>
                        <div className=" italic underline">
                            1.7 - Nuclear fuel cycles
                        </div>

                        <div className="text-lg font-bold mt-6">
                            Work
                        </div>
                        <div className=" italic underline">
                            1.1 - History of Fermi's Pile
                        </div>
                        In 1942, Fermi and his team achieved the first chain fission
                        reaction. The neutron population increased even after that the
                        initial source was removed. It meant that a chain reaction was
                        occuring in the pile. After the chain reaction generated a power of
                        half a watt, Fermi introduced the cadmium control rods.
                        <div className="mt-4 italic underline">
                            1.2 - Principle of nuclear power plant
                        </div>
                        What mainly distinguishes a nuclear power plant and more classic
                        plants like coal or gas plants is the heat source. A nuclear power
                        plants contains a heat source that heats a gas to a
                        high-temperature. The gas expands in a turbine and makes it spin. In
                        this way, the energy of the gas is transformed into mechanical
                        energy. This turbine is bound to a rotor which spins inside a
                        stator. Electricity can be generated by the variation of the
                        magnetic field of a magnet fixed onto the rotor. Coming back to the
                        gas, once it has lost a bit of its energy in the turbine, it cools
                        down and gets cycled back to the heat source. The efficiency of the
                        conversion of heat to mechanical energy cannot exceed a value known
                        as the Carnot Efficiency.
                        <Latex>{`$$ \\eta = 1- \\frac{T_{cold}}{T_{hot}} $$`}</Latex>
                        Where T(cold) is the temperature of the cold source and T(hot) is
                        the temperature of the heat source. In a nuclear reactor, the heat
                        source is not a reaction of combustion between a fossil fuel
                        (combustile) and oxygen (comburant). Rather, it is a controlled
                        chain reaction of fission of atoms, which, when slowing down in
                        water, heat it.
                        <div className="mt-4 italic underline">
                            1.3 - Overview of nuclear power plant structure (of type PWR)
                        </div>
                        There are different types of reactor, with different advantages and
                        drawbacks. In France, all nuclear power plants are of type PWR. This
                        acronym means Pressurized Water Reactor. It refers to the fact that
                        water is heated to high temperatures (between 280 °C to 320 °C) but
                        remains in liquid state, because of high pressure (155 bars or MPa).
                        <div className="mt-4 mb-4 text-center">
                            <img className="rounded" src={PWR} alt="" />
                            <h3 className="underline">Figure: Diagram of PWR</h3>
                        </div>
                        The part where the fission occurs is the core. The water flows
                        inside and outside the core in what is called the vessel. It can
                        withstand pressures of 155 bars. The water that flows in the core is
                        contained in a closed loop. The pressure of 155 bars is maintained
                        by the pressurizer. As said, this pressure helps to maintain the
                        water in liquid state, which is of high temperature (around 280 °C
                        at the core inlet, and 320 °C at the core outlet.) There are 3 or 4
                        loops in which water goes out of the vessel. Each contains a steam
                        generator and a pump. One of them only contains a pressurizer.
                        <br />
                        The steam generators (SG) are there to extract the heat of the water
                        from the primary circuit to heat the water of the secondary circuit.
                        The water of the secondary circuit is not exposed to high pressures
                        and therefore, when in contact of the water of the primary circuit
                        (always through pipes, not direct contact), it heats and becomes
                        vapor. This vapor then goes up in the SG. At the top of the SG are
                        several drums whose role is to get rid of most of the moisture. The
                        moisture and droplets of vapor are condensed and get back in the SG.
                        <br />
                        This vapor is sent to the turbines and makes them spin. Afterwards
                        the steam is condensed and cooled by a condenser which also acts as
                        a heat exchanger. The third circuit gets involved to cool the steam
                        and transform it back to liquid state. Then the water is sent back
                        to the SG to finish the cycle.
                        <div className="mt-4 italic underline">
                            1.4 - Fission and forces at stakes in a nucleus
                        </div>
                        The nucleus puts forward a balance between Coulomb forces and the nuclear force.
                        The Coulomb force (or electromagnetic interaction) acts between charged particles only.
                        In the nucleus, it therefore only involves protons. It is a long-range force and is proportional
                        to the inverse of the square of the distance between two considered objects. It acts attractively on bodies of opposite charge
                        but repulsively on bodies of same size. Therefore, in a nucleus, protons could not be confined in a such a small place if only the Coulomb force was involved.
                        The strong force can explain the balance of the nucleus.
                        It is a force that acts on any nucleons (regardless of charge) at very-short range (1 fm) but of great intensity.
                        It is actually a force that comprises the strong nuclear force and the weak nuclear force.
                        It acts as a strong glue that ties nucleons together.
                        <div className="mt-4 mb-4 justify-center flex">
                            <img className="rounded w-60" src={coulomb} alt="" />
                        </div>
                        <div className="text-center">
                            <h3 className="underline">Figure: Coulomb and strong interactions in nucleus</h3>
                        </div>
                        The number of protons and neutrons in a nucleus puts forward the best balance between the Coulomb interaction
                        and the nuclear force. If the proportion is not optimal, then the nucleus is radioactive. The ratio of neutron to protons
                        is about 1 for light nuclei. For heavier nuclei, it gradually reaches 1.5. This can be seen in a valley of stability curve
                        <div className="mt-4 mb-4 justify-center flex">
                            <img className="rounded w-60" src={valley} alt="" />
                        </div>
                        <div className="text-center">
                            <h3 className="underline">Figure: Valley of stability (Wikipedia)</h3>
                        </div>
                        Since the repelling of each protons is correlated to the square of the number of charges, it is easier
                        for light nuclei to hold themselves together than for larger nuclei. Hence, heavy nuclei are less strongly bonded than other smaller nuclei.
                        The fission of a heavy nuclei into two fragments increases the bond energy [To be completed (add detail about fission)].
                        Energy released when undergoing fission is around 200 Mev whereas in chemical reactions it is around several eV.
                        <div className="mt-4 italic underline">
                            1.5 - Chain reactions
                        </div>
                        Chain reactions are a concept that is more familiar that it may sound. For example a fire is a chain reaction.
                        Fire is an oxydation reaction that takes place between a combustible (wood) and a comburant (<Latex>{`$O_2$`}</Latex>), but that intially needs some energy to occur (provided by a lighter for instance).
                        It then produces heat which can exceed the oxydation energy threshold and allow further oxydation reaction etc. <br /> A fission reaction is about the same. The chain takes place in the fact that a neutron can induce a fission, which releases energy and other neutrons which themselves can trigger other fissions... as long as there is a fissile element around.
                        In order to control the chain reaction and not make a bomb out of it, one needs to check factor <Latex>{`$K$`}</Latex>.
                        <br />
                        Let <Latex>{`$\\omega$`}</Latex> be the probability that a neutron causes a fission, and  <Latex>{`$\\nu$`}</Latex> the average number of neutrons that are emitted for one fission.
                        Then <Latex>{`$K = \\omega * \\nu$`}</Latex> is the average number of neutrons that are emitted for one initial neutron that triggered a fission.
                        <br />
                        If we have <Latex>{`$N$`}</Latex> fission at time <Latex>{`$T=0$`}</Latex> <Latex>{`$$ N fissions => NK fissions => NK^2 fissions=> NK^3 fissions => ... $$`}</Latex>
                        <br />
                        Then if <Latex>{`$K=1$`}</Latex>, naturally we see that the number of fissions is always <Latex>{`$N$`}</Latex>. We call this state a <a className="font-bold">critical state</a>. Critical does not mean anything more than being <a className="font-bold">stable</a>.
                        If <Latex>{`$K>1$`}</Latex>, the reaction accelerates, it is called a <a className="font-bold">super critical state</a>.
                        If <Latex>{`$K<1$`}</Latex>, the reaction decelerates, it is called a <a className="font-bold">sub critical state</a>.

                    </>
                );
            case 2:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">
                            2 - Nuclear physics for neutron physicists
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">
                            3 - Introduction to neutron physics
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">4 - Point kinetics</div>
                    </>
                );
            case 5:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">5 - Diffusion equation</div>
                    </>
                );
            case 6:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">
                            6 - One-group/diffusion theory
                        </div>
                    </>
                );
            case 7:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">
                            7 - Neutron slowing down
                        </div>
                    </>
                );
            case 8:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">
                            8 - Resonant absorption of neutrons
                        </div>
                    </>
                );
            case 9:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">
                            9 - Thermalisation of neutrons
                        </div>
                    </>
                );
            case 10:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">10 - Multigroup theory</div>
                    </>
                );
            case 11:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">
                            11 - Poising by fission products
                        </div>
                    </>
                );
            case 12:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">12 - Fuel evolution</div>
                        <div className="my-20 justify-center">
                            <div className="font-bold text-xl mb-3 underline">
                                Fuel management
                            </div>
                            <div className="overflow-x-auto">
                                <div className="grid grid-cols-14 gap-2 ">
                                    <div className="font-bold text-1xl text-center w-25 col-start-1 col-end-3 col-span-2 ">
                                        Fuel{" "}
                                    </div>
                                    <div className="font-bold text-1xl text-center w-25  col-start-3 col-end-5 col-span-2">
                                        Enrichment
                                    </div>
                                    <div className="font-bold text-1xl text-center w-25 col-start-5 col-end-7 col-span-2">
                                        Moderator
                                    </div>
                                    <div className="font-bold text-1xl text-center w-25 col-start-7 col-end-9 col-span-2">
                                        Collant
                                    </div>
                                    <div className="font-bold text-1xl text-center w-22 col-start-9 col-end-12 col-span-1">
                                        System
                                    </div>
                                </div>
                                <div className="grid grid-cols-14 gap-2">
                                    {fuelData.map((data, index) => (
                                        <React.Fragment key={index}>
                                            {data.map((item, itemIndex) => (
                                                <div
                                                    className={`text-1xl text-center w-28 col-start-${1 + 2 * itemIndex
                                                        } col-end-${3 + 2 * itemIndex} col-span-2`}
                                                    key={itemIndex}
                                                >
                                                    <Tooltip2 text={item.tooltip}>
                                                        {item.content}
                                                    </Tooltip2>
                                                </div>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 13:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">
                            13 - Temperature effect
                        </div>
                    </>
                );
            case 14:
                return (
                    <>
                        <div className="font-bold text-lg mt-2">
                            14 - Boltzmann equation
                        </div>
                    </>
                );
        }
    };

    return (
        <>
            <div className="flex justify-center m-2">
                <div className="w-full sm:w-2/3 md:w-1/2 lg:max-w-4xl xl:max-w-5xl mx-4 mt-8">
                    <div className="text-5xl font-bold">
                        Neutron Physics
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="mt-2">
                            This knowledge is mostly taken from the book "Neutron Physics" of
                            Paul Reuss.
                        </div>
                        <select
                            value={selectedNumber}
                            onChange={handleChange}
                            className="bg-gray-200 text-black p-8 py-2 rounded max-h-10"
                        >
                            {Array.from({ length: 14 }, (_, i) => i + 1).map((number) => (
                                <option key={number} value={number}>
                                    {number}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-between"></div>
                    <div className="bg-slate-200 p-2 mt-4 rounded">{renderContent()}</div>
                </div>
            </div>
        </>
    );
};

export default Neutronics;
