import { HeaderCategory } from "../../../Single/HeaderCategory"

const DIY = ({ title }: { title: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-2xl">
                    <HeaderCategory
                        name={title}
                        date={"2024"}
                        back={`/physics/`}
                    />
                </div>
            </div>
        </>
    )
}
export default DIY;