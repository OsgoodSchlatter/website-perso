import { Link, useNavigate } from "react-router-dom";

export const HeaderPost = ({
    date,
    title,
    choice,
    category,
    main,
    route,
}: {
    choice: number;
    date: string;
    title: string;
    category?: string,
    main?: Boolean,
    route: string
}) => {
    const navigate = useNavigate();
    const handleClick = (postId: number) => {
        navigate(`/${route}/${postId}`);
    };
    return (
        <div className="justify-between flex">

            <div
                className="text-xl hover:underline"
                onClick={() => handleClick(choice)}
            >
                {title}
            </div>
            <div>
                {date}
            </div>
        </div>
    );
};