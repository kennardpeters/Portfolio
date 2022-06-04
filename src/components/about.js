import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import ivshot from "../beachView.jpg";
//import ivshot from "../BleuBold3.png"
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
        <main className="relative bg-black min-h-screen p-12">
            <img src={ivshot} alt="IV Scene" className="absolute object-cover" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-black bg-opacity-80 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} 
                    className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    alt={author.name} />
                    <div className="text-lg flex-col justify-center">
                        <h1 className="crimson text-6xl text-green-500 mb-4">
                            Hello, I'm{" "}
                            <span className="ballet text-yellow-100">{author.name}</span>
                        </h1>
                        <div className="cindec lg:cindec-xl text-blue-500">
                            <BlockContent blocks={author.bio} projectId="w6gbeasc" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}