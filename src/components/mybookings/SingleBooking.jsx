import { useContext, useState } from "react"
import { AuthContext } from "../../auth provider/AuthProvider"
import { Link } from "react-router-dom"

const SingleBooking = ({ sx,handleUpdateModal,handleDeleteBookedRoom, openModalDelete }) => {
    const { userInfo } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    // var currentId = sx._id
    // console.log(currentId)
    // const handleDeleteBookedRoom = (id) => {
    //     console.log("hii", id)
    //     // fetch(`http://localhost:5000/bookings/${id}`, {
    //     //     method: "DELETE"
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         if (data.deletedCount > 0) {
    //     //             const newBookings = bookings.filter(booking => booking._id !== id)
    //     //             setBookings(newBookings)
    //     //         }
    //     //     })
    // }

    // const handleUpdateModal = (id) => {
    //     document.getElementById('my_modal_4').showModal()
    //     // console.log(id)
    //     // const openModal = true
    //     // setShowModal(openModal)
    //     // console.log(showModal)
    // }

    // const handleUpdateDateBtn = () => {
    //     console.log(currentId)
        // const bookedRoomTime = document.getElementById("updatedBookedDate").value;

        // fetch(`http://localhost:5000/bookings/${id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         bookedRoomDate: bookedRoomTime
        //     })
        // })
        //    .then(res => res.json())
        //    .then(data => {
        //     console.log(data)
        //     console.log(data)
        //         if (data.modifiedCount ) {
        //             Swal.fire({
        //               title: "Success!",
        //               text: "Booked room's date updated successfull",
        //               icon: "success",
        //               confirmButtonText: "Done",
        //             });
        //     // const remaining = bookings.filter(booking => booking._id !== id)
        //     // const updated = bookings.find(booking => booking._id === id);
        //     // const newBookings = [updated, ...remaining];  
        //     // setBookings(newBookings)
        //           }
        //     })

    // }
    // const o1 () => {
    //         document.getElementById('my_modal_5').showModal()
    //     }
    return (
        <tr key={sx._id} >
            <th>
                <label className="tooltip" data-tip="cancel"  >

                    <button onClick={()=>openModalDelete(sx._id)}>
                        <svg className=' cursor-pointer hover:bg-red-400 rounded-full transition-all' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="30" viewBox="0 0 100 100">
                            <path d="M37.297,94.938c-4.641,0-8.578-3.319-9.363-7.894l-8.278-48.311C16.967,37.937,15,35.443,15,32.5 C15,23.402,22.402,16,31.5,16h2.234c2.005-4.158,6.256-7,11.146-7h14.238c4.891,0,9.142,2.842,11.146,7H72.5 C81.598,16,89,23.402,89,32.5c0,2.707-1.664,5.033-4.022,6.009l-8.316,48.533c-0.781,4.573-4.719,7.896-9.362,7.896H37.297z" opacity=".35"></path><path fill="#f2f2f2" d="M35.297,92.938c-4.641,0-8.578-3.319-9.363-7.894l-8.278-48.311C14.967,35.937,13,33.443,13,30.5 C13,21.402,20.402,14,29.5,14h2.234c2.005-4.158,6.256-7,11.146-7h14.238c4.891,0,9.142,2.842,11.146,7H70.5 C79.598,14,87,21.402,87,30.5c0,2.707-1.664,5.033-4.022,6.009l-8.316,48.533c-0.781,4.573-4.719,7.896-9.362,7.896H35.297z"></path><path fill="#40396e" d="M63,25H37c-0.828,0-1.5-0.672-1.5-1.5v-4.119c0-4.069,3.312-7.381,7.381-7.381h14.238 c4.069,0,7.381,3.312,7.381,7.381V23.5C64.5,24.328,63.828,25,63,25z M38.5,22h23v-2.619c0-2.416-1.965-4.381-4.381-4.381H42.881 c-2.416,0-4.381,1.965-4.381,4.381V22z"></path><polygon fill="#9aa2e6" points="22.806,28.303 32.767,86.438 67.828,86.438 77.79,28.303"></polygon><path fill="#707cc0" d="M80.5,28.957h-61v0c0-4.671,3.787-8.457,8.457-8.457h44.085C76.713,20.5,80.5,24.287,80.5,28.957 L80.5,28.957z"></path><path fill="#40396e" d="M65.299,87.938H35.297c-2.198,0-4.063-1.572-4.436-3.739L21.917,32H19.5c-0.828,0-1.5-0.672-1.5-1.5 C18,24.159,23.159,19,29.5,19h41C76.841,19,82,24.159,82,30.5c0,0.828-0.672,1.5-1.5,1.5h-1.822l-8.944,52.197 C69.363,86.364,67.498,87.938,65.299,87.938z M21.133,29h2.049c0.73,0,1.355,0.526,1.479,1.247l9.158,53.444 c0.124,0.722,0.746,1.246,1.479,1.246h30.002c0.732,0,1.354-0.524,1.478-1.246l9.158-53.444C76.058,29.526,76.683,29,77.413,29 h1.454c-0.71-3.974-4.192-7-8.367-7h-41C25.325,22,21.843,25.026,21.133,29z"></path><path fill="#40396e" d="M38.647,76.944c-0.759,0-1.41-0.574-1.49-1.346l-3.86-37.445c-0.085-0.824,0.515-1.562,1.338-1.646 c0.82-0.08,1.561,0.514,1.646,1.338l3.86,37.445c0.085,0.824-0.515,1.562-1.338,1.646C38.751,76.941,38.699,76.944,38.647,76.944z"></path><path fill="#40396e" d="M46.414,76.942c-0.805,0-1.47-0.638-1.498-1.448l-1.298-37.406 c-0.028-0.828,0.619-1.522,1.447-1.551c0.83-0.034,1.521,0.619,1.551,1.447l1.298,37.406c0.028,0.828-0.619,1.522-1.447,1.551 C46.449,76.942,46.432,76.942,46.414,76.942z"></path><path fill="#40396e" d="M54.183,76.941c-0.018,0-0.034,0-0.052-0.001c-0.828-0.028-1.477-0.722-1.448-1.55l1.265-37.368 c0.027-0.828,0.746-1.492,1.55-1.448c0.828,0.028,1.477,0.722,1.448,1.55l-1.265,37.368C55.653,76.303,54.987,76.941,54.183,76.941 z"></path><path fill="#40396e" d="M61.949,76.939c-0.052,0-0.103-0.003-0.155-0.008c-0.824-0.085-1.424-0.821-1.339-1.646 l3.827-37.328c0.085-0.824,0.818-1.412,1.646-1.339c0.824,0.085,1.424,0.821,1.339,1.646l-3.827,37.328 C63.36,76.364,62.709,76.939,61.949,76.939z"></path>
                        </svg>
                    </button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <div>
                                        <button className="btn">Close</button>
                                        <button onClick={() => handleDeleteBookedRoom(sx._id)} className="btn">Confirm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={sx.room_image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold"> {userInfo.displayName}  </div>
                    </div>
                </div>
            </td>
            <td>
                {sx._id}
                <br />
                <span className="badge badge-ghost badge-sm">{sx.bookedRoomDate}</span>
            </td>
            <td>{"$" + sx.room_price}</td>
            <th>
                <button onClick={() => handleUpdateModal(sx._id)} className="btn btn-ghost btn-sm border-[1px] border-blue-600 bg-[#33334b]  ">update Date</button>



            </th>
        </tr>

    )
}

export default SingleBooking;