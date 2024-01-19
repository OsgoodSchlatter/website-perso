import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Norway = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Norway 🇳🇴 2016"}
                        date={"2016"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


