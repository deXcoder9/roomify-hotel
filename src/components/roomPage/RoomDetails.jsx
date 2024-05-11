import React from 'react'
import { Link,  useLoaderData, useParams } from 'react-router-dom'

const RoomDetails = () => {
  const rooms = useLoaderData()
  const { id } = useParams();
  const specificRoom = rooms.filter(x => x._id == id)
  const { availability, room_size, price, description, room_image, _id } = specificRoom;
  return (
    <div className='min-h-screen flex place-items-center'>
      {
        specificRoom.map(room => <div className='flex place-items-center space-x-12 p-10'>
          <div className='w-[]'>
            <img src={room.room_image} className='rounded-xl' />
          </div>
          <div className='w-[900px]'>
            <p>Size: {room.room_size}</p>
            <p>Availability: {room.availability}</p>
            <p>Price: {room.price}</p>
            <p>Description: {room.description}</p>
            <div className='space-x-5 mt-4'>
              <Link to="/rooms">
                <button className='btn'>Go Back </button>
              </Link>
              <button className='btn'>Book now </button>
            </div>
          </div>
        </div>)

      }
    </div>
  )
}

export default RoomDetails