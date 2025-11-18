import React from 'react'
import Aboutpage from '../components/Aboutpage'
import Skills from '../components/Skills'
import { GetStaticProps } from 'next'
import { About } from '@/typings'
import { fetchAbouts } from '@/utils/fetchAbouts'
import Footer from '../components/Footer'
type Props = {
  abouts: About;
}

export default function about({ abouts }: Props) {
  return (
    <>
      <Aboutpage abouts={abouts} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const abouts: About = await fetchAbouts();

  // It'll stop complaining automatically. 

  return {
    props: {
      abouts
    },
    revalidate: 10,
  }
}
