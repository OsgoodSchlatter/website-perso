import Latex from "react-latex-next";
import Foldable from "../../../Single/Foldable";
import { HeaderCategory } from "../../../Single/HeaderCategory"
import { StandardHeader } from "../../../Single/StandardHeader";
import { Title1, Title2 } from "../../../Single/Styles";
import diy from "./diy-hydrogen2.png"
import owndiy from "./hydro.jpeg"
import model2 from "./model2.jpeg"
import withSalt from "./withSalt.jpeg"



const ListOfItems = () => (
    <div>
        < ul className="list-disc ml-6" >
            <li>Hermetic jar </li>
            <li>Nails </li>
            <li>Battery (6V) (no AC current) </li>
            <li>Copper wires</li>
            <li>Water</li>
            <li>Driller </li>
            <li>Tubes </li>
            <li>NaOH or KOH</li>
            <li>Glue</li>
        </ul >
    </div>
)

const H2 = <Latex>{"$H_2$"}</Latex>;
const H2O = <Latex>{"$H_2O$"}</Latex>;
const OH = <Latex>{"$OH^{-}$"}</Latex>;
const NaOH = <Latex>{"$NaOH$"}</Latex>;
const KOH = <Latex>{"$KOH$"}</Latex>;
const NaCl = <Latex>{"$NaCl$"}</Latex>;


const O2 = <Latex>{"$O_2$"}</Latex>;
const reac_cat = <Latex>{"$2 H_2O + 2e^{−} \\rightarrow H_2 + 2 OH^{−}$"}</Latex>;
const reac_ano = <Latex>{"$4 OH^{−}	\\rightarrow	 O_2 + 2H_2O + 4 e^{−}$"}</Latex>;

const comment = <div>
    In this post, I want to share my own creation of a {H2} generator.
</div>

const content = <>
    <Title2 text="What is the objective?" mt={0} />
    The objective is to create {H2} from {H2O} and current.
    This is done by putting two parts of conducting materials in a mixture of water and another component called the elctrloyte.
    Then we run a current through the conductive parts that are connected by the water.
    <Title2 text="What does it look like?" mt={2} />
    I originally got inspired by this video (you can click on it):
    <a href="https://youtu.be/zrnLRDMs94c?si=dSoyjsgjuIQ9-yBy" >
        <img src={diy} className="border-4 border-black rounded mt-2" width="400" alt="Image" />
    </a>
    <div className="mt-6">
        And I came up with this design:
        <img src={model2} className="border-4 border-black rounded mt-2" width="400" alt="Image" />
        "The Elephant"
    </div>
    <Foldable title="> List of items I used" content={<ListOfItems />} />
    <Title2 text="First step: NaCl" mt={2} />
    I did not have {KOH} or {NaOH} at first so I used salt ({NaCl}) as an electrolyte. But it did not really work out:
    <img src={withSalt} className="border-4 border-black rounded" width="200" alt="Image" />
    It gave out a weird green smog.


    < Title2 text="How does it work?" mt={2} />
    Two main reactions are taken into account.The first one works on one electrode, and the other one on the other electrode.
    One electrode is called the cathode and the following reaction happens at its end:
    <div className="text-center  mt-1 mb-1">
        {reac_cat}
    </div>
    This reaction is called the "reduction of {H2O}".It consumes electrons and releases {H2}
    <div></div>
    The other electrode is called the anode and the following reaction happens at its end:
    <div className="text-center mt-1 mb-1">
        {reac_ano}
    </div>
    This reaction is called an "oxydation of {H2O}".It releases electrons and {O2}.
    The {OH}ions are the electrolyte.They are put in the solution thanks to {NaOH}. It can also be {KOH}.
    The solution is therefore alkalyne.Similar reactions can also happen in acid solutions but we need different electrodes and electrolytes.
    < Title2 text="Videos" mt={2} />
    <div>
        <a href="https://www.youtube.com/shorts/aCSORtpwLtA" className="hover:underline"> Video 1: creating {H2}</a>
    </div>
    <div className="mb-4">
        <a href="https://www.youtube.com/shorts/YBcWSyBs4Ro" className="hover:underline"> Video 2: setting {H2} to fire </a>
    </div>
</>


const Electrolysis = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <StandardHeader title={title} date={date} comment={comment} content={content} />
        </>
    )
}
export default Electrolysis;