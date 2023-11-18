import React from 'react';

const GmailButton = () => {
    return (
        <button className="relative w-12 h-12 bg-white rounded-md border border-gray-500 hover:bg-gray-50 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="w-8 h-1 bg-slate-700 rounded-full my-1"></span>
                <span className="w-8 h-1 bg-slate-700 rounded-full my-1"></span>
                <span className="w-8 h-1 bg-slate-700 rounded-full my-1"></span>
            </div>
        </button>
    );
};

export default GmailButton;
