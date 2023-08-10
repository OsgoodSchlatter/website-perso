import { HeaderCategory } from "../../../Single/HeaderCategory";

export const BxHayAmst23 = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to Bruxelles 🇧🇪, La Haye 🇳🇱, Amsterdam 🇳🇱 2023"}
                        date={"2023"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};


