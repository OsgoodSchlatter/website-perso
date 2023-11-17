import React, { ReactNode, useState } from 'react';

const Tooltip2: React.FC<{
    text: string, children: ReactNode
}> = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {showTooltip && (
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className={`truncate ${text.length > 15 ? 'whitespace-normal' : 'whitespace-nowrap'}`}>{text}</span>

                </div>
            )}
            {children}
        </div>
    );
};

export default Tooltip2;
