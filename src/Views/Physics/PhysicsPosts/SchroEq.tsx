import { HeaderPost } from "../../../Single/HeaderPost";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import React from "react";
import 'katex/dist/katex.min.css';

const frac = "\`$\frac{1}{2}$\`";

const SchroEq = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderPost
                        name={"Schrödinger's equation"}
                        date={"19/03/2023"}
                        back={`/physics/`}
                    />
                    <div className="my-20 justify-center">
                        <div className="text-3xl pt-8 pb-2">Intro</div>
                        <div>
                            In this article, I wish to explain what is the Schrödinger equation, how we can find it and more.
                        </div>



                        <div>

                            <Latex>
                                {frac}
                            </Latex>
                            <Latex>
                                {
                                    "$\\frac{${a}}{${b}} \\times \\frac{4}{11}$$ "
                                }
                            </Latex>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchroEq;
