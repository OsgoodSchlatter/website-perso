import { HeaderCategory } from "../../../Single/HeaderCategory";

export const Annecy = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Annecy 🇫🇷 2020"}
                        date={"2020"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


