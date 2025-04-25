import { StandardHeader } from "../../Single/StandardHeader";
import img1 from "./about_pic.jpg"

const AboutContent = () => {
    return (
        <>
            <div>

                <div className="flex justify-between items-center">

                    <div className="text-3xl font-bold w-2/3">
                        Hi, I am Eloi.
                    </div>
                    <div className="mb-4 flex justify-center items-center w-1/3">
                        <div className="text-center">
                            <img src={img1} className="rounded mx-auto w-3/4" />
                            <p>A picture of me in Salerno, Italy (2024)</p>
                        </div>
                    </div>
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
