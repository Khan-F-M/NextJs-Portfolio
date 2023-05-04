import React from 'react'
import Skills from '../components/Skills'
import { Skill } from '@/typings'
import { fetchSkills } from '@/utils/fetchSkills';
import { GetStaticProps } from 'next';

type Props = {
  skills: Skill[];
}

export default function skills({ skills }: Props) {
  return (
    <Skills skills={skills} />
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills();

  // It'll stop complaining automatically. 

  return {
    props: {
      skills
    },
    revalidate: 1,
  }
}