import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container md:container md:mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-yellow-200 hover:text-white-800 text-4xl font-bold ballet tracking-widest"
                    >
                        Kennard
                    </NavLink>
                    <NavLink 
                    to="/projects"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-200 hover:text-blue-100"
                    activeClassName="text-red-100 bg-blue-900"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                    to="/lang"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-200 hover:text-green-100"
                    activeClassName="text-red-100 bg-green-900"
                    >
                        Languages
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-200 hover:text-purple-100"
                    activeClassName="text-red-100 bg-purple-900"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/kennard-peters-a0062313a/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/kennardpeters" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />

                </div>
            </div>
        </header>
    )
}