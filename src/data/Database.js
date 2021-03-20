import Github from '../icons/github.png';
import Email from '../icons/email.png';
import LinkedIn from '../icons/linkedin.png';
// =========== IMAGES ======================
import Rotame from '../image/rota_me.png'
import Rotame1 from '../image/rota_me1.png'
import Rotame2 from '../image/rota_me2.png'

import Invest from '../image/invest.png';
import Invest1 from '../image/invest1.png';
import Invest2 from '../image/invest2.png';

import Map from '../image/map.png';

import Edge from '../image/ontheedge.png';
import Edge1 from '../image/ontheedge1.png';
import Edge2 from '../image/ontheedge2.png';

import Kratinys from '../image/kratinys.png'
import Kratinys2 from '../image/kratinys2.png'

import DrinkVideo from '../video/drink-me.m4v'

class Database {
    get projects() {
        return [
            {
                id: 8,
                title: 'Kratinys',
                ref: 'drink-me',
                info: 'React elements library.',
                url: 'https://github.com/aktoriukas/element_salad/',
                stack: ['React.Js', 'styled-components', 'CSS', 'NPM'],
                img: [Kratinys, Kratinys2],
            },
            {
                id: 7,
                title: 'cocktails',
                ref: 'drink-me',
                info: 'API for saving, reviewing and submiting cocktails.',
                url: 'https://aktoriukas.com/drink-me/',
                stack: ['React.Js', 'Sass', 'Node.Js'],
                img: [],
                video: [DrinkVideo]
            },
            {
                id: 6,
                title: 'On the edge',
                ref: 'edge',
                info: 'Complete redesign of the whole website. New format and structure.',
                url: false,
                stack: ['Sass', 'Twig', 'VanillaJS', 'Sanity'],
                img: [Edge, Edge1, Edge2]
            },
            {
                id: 5,
                title: 'rota-me',
                ref: 'rotaMe',
                info: 'Application for professionals in industries that require constantly changing graphics. Easy way to store, update and share scedules',
                url: 'https://rota-me.com/',
                stack: ['React.Js', 'Node.Js', 'Express', 'SQL', 'Sass'],
                img: [Rotame, Rotame1, Rotame2]
            },
            {
                id: 4,
                title: 'Jedmap',
                ref: 'jedmap',
                info: 'Application to select and manipulate map in IsDB office.',
                url: false,
                stack: ['ReactJS', 'Sass', 'Axios'],
                img: [Map]
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
                info: 'Complete redesign of the whole website.',
                url: 'https://investmentguide.africa/',
                stack: ['Sass', 'VanillaJS', 'Symphony', 'Drupal'],
                img: [Invest, Invest1, Invest2]
            },
            // {
            //     id: 1,
            //     title: 'Drops bar',
            //     ref: 'drops',
            //     info: 'Website for local restaurant/bar.',
            //     url: false,
            //     stack: ['Html', 'Css']
            // }
        ];
    }
    get skills() {
        return [
            {
                id: 1,
                title: 'Front end',
                ref: 'front',
                info: 'React.js / Vue.js / Sass|Css / Vanilla JS / Drupal / Wordpress ',
            },
            {
                id: 2,
                title: 'Back end',
                ref: 'back',
                info: 'Node.Js / MySQL / MongoDb / PHP / Express '
            },
            {
                id: 3,
                title: 'Design',
                ref: 'design',
                info: 'Abode Photoshop / Adobe Indesign / Adobe XD / Illustrator / Figma / Gravit Designer'
            }
        ]
    }
    get socialMedia() {
        return [
            {
                id: 1,
                title: 'git-hub',
                url: 'https://github.com/aktoriukas',
                logo: Github

            },
            {
                id: 2,
                title: 'email',
                url: 'mailto: gediminas@aktoriukas.com',
                logo: Email

            },
            {
                id: 3,
                title: 'linkedIn',
                url: 'https://linkedin.com/in/strumila/',
                logo: LinkedIn

            }
        ]
    }
    get about() {
        return (
            "I'm a Web Developer working in living in London. Passionate about building exceptional digital solutions that can improve lives for those who use them."
        )
    }
    get introduction() {
        return (
            "Hi. I'm Gediminas, nice to see you here."
        )
    }
}

export default new Database();
