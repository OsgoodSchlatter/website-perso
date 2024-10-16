// src/App.tsx
import React from 'react';
import PdfViewer from '../../../Single/PDFworker';


const GreenTracking: React.FC = () => {
    const fileUrl = process.env.PUBLIC_URL + '/Green_Tracking_Article.pdf'; // Correctly reference the PDF file

    return (

        <div className='flex justify-center'>

            <div className="w-3/4">
                <PdfViewer fileUrl={fileUrl} />
            </div>
        </div>

    );
};

export default GreenTracking;
