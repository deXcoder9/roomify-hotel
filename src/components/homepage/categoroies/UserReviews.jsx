import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./category.css"
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import userImage from "../../../assets/userLogo.png";
import { FaStar } from "react-icons/fa";

const UserReviews = () => {
  const [reviews, setReviews] = useState([])
  
  useEffect(() =>{
    fetch('http://localhost:5000/usersreview')
    .then(res => res.json())
    .then(data => {
      setReviews(data)
    })
  } ,[])
  return (
    <div className='min-h-screen'>
        <h1 className='text-center text-4xl my-12'>user Reviews {reviews.length}  </h1>

        <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >


{/* <SwiperSlide><div>
            <h1 className='text-red-800'> name </h1>
            </div></SwiperSlide>
            <SwiperSlide><div>
            <h1 className='text-red-800'> name 2</h1>
            </div></SwiperSlide> */}
            {
              reviews.map(rev =>  <SwiperSlide key={rev._id}>
                <div className='grid place-items-center h-full'>
                  <div>

                <h1 className='text-red-800'>Name: {rev.name} </h1>
                <h3 className='flex justify-center items-center'>Rating: {rev.rating} <FaStar className='text-orange-500' />  </h3>
                <p>{rev.date}</p>
                <p>{rev.reviewText}</p>
                  </div>
                </div></SwiperSlide>   )
            }

      </Swiper>
        </div>
    </div>
  )
}

export default UserReviews