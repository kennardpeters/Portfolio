import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import ivshot from "../ivshot.jpeg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const[author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
        )
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>;

    return (
        <main className="relative">
            <img src={ivshot} alt="IV Scene" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-black rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} 
                    className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    alt={author.name} />
                    <div className="text-lg flex-col justify-center">
                        <h1 className="crimson text-6xl text-yellow-300 mb-4">
                            Hello, I'm{" "}
                            <span className="text-yellow-100">{author.name}</span>
                        </h1>
                        <div className="crimson lg:crimson-xl text-white">
                            <BlockContent blocks={author.bio} projectId="w6gbeasc" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}