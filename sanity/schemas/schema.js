import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import projectsInfo from './projectsInfo';
import skillsInfo from './skillsInfo';
import aboutsInfo from './aboutsInfo';
import events from "./events";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    projectsInfo,
    skillsInfo,
    aboutsInfo,
    events, // optional, but you imported it so might as well use it
  ]),
});
