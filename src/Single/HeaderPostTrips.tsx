import { useNavigate } from "react-router-dom";

export const HeaderPostTrips = ({
    date,
    title,
    choice,
    CO2,

}: {
    date: string;
    title: string;
    choice: number;
    CO2: number;

}) => {
    const navigate = useNavigate();

    const handleClick = (postId: number, route: string) => {
        navigate(`/${route}/${postId}`);
    };
    return (
        <div>
            <div>
                {date}
                <div
                    className="text-4xl text-blue-700 hover:underline"
                    onClick={() => handleClick(choice, "trips")}
                >
                    {title}
                </div>
                <div className="text-xl">
                    {CO2 >= 1000 ? <div className="text-red-500"> {CO2 / 1000} TCO2eq </div> : CO2 >= 500 ? <div className="text-orange-300"> {CO2} kgCO2eq </div> : <div className="text-green-500"> {CO2} kgCO2eq </div>}
                </div>
            </div>
        </div>
    );
};