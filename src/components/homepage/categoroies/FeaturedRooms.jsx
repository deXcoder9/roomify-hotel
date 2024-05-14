import { useEffect, useState } from "react"
import "./category.css"
// import "../../../../Testing/index.css"


const FeaturedRooms = () => {
  const [featuredRooms, setFeaturedRooms] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/featuredrooms')
      .then(res => res.json())
      .then(data => {
        setFeaturedRooms(data)
      })
  }, [])

  return (
    <div className="">
      <div className="text-center ">
      <h1 className="text-3xl pb-1">Featured Rooms</h1>
      <p className="text-gray-300">
        Featured rooms are specially highlighted spaces, often showcasing unique design elements, exceptional amenities, <br /> and premium locations within a property, enhancing the overall guest experience</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {
          featuredRooms.map(room =>
            <div key={room._id} className="nft">
              <div className='main'>
                <img className='tokenImage' src={room.image} alt="NFT" />
                <h2 className="py-2">{room.name}</h2>
                <p className='Featureddescription mb-2'>{room.description}</p>
                <hr />
                <div className='tokenInfo mt-3'>
                  <div className="price">
                    <ins> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#6462d5" d="M68.43 5.38c.89-1.95 2.55-2.5 3.93-2.56c2.1-.1 4.3 1.35 6.37 3.06C80.2 7.54 81.96 8.82 84 9.72c1.41.5 2.81.6 4.23.53c2-.1 4.03-.54 6.04-.64l.11-.01l.91-.08c2.3-.11 4.47.43 6.53 1.62c1.89 1.72 2.72 3.86 2.46 6.44c-.44 2.13-.06 4.08 1.13 5.85c2.05 1.44 4.2 2.7 6.46 3.77c2.34 1.28 3.81 3.21 4.45 5.78c.23 2.72-1.03 4.46-3.75 5.21c-3.54.89-8.3.89-12.31 3.99c-5.86 4.89-7.7 9.82-10.25 10.57c-1.25-1.42-9.05-7.45-22.13-10.34c-2.34-8.07-3.76-27.55.55-37.03"></path><path fill="#c89d32" d="M81.63 40.69c2.3-4.6 8.85-12.69 10.42-11.09c1.55 1.74-2.02 10.78-4.53 15.21c-.89-.94-3.76-2.91-5.01-3.24"></path><path fill="#8d6e63" d="M93.2 55.42c-1.35 0-2.67-.69-3.42-1.93c-6.88-11.32-22.46-10.13-22.61-10.11c-2.2.18-4.14-1.44-4.33-3.63a4.006 4.006 0 0 1 3.61-4.34c.84-.08 20.67-1.71 30.17 13.94c1.15 1.89.54 4.35-1.34 5.49c-.66.39-1.37.58-2.08.58"></path><path fill="#6462d5" d="M96.06 122.07c-17.13 4.22-40.94 3.92-57.95.56C22.19 119.48 10 110.09 11.4 91.61c1.42-18.7 13.81-36.31 30.85-44.07c16.49-7.51 38.62-11.17 50.28 5.87c2.9 4.24 8.44 13.65 8.7 18.27c.02.37.04.7.12 1.02c.02 1.16.49 2.33 1.63 3.19c7.33 5.55 12.67 12.91 13.65 23c1.16 12.03-10.22 20.63-20.57 23.18"></path><path fill="black" d="M80.87 91.13c-2.08-3.38-5.91-7.05-9.53-10.2l2.81-7.78c2.5 1.95 4.7 3.78 6.42 5.36c.28.27.72.29 1.04.06l6.44-4.79c.18-.14.29-.34.32-.57a.8.8 0 0 0-.21-.62c-1.91-2.13-6.05-5.86-10.58-8.93l1.65-4.56c.19-.52-.07-1.09-.6-1.29l-7.57-2.74c-.52-.19-1.1.08-1.29.6l-1.23 3.41c-7.13-2.21-12.79-1.5-17.23 2.21c-3.48 2.92-4.98 7.09-3.92 10.87c1.08 4.03 4.24 6.79 8.24 10.28l.51.45c.93.8 1.92 1.63 2.89 2.46l-3.42 9.46c-4.49-2.94-8.25-7.01-8.89-7.9a.806.806 0 0 0-1.08-.21l-7.42 4.74c-.18.11-.31.3-.36.52c-.04.21 0 .43.12.61c2.23 3.36 5.88 7.12 9.77 10.06c.93.7 2.33 1.68 4.05 2.71l-1.29 3.55c-.18.52.08 1.09.6 1.28l7.58 2.75c.52.19 1.1-.08 1.29-.6l1.07-2.96c6.92 1.88 13 .79 17.7-3.23c4.54-3.89 5.32-9.35 2.12-15M65.18 68.4l-2.07 5.73c-1.93-1.5-2.96-2.63-2.23-4.25c.76-1.66 2.65-1.77 4.3-1.48m2.05 23.9c1.33 1.29 2.27 2.48 2.36 3.57c.04.62-.19 1.22-.73 1.84c-.94 1.09-2.44 1.3-3.99 1.11z"></path></svg></ins>
                    <p>  {room.price} </p>
                  </div>
                  <div className="duration">
                    <ins><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="#5b2cc9" fillRule="evenodd" d="M11.5 3.05a.45.45 0 0 1 .45.45v4a.45.45 0 0 1-.9 0V4.586L4.586 11.05H7.5a.45.45 0 0 1 0 .9h-4a.45.45 0 0 1-.45-.45v-4a.45.45 0 1 1 .9 0v2.914l6.464-6.464H7.5a.45.45 0 1 1 0-.9z" clipRule="evenodd"></path></svg></ins>
                    <p>{room.size}</p>
                  </div>
                  <div>
                    <button className="btn btn-sm border-[1px] border-blue-800 bg-[#33334b]">Book now!</button>
                  </div>
                </div>
              </div>
            </div>

          )
        }


      </div>
    </div>

  )
}

export default FeaturedRooms

{/* <div key={room._id} className="card  glass m-5">
<figure><img src={room.image} alt="car!"/></figure>
<div className="card-body">
  <h2 className="card-title">{room.name} </h2>
  <p> {room.description} </p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Book now!</button>
  </div>
</div>
</div> */}