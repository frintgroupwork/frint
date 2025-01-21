"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Card, CardFooter } from "@nextui-org/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const CarouselComponent = () => {
  const activities = [
    {
      src: "/about-us/activity1.svg",
      title: "CM2 Meeting",
      description: "Workplan and Budget plan Discussion"
    },
    {
      src: "/about-us/activity2.svg",
      title: "User Research Activity",
      description: "Project Research of Qualitative data"
    },
    {
      src: "/about-us/activity3.svg",
      title: "Training",
      description: "Project Development Training"
    },
    {
      src: "/about-us/activity4.svg",
      title: "Problem Identify",
      description: "Problem Identify Discussion"
    },
    {
      src: "/about-us/activity5.svg",
      title: "Christmas",
      description: "Gift Exchange Party"
    },
    {
      src: "/about-us/activity6.svg",
      title: "CM2 Training",
      description: "Project Development Training"
    },
    {
      src: "/about-us/activity7.svg",
      title: "CM2 Training",
      description: "Project Development Training"
    },
    {
      src: "/about-us/activity8.svg",
      title: "CM2 Training",
      description: "Project Development Training"
    },
    {
      src: "/about-us/activity9.svg",
      title: "CM1 Training",
      description: "Project Development Training"
    },
  ];

  return (
    <div className="w-full relative" style={{ overflow: 'hidden' }}>
      <div className="max-w-[600px]  max-sm:max-w-[250px] mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 2,
              centeredSlides: false,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper !pb-12"
        >
          {activities.map((activity, index) => (
            <SwiperSlide key={index} className="py-4">
              <Card isFooterBlurred className="border-none shadow-lg" radius="lg">
                <Image
                  alt={activity.title}
                  className="object-cover w-full"
                  height={250}
                  width={250}
                  src={activity.src}
                />
                <CardFooter className="flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-xl font-medium text-white/80">
                    {activity.title}
                  </p>
                  <p className="text-tiny text-white/80">
                    {activity.description}
                  </p>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselComponent;