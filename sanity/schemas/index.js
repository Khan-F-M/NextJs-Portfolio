import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import projectsInfo from './projectsInfo'
import skillsInfo from './skillsInfo'
import aboutsInfo from './aboutsInfo'
import { createSchema } from 'sanity'

export default createSchema ( {
    
    name: "default",

    types: schemaTypes.concat( [projectsInfo, skillsInfo, aboutsInfo]),
} );


// https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio