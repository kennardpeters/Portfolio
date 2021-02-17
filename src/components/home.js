import React from "react";
import image from "../beachHouse.jpg";

export default function Home() {
    return(
        <main>
            <img src={image} alt="Beach House" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8" >
                <h1 className="text-6xl text-blue-800 font-bold orbitron leading-none lg:leading-snug home-name">Welcome to my Site!</h1>
            </section>
        </main>  
    )
}