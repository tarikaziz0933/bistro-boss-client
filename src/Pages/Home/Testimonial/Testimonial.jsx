import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className="flex justify-center">
            <section className=" my-10 w-3/4">
                <SectionTitle
                    subHeading={'What Our Clients Say'}
                    heading={'TESTIMONIALS'}
                ></SectionTitle>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review =>
                            <SwiperSlide
                                key={review._id}
                            >
                                <div className="flex justify-center">
                                    <div className="flex flex-col items-center w-3/5">

                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />

                                        <p className="text-justify">{review.details}</p>
                                        <h2 className="text-3xl font-bold text-orange-500">{review.name}</h2>

                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonial;