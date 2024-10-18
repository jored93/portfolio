import MASTER_DETAIL from '../../assets/images/user-auth.png'
import USER_AUTH from '../../assets/images/user-auth.png'
import NEST from '../../assets/images/nest.png'

import {
    SiGraphql,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodedotjs,
    SiPhp,
    SiPython,
    SiReact,
    SiAngular,
    SiSass,
    SiBootstrap,
    SiTypescript,
    SiExpress,
    SiFlask,
    SiMongoose,
    SiSocketdotio,
    SiPostgresql,
    SiMysql,
    SiPowerbi,
    SiMongodb,
    SiPrisma,
    SiGit,
    SiGithub,
    SiGitlab,
    SiDocker,
    SiAmazon,
    SiAwslambda,
    SiMeta,
    SiTrello,
    SiPostman,
    SiMicrosoftazure,
    SiTypeorm,
    SiJsonwebtokens,
    SiNestjs,
    SiDotnet,
    SiCsharp,
    SiVisualstudio,
    SiLinux,
    SiVirtualbox ,
    SiChef,
    SiServerless
} from 'react-icons/si';

export const PROJECTS_DATA = [
    {
        tech: [
            { name: 'Node.js', icon: SiNodedotjs, classNameColor: 'greenLight' },
            { name: 'TypeOrm', icon: SiTypeorm, classNameColor: 'lightBlue' },
            { name: 'Typescript', icon: SiTypescript, classNameColor: 'lightBlue' }
        ],
        imageAlt: "MASTER_DETAIL.png",
        tittle: "Maestro detalle",
        description: "TypeORM - NodeJS",
        github: "https://github.com/jored93/master-detail",
        demo: "https://github.com/jored93/master-detail"
    },
    {
        tech: [
            { name: 'Node.js', icon: SiNodedotjs, classNameColor: 'greenLight' },
            { name: 'Typescript', icon: SiTypescript, classNameColor: 'lightBlue' },
            { name: 'TypeOrm', icon: SiJsonwebtokens, classNameColor: 'lightBlue' }
        ],
        "imageAlt": "USER_AUTH.png",
        "tittle": "Autenticación JWT",
        "description": "TypeORM - NodeJS",
        "github": "https://github.com/jored93/user-auth",
        "demo": "https://github.com/jored93/master-detail"
    },
    {
        tech: [
            { name: 'Node.js', icon: SiNodedotjs, classNameColor: 'greenLight' },
            { name: 'NestJS', icon: SiNestjs, classNameColor: 'greenLight' },
            { name: 'TypeOrm', icon: SiTypeorm, classNameColor: 'lightBlue' },
        ],
        "imageAlt": "NEST.png",
        "tittle": "Depositos en cuentas",
        "description": "TypeORM - NestJS",
        "github": "https://github.com/jored93/deposits-accounts-nestjs",
        "demo": "https://github.com/jored93/master-detail"
    },
    {
        tech: [
            { name: 'NestJS', icon: SiNestjs, classNameColor: 'greenLight' },
            { name: 'Mongoose', icon: SiMongoose, classNameColor: 'lightBlue' },
            { name: 'Awslambda', icon: SiAwslambda, classNameColor: 'lightBlue' }
        ],
        "imageAlt": "NEST.png",
        "tittle": "Modulo de clientes",
        "description": "TypeORM - NestJS",
        "github": "https://github.com/jored93/customers-module",
        "demo": "https://github.com/jored93/master-detail"
    },
    {
        tech: [
            { name: 'TypeOrm', icon: SiCsharp, classNameColor: 'lightBlue' },
            { name: 'NestJS', icon: SiDotnet, classNameColor: 'greenLight' },
            { name: 'Visualstudio', icon: SiVisualstudio, classNameColor: 'greenLight' }
        ],
        "imageAlt": "NEST.png",
        "tittle": "Supermercado .Net",
        "description": "TypeORM - NestJS",
        "github": "https://github.com/jored93/Supermarkets",
        "demo": "https://github.com/jored93/master-detail"
    },
    {
        tech: [
            { name: 'Angular', icon: SiAngular, classNameColor: 'greenLight' },
            { name: 'Typescript', icon: SiTypescript, classNameColor: 'lightBlue' },
            { name: 'Css3', icon: SiCss3, classNameColor: 'lightBlue' }
        ],
        "imageAlt": "NEST.png",
        "tittle": "Supermercado admin",
        "description": "TypeORM - NestJS",
        "github": "https://github.com/jored93/supermarket-admin",
        "demo": "https://github.com/jored93/master-detail"
    },
    {
        tech: [
            { name: 'NestJS', icon: SiChef, classNameColor: 'greenLight' },
            { name: 'TypeOrm', icon: SiLinux, classNameColor: 'lightBlue' },
            { name: 'Docker', icon: SiVirtualbox, classNameColor: 'lightBlue' }
        ],
        "imageAlt": "NEST.png",
        "tittle": "Wordpress con Chef",
        "description": "TypeORM - NestJS",
        "github": "https://github.com/jored93/chef-automate-project",
        "demo": "https://github.com/jored93/master-detail"
    },
    {
        tech: [
            { name: 'NestJS', icon: SiPython, classNameColor: 'greenLight' },
            { name: 'TypeOrm', icon: SiAwslambda, classNameColor: 'lightBlue' },
            { name: 'Serverless Framework', icon: SiServerless, classNameColor: 'lightBlue' }
        ],
        "imageAlt": "NEST.png",
        "tittle": "Tareas con serverless",
        "description": "TypeORM - NestJS",
        "github": "https://github.com/jored93/task-backend-serverless",
        "demo": "https://github.com/jored93/master-detail"
    },
    {
        tech: [
            { name: 'NestJS', icon: SiNestjs, classNameColor: 'greenLight' },
            { name: 'TypeOrm', icon: SiTypeorm, classNameColor: 'lightBlue' },
            { name: 'Postgresql', icon: SiPostgresql, classNameColor: 'lightBlue' }
        ],
        "imageAlt": "NEST.png",
        "tittle": "Market con NestJS",
        "description": "TypeORM - NestJS",
        "github": "https://github.com/jored93/market-manage-nestjs",
        "demo": "https://github.com/jored93/master-detail"
    },
]