import { HeaderCategory } from "../../../Single/HeaderCategory";



export const Russian = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Russian 🇷🇺"}
                        date={"09/08/2023"}
                        back={`/languages/`}
                    />
                    <div className="my-20 justify-center">
                        <div className="text-3xl pt-8 pb-2">Intro</div>

                    </div>
                </div>
            </div>
        </>
    );
};


