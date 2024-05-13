import { Map, Marker } from "pigeon-maps";

const LocationMap = () => {
  return (
    <div className="border-[3px] border-[#5840ff] ">
      <Map  height={350} width={400}  defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={30} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
};

export default LocationMap;
