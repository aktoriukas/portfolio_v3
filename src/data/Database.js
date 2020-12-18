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
                info: 'Implement design for whole website',
                url: 'https://isdb-transformers.org/',
                stack: ['Sass', 'Drupal', 'Twig', 'VanillaJS']
            },
            {
                id: 6,
                title: 'On the edge',
                ref: 'edge',
                info: 'Implement design for whole website',
                url: false,
                stack: ['Sass', 'Twig', 'VanillaJS', 'Sanity']
            },
            {
                id: 5,
                title: 'rota_me',
                ref: 'rotaMe',
                info: 'Rota template application',
                url: false,
                stack: ['React', 'Sass']
            },
            {
                id: 4,
                title: 'Jedmap',
                ref: 'jedmap',
                info: 'Ipad application / React / Sass ',
                url: false,
                stack: ['React', 'Sass']
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
                info: 'Collection of Elements',
                url: false,
                stack: ['Sass', 'VanillaJS', 'Twig']
            },
            {
                id: 2,
                title: 'Invest African Guide',
                ref: 'invest',
                info: 'Redesigning from the ground up',
                url: 'https://investmentguide.africa/',
                stack: ['Sass', 'VanillaJS']
            },
            {
                id: 1,
                title: 'Drops bar',
                ref: 'drops',
                info: 'Static bar website',
                // url: false,
                url: 'https://investmentguide.africa/',
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
                info: 'Html / Css / Sass / Vanilla JS / React / Twig',
            },
            {
                id: 2,
                title: 'Back end',
                ref: 'back',
                info: 'PHP / MySQL / Node.js / Sanity / Symphony'
            },
            {
                id: 3,
                title: 'Design',
                ref: 'design',
                info: 'Photoshop / Indesign / Figma / Gravit Designer'
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
            "I'm a Front-End Developer working in living in London. Passionate about building exelent websites that can improve lives for those who use them. Excellent in problem-solving Working creatively and efficiently whilst meeting the highest standards and attention to detail."
        )
    }
    get introduction () {
        return (
            "Hi. I'm Gediminas, nice to see you here."
        )
    }
}

export default new Database ();
