import React from 'react';

const SectionTitle = ({title, mainTitle}: {title?: string, mainTitle?: string}) => {
    return (
        <div>
            <h6 className="text-[12px] md:text-[16px] leading-[1.5] tracking-[2.56px] font-bold uppercase text-blue-main font-Montserrat text-center">{title}</h6>
            <h2 className="text-[32px] md:text-[56px] leading-[110%] font-semibold text-text-col font-Montserrat text-center mt-[24px]">{mainTitle}</h2>
        </div>
    );
};

export default SectionTitle;