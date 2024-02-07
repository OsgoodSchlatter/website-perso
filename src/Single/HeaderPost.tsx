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
                {main?.valueOf() ? ` - ${category?.valueOf()}` : ""}
                <div
                    className="text-4xl text-blue-700 hover:underline"
                    onClick={() => handleClick(choice)}
                >
                    {title}
                </div>
            </div>
        </div>
    );
};