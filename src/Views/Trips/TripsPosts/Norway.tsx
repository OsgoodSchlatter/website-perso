import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Norway = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Norway 🇳🇴 2016"}
                        date={"2016"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


