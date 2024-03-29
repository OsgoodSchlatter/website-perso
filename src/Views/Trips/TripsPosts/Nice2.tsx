import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Nice2 = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Nice 🇫🇷 2022"}
                        date={"2022"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


