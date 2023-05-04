import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectsInfo',
  title: 'ProjectsInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "title",
      type: "string"
    },
    {
      name: "languages",
      title: "Languages",
      type: "string",
    },
    {
      name: "moreInfo",
      title: "MoreInfo",
      type: "string"
    },
    {
      name: "projImage",
      title: "ProjImage",
      type: "image",
      options: {
        hotspot: true,
      }
    },
  ],
})
