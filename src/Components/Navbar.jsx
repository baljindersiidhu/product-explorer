import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

function Navbar(){
    return (
        <div className=" flex flex-row justify-between w-8/11 mx-auto mt-3">
            
        <img className="w-[60px]" src="https://images.seeklogo.com/logo-png/50/1/shop-app-logo-png_seeklogo-502747.png" alt="" />
        <h1 className="text-2xl font-bold items-center flex"> Shop With Balli</h1>
            <div className="flex flex-row gap-4 items-center ">

                <FaHeart />
                <FaCartPlus />
                <p className="flex flex-row items-center">
                    Profile <span><IoPerson />  </span>
                </p>
            </div>

        </div>
    )
}
export default Navbar; 