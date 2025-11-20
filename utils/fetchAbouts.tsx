import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity" //need to make groq queries
import { About } from "@/typings";
import { sanityClient, urlFor } from "@/sanity";

const query = groq`*[_type == "aboutsInfo"]`

export async function fetchAbouts() {
    const res = await sanityClient.fetch(query);
    const abouts: About[] = res;

    return abouts[0];
}