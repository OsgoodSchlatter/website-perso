// src/components/PdfViewer.tsx
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PdfViewer: React.FC<{ fileUrl: string }> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const workerUrl = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.176/pdf.worker.min.js';

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full h-full p-4 bg-slate-700 rounded shadow">
                <Worker workerUrl={workerUrl}>
                    <Viewer
                        fileUrl={fileUrl}
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </Worker>
            </div>
        </div>
    );
};

export default PdfViewer;
