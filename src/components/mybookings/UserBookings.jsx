import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth provider/AuthProvider'

const UserBookings = () => {
    const {userInfo} = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${userInfo?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
            // .then(data => console.log(data))

    }, [url]);


  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            bookings.map(booking => <div className='h-[300px] border-[1px] p-5 rounded-xl'>
                <img className='h-full rounded-xl' src={booking.room_image} alt="" />
                <div className='flex justify-between'>
                    <p>{booking.room_availability}</p>
                    <p>{booking.room_price}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default UserBookings