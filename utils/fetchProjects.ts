import { Project } from "@/typings";

export async function fetchProjects() {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/api/getProjInfo`)
    // THIS LINK IS FOR THE NEXTJS APPLICATION NOT SANITY
    
    const data = await res.json();
    const projects: Project[] = data.projects;

    return projects;
} 