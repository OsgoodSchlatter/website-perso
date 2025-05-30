import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { StandardHeader } from "../../Single/StandardHeader";
import { videos } from "../../data/datatype/data_img";

const content =
    <>
        <div className="p-4 ">
            {videos.map((video) => (
                <div key={video.id}>
                    <h2 className="text-xl font-bold mb-2">{video.title + " - " + video.date}</h2>
                    <h3 className="text-lg text-gray-400 mb-2">{video.comment}</h3>

                    <div className="w-full rounded-2xl overflow-hidden shadow-lg h-80 mb-8">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&controls=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                    </div>
                </div>
            ))}
        </div>
    </>


const title =
    "Video"

const Video_Creation = () => {
    return (
        <>
            <StandardHeader title={title} date={"2025"} content={content} />
        </>
    );
};

export default Video_Creation;
