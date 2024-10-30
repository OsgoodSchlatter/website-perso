import { StandardHeader } from "../../Single/StandardHeader";

export const RussianContent = () => {
    return (
        <>
            <div className="text-3xl underline">Vocabulary</div>
            <div> Are you coming ? = Ты пойдешь?</div>
            <div> I am late = Я опоздаю</div>
            <div> Как это мило = how nice</div>
            <div>Xочу спать=I want to sleep</div>
            <div>Сильно=very</div>

        </>
    );
};

const intro = <div>
    This page is gathering some notions of the Russian language, that I am trying to learn
</div>

export const Russian = () => {
    return (<StandardHeader title={"Russian"} date={"2024"} comment={intro}
        content={< RussianContent />} />)
}


