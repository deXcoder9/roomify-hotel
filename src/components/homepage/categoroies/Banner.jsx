import "./category.css"
import bgVideo from "../../../assets/mainBannerVideo.mp4"
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div id="BannerSectionContainer">
           <video autoPlay loop muted playsInline  className="backgroundVideo" src={bgVideo} />
            <div className="content">
            <h1 className="mb-7">Discover Your <span className="perfectHeader">Perfect</span>  <br /> Getaway</h1>
            <div  className=" w-[150px] flex justify-center py-3 mx-auto items-center cursor-pointer "><p className="mr-6">Explore</p>  <FaArrowRightLong   className="text-[#4e4e91]"/> </div>
            </div>
        </div>
    );
};

export default Banner;