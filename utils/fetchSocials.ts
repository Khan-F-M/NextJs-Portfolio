import { Social } from "@/typings";

export async function fetchAbouts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocialsInfo`)
    // THIS LINK IS FOR THE NEXTJS APPLICATION NOT SANITY
    
    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
} 