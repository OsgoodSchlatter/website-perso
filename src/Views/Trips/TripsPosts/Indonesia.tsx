import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Indonesia = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Indonesia 🇮🇩 2017"}
                        date={"2017"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


