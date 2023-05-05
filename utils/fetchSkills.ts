import { Project, Skill } from "@/typings";

export async function fetchSkills() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillsInfo`)

    const data = await res.json();
    const skills: Skill[] = data.skills;

    return skills;
} 