import { HeaderCategory } from "../../../Single/HeaderCategory";

export const LuxGerNeth2022 = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Luxembourg 🇱🇺, Germany 🇩🇪 & the Netherlands 🇳🇱 2022"}
                        date={"2022"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


