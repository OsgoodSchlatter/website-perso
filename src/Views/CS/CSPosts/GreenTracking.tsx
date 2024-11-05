// src/App.tsx
import React from 'react';
import { StandardHeader } from '../../../Single/StandardHeader';

// Manually import all 29 images
import img1 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0001.jpg';
import img2 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0002.jpg';
import img3 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0003.jpg';
import img4 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0004.jpg';
import img5 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0005.jpg';
import img6 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0006.jpg';
import img7 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0007.jpg';
import img8 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0008.jpg';
import img9 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0009.jpg';
import img10 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0010.jpg';
import img11 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0011.jpg';
import img12 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0012.jpg';
import img13 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0013.jpg';
import img14 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0014.jpg';
import img15 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0015.jpg';
import img16 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0016.jpg';
import img17 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0017.jpg';
import img18 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0018.jpg';
import img19 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0019.jpg';
import img20 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0020.jpg';
import img21 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0021.jpg';
import img22 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0022.jpg';
import img23 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0023.jpg';
import img24 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0024.jpg';
import img25 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0025.jpg';
import img26 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0026.jpg';
import img27 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0027.jpg';
import img28 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0028.jpg';
import img29 from '../GreenTracking/Green_Tracking_Article (1)_pages-to-jpg-0029.jpg';

// Array of imported images
const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25,
    img26, img27, img28, img29,
];

const PdfAsImages: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Page ${index + 1}`}
                    className="mb-4"
                />
            ))}
        </div>
    );
};

const GreenTrackingContent: React.FC = () => {
    return (

        <div className='flex justify-center'>
            <PdfAsImages />
        </div>

    );
};

const intro = <div >
    This is the work I have had the opportunity to do at CEA LIST in 2023 during my internship.

</div>

export const GreenTracking = () => {
    return (<StandardHeader title={"Green Tracking"} date={"2023"} comment={intro}
        content={< GreenTrackingContent />} />)
}

export default GreenTracking;
