// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity" //need to make groq queries
// import { sanityClient, urlFor } from "@/sanity";
// import { About } from "@/typings";

// const query = groq`*[_type == "aboutsInfo"]`

// type Data = {
//     abouts: About;
// }

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
    
//     ) {

//     const abouts: About = await sanityClient.fetch(query);

//     // console.log(abouts)
//     // urlFor(abouts.profilePic).url()
//     res.status(200).json({ abouts })
// }
