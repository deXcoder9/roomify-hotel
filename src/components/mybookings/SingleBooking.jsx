import { useContext, useState } from "react"
import { AuthContext } from "../../auth provider/AuthProvider"


const SingleBooking = ({ sx, handleUpdateModal, handleDeleteBookedRoom, openModalDelete }) => {
    const { userInfo } = useContext(AuthContext)

    const handleOpenReviewModal = () => {
        document.getElementById("reviewModalOpen").showModal()
    }

    const handleReviewSubmission = () => {
        const name = document.getElementById("userName").value
        const review = document.getElementById("reviewDetails").value
        const rating = document.getElementById("rating").value
        const date = document.getElementById("date").value
        console.log(review, rating, date)
        const userReview = {
            name,
            reviewText: review,
            rating: rating,
            date: date
        }

        console.log(userReview)
        fetch("http://localhost:5000/usersreview", 
        {
            method:"POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userReview)
          }
        )
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.insertedId ){
                alert('booked successfully ')
            } 
          })
    }

    return (
        <tr key={sx._id} >
            <th>
                <label className="tooltip" data-tip="cancel"  >

                    <button onClick={() => openModalDelete(sx._id)}>
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
                                        <button onClick={() => handleDeleteBookedRoom()} className="btn">Confirm</button>
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
                <div className="dropdown dropdown-left dropdown-end bg-transparent">
                    <div tabIndex={0} role="button" className=" m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="30" viewBox="0 0 40 40">
                            <path fill="#dcd5f2" d="M17.676,38.5l-1.125-4.501l-0.284-0.076c-2.458-0.658-4.696-1.946-6.473-3.724l-0.208-0.208 l-4.445,1.271l-2.324-4.025l3.335-3.225l-0.076-0.284C5.741,22.475,5.571,21.22,5.571,20s0.17-2.475,0.504-3.729l0.076-0.284 l-3.335-3.225l2.324-4.025l4.445,1.271l0.208-0.208c1.778-1.779,4.016-3.066,6.473-3.724l0.284-0.076L17.676,1.5h4.647 l1.125,4.501l0.284,0.076c2.457,0.657,4.695,1.945,6.473,3.724l0.208,0.208l4.445-1.271l2.324,4.025l-3.335,3.225l0.076,0.284 c0.335,1.253,0.505,2.507,0.505,3.728c0,1.22-0.17,2.475-0.504,3.729l-0.076,0.284l3.335,3.224l-2.324,4.026l-4.445-1.272 l-0.208,0.208c-1.777,1.779-4.016,3.066-6.473,3.724l-0.284,0.076L22.324,38.5H17.676z M20,12.036 c-4.392,0-7.964,3.573-7.964,7.964s3.573,7.964,7.964,7.964s7.964-3.573,7.964-7.964S24.392,12.036,20,12.036z"></path><path fill="#8b75a1" d="M21.933,2l0.959,3.837l0.143,0.571l0.569,0.152c2.372,0.635,4.532,1.878,6.248,3.594l0.416,0.417 l0.566-0.162l3.787-1.083l1.934,3.349l-2.843,2.749l-0.423,0.409l0.152,0.568c0.324,1.211,0.488,2.422,0.488,3.599 c0,1.177-0.164,2.388-0.488,3.599l-0.152,0.568l0.423,0.409l2.843,2.749l-1.934,3.349l-3.787-1.083l-0.566-0.162l-0.416,0.417 c-1.715,1.716-3.876,2.959-6.248,3.594l-0.569,0.152l-0.143,0.571L21.934,38h-3.867l-0.959-3.837l-0.143-0.571l-0.569-0.152 c-2.372-0.635-4.533-1.878-6.248-3.594l-0.416-0.417l-0.566,0.162l-3.787,1.083l-1.934-3.349l2.843-2.749l0.423-0.409 l-0.152-0.568C6.235,22.388,6.071,21.177,6.071,20s0.164-2.388,0.488-3.599l0.152-0.568l-0.423-0.409l-2.843-2.749l1.934-3.349 l3.787,1.083l0.566,0.162l0.416-0.417c1.715-1.716,3.876-2.959,6.248-3.594l0.569-0.152l0.143-0.571L18.066,2H21.933 M20,28.464 c4.667,0,8.464-3.797,8.464-8.464c0-4.667-3.797-8.464-8.464-8.464c-4.667,0-8.464,3.797-8.464,8.464 C11.536,24.667,15.333,28.464,20,28.464 M22.714,1h-5.429l-1.149,4.594c-2.569,0.688-4.871,2.027-6.696,3.853L4.903,8.149 l-2.714,4.701l3.405,3.292C5.264,17.375,5.071,18.664,5.071,20s0.192,2.625,0.522,3.857l-3.405,3.292l2.714,4.701l4.538-1.298 c1.825,1.826,4.128,3.165,6.697,3.853L17.286,39h5.429l1.148-4.594c2.569-0.688,4.872-2.027,6.697-3.853l4.538,1.298l2.714-4.701 l-3.405-3.292c0.329-1.232,0.522-2.521,0.522-3.857s-0.192-2.625-0.522-3.857l3.405-3.292l-2.714-4.701l-4.538,1.298 c-1.825-1.826-4.127-3.165-6.696-3.853L22.714,1L22.714,1z M20,27.464c-4.122,0-7.464-3.342-7.464-7.464 c0-4.122,3.342-7.464,7.464-7.464c4.122,0,7.464,3.342,7.464,7.464C27.464,24.122,24.122,27.464,20,27.464L20,27.464z"></path><g><path fill="#eeebf7" d="M20,30.5c-5.79,0-10.5-4.71-10.5-10.5S14.21,9.5,20,9.5S30.5,14.21,30.5,20S25.79,30.5,20,30.5z M20,15.5c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S22.481,15.5,20,15.5z"></path><path fill="#8b75a1" d="M20,10c5.514,0,10,4.486,10,10c0,5.514-4.486,10-10,10s-10-4.486-10-10C10,14.486,14.486,10,20,10 M20,25c2.757,0,5-2.243,5-5s-2.243-5-5-5s-5,2.243-5,5S17.243,25,20,25 M20,9C13.925,9,9,13.925,9,20c0,6.075,4.925,11,11,11 s11-4.925,11-11C31,13.925,26.075,9,20,9L20,9z M20,24c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4c2.209,0,4,1.791,4,4 C24,22.209,22.209,24,20,24L20,24z"></path></g>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box lg:w-52 space-y-2 ">
                        <li>
                            <button onClick={() => handleUpdateModal(sx._id)} className=" btn btn-ghost btn-xs border-[1px] border-blue-600 bg-[#33334b] ">update Date</button>
                        </li>
                        <li>
                            <button  onClick={handleOpenReviewModal} className="btn btn-ghost btn-xs border-[1px] border-blue-600 bg-[#33334b]"   >Review</button>
                           
                        </li>
                    </ul>
                </div>

            <dialog id="reviewModalOpen" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box grid place-items-center">
                                    <form className="space-y-4">
                                    <input type="text" name="name" disabled defaultValue={userInfo.displayName} id='userName' /> <br />
                                    <input type="date" name="date" id="date" /> <br />
                                    <input type="number" name="rating" id="rating" placeholder="Give a rating between 1-5" /> <br />
                                    <textarea name="reviewDetails" id="reviewDetails" placeholder="Give a review"></textarea>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog" >
                                            <div className='flex justify-between lg:w-[450px]  '>
                                                <button className="btn">Close</button>
                                                <button onClick={handleReviewSubmission} className="btn">Confirm</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
            </th>
        </tr>

    )
}

export default SingleBooking;