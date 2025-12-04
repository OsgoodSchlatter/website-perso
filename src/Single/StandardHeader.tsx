import { Link } from "react-router-dom";
import logo from "../data/pics/wallpaper/osgood_trimmed.png"
import logo_contour from "../data/pics/wallpaper/logo_contour.svg"

export const StandardHeaderContour = ({ title, date, comment, content, link }: { title?: string, date?: string, comment?: JSX.Element, content?: JSX.Element, link: string }) => {
    return (
        <>
            <Link
                to={link}
                className=" font-fatkat text-yellow-300 flex justify-center rounded-lg  md:text-[70px] text-[60px] text-shadow items-center"
            >
                Contour
                <img src={logo_contour} alt="Logo" className="w-16 md:w-20 rounded-xl" />

            </Link>
            <div className=" w-full md:flex md:justify-center">
                <div className="px-2 md:w-1/2 mt-4">
                    {content}
                </div>
            </div>
        </>
    )
}

export const StandardHeader = ({ title, date, comment, content }: { title?: string, date?: string, comment?: JSX.Element, content?: JSX.Element }) => {
    return (
        <>
            <Link
                to="/"
                className="absolute top-3 left-1/2 -translate-x-1/2"
            >
                <img
                    src={logo}
                    alt="Logo"
                    className="w-64 h-auto"
                />
            </Link>

            <div className="md:flex md:justify-center w-full items-center mt-12">
                <div className="px-2 md:w-1/2 flex justify-between items-end md:mt-4 mt-8">
                    <div className="md:text-4xl text-3xl font-bold italic"> {title} </div>
                    <div className="text-xl font-bold"> {date} </div>
                </div>
            </div>
            <div className=" w-full md:flex md:justify-center">
                <div className="px-2 md:w-1/2 mt-4">
                    {comment}
                </div>
            </div>
            <div className=" w-full md:flex md:justify-center">
                <div className="px-2 md:w-1/2 mt-4">
                    {content}
                </div>
            </div>
        </>
    )
}

export const PicsHeader = ({
    title,
    date,
    comment,
    content,
    logo,
    link,
}: {
    title?: string;
    date?: string;
    comment?: JSX.Element;
    content?: JSX.Element;
    logo?: string;
    link: string;
}) => {
    return (
        <>
            {/* Title + Date */}


            <Link
                to={link}
                className="absolute top-3 left-1/2 -translate-x-1/2"
            >
                <img
                    src={logo}
                    alt="Logo"
                    className="w-64 h-auto"
                />
            </Link>

            <div className="md:flex md:justify-center w-full md:max-w-full items-center mt-12">

                <div className="px-2 flex justify-between items-end mt-4">
                    <div className="md:text-4xl text-3xl font-bold italic">{title}</div>
                    <div className="text-xl font-bold">{date}</div>
                </div>


                {/* Comment */}

                <div className="px-2 flex justify-between mt-4">
                    <div>{comment}</div>
                    <div className="invisible"></div>
                </div>


                {/* Content */}

                <div className="px-2  flex justify-between mt-4">
                    <div>{content}</div>
                    <div className="invisible"></div>
                </div>
            </div>
        </>

    );
};

export const PicsHeaderContour = ({
    title,
    date,
    comment,
    content,
    link,
}: {
    title?: string;
    date?: string;
    comment?: JSX.Element;
    content?: JSX.Element;
    link: string;
}) => {
    return (
        <>
            {/* Title + Date */}



            <Link
                to={link}
                className=" font-fatkat text-yellow-300 flex justify-center rounded-lg  md:text-[70px] text-[60px] text-shadow items-center"
            >
                Contour
                <img src={logo_contour} alt="Logo" className="w-16 md:w-20 rounded-xl" />

            </Link>

            <div className="md:flex md:justify-center w-full md:max-w-full items-center ">

                <div className="px-2 flex justify-between items-end">
                    <div className="md:text-4xl text-3xl font-bold italic">{title}</div>
                    <div className="text-xl font-bold">{date}</div>
                </div>


                {/* Comment */}

                <div className="px-2 flex justify-between mt-4">
                    <div>{comment}</div>
                    <div className="invisible"></div>
                </div>


                {/* Content */}

                <div className="px-2  flex justify-between mt-4">
                    <div>{content}</div>
                    <div className="invisible"></div>
                </div>
            </div>

        </>

    );
};
