import { Link, useNavigate } from "react-router-dom";

const lastModifiedDates = require("../lastModifiedDates.json");

interface LastModifiedDates {
    [key: string]: string;
}

export const HeaderPost = ({
    title,
    choice,
    route,
    content_name,
}: {
    choice: number;
    date: string;
    title: string;
    category?: string,
    main?: Boolean,
    route: string,
    content_name?: string,
}) => {
    const navigate = useNavigate();
    const handleClick = (postId: number) => {
        navigate(`/${route}/${postId}`);
    };
    const typedLastModifiedDates = lastModifiedDates as LastModifiedDates;

    const lastModified = typedLastModifiedDates[content_name + ".tsx"] || "Unknown";
    const formattedDate = lastModified !== "Unknown"
        ? new Date(lastModified).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        : lastModified;

    return (
        <div className="justify-between flex">

            <div
                className="text-xl hover:underline"
                onClick={() => handleClick(choice)}
            >
                {title}
            </div>
            <div>
                {formattedDate}
            </div>
        </div>
    );
};