import Github from '../icons/github.png';
import Email from '../icons/email.png';
import LinkedIn from '../icons/linkedin.png';
// import React from 'react';


class Database  {
    get projects () {
        return [
            {
                id: 7,
                title: 'Transformers 2020',
                ref: 'transformers',
                info: 'Website for yearly Transformers academy who went completely virtual this year.',
                url: 'https://isdb-transformers.org/',
                stack: ['Sass', 'Drupal', 'Twig', 'VanillaJS']
            },
            {
                id: 6,
                title: 'On the edge',
                ref: 'edge',
                info: 'Completely new design for the whole website with new features and format.',
                url: false,
                stack: ['Sass', 'Twig', 'VanillaJS', 'Sanity']
            },
            {
                id: 5,
                title: 'rota-me',
                ref: 'rotaMe',
                info: 'Schedule tracking application. For anyone who needs an easy way to schedule shifts. ',
                url: 'http://aktoriukas.com/rota_me/',
                stack: ['ReactJS', 'NodeJS', 'Express' , 'SQL' , 'Sass']
            },
            {
                id: 4,
                title: 'Jedmap',
                ref: 'jedmap',
                info: 'Application to select and manipulate map in IsDB office.',
                url: false,
                stack: ['ReactJS', 'Sass']
            },
            // {
            //     id: 2,
            //     title: 'Isdb Development bank',
            //     ref: 'isdb',
            //     info: 'Support on adding features / JavaScript / Sass',
            //     url: 'https://www.isdb.org/'
            // },
            {
                id: 3,
                title: 'Brand Guidlines',
                ref: 'guidlines',
                info: 'Libary of elements from all company websites for any future projects.',
                url: false,
                stack: ['Sass', 'VanillaJS', 'Twig']
            },
            {
                id: 2,
                title: 'Invest African Guide',
                ref: 'invest',
                info: 'Complete redesign of the whole website. Investment guidelines.',
                url: 'https://investmentguide.africa/',
                stack: ['Sass', 'VanillaJS']
            },
            {
                id: 1,
                title: 'Drops bar',
                ref: 'drops',
                info: 'Website for local restaurant/bar.',
                url: false,
                stack: ['Html', 'Css']
            }
        ];
    }
    get skills () {
        return [
            {
                id: 1,
                title: 'Front end',
                ref: 'front',
                info: 'Html / Sass|Css / Vanilla JS / ReactJS / Twig',
            },
            {
                id: 2,
                title: 'Back end',
                ref: 'back',
                info: 'PHP / MySQL / NodeJS / Express / Sanity / Symphony'
            },
            {
                id: 3,
                title: 'Design',
                ref: 'design',
                info: 'Photoshop / Indesign / Illustrator / Figma / Gravit Designer'
            }
        ]
    }
    get socialMedia () {
        return [
            {
                id:1,
                title: 'git-hub',
                url: 'https://github.com/aktoriukas',
                logo: Github

            },
            {
                id:2,
                title: 'email',
                url: 'mailto: gediminas.strumila@gmail.com',
                logo: Email

            },
            {
                id:3,
                title: 'linkedIn',
                url: 'https://linkedin.com/in/strumila/',
                logo: LinkedIn

            }
        ]
    }
    get about () {
        return (
            "I'm a Front-End Developer working in living in London. Passionate about building exceptional websites that can improve lives for those who use them. Excellent in problem-solving Working creatively and efficiently whilst meeting the highest standards and attention to detail."
        )
    }
    get introduction () {
        return (
            "Hi. I'm Gediminas, nice to see you here."
        )
    }
}

export default new Database ();
