import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Tunisia = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Tunisia 🇹🇳 2005"}
                        date={"2005"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


