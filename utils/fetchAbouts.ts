import { About } from "@/typings";

export async function fetchAbouts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutInfo`)
    // THIS LINK IS FOR THE NEXTJS APPLICATION NOT SANITY
    
    const data = await res.json();
    const abouts: About[] = data.abouts;

    // console.log(abouts[0]); 

    return abouts[0];
} 