import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity" //need to make groq queries
import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";

const query = groq`*[_type == "skillsInfo"]`

export async function fetchSkills(): Promise<Skill[]> {
    const res = await sanityClient.fetch(query);
    const skills: Skill[] = res;

    return skills;
  }