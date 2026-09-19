import './Skills.css'

import {
    FaJava,
    FaPython,
    FaJs,
    FaReact,
    FaAngular,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
} from 'react-icons/fa6'

import {
    SiTypescript,
    SiSpringboot,
    SiMysql,
    SiMongodb,
} from 'react-icons/si'

function Skills() {
    const skills = [
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: FaPython },
        { name: 'JavaScript', icon: FaJs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'React', icon: FaReact },
        { name: 'Angular', icon: FaAngular },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Spring Boot', icon: SiSpringboot },
        { name: 'MySQL', icon: SiMysql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
    ]

    return (
        <section className="skills" id="skills">
            <div className="skills__header">
                <p className="section__subtitle">MINHAS HABILIDADES</p>

                <h2>Tecnologias e ferramentas</h2>

                <p>
                    Tecnologias e ferramentas com as quais tenho experiência
                    ou estou estudando.
                </p>
            </div>

            <div className="skills__container">
                {skills.map((skill) => {
                    const Icon = skill.icon

                    return (
                        <div className="skill__item" key={skill.name}>
                            <div className="skill__icon">
                                <Icon />
                            </div>

                            <span>{skill.name}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills