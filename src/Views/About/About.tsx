import { StandardHeader } from "../../Single/StandardHeader";
import img1 from "./about_pic.jpg"

const AboutContent = () => {
    return (
        <>
            <div>
                <div className="mb-4 flex justify-center items-center">
                    <div className="text-center">
                        <img src={img1} className="rounded mx-auto w-1/2" />
                        <p>A picture of me in Salerno, Italy (2024)</p>
                    </div>
                </div>

                <div className="text-3xl font-bold ">
                    Hi, I am Eloi.
                </div>
                <div className="text-lg mb-4">
                    I am a French citizen born in 2000 in France.
                    <br />
                    I work in nuclear physics and computer science.
                    <br />
                    My passions are making music, gliding sports and taking the train to go explore the world.
                </div>
            </div>

        </>
    );
};


export const About = () => {
    return (<StandardHeader title={"about"} date={""}
        content={< AboutContent />} />)
}
