import { HeaderCategory } from "../../../Single/HeaderCategory";



export const Russian = ({ postID }: { postID: string }) => {
    return (
        <>
            <div className="flex justify-center m-2">
                <div className="max-w-4xl">
                    <HeaderCategory
                        name={"Russian 🇷🇺"}
                        date={"09/08/2023"}
                        back={`/languages/`}
                    />
                    <div className="my-20 justify-center">
                        <div className="text-3xl pt-8 pb-2 underline">Vocabulary</div>
                        <div> Are you coming ? = Ты пойдешь?</div>
                        <div> I am late = Я опоздаю</div>
                        <div> Как это мило = how nice</div>
                        <div>Сильно=very</div>
                        <div>Xочу спать=I want to sleep</div>

                    </div>
                </div>
            </div>
        </>
    );
};


