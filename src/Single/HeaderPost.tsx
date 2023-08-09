import { Link, useNavigate } from "react-router-dom";


export const HeaderPost = ({
    date,
    title,
    choice,
    handleClick,
}: {
    date: string;
    title: string;
    choice: number;
    handleClick: (arg0: number) => any;
}) => {
    return (
        <div>
            <div>
                {date}
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