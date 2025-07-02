import { FaFacebook , FaTwitter , FaLinkedinIn ,FaYoutube ,  FaInstagram , FaPinterest} from "react-icons/fa";

export default function Icon() {
    return (<>
        <div className="flex justify-between">
            <div className="bg-primary p-2 rounded-full">
                <a href="">
                    <FaFacebook className=" text-xl text-back "/>
                </a>
            </div>
            <div className="bg-primary p-2 rounded-full"><a href=""><FaTwitter className=" text-xl text-back " /></a></div>
            <div className="bg-primary p-2 rounded-full"><a href=""><FaLinkedinIn className=" text-xl text-back " /></a></div>
            <div className="bg-primary p-2 rounded-full"><a href=""><FaYoutube className=" text-xl text-back " /></a></div>
            <div className="bg-primary p-2 rounded-full"><a href=""><FaInstagram className=" text-xl text-back " /></a></div>
            <div className="bg-primary p-2 rounded-full"><a href=""><FaPinterest className=" text-xl text-back "/></a></div>
        </div>
    </>)
}