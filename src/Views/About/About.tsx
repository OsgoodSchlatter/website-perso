import { StandardHeader } from "../../Single/StandardHeader";

const AboutContent = () => {
    return (
        <>
            <div >
                hey
            </div>
        </>
    );
};
const intro = <div >
    This is me
</div>

export const About = () => {
    return (<StandardHeader title={"Welcome"} date={"2024"} comment={intro}
        content={< AboutContent />} />)
}
