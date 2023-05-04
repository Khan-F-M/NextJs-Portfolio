import React from 'react'
import { Project } from '../typings';
import ProjectDisplay from '../components/ProjectDisplay';
import { fetchProjects } from '../utils/fetchProjects';
import { GetStaticProps } from 'next/types';


type Props = {
  projects: Project[];
}

export default function projects({ projects }: Props) {
  return (
    // <ProjectsDisplay />
    <ProjectDisplay projects={projects}/>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: Project[] = await fetchProjects();

  // It'll stop complaining automatically. 

  return {
    props: {
      projects
    },
    revalidate: 1,
  }
}