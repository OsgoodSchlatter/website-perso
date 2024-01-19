import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Nice = ({ title }: { title: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Nice 🇫🇷 2021"}
                        date={"2021"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


