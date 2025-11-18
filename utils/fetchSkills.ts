import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity" //need to make groq queries
import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";

const query = groq`*[_type == "skillsInfo"]`

// type Data = {
//     skills: Skill[]
// }

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>

//     ) {

//     const skills: Skill[] = await sanityClient.fetch(query);

//     res.status(200).json({ skills })
// }

// export async function fetchSkills() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillsInfo`)

//     const data = await res.json();
//     const skills: Skill[] = data.skills;

//     return skills;
// } 

export async function fetchSkills(): Promise<Skill[]> {
    const res = await sanityClient.fetch(query);
    const skills: Skill[] = res;

    return skills;
}