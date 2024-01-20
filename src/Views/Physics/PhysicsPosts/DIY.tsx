import { HeaderCategory } from "../../../Single/HeaderCategory"
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
                    <img src={diy} className="px-2 border-b-2" width="300" alt="Image" />
                </div>
            </div>

        </>
    )
}
export default DIY;