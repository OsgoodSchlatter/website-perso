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
        <div>
            <div>
                <>
                    {date}
                </>

                <div
                    className="text-3xl text-blue-400 hover:underline"
                    onClick={() => handleClick(choice)}
                >
                    {title}
                </div>
            </div>
        </div>
    );
};