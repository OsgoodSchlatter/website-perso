import { HeaderCategory } from "../../../Single/HeaderCategory"
import { Title1 } from "../../../Single/Styles";
import diy from "./diy-hydrogen2.png"

const DIY = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center m-2">
                <div className="w-full sm:w-2/3 md:w-2/3 lg:max-w-4xl xl:max-w-5xl mx-4">
                    <HeaderCategory
                        name={title}
                        date={date}
                        back={`/physics/`}
                    />
                    <Title1 text="Hydrogen Generator" />
                    <a href="https://youtu.be/zrnLRDMs94c?si=dSoyjsgjuIQ9-yBy">
                        <img src={diy} className="px-2 border-b-2" width="300" alt="Image" />
                    </a>
                    List of items:
                    <ul className="list-disc ml-6">
                        <li>Hermetic jar ✅ </li>
                        <li>Nails ✅</li>
                        <li>Battery (6V) ✅ </li>
                        <li>Copper wires ✅</li>
                        <li>Water ✅</li>
                        <li>Solder iron ✅</li>
                        <li>Tin ✅</li>
                        <li>Driller ❌</li>
                        <li>Potassium hydroxyde ❌</li>
                        <li>2 handles ❌</li>
                        <li>Tubes ❌</li>


                    </ul>
                </div>
            </div>

        </>
    )
}
export default DIY;