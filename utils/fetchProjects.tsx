import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity" //need to make groq queries
import { sanityClient } from "@/sanity";
import { Project } from "@/typings";

const query = groq`*[_type == "projectsInfo"]`

export async function fetchProjects(): Promise<Project[]> {
    const res = await sanityClient.fetch(query);
    const projects: Project[] = res;

    return projects;
  }