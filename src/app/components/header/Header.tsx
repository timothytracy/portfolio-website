import { FaHome, FaTools } from "react-icons/fa";
import HeaderButton from "../buttons/header-button/HeaderButton";
import { FaPerson } from "react-icons/fa6";
import { MdContactMail, MdWork } from "react-icons/md";

const Header: React.FC = () => {
    return ( 
        <div className='flex justify-center items-center bg-electron-blue-100  dark:bg-dracula-orchid-500  lg:min-h-screen lg:max-w-[100px]  h-16 lg:h-auto '>
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
