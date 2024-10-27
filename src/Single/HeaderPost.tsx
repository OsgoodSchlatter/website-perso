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
                onClick={() => { handleClick(choice); console.log(lastModifiedDates); console.log(formattedDate); console.log(`${process.env.PUBLIC_URL}/lastmodifieddates.json`) }}
            >
                {title}
            </div>
            <div>
                {lastModified}
            </div>
        </div>
    );
};