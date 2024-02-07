import { HeaderCategory } from "../../../Single/HeaderCategory"
import { Title1, Title2 } from "../../../Single/Styles";
import diy from "./diy-hydrogen2.png"


const Electrolysis = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center m-2">
                <div className="w-full sm:w-2/3 md:w-2/3 lg:max-w-4xl xl:max-w-5xl mx-4">
                    <HeaderCategory
                        name={title}
                        date={date}
                        back={`/physics/6`}
                    />
                    <Title1 text="How to build a Geiger Counter" />
                    <Title2 text="Electronic parts" mt={0} />
                </div>
            </div>

        </>
    )
}
export default Electrolysis;