import { Link } from "react-router-dom";


function Navbar() {

    return(
        
            <div className="bg-gray-900 text-white flex w-full h-24 items-center justify-between px-8 py-4 sticky top-0 z-50">
            <span className="font-bold text-xl">Bibek kunwar</span>

            {/* react route links */}

            <nav className=" flex gap-4 ">
                <Link className="hover:text-gray-400 transition-colors " to="/">Home</Link>
                <Link className="hover:text-gray-400 transition-colors " to="/about">about</Link>
                <Link className="hover:text-gray-400 transition-colors " to="/projects">projects</Link>
                <Link className="hover:text-gray-400 transition-colors " to="/contact">contact</Link>
            </nav>

        </div>


        
    ) 
}

export default Navbar;

