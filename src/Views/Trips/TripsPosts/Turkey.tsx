import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Turkey = ({ title }: { title: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Turkey 🇹🇷 2010"}
                        date={"2010"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


