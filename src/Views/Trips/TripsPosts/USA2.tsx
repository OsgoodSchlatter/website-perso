import { HeaderCategory } from "../../../Single/HeaderCategory";

export const USA2 = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to USA 🇺🇸 2018"}
                        date={"2018"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


