import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import React from "react";
import 'katex/dist/katex.min.css';

const Radio = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center m-2">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Radioactivity"}
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
                    </div>


                </div>
            </div>
        </>
    );
};

export default Radio;
