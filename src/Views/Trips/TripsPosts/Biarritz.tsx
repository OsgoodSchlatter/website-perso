import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Biarritz = ({ title }: { title: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Biarritz 🇫🇷 & San Sebastian 🇪🇸 2020"}
                        date={"2020"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


