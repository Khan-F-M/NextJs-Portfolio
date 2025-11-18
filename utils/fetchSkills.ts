import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity" //need to make groq queries
import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";

const query = groq`*[_type == "skillsInfo"] | order(order asc)`

export async function fetchSkills(): Promise<Skill[]> {
    const skills = await sanityClient.fetch<Skill[]>(query);
    return skills;
}