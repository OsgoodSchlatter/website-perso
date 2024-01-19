import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Lyon = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Lyon 🇫🇷 2022"}
                        date={"2022"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


