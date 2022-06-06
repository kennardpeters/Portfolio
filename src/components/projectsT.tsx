import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import ivNight from "../ivNight.jpg";

interface Props {

}
const ProjectsT: React.FC<Props> = () => {
    const [postData, setPost] = useState< any[] | null>(null);

    useEffect( () => {
        sanityClient
        //groc query
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, []);
    
    return (
        <main className="bg-black min-h-screen p-12">
            
        <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center ballet text-yellow-100 bg-black">Projects</h1>
            <h2 className="text-lg text-blue-600 flex justify-center mb-12 bg-black">Welcome to my projects page!</h2>
            <img src={ivNight} alt="IV Scene" className="object-cover" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 static">
                {postData && postData.map((post, index) => (
                <article>
                    <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-300 opacity-75" 
                        key={index }
                        >
                         <img 
                         src={post.mainImage.asset.url}
                         alt={post.mainImage.alt}
                         className="w-full h-full rounded-r object-cover absolute"/>
                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-gray-800 text-lg font-bold px-3 py-4 crimson bg-blue-700 text-yellow-100 bg-opacity-75 rounded">{post.title}</h3>
                        </span>
                        </span>
                    </Link>
                </article>
                ))}
            </div>
            
        </section>
        </main>
        
    )
};
//     return (
//         <h1 className="text-5xl flex justify-center ballet text-yellow-100 bg-black">Projects</h1>
//     );
// }

export default ProjectsT;