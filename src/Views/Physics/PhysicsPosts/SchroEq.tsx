import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import 'katex/dist/katex.min.css';
import Latex from "react-latex-next";

const SchroEq = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Schrödinger's equation"}
                        date={"19/03/2023"}
                        back={`/physics/`}
                    />
                    <div className="my-20 justify-center m-2">
                        <div className="flex  font-bold text-xl">
                            <div className="font-bold text-xl underline">Hamiltonian </div>
                            <div className="px-2">
                                <Latex>{"$\\hat{H}$"}</Latex>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            The hamiltonian <div className="px-1">  <Latex>{"$\\hat{H}$"}</Latex> </div>is the sum of the <div className="font-bold mx-1">kinetic energy</div> <Latex>{"$\\hat{T}$"}</Latex> and of the <div className="font-bold mx-1">potential energy</div> <Latex>{"$\\hat{V}$"}</Latex>.
                        </div>
                        <div className="border-solid border-2 border-sky-500 w-fit mt-2">
                            <Latex>{"$\\hat{H}=\\hat{T}+\\hat{V}$"}</Latex>
                        </div>
                        <div className="mt-2"> The kinetic energy can be written like so: <Latex>{"$\\hat{T}=\\frac{\\hat{p}^{2}}{2m}$"}</Latex> with the mass <Latex>{"$m$"}</Latex> and the momentum <Latex>{"$\\hat{p}$"}</Latex>.

                            The momentum operator for a quantum particle can be written as  <Latex>{"$\\hat{p}=-i\\hbar\\nabla$"}</Latex>.
                            With: <Latex>{"$ \\nabla =\\frac{\\partial }{\\partial x}\\hat{i} + \\frac{\\partial }{\\partial y}\\hat{j} +\\frac{\\partial }{\\partial z}\\hat{k} $"}</Latex> for a given basis (<Latex>{"$\\hat{i},\\hat{j},\\hat{k}$"}</Latex>) and <Latex>{"$\\hbar$"}</Latex> the Planck's constant.
                            <div className="mt-2">

                                Let's try to understand the momentum operator. Unformally, we can say first that the momentum is the generator of the spatial change.
                                I try to remember it this way: let's say that <Latex>{"$\\hat{dL}$"}</Latex> is an infinitesimal displacement vector in the basis mentionned above. Then we can write that <Latex>{"$\\hat{p}\\hat{dL}=-i\\hbar$"}</Latex>.
                                Then I know that <Latex>{"$\\hbar$"}</Latex>  is the smallest unit of energy that can be exchanged during a period. It's homogenous to an energy multiplied by time. So <Latex>{"$\\hbar$"}</Latex> can be written as such <Latex>{"$\\hbar=E_{min}*t_0$"}</Latex> with <Latex>{"$E_{min}$"}</Latex> the minimal energy and  <Latex>{"$t_0$"}</Latex>  a duration.  Therefore we have <Latex>{"$\\frac{\\hat{p}\\hat{dL}}{t_0}=-iE_{min}$"}</Latex>.
                                Overall, we can say that the momentum operator measured on an infinitesimal distance on a certain period is equal (in absolute value) to the minimal energy that can be shared in the universe. </div>
                        </div>
                        <div className="mt-2"> Therefore, <Latex>{"$\\hat{T}$"}</Latex> is equal to <Latex>{"$\\frac{(-i\\hbar\\nabla)^2}{2m}$"}</Latex> which is <Latex>{"$\\frac{-\\hbar^2\\nabla^2}{2m}$"}</Latex>. </div>
                        <div className="mt-2"> <Latex>{"$\\hat{V}$"}</Latex> is the potential energy. In the case of Coulomb interactions, <Latex>{"$\\hat{V}$"}</Latex> can be written like so: <Latex>{"$\\hat{V}=\\frac{-e^2}{4 \\pi \\epsilon r}$"}</Latex>. It is similar to potential energy in the case of a gravitationnal field.</div>
                        <div className="items-center flex mt-2"> <div className="pr-2">
                            Finally, we have the Hamiltonian equal to </div> <div className="border-solid border-2 border-sky-500 w-fit text-xl">
                                <Latex>{"$\\hat{H}=\\frac{-\\hbar^2\\nabla^2}{2m} + \\frac{-e^2}{4 \\pi \\epsilon r}$"}</Latex>
                            </div> </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SchroEq;
