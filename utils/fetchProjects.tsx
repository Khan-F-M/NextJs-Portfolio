import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity" //need to make groq queries
import { sanityClient } from "@/sanity";
import { Project } from "@/typings";

const query = groq`*[_type == "projectsInfo"]`

// type Data = {
//     projects: Project[]
// }

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
    
//     ) {

//     const projects: Project[] = await sanityClient.fetch(query);

//     res.status(200).json({ projects })

// }

// export async function fetchProjects() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjInfo`)
//     // THIS LINK IS FOR THE NEXTJS APPLICATION NOT SANITY
    
//     const data = await res.json();
//     const projects: Project[] = data.projects;

//     return projects;
// } 

export async function fetchProjects(): Promise<Project[]> {
    const res = await sanityClient.fetch(query);
    const projects: Project[] = res;

    return projects;
  }