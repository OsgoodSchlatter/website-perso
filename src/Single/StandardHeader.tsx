import { Link, useNavigate } from "react-router-dom";
import logo from "../data/pics/wallpaper/osgood_trimmed.png"
import logo_contour from "../data/pics/wallpaper/logo_contour.svg"
import { Navbar } from "./Navbar";
import { NavbarContour } from "./NavbarContour";


export const StandardHeader = ({
    title,
    date,
    comment,
    content,
}: {
    title?: string;
    date?: string;
    comment?: JSX.Element;
    content?: JSX.Element;
}) => {
    return (
        <div className="bg-slate-400 w-screen min-h-screen flex flex-col">
            <Navbar />
            {/* Content below */}
            <div className="flex-1 w-full md:flex md:justify-center mt-24">
                <div className="px-2 md:w-1/2 mt-2">{content}</div>
            </div>
        </div>
    );
};

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


            <div className="bg-slate-400 w-screen min-h-screen flex flex-col">
                <Navbar />
                {/* Content below */}
                <div className="flex-1 w-full md:flex md:justify-center mt-32 md:max-w-full items-center">
                    <div className="px-2  flex justify-between mt-4">
                        <div>{content}</div>
                        <div className="invisible"></div>
                    </div>
                </div>
            </div>
        </>

    );
};

export const StandardHeaderContour = ({
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
        <div className="bg-yellow-400 w-screen min-h-screen flex flex-col">
            <NavbarContour />
            {/* Content below */}
            <div className="flex-1 w-full md:flex md:justify-center mt-24">
                <div className="px-2 md:w-1/2 mt-2">{content}</div>
            </div>
        </div>
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
    const navigate = useNavigate();
    return (
        <>
            {/* Title + Date */}

            <div className="bg-yellow-400 w-screen min-h-screen flex flex-col">
                <NavbarContour />
                {/* Content below */}
                <div className="flex-1 w-full md:flex md:justify-center mt-24 md:max-w-full items-center">
                    <div className="px-2  flex justify-between mt-4">
                        <div>{content}</div>
                        <div className="invisible"></div>
                    </div>
                </div>
            </div>

        </>

    );
};
