import React from 'react'
import { Link } from 'react-router-dom';

const SingleRoom = ({room}) => {
    // console.log(room)
    const {availability,room_size,price,description,room_image, _id } = room;
  return (
    <Link to={`/roomDetails/${_id}`}>
    <div className='p-5 border-[1px] rounded-lg '>
        <img className=' w-full' src={room_image} alt="" />
        <div className='flex justify-between'>
        <p>Price: {"$" + price}</p>
        <p> {availability}</p>
        </div>
    </div>
    </Link>
  )
}

export default SingleRoom;   