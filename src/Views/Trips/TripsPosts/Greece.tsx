import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Greece = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Greece 🇬🇷 and Bulgaria 🇧🇬 2015"}
                        date={"2015"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


