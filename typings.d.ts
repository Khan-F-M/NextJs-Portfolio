interface SanityBody { 
    // Since every query will return this, let's just make a base so
    // that other types can simply inherit its properties.
    _createdAt: string;
    _id: string;
    _rev: string,
    _updatedAt: string;
}

/* 
At the moment we only have one type, so we could technically
define it in the base class. But in case we add more types I'll
leave it as it is...*/

interface Image {
    _type: "image"
    asset: {
        _ref: string;
        _type: "reference"
    };
}

export interface Project extends SanityBody {
    _type: "projectsInfo"
    name: string;
    projImage: Image;
    languages: string;
    moreInfo: string;

}

export interface Skill extends SanityBody {
    _type: "skillsInfo"
    name: string;
    skillImage: Image;
}