import { StandardHeader } from "../../Single/StandardHeader";
import img1 from "./me.jpg"

const AboutContent = () => {
    return (
        <>
            <div className=" justify-center">
                <img src={img1} className="w-100" />
                <div>
                    A picture of me in Venise (2024)
                </div>
            </div>
            <br />
            <br />
            <div className="text-2xl">
                My name is Eloi Besnard and I am the current year - 2000 years old.
            </div>
            <br />
            <div className="text-lg">
                I was born next to Paris but lived most of my life in Brittany, next to the Gulf of Morbihan.
            </div>
        </>
    );
};


export const About = () => {
    return (<StandardHeader title={"about"} date={""}
        content={< AboutContent />} />)
}
