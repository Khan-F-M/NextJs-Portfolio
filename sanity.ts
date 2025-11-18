import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  apiVersion: "2022-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config)
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}