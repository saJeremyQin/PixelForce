import React from "react";

const Gallery = () => {
    return (
        <div className='w-full h-full flex justify-start items-start gap-2 pl-4 pr-4'>
            <div className="flex flex-col justify-start items-start gap-2">
                <img className="w-109 h-130 bg-white rounded-10" src={process.env.PUBLIC_URL+"/images/gallery_1_1.png"} alt="gallery_item1" />
                <img className="w-109 h-130 bg-white rounded-10" src={process.env.PUBLIC_URL+"/images/gallery_1_2.png"} alt="gallery_item2" />
                <img className="w-109 h-130 bg-white rounded-10" src={process.env.PUBLIC_URL+"/images/gallery_1_3.png"} alt="gallery_item3" />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <img className="w-109 h-130 bg-white rounded-10" src={process.env.PUBLIC_URL+"/images/gallery_2_1.png"} alt="gallery_item4" />
                <img className="w-109 h-130 bg-white rounded-10" src={process.env.PUBLIC_URL+"/images/gallery_2_2.png"} alt="gallery_item5" />
                <img className="w-109 h-130 bg-white rounded-10" src={process.env.PUBLIC_URL+"/images/gallery_2_3.png"} alt="gallery_item6" />
            </div>
    
            <div className="flex flex-col justify-start items-start gap-2">
                <img className="w-109 h-130 bg-white rounded-10" src={process.env.PUBLIC_URL+"/images/gallery_3_1.png"} alt="gallery_item7" />
                <img className="w-109 h-130 bg-white rounded-10" src={process.env.PUBLIC_URL+"/images/gallery_3_2.png"} alt="gallery_item8" />
                <img className="w-109 h-130 bg-white rounded-10" src={process.env.PUBLIC_URL+"/images/gallery_3_3.png"} alt="gallery_item9" />
            </div>
      </div>
    )   
}

export default Gallery;