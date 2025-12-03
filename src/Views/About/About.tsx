import { Link } from "react-router-dom";
import { StandardHeader } from "../../Single/StandardHeader";
import img1 from "./about_pic.jpg"
import logo from "../../data/pics/wallpaper/osgood_trimmed.png"


const AboutContent = () => {
    return (
        <>
            <div>

                <div className="text-center">
                    <img src={img1} className=" w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded mx-auto w-3/4" />
                    <p>A picture of me in Salerno, Italy (2024)</p>
                </div>
                <div className="text-3xl font-bold w-2/3 mt-4">
                    Hi, I am Eloi.
                </div>
                <div className="text-lg mb-4">
                    I am a French citizen born in 2000 in France.
                    <br />
                    I work in nuclear physics and computer science.
                    <br />
                    My passions are making music, gliding sports and taking the train to go explore the world.
                    <br />
                    This website summarizes all of the things I enjoy doing in my life. I hope you can like it too !
                    <br />
                    I got inspired by <a className="underline" href="https://dri.es/">this guy</a> and  <a className="underline" href="https://vitalik.eth.limo/">this guy</a> to create my website.
                </div>

            </div>

        </>
    );
};


export const About = () => {
    return (<StandardHeader title={"about"} date={""}
        content={< AboutContent />} />)
}
