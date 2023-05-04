//THIS FILE IS THE DEFAULT "/" ROUTE IN NEXTJS
//https://www.sanity.io/docs/connect-your-content-to-next-js

import React from 'react'
import Frontpage from '../components/Frontpage'
import { Project } from '../typings'
import { fetchProjects } from '../utils/fetchProjects'
import { GetStaticProps } from 'next';



export default function index() {
  return (
    <Frontpage />
    // The config file for TS in this program is the jsconfig.json
  )
}

