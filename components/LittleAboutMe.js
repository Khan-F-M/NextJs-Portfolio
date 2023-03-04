import React from 'react'
import { motion } from "framer-motion"
import Card from 'react-bootstrap/Card';
import tailwindConfig from '@/tailwind.config';

export default function LittleAboutMe() {
    return (
        <>
            <h1>A little Bit About Me</h1>
            <p className="text-l text-red-900 text-justify font-bold">
                I'm a student at Seneca College, and study
                Computer Programming. I was originally studying
                Computer Engineering Technology, however, I
                had a greater passion for programming. For that reason,
                I decided that focusing my time soley on programming
                would be better than working on hardware and software aspects.
                With that said, I still have a passion for the hardware part, but
                I like to build projects in my own personal time, rather than being
                limited to a deadline. This allows me to learn more and become better.
            </p>
        </>
    )
}
