import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialLinks(){

    return (
        <div className="flex gap-2 justify-start text-white ml-12 text-xl mt-40">
            <h3 className="hover:opacity-50 trasform ease-in-out duration-200"><FaFacebookF /></h3>
            <h3 className="hover:opacity-50 trasform ease-in-out duration-200"><FaInstagram /></h3>
            <h3 className="hover:opacity-50 trasform ease-in-out duration-200"><FaYoutube /></h3>
        </div>
    )
}