

import { HeaderCategory } from "../../../Single/HeaderCategory";

export const London = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center ">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Trip to London 🇬🇧 2019"}
                        date={"2019"}
                        back={`/trips/`}
                    />
                </div>
            </div>
        </>
    );
};

