import { FaHome, FaTools } from "react-icons/fa";
import HeaderButton from "../buttons/header-button/HeaderButton";
import { FaPerson } from "react-icons/fa6";
import { MdContactMail, MdWork } from "react-icons/md";

const Header = () => {
    return ( 
        <div className='border border-solid border-orangeville light:bg-city-lights-100 flex  lg:min-h-screen lg:max-w-[100px]  h-16 lg:h-auto justify-center items-center'>
            <div className="flex lg:flex-col space-5">
                <a href='/home'><HeaderButton ><FaHome size='30'/></HeaderButton></a>
                <a href='/about'><HeaderButton><FaPerson size='30'/></HeaderButton></a>
                <a href='/work'><HeaderButton><MdWork size='30'/></HeaderButton></a>
                <a href='/portfolio'><HeaderButton><FaTools size='30'/></HeaderButton></a>
                <a href='/contact'><HeaderButton><MdContactMail size='30'/></HeaderButton></a>
            </div>
        </div>
    );
}

export default Header;
<div className='flex flex-column min-h-max bg-white'>

</div>