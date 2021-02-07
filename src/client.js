//File used to communicate between react and sanity
import sanityClient from '@sanity/client'

export default sanityClient({
    //studio/sanity.json or
    //manage.sanity.io
    projectId: "w6gbeasc",
    dataset: "production"
}) 