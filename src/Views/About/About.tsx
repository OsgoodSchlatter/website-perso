import { StandardHeader } from "../../Single/StandardHeader";
import img1 from "./about_pic.jpg"

const AboutContent = () => {
    return (
        <>
            <div className="justify-center text-xl font-bold">
                Hi, I am Eloi.
                <div className="mb-2" />
                <img src={img1} />
                <div>
                    A picture of me in Italy
                </div>
            </div>
            <br />

            I am a French citizen born in 2000 in France.
            <br />
            I work in nuclear physics.
            <br />
            My passions are making music, gliding sports and taking the train to go explore the world.
            <br />
            <br />
            <br />

        </>
    );
};


export const About = () => {
    return (<StandardHeader title={"about"} date={""}
        content={< AboutContent />} />)
}
