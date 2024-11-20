import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ExpandableSection = ({ children, maxHeight='100px',title='' }) => {
    
    return (
      <div className="w-full max-w-2xl">
        <div className="relative justify-center">
          <input 
            type="checkbox" 
            className="peer absolute opacity-0 h-8 w-full bottom-0 z-10 cursor-pointer"
          />
          
          <div style={{ height: maxHeight }} className={`min-h-[20px] overflow-hidden peer-checked:!h-full transition-all duration-300`}>
            
              {children}
            
          </div>
          
          <div className="absolute bottom-0 w-full h-12  peer-checked:hidden">
          </div>
          
          <div className="flex p-5 justify-center text-center align-middle items-center peer-checked:[&>div:first-child]:hidden peer-checked:[&>div:last-child]:flex">
            <div className="flex align-middle items-center w-max justify-center border-b-2 border-white space-x-1 ">
            <span className="flex justify-center align-middle items-center cursor-pointer space-x-1 hover:font-bold">
              Show more {title}
            </span> <FaArrowDown/>
            </div>
            <div className="hidden w-max align-middle items-center  border-b-2 border-white space-x-1">
            <span className=" justify-center align-middle items-center cursor-pointer space-x-1">
                Show less {title}
            </span>
            <FaArrowUp/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExpandableSection;