import { defineType } from 'sanity'

export default defineType({
    name: 'aboutsInfo',
    title: 'AboutsInfo',
    type: 'document',
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "profilePic",
            title: "ProfilePic",
            type: "image",
            options: {
                hotspot: true,
            }
        },
    ],
})
