import { Map, Marker } from "pigeon-maps";

const LocationMap = () => {
  return (
    <div className="border-[3px] w-[300px] md:w-[500px]  h-[350px]  lg:w-[500px] border-[#5840ff] ">
      <Map     defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={30} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
};

export default LocationMap;
