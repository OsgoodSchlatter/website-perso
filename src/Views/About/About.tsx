import { StandardHeader } from "../../Single/StandardHeader";
import img1 from "./about_pic.jpg"

const AboutContent = () => {
    return (
        <>
            <div className="flex">
                <div className="w-1/2 items-center">
                    <div className="justify-center text-3xl font-bold ">
                        Hi, I am Eloi.
                    </div>
                    <div className="text-lg ">
                        I am a French citizen born in 2000 in France.
                        <br />
                        I work in nuclear physics and computer science.
                        <br />
                        My passions are making music, gliding sports and taking the train to go explore the world.
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={img1} className="rounded" />

                    A picture of me in Salerno, Italy (2024)

                </div>

            </div>
            <br />

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
