import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        //GROQ query
        sanityClient.fetch(`*[_type == "project"]{
            title,
            mainImage{
                asset->{
                  _id,
                  url
                 }
               },
            description,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);
    return(
        <main className="bg-black min-h-screen p-12">
            
        <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center ballet text-yellow-100 bg-black">Languages/Frameworks</h1>
            <h2 className="text-lg text-green-600 flex justify-center mb-12 bg-black">Languages/Frameworks I have used in Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 static">
                {projectData && projectData.map((project, index) => (
                <article>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-600 opacity-75" 
                        key={index }
                        >
                         <img 
                         src={project.mainImage.asset.url}
                         alt=""
                         className="w-full h-full rounded-r object-cover absolute"/>
                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-gray-800 text-lg font-bold px-3 py-4 crimson bg-blue-700 text-yellow-100 bg-opacity-75 rounded">{project.title}</h3>
                        </span>
                        </span>
                </article>
                ))}
            </div>

        </section>
        </main>
    )
}
{/* <Link to={"/project/" + project.slug.current} key={project.slug.current}></Link>
</Link> */}
{/* <main className="bg-black min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-4xl flex justify-center ballet text-yellow-100">Coding Languages</h1>
                <h2 className="text-lg text-green-600 flex justify-center mb-12">Languages/Frameworks</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-green-600 p-16">
                        <h3 className="text-gray text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-yellow-300 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a href={project.link} rel="noopener noreferrrer" target="_blank" className="text-yellow-400 font-bold hover:underline hover:text-red-400 text-xl">
                                View The Project{" "}
                            <span role="img" aria-label="right pointer">
                                👉
                            </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main> */}