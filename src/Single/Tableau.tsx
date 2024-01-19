export const Tableau = ({ content, title, headers }: { content: (string | JSX.Element | JSX.Element[])[][], title: string, headers: string[] }) => {

    return (
        <div className="mt-5 justify-center">
            <div className="font-bold text-xl mb-3 underline">{title}</div>
            <div className="overflow-x-auto">
                <div className={`grid grid-cols-${content[1].length % 2 == 1 ? content[1].length : content[1].length + 1} gap-1`}>
                    {headers.map((item, index) => (
                        <div key={index} className={`font-bold text-1xl text-center w-20 col-start-${index + 1} col-end-${index + 2} col-span-1`}>{item}</div>
                    ))}
                </div>
                {content.map((row, rowIndex) => (
                    <div key={rowIndex} className={`grid grid-cols-${content[1].length % 2 == 1 ? content[1].length : content[1].length + 1} gap-1`}>
                        {row.map((item, colIndex) => (
                            <div key={colIndex} className={`text-1xl text-center w-20 col-start-${colIndex + 1} col-end-${colIndex + 2} col-span-1`}>
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
