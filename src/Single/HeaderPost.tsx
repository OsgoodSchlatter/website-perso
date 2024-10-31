import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


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
    const [lastModifiedDates, setLastModifiedDates] = useState({});

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/lastmodifieddates.json`)
            .then((response) => response.json())
            .then((data) => setLastModifiedDates(data))
            .catch((error) => console.error("Error fetching lastModifiedDates:", error));
    }, []);
    interface LastModifiedDates {
        [key: string]: string;
    }

    const typedLastModifiedDates = lastModifiedDates as LastModifiedDates;

    const lastModified = typedLastModifiedDates[content_name + ".tsx"] || "-";
    const formattedDate = lastModified !== "-"
        ? (() => {
            const date = new Date(lastModified);
            const currentYear = new Date().getFullYear();

            return date.getFullYear() === currentYear
                ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) // Format as "Oct 27" if it's the current year
                : date.toLocaleDateString('en-US', { year: 'numeric' }); // Format as "2023" if it's a past year
        })()
        : lastModified;


    return (
        <div className="justify-between flex">
            <>
                <div
                    className="text-xl hover:underline w-2/3"
                    onClick={() => { handleClick(choice); console.log("content name " + content_name); }}
                >
                    {title}
                </div>
                <div>
                    {formattedDate}
                </div>
            </>
        </div>
    );
};