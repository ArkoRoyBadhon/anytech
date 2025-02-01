import React from 'react';
import SectionTitle from './SectionTitle';
import CarouselWithMenu from './Carousel';

const FutureFinance = () => {
    return (
        <section className='screen_size mt-[120px]'>
            <SectionTitle title='TECHNOLOGY BUILT FOR YOU' mainTitle='The future of finance' />
            <CarouselWithMenu />
        </section>
    );
};

export default FutureFinance;