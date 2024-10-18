import { RiNextjsLine } from 'react-icons/ri'
import { FaJava } from 'react-icons/fa6'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { FaAws, FaNetworkWired  } from "react-icons/fa";
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
    SiDotnet,
    SiCsharp,
    SiJenkins,
    SiAzuredevops,
    SiLinux,
    SiTerraform,
    SiChef,
    SiDigitalocean,
    SiOracle,
    SiTypeorm
} from 'react-icons/si';

export const SKILLS_DATA = [
    {
        "id": 1,
        "experience": "Backend & Database",
        "skills": [
            { name: 'TypeScript', icon: SiTypescript, classNameColor: 'lightBlue' },
            { name: 'Node.js', icon: SiNodedotjs, classNameColor: 'greenLight' },
            { name: 'Python', icon: SiPython, classNameColor: 'blue' },
            { name: 'Flask', icon: SiFlask, classNameColor: 'black' },
            { name: 'Java', icon: FaJava, classNameColor: 'blue' },
            { name: 'SpringBoot', icon: BiLogoSpringBoot, classNameColor: 'greenLight' },
            { name: 'CSharp', icon: SiCsharp, classNameColor: 'blue' },
            { name: 'Dotnet', icon: SiDotnet, classNameColor: 'greenLight' },
            { name: 'Postgresql', icon: SiPostgresql, classNameColor: 'blue' },
            { name: 'Oracle', icon: SiOracle, classNameColor: 'greenLight' },
            { name: 'PrismaOrm', icon: SiPrisma, classNameColor: 'blue' },
            { name: 'TypeOrm', icon: SiTypeorm, classNameColor: 'greenLight' },
        ]
    },
    {
        "id": 2,
        "experience": "Cloud & DevOps",
        "skills": [
            { name: 'AWS', icon: FaAws, classNameColor: 'black' },
            { name: 'Azure', icon: SiMicrosoftazure, classNameColor: 'black' },
            { name: 'Jenkins', icon: SiJenkins, classNameColor: 'black' },
            { name: 'Docker', icon: SiDocker, classNameColor: 'black' },
            { name: 'Azure Devops', icon: SiAzuredevops, classNameColor: 'black' },
            { name: 'Terraform', icon: SiTerraform, classNameColor: 'black' },
            { name: 'Linux', icon: SiLinux, classNameColor: 'black' },
            { name: 'Chef', icon: SiChef, classNameColor: 'black' },
            { name: 'Gitlab', icon: SiGitlab, classNameColor: 'black' },
            { name: 'Github', icon: SiGithub, classNameColor: 'black' },
            { name: 'Networking', icon: FaNetworkWired, classNameColor: 'black' },
            { name: 'Digitalocean', icon: SiDigitalocean, classNameColor: 'black' },
        ]
    },
    {
        "id": 3,
        "experience": "Frontend",
        "skills": [
            { name: 'CSS3', icon: SiCss3, classNameColor: 'lightBlue' },
            { name: 'JavaScript', icon: SiJavascript, classNameColor: 'yellow' },
            { name: 'React', icon: SiReact, classNameColor: 'blue' },
            { name: 'Angular', icon: SiAngular, classNameColor: 'greenLight' },
            { name: 'Bootstrap', icon: SiBootstrap, classNameColor: 'purpleDark' },
        ]
    },
]