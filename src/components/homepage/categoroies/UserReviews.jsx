import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./category.css"
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react';

const UserReviews = () => {
  return (
    <div className='min-h-screen'>
        <h1>user Reviews</h1>

        <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div>
            <h1 className='text-red-800'>hi</h1>
            </div></SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default UserReviews