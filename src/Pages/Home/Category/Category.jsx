import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from "../../../assets/assets/home/slide1.jpg";
import slide2 from "../../../assets/assets/home/slide2.jpg";
import slide3 from "../../../assets/assets/home/slide3.jpg";
import slide4 from "../../../assets/assets/home/slide4.jpg";
import slide5 from "../../../assets/assets/home/slide5.jpg";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={'From 10am to 11pm'}
                subHeading={'Online market'}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className=' text-4xl text-white -mt-16 uppercase'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className=' text-4xl text-white -mt-16 uppercase'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className=' text-4xl text-white -mt-16 uppercase'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className=' text-4xl text-white -mt-16 uppercase'>Kake</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className=' text-4xl text-white -mt-16 uppercase'>SALAD</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;