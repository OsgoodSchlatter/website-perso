import { HeaderCategory } from "../../../Single/HeaderCategory";
import "katex/dist/katex.min.css";
import 'katex/dist/katex.min.css';
import Latex from "react-latex-next";



const LineWithCurvedLine = () => {
    const svgWidth = 500;
    const svgHeight = 200;
    const lineLength = svgWidth - 20; // Adjust the line length as needed

    const legends = ['0', '1/2hw', '3/2hw', '5/2hw', '7/2hw', '']; // Adjust legends as needed

    const legendSpacing = lineLength / (legends.length - 1);
    const curvedLineStartX = 10 + 2 * legendSpacing;
    const curvedLineEndX = 10 + 3 * legendSpacing;

    return (
        <svg width={svgWidth} height={svgHeight} className="w-full sm:w-2/3 md:w-2/3 lg:max-w-2xl xl:max-w-2xl mx-4">
            <defs>
                <marker
                    id="arrow"
                    markerWidth="10"
                    markerHeight="10"
                    refX="5"
                    refY="5"
                    orient="auto"
                    markerUnits="strokeWidth"
                >
                    <path d="M0,0 L0,10 L10,5 z" fill="black" />
                </marker>
            </defs>
            <line x1="10" y1={svgHeight / 2} x2={lineLength + 10} y2={svgHeight / 2} stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
            {legends.map((legend, index) => (
                <text x={10 + index * legendSpacing} y={svgHeight / 2 + 20} textAnchor="middle" key={index}>
                    {legend}
                </text>
            ))}

            <path
                d={`M ${curvedLineStartX} ${svgHeight / 2 - 20} Q ${(curvedLineStartX + curvedLineEndX) / 2} ${svgHeight / 2 - 40
                    } ${curvedLineEndX} ${svgHeight / 2 - 20}`}
                stroke="black"
                strokeWidth="2"
                fill="transparent"

            />
            <text x={(curvedLineStartX + curvedLineEndX) / 2} y={svgHeight / 2 - 50} textAnchor="middle">

                +hw


            </text>
        </svg>
    );
};








const SchroEq = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-full sm:w-2/3 md:w-2/3 lg:max-w-2xl xl:max-w-2xl mx-4">
                    <HeaderCategory
                        name={title}
                        date={date}
                        back={`/physics/`}
                    />
                    <div className="my-20 justify-center m-2">
                        <div className="flex font-bold text-xl">
                            <div className="font-bold text-xl underline">Hamiltonian </div>
                            <div className="px-2">
                                <Latex>{"$\\hat{H}$"}</Latex>
                            </div>
                        </div>
                        <div className=" mt-2">
                            The hamiltonian  <Latex>{"$\\hat{H}$"}</Latex>  is the sum of the kinetic energy  <Latex>{"$\\hat{T}$"}</Latex>  and of the potential energy  <Latex>{"$\\hat{V}$"}</Latex>.
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
                            Therefore, <Latex>{"$\\hat{T}$"}</Latex> is equal to <Latex>{"$\\frac{(-i\\hbar\\nabla)^2}{2m}$"}</Latex> which is <Latex>{"$\\frac{-\\hbar^2\\nabla^2}{2m}$"}</Latex>. </div>
                        <div className="mt-2"> <Latex>{"$\\hat{V}$"}</Latex> is the potential energy. Depending of the nature of the potential energy, <Latex>{"$\\hat{V}$"}</Latex> will be written differently. </div>
                        <div className="mt-2 items-center">
                            In the case of Coulomb interactions, <Latex>{"$\\hat{V}$"}</Latex> can be written like so: <Latex>{"$\\hat{V}=\\frac{-e^2}{4 \\pi \\epsilon r}$"}</Latex>. It is similar to potential energy in the case of a gravitationnal field.
                            The Hamiltonian is equal to <div className="border-solid border-2 border-sky-500 w-fit text-xl">
                                <Latex>{"$\\hat{H}=\\frac{-\\hbar^2\\nabla^2}{2m} + \\frac{-e^2}{4 \\pi \\epsilon r}$"}</Latex>
                            </div>
                        </div>
                        <div className="mt-2 items-center">
                            In the case of a harmonic oscillator, the potential varies with space but not time. In one dimension, <Latex>{"$\\hat{V}$"}</Latex> can be written like so: <Latex>{"$\\hat{V}=\\frac{m\\omega^2x^2}{2}$"}</Latex>. In 3D, the Hamiltonian is equal to <div className="border-solid border-2 border-sky-500 w-fit text-xl">
                                <Latex>{"$\\hat{H}=\\frac{-\\hbar^2\\nabla^2}{2m} + \\frac{m\\omega^2r^2}{2}$"}</Latex>
                            </div>
                        </div>
                    </div>
                    <div className="my-20 justify-center m-2">
                        <div className="flex  font-bold text-xl">
                            <div className="font-bold text-xl underline">Harmonic oscillator </div>
                        </div>
                        <div className="mt-2">Let's recall that in the case of a harmonic oscillator, the hamiltonian can be written like such:   <Latex>{"$\\hat{H}=\\frac{-\\hbar^2\\nabla^2}{2m} + \\frac{m\\omega^2r^2}{2}$"}</Latex>.
                            Let's introduce the ladder operator. The ladder operator lowers or increases the eigen values of a given of another operator. In the case of quantum mechanics, the ladder operator <Latex>{"$\\hat{a}$"}</Latex> can be expressed this way:
                            <Latex>{"$\\hat{a}=\\sqrt{\\frac{m\\omega}{2\\hbar}}(\\hat{x}+\\frac{i}{m\\omega}\\hat{p})$"}</Latex> or  <Latex>{"$\\hat{a}^{\\dag}=\\sqrt{\\frac{m\\omega}{2\\hbar}}(\\hat{x}-\\frac{i}{m\\omega}\\hat{p})$"}</Latex>.
                            This operator helps to shift between the different energy eigen states. Let's try to understand that. First, let's rewrite the Hamiltonian with the ladder operator. <Latex>{"$\\hat{H}=\\hbar\\omega(\\hat{a}^{\\dag}\\hat{a} + \\frac{1}{2})$"}</Latex>, or <Latex>{"$\\hat{H}=\\hbar\\omega(\\hat{N} + \\frac{1}{2})$"}</Latex>. Therefore if we write the eigenvalue equation for the Hamiltonian we have <Latex>{"$\\hat{H}\\ket{n}=E_n\\ket{n}$"}</Latex>, where <Latex>{"$E_n$"}</Latex> is the energy eigenvalue, which is discrete. <Latex>{"$E_n=\\hbar\\omega(n+\\frac{1}{2})$"}</Latex>.

                        </div>
                        <div className="mt-2">
                            We can visualize the discrete energy levels on the line below:
                        </div>

                        <LineWithCurvedLine></LineWithCurvedLine>
                        <div className="mt-2">
                            We can see that for n=0, the energy is not 0. So the minimal energy of the system is not 0.
                        </div>
                        <div className="mt-2">
                            Now, let's try to see what happens when applying the raising operator <Latex>{"$\\hat{a}^\\dag$"}</Latex> on an eigenstate:
                            <Latex>{"$\\hat{a}^\\dag\\ket{n}=\\sqrt{n+1}\\ket{n+1}$"}</Latex>.
                            So <Latex>{"$\\ket{n}=\\frac{1}{\\sqrt{n}}\\hat{a}^\\dag\\ket{n-1}$"}</Latex>
                            We find by recurrence that: <Latex>{"$\\ket{n}=\\frac{1}{\\sqrt{n!}}(\\hat{a}^\\dag)^{n}\\ket{0}$"}</Latex>   </div>

                        <div className="mt-2">
                            In the ground state, we have <Latex>{"$\\hat{a}^\\dag\\ket{0}=0$"}</Latex>. Knowing that <Latex>{"$\\hat{a}=\\sqrt{\\frac{m\\omega}{2\\hbar}}(\\hat{x}+\\frac{i}{m\\omega}\\hat{p})$"}</Latex>, we can write that <Latex>{"$\\sqrt{\\frac{m\\omega}{2\\hbar}}(\\hat{x}+\\frac{i}{m\\omega}\\hat{p})\\ket{\\psi_0(x)}=0$"}</Latex>
                            And we know that <Latex>{"$\\hat{x}\\ket{\\psi}=x\\psi(x)$"}</Latex> and <Latex>{"$\\hat{p}\\ket{\\psi}=-i\\hbar \\frac{\\partial \\psi(x)} {\\partial x}$"}</Latex>.
                            Therefore we have <Latex>{"$(\\frac{m\\omega}{h}x+\\frac{d}{dx})\\psi_0(x)=0$"}</Latex>.
                            We can seperate variables as such: <Latex>{"$\\frac{m\\omega}{h}\\int_{}^{} x \\,dx = - \\int_{}^{} \\frac{1}{\\psi_0(x)} \\frac{d\\psi_0(x)}{dx}\\,dx$"}</Latex>.
                            After integrating, we find <Latex>{"$\\frac{m\\omega}{2\\hbar}x^2 =  ln(\\psi_0(x)) + K$"}</Latex>.
                            Finally, we have: <div className="border-solid border-2 border-sky-500 w-fit text-xl"><Latex>{"$Ae^{-\\frac{m\\omega}{2\\hbar}x^2} =  \\psi_0(x)$"}</Latex> </div>Which is of gaussian shape
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SchroEq;
