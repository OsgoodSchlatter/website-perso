import { HeaderCategory } from "../../../Single/HeaderCategory"

const DIY = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-2xl">
                    <HeaderCategory
                        name={title}
                        date={date}
                        back={`/physics/`}
                    />
                </div>
            </div>
        </>
    )
}
export default DIY;