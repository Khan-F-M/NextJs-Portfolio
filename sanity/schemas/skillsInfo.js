import { defineType } from 'sanity'

export default defineType({
    name: 'skillsInfo',
    title: 'SkillsInfo',
    type: 'document',
    fields: [
        {
            name: "name",
            title: "title",
            type: "string"
        },
        {
            name: "skillImage",
            title: "skillImage",
            type: "image",
            options: {
                hotspot: true,
            }
        },
    ],
})
