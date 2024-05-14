import React, { useContext } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { AuthContext } from '../../auth provider/AuthProvider'
import { Helmet } from 'react-helmet'
import Swal from "sweetalert2";

const RoomDetails = () => {
  const {userInfo} = useContext(AuthContext) 
  const rooms = useLoaderData()
  const { id } = useParams();
  const specificRoom = rooms.filter(x => x._id == id)
  // console.log(userInfo)

  let bookedRoomTime ;
  
if(userInfo?.email){
  const bookedRoomData = {
    email: userInfo.email,
    room_size: specificRoom[0].room_size,
    room_image: specificRoom[0].room_image,
    room_price: specificRoom[0].price,
    room_description: specificRoom[0].description,
    room_availability: specificRoom[0].availability,
  }
  // console.log(bookedRoomData)
}

const handleBookNow = () => [
  document.getElementById('my_modal_5').showModal()
]

  const handleBookCOnfirmBtn = (id) => {
    // console.log(id)
    bookedRoomTime = document.getElementById("bookedDate").value;
    bookedRoomData.bookedRoomDate = bookedRoomTime;
    
    fetch("https://roomify-assignment10.vercel.app/bookings", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookedRoomData)
    })
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      if(data.insertedId)
        Swal.fire({
          title: "Success!",
          text: "Room successfull booked",
          icon: "success",
        //   confirmButtonText: "Done",
        });
        setTimeout(() =>{
            
        }, 1000)
    })
    
    // updateing avability of the booked room
    fetch(`https://roomify-assignment10.vercel.app/rooms/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        availability: 'Unavailable',
      })
    } )
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
    })

  }
  return (
    <div className='min-h-screen flex place-items-center'>
      <Helmet>
        <title>Room Details</title>
      </Helmet>
      {
        specificRoom.map(room => <div key={room._id} className='flex place-items-center space-x-12 p-10'>
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
              <button onClick={handleBookNow}  disabled={room.availability === 'Unavailable' || !userInfo?.email } className='btn'>Book now </button>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <input type="date" name="date" id='bookedDate' />
                  <div className="modal-action">
                    <form method="dialog">
                      <div className='flex justify-between lg:w-[450px]  '>
                      <button className="btn">Close</button>
                      <button onClick={  () =>handleBookCOnfirmBtn(room._id)} className="btn">Confirm</button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>)

      }
    </div>
  )
}

export default RoomDetails