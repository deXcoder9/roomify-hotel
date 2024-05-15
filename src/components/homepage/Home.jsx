import { Helmet } from "react-helmet";
import Banner from "./categoroies/Banner";
import FeaturedRooms from "./categoroies/FeaturedRooms";
import LocationMap from "./categoroies/LocationMap";
import Newsletter from "./categoroies/Newsletter";
import UserReviews from "./categoroies/UserReviews";
import specialOffer from "../../assets/special-offer.png"


const Home = () => {
    const openPopUp = () => {
        setTimeout(() => {
            document.getElementById('my_modal_3').showModal();
        }, 500);
    }
    
    openPopUp();
    return (
        <div className="bg-[#0e0f24] lg:max-w-[1440px] mx-auto -z-30 ">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div  className="">
                <dialog  id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="grid place-items-center">

                        <img className=" h-32" src={specialOffer} alt="" />
                        <p className="py-4">🎉🎉Get up-to 55% discount on your first booking 🎉🎉</p>
                        </div>
                    </div>
                </dialog>
            </div>
            <Banner ></Banner>
            <div className="mt-20">
            <FeaturedRooms></FeaturedRooms>
            </div>
            <div className="text-center ">
                    <h1 className="text-3xl pb-1">Stay Updated: Subscribe to Our Newsletter</h1>
                    <p className="text-gray-300">Join our community for the latest updates, exclusive offers, and insider news delivered straight to your inbox.</p>
                </div>
            <div className="flex flex-col lg:flex-row justify-around items-center my-10 mb-20 ">
                <Newsletter></Newsletter>
                <LocationMap></LocationMap>
            </div>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home;