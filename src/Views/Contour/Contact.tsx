import { GrInstagram } from "react-icons/gr";
import { StandardHeaderContour } from "../../Single/StandardHeader";

const Form = () => {
    return (
        <>
            <form
                action="https://formspree.io/f/xpwvlawj"
                method="POST"
                className="flex flex-col gap-3 max-w-md mx-auto"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="p-2 border rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    className="p-2 border rounded"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="p-3 bg-yellow-500 text-black font-fatkat rounded"
                >
                    Send
                </button>
            </form>
        </>
    )
}

export const FormContour = () => {
    return (
        <div className="bg-yellow-400 w-screen min-h-screen">
            <StandardHeaderContour link={"/contour/1"} content={<Form />} />
        </div>
    );
};
