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
import moment from 'moment';
import { Typewriter } from 'react-simple-typewriter'

const UserReviews = () => {
    const [reviews, setReviews] = useState([])
    const [rr , setRR] = useState([])

  useEffect(() => {
    fetch('https://roomify-dexcoder.netlify.app/usersreview')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [])

  let newREVIEW = [];
  reviews.forEach(review => {
    if (!newREVIEW.includes(review.name)) {
      newREVIEW.push(review.name);
    }
  });
  
  // setRR(newREVIEW)


  return (
    <div className=''>
     <h1  className='text-3xl text-center '>
          Meet Our Esteemed Reviewers-Voices That Illuminate Excellence:{' '}
        <span>
          <Typewriter
          words={['deXcoder9_','evelyn', "Richard" ]}
          loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
        </span>
      </h1>
      
      {/* words={newREVIEW}
             */}

      <div className='mt-10'>
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
          {
            reviews.map(rev => <SwiperSlide key={rev._id}>
              <div className='grid  place-items-center '>

                <div className="reviewItem mt-10">
                  <div className="top">
                    <div className="clientImage">
                      <img src={userImage} alt={rev.name} />
                      <span>{rev.name}</span>
                    </div>
                    <ul className='flex items-center  '>
                      <li > {rev.rating}   </li>
                      <li className='mb-1' > <FaStar />  </li>
                    </ul>
                  </div>
                  <article>
                    <p className="review">
                      {rev.reviewText}
                    </p>
                    <p>{ moment(rev.date).format('MMM d, YYYY') }</p>
                  </article>
                </div>

              </div>
            </SwiperSlide>)
          }

        </Swiper>
      </div>
    </div>
  )
}

export default UserReviews


{/* <div className='grid place-items-center h-full'>
                  <div>

                <h1 className='text-red-800'>Name: {rev.name} </h1>
                <h3 className='flex justify-center items-center'>Rating: {rev.rating} <FaStar className='text-orange-500' />  </h3>
                <p>{rev.date}</p>
                <p>{rev.reviewText}</p>
                  </div>
                </div> */}