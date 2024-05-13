import { useEffect, useState } from "react"

const FeaturedRooms = () => {
  const [featuredRooms, setFeaturedRooms] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/featuredrooms')
  .then(res => res.json())
  .then(data =>{
    setFeaturedRooms(data)
  })
  } ,[])

  return (
    <div>
      <h1>Featured Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

    {
      featuredRooms.map(room => <div key={room._id} className="card  glass m-5">
      <figure><img src={room.image} alt="car!"/></figure>
      <div className="card-body">
        <h2 className="card-title">{room.name} </h2>
        <p> {room.description} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book now!</button>
        </div>
      </div>
    </div>)
    }


      </div>
    </div>
   
  )
}

export default FeaturedRooms