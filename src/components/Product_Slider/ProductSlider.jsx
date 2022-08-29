import React, { useRef } from "react";
import ProductSlideCard from "../Product_Slide_Card/ProductSlideCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProductSlider.scss";
import "swiper/css";
import "swiper/css/pagination";

import arrow from '../../assets/back_arrow.svg'

export default function ProductSlider() {
    const swiperRef = useRef();
    const nextSlideHandler = () => {
        swiperRef.current.slideNext();
    };
    const prevSlideHandler = () => {
        swiperRef.current.slidePrev();
    };
    const slides = [
        {
            title: "Iceways",
            content:
                "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
        },
        {
            title: "Driveways Sport",
            content:
                "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.",
        },
        {
            title: "Driveways COMPETUS H/P",
            content:
                "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
        },
        {
            title: "Iceways",
            content:
                "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
        },
        {
            title: "Driveways Sport",
            content:
                "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.",
        },
        {
            title: "Driveways COMPETUS H/P",
            content:
                "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
        },
        {
            title: "Iceways",
            content:
                "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
        },
        {
            title: "Driveways Sport",
            content:
                "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.",
        },
        {
            title: "Driveways COMPETUS H/P",
            content:
                "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
        },
    ];
    return (
        <section id="product_slider_container">
            <h2>Featured Products</h2>
        <div id="product_slider">
            <span className="nav_button" onClick={prevSlideHandler}><img src={arrow} alt="" /></span>
            <Swiper
                pagination={false}

                spaceBetween={24}
                slidesPerView={3}
                breakpoints={{
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                  }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {slides.map((x, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ProductSlideCard
                                title={x.title}
                                content={x.content}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <span className="nav_button" onClick={nextSlideHandler}><img src={arrow} alt="" /></span>
        </div>
        </section>
    );
}
