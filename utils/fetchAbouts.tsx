import { About } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity" //need to make groq queries
import { sanityClient, urlFor } from "@/sanity";

const query = groq`*[_type == "aboutsInfo"]`

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

// export async function fetchAbouts( 
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {

//     const abouts: About = await sanityClient.fetch(query);


//     const data = await res.status(200).json({ abouts })
//     const abouts: About[] = data.abouts;

//     // console.log(abouts[0]); 

//     return abouts[0];
// } 

export async function fetchAbouts() {
    const res = await sanityClient.fetch(query);
    const abouts: About[] = res;

    return abouts[0];
}