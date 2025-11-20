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
        {
            name: "order",
            title: "Display Order",
            type: "number",
            description: "Controls order on the Skills page (1 = first)",
        }
    ],
});