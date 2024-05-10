import Banner from "./categoroies/Banner";
import LocationMap from "./categoroies/LocationMap";
import Newsletter from "./categoroies/Newsletter";


const Home = () => {
    return (
        <div className="bg-[#0e0f24] lg:max-w-[1440px] mx-auto">
            <Banner></Banner>
            <div className="flex justify-around items-center my-10">
            <Newsletter></Newsletter>
            <LocationMap></LocationMap>
            </div>
        </div>
    );
};

export default Home;