import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
//mport ivNight from "../ivNight.jpg";

//segments out urls for each blog post
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    //GROQ query
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;

    return (
        <main className="bg-black min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-yellow-100 rounded-lg">
                <header className="relative"> 
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-yellow-300 bg-opacity-75 rounded p-12">
                            <h1 className="cindec text-3xl lg:text-6xl mb-4 text-blue-900">
                                {singlePost.title}
                            </h1>
                            <div className="flex justify-center text-purple-800">
                                <img src={urlFor(singlePost.authorImage).url()}
                                alt={singlePost.name}
                                className="w-10 h-10 rounded-full"
                                />
                                <p className="ballet flex items-center pl-2 text-2xl">
                                    {singlePost.name} 
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url} 
                    alt={singlePost.title}
                    className="w-full object-cover rounded-t"
                    style={{ height: "400px" }}
                    />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent blocks={singlePost.body} 
                    projectId="w6gbeasc" 
                    dataset="production"
                    />
                </div>
            </article>
        </main>
    )
}