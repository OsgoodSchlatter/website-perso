import React, { useState } from 'react';

const Foldable = ({ title, content }: { title: string, content: JSX.Element }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" rounded-md p-1">
            <div className="flex items-center " onClick={toggleCollapse}>
                <input
                    type="checkbox"
                    checked={isOpen}
                    onChange={toggleCollapse}
                />
                <div className="text-lg font-medium ml-2">
                    {title}
                </div>
            </div>
            {isOpen && (
                <div className="mt-2">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Foldable;
