import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Bordeaux = ({ title }: { title: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Bordeaux 🇫🇷 2023"}
                        date={"2023"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


