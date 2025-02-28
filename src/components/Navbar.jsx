import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for hamburger menu
import img from "../assets/user4.jpg";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#5E5368] to-[#000000] shadow-2xl  top-0 left-0 z-50 ">
      <div className="w-screen mx-auto flex justify-between items-center px-6 py-4">
        
        <div className="flex items-center space-x-2">
          <img className="w-12 h-12" src={logo} alt="Logo" />
          <h1 className="text-2xl font-bold text-white">Movie House</h1>
        </div>

       
        <ul className="hidden md:flex space-x-10 text-white text-lg">
          <li className="hover:text-red-600 transition duration-300">
            <a href="https://www.netflix.com/in/" target="_blank" rel="noopener noreferrer">
              Watch Movies
            </a>
          </li>
          <li className="hover:text-sky-600 transition duration-300">
            <a href="https://in.bookmyshow.com/" target="_blank" rel="noopener noreferrer">
              Book Ticket
            </a>
          </li>
          <li className="hover:text-amber-700 transition duration-300">
            <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
              IMDB
            </a>
          </li>
          <li className="hover:text-amber-600 transition duration-300">
            <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
              Rate Movies
            </a>
          </li>
        </ul>

       
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <img className="rounded-full w-12 h-12 border-2 border-white" src={img} alt="User" />
            <h1 className="text-white hidden md:block">John Deo</h1>
          </div>

         
          {userMenuOpen && (
            <div className="absolute right-0 mt-3 w-40 bg-white shadow-md rounded-lg overflow-hidden">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-200">
                Logout
              </a>
            </div>
          )}
        </div>

      
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

     
      {isOpen && (
        <ul className="md:hidden bg-black text-white text-lg flex flex-col items-center space-y-5 py-4">
          <li className="hover:text-red-600">
            <a href="https://www.netflix.com/in/" target="_blank">Watch Movies</a>
          </li>
          <li className="hover:text-sky-600">
            <a href="https://in.bookmyshow.com/" target="_blank">Book Ticket</a>
          </li>
          <li className="hover:text-amber-700">
            <a href="https://www.imdb.com/" target="_blank">IMDB</a>
          </li>
          <li className="hover:text-amber-600">
            <a href="https://www.imdb.com/" target="_blank">Rate Movies</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;




// -----------------------------------------------------------------------------------------------------------------------------------
// import React, { useEffect } from "react";
// import img from "../assets/user4.jpg";
// import logo from "../assets/logo.png";

// const Navbar = () => {
  

//   return (
//     <div>
//       <nav className=" w-screen h-20 bg-gradient-to-r from-[#5E5368] to-80% to-[#000000] shadow-2xl flex justify-between items-center bg-transparent">
//         <div className=" flex text-xl font-bold text-white items-center mr-6 gap-1">
//           <img className=" w-14 h-14 ml-3 " src={logo} alt="" />
//           <h1 className=" text-2xl font-bold text-white p-3">Movie House</h1>
//         </div>
//         <div className=" flex text-xl font-bold text-white p-4 list-none gap-10  ">
//           <li className=" hover:text-red-600 hover:duration-200">
//             <a href="https://www.netflix.com/in/" target="_blank">Watch Movies</a>
//           </li>
//           <li className=" hover:text-sky-600 hover:duration-200">
//             <a href="https://in.bookmyshow.com/" target="_blank">Book Movie Ticket</a>
//           </li>
//           <li className=" hover:text-amber-700 hover:duration-200">
//             <a href="https://www.imdb.com/" target="_blank">IMDB</a>
//           </li>
//           <li className=" hover:text-amber-600 hover:duration-200">
//             <a href="https://www.imdb.com/" target="_blank">Rate Movies</a>
//           </li>
//         </div>
//         <div className="  flex text-xl font-bold text-white items-center mr-6 gap-3">
//           <img className=" rounded-full w-14 h-14 p-1 " src={img} alt="" />
//           <h1>John Deo</h1>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
