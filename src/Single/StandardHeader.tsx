export const StandardHeader = ({ title, date, comment, content }: { title: string, date: string, comment?: JSX.Element, content?: JSX.Element }) => {
    return (
        <>
            <div className="md:flex md:justify-center w-full items-center">
                <div className="px-2 md:w-1/2 flex justify-between items-end mt-4">
                    <div className="md:text-4xl text-3xl font-bold"> {title} </div>
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
}: {
    title: string;
    date: string;
    comment?: JSX.Element;
    content?: JSX.Element;
}) => {
    return (
        <>
            {/* Title + Date */}
            <div className="md:flex md:justify-center w-full items-center">
                <div className="px-2 md:w-2/3 flex justify-between items-end mt-4">
                    <div className="md:text-4xl text-3xl font-bold">{title}</div>
                    <div className="text-xl font-bold">{date}</div>
                </div>
            </div>

            {/* Comment */}
            <div className="w-full md:flex md:justify-center">
                <div className="px-2 md:w-2/3 flex justify-between mt-4">
                    <div>{comment}</div>
                    <div className="invisible"></div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full md:flex md:justify-center">
                <div className="px-2 md:w-2/3 flex justify-between mt-4">
                    <div>{content}</div>
                    <div className="invisible"></div>
                </div>
            </div>
        </>

    );
};
