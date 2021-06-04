import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow">
        <div className="container mx-auto pt-4 pb-4 pl-4 pr-0">
            
            <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
                <div className="font-bold">
                    Gordon
                </div>
                <ul className="flex flex-col mt-4  pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
                    <li>
                        <a className="block px-4 py-1 md:p-2 lg:px-4 hover:text-green-500" href="#about" title="About">About</a>
                    </li>
                    <li>
                        <a className="block px-4 py-1 md:p-2 lg:px-4 hover:text-green-500" href="#skills" title="Skills">Skills</a>
                    </li>
                    <li>
                        <a className="block px-4 py-1 md:p-2 lg:px-4 hover:text-green-500" href="#experience" title="Experience">Experience</a>
                    </li>
                    <li>
                        <a className="block px-4 py-1 md:p-2 lg:px-4 hover:text-green-500" href="#WIP" title="WIP Projects">WIP Projects</a>
                    </li>
                    <li>
                        <a className="block px-4 py-1 md:p-2 lg:px-4 hover:text-green-500" href="#completed" title="Completed Projects">Completed Projects</a>
                    </li>
                    <li>
                        <a className="block px-4 py-1 md:p-2 lg:px-4 hover:text-green-500" href="#resume" title="Resume">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
