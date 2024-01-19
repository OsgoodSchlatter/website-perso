import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';

const Radio = ({ title }: { title: string }) => {
    return (
        <>
            <div className="flex justify-center m-2">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={title}
                        date={"02/10/2023"}
                        back={`/physics/`}
                    />
                    <div className="my-20 justify-center">
                        <div className="font-bold text-xl mb-3 underline">
                            Decay Processes
                        </div>


                        <div className="mb-4">
                            <div>
                                <div className="flex">
                                    <div className="font-bold pr-1">
                                        Alpha
                                    </div>
                                    (strong nuclear interaction):
                                </div>
                                <div className="px-3">
                                    - A heavy nucleus emits an alpha particle (helium nucleus  <Latex>{"${}^4_2He^{}_2$"}</Latex>)
                                </div>
                                <div className="px-3">
                                    - They are highly ionising and weakly penetrating. Stopped by a sheet of paper.
                                </div>
                                <div className="px-3 border-solid border-2 border-sky-500 w-fit">
                                    - <Latex>{"${}^A_ZX⟶{}^{A-4}_{Z-2}Y+{}^4_2He$"}</Latex>
                                </div>

                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex">
                                <div className="font-bold pr-1">
                                    Beta
                                </div>
                                (weak nuclear interaction):
                            </div>
                            <div className="px-3">
                                - A neutron turns into a proton and emits a beta particle (electron <Latex>{"$e$"}</Latex>)
                            </div>
                            <div className="px-3">
                                - They are moderately ionising and moderately penetrating. They are stopped by a thin sheet of aluminium.
                            </div>
                            <div className="px-3 border-solid border-2 border-sky-500 w-fit">
                                - <Latex>{"$β^{-}$"}</Latex>: <Latex>{"$n⟶p+e^{-}+ ν^{-}$"}</Latex>
                            </div>
                            <div className="px-3 border-solid border-2 border-sky-500 w-fit">
                                - <Latex>{"$β^{+}$"}</Latex>: <Latex>{"$n⟶p+e^{+}+ ν$"}</Latex>
                            </div>
                            <div className="px-3 border-solid border-2 border-sky-500 w-fit">
                                - Electronic capture: <Latex>{"$n+e^{-}⟶n+ν$"}</Latex>
                            </div>
                        </div>
                        <div className="font-bold text-xl mb-3 underline">
                            Units
                        </div>
                        <div className="flex">
                            <div className="font-bold pr-1">
                                Joule (J):
                            </div>
                            unit of energy
                        </div>
                        <div className="flex">
                            <div className="font-bold pr-1">
                                Becquerel (Bq):
                            </div>
                            equal to one disintegration per second
                        </div>
                        <div className="flex">
                            <div className="font-bold pr-1">
                                Curie (Ci):
                            </div>
                            equal to <Latex>{"$ 3.7*10^{10}$"}</Latex> disintegration per second
                        </div>
                        <div className="flex">
                            <div className="font-bold pr-1">
                                Gray (Gy):
                            </div>
                            measure of ionizing radiation dose received by a kg of a body (J/kg)
                        </div>
                        <div className="flex">
                            <div className="font-bold pr-1">
                                Sievert (Sv):
                            </div>
                            Gy with a biological quality factor
                        </div>
                        <div className="font-bold text-xl mb-3 mt-6 underline">
                            Beyond the nucleus
                        </div>
                        <div className="grid grid-col-3 gap-2">
                            <div className="col-start-1 col-end-2 col-span-1">
                                <div className="font-bold">
                                    Quarks:
                                </div>
                                <div className="grid grid-col-3 w-fit">

                                    <div className="col-start-1 col-end-2 col-span-1 border-2 border-red-500 w-10 p-1 text-center">
                                        Up
                                    </div>
                                    <div className="col-start-2 col-end-3 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        c
                                    </div>
                                    <div className="col-start-3 col-end-4 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        t
                                    </div>

                                    <div className="col-start-1 col-end-2 col-span-1 border-2 border-red-500 w-10 p-1 text-center">
                                        d
                                    </div>
                                    <div className="col-start-2 col-end-3 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        s
                                    </div>
                                    <div className="col-start-3 col-end-4 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        b
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-2 col-end-3 col-span-1">
                                <div className="font-bold">
                                    Bosons de Jauge:
                                </div>
                                <div className="grid grid-col-1 w-fit">
                                    <div className="col-start-1 col-end-2 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        g
                                    </div>
                                    <div className="col-start-1 col-end-2 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        <Latex>{"$\\gamma$"}</Latex>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-col-3 gap-2">
                            <div className="col-start-1 col-end-2 col-span-1">
                                <div className="font-bold">
                                    Leptons:
                                </div>
                                <div className="grid grid-col-3 w-fit">

                                    <div className="col-start-1 col-end-2 col-span-1 border-2 border-red-500 w-10 p-1 text-center">
                                        e
                                    </div>
                                    <div className="col-start-2 col-end-3 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        <Latex>{"$\\mu$"}</Latex>
                                    </div>
                                    <div className="col-start-3 col-end-4 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        <Latex>{"$\\tau$"}</Latex>
                                    </div>

                                    <div className="col-start-1 col-end-2 col-span-1 border-2 border-red-500 w-10 p-1 text-center">
                                        <Latex>{"$\\nu_e$"}</Latex>
                                    </div>
                                    <div className="col-start-2 col-end-3 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        <Latex>{"$\\nu_{\\mu}$"}</Latex>

                                    </div>
                                    <div className="col-start-3 col-end-4 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        <Latex>{"$\\nu_{\\tau}$"}</Latex>

                                    </div>
                                </div>
                            </div>
                            <div className="col-start-2 col-end-3 col-span-1">
                                <div className="font-bold">
                                    Bosons de Jauge:
                                </div>
                                <div className="grid grid-col-1 w-fit">
                                    <div className="col-start-1 col-end-2 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        <Latex>{"$Z^{0}$"}</Latex>
                                    </div>
                                    <div className="col-start-1 col-end-2 col-span-1 border-2 border-sky-500 w-10 p-1 text-center">
                                        <Latex>{"$W$"}</Latex>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Radio;
