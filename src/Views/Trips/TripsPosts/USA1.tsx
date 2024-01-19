import { HeaderCategory } from "../../../Single/HeaderCategory";

export const USA1 = ({ title }: { title: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to USA 🇺🇸 & Canada 🇨🇦 2016"}
                        date={"2016"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


