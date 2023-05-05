import { defineType } from 'sanity'

export default defineType({
    name: 'socialsInfo',
    title: 'SocialsInfo',
    type: 'document',
    fields: [
        {
            name: "socialPic",
            title: "SocialPic",
            type: "image",
            options: {
                hotspot: true,
            }
        },
    ],
})
