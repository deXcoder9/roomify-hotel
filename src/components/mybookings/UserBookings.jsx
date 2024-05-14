import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth provider/AuthProvider'
import Swal from "sweetalert2";
import SingleBooking from './SingleBooking';
import { Helmet } from 'react-helmet';
// import "sweetalert2/src/sweetalert2.scss";

const UserBookings = () => {
    const { userInfo } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    const url = `https://roomify-assignment10.vercel.app/bookings?email=${userInfo?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))

    }, [url]);

    let currentDeleteId;
    const openModalDelete = (id) => {
        currentDeleteId = id;
        document.getElementById('my_modal_5').showModal()
    }
    let currentId;
    const handleDeleteBookedRoom = () => {
        const newId = currentDeleteId;

        fetch(`https://roomify-assignment10.vercel.app/bookings/${newId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const newBookings = bookings.filter(booking => booking._id !== newId)
                    setBookings(newBookings)
                }
            })
    }

    const handleUpdateModal = (id) => {
        currentId = id;
        document.getElementById('my_modal_4').showModal()
    }
    const handleUpdateDateBtn = () => {
        const newId = currentId;
        // console.log(newId)
        const bookedRoomTime = document.getElementById("updatedBookedDate").value;
        // console.log(bookedRoomTime);

        fetch(`https://roomify-assignment10.vercel.app/bookings/${newId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                bookedRoomDate: bookedRoomTime
            })
        })
           .then(res => res.json())
           .then(data => {
            // console.log(data)
            // console.log(data)
                if (data.modifiedCount ) {
                    Swal.fire({
                      title: "Success!",
                      text: "Booked room's date updated successfull",
                      icon: "success",
                    //   confirmButtonText: "Done",
                    });
                    setTimeout(() =>{
                        location.reload()
                    }, 1000)
                  }
            })

    }
    return (
        <div>
            <Helmet>
                <title>Bookings</title>
            </Helmet>

            <div className=' min-h-screen'>
                <div className="overflow-x-auto mx-auto max-w-[1240px]">
                    <table className="table h-full ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Details</th>
                                <th>Price</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.map(sx => <SingleBooking key={sx._id} sx={sx} openModalDelete={openModalDelete} handleDeleteBookedRoom={handleDeleteBookedRoom}  handleUpdateModal={handleUpdateModal} handleUpdateDateBtn={handleUpdateDateBtn}></SingleBooking>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <input type="date" name="date" id='updatedBookedDate' />
                    <div className="modal-action">
                        <form method="dialog" >
                            <div className='flex justify-between lg:w-[450px]  '>
                                <button className="btn">Close</button>
                                <button onClick={() => handleUpdateDateBtn()} className="btn">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default UserBookings;
