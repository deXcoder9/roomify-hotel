import { useEffect, useState } from "react"
import SingleRoom from "./SingleRoom"
import { Helmet } from "react-helmet";

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [displayRooms, setDisplayRooms] = useState([]);

  useEffect(() => {
    fetch('https://roomify-dexcoder.netlify.app/rooms')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => {
        setRooms(data)
        setDisplayRooms(data)
      })
  }, [])

  const getOptionValue = () => {
    let optionName = document.getElementById("listMenu").value;
    handleBookFilter(optionName)
    // console.log(optionName)
};
const handleBookFilter = (filter) => {
  // console.log(filter);

  if (filter === "all") {
      setDisplayRooms(rooms);
  } 
  else if (filter === "underHundred") {
      const roomsUnderHundred = rooms.filter(
          (room) => room.price < 100
      );
      console.log(roomsUnderHundred)
      setDisplayRooms(roomsUnderHundred);
  } 
  else if (filter === "underTwohundred") {
      const roomsUnderTwoHundred = rooms.filter(
          (room) => room.price < 200
      );
      setDisplayRooms(roomsUnderTwoHundred);
  } else if (filter === "underFourhundred") {
      const roomsUnderFourHundred = rooms.filter(
          (room) => room.price < 400
      );
      setDisplayRooms(roomsUnderFourHundred);
  }
};

  return (
    <div className="lg:p-4 flex flex-col  ">
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      <div className="flex justify-end">
      <select defaultValue="all" id="listMenu" onChange={()=> getOptionValue()} className="select select-ghost w-full max-w-[170px] bg-black border-[1px] border-blue-700">
        <option value="all" className="bg-transparent " > all </option>
        <option value="underHundred" className="bg-transparent " >under $100 </option>
        <option value="underTwohundred" className="bg-transparent">under $200</option>
        <option value="underFourhundred" className="bg-transparent">under $400</option>
      </select>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:space-x-7 lg:space-y-5 space-y-6 md:space-x-3">
        {
          displayRooms.map(room => <SingleRoom key={room._id} room={room} ></SingleRoom>)
        }
      </div>

    </div>
  )
}


export default Rooms;