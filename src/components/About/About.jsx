import './About.css'

function About() {
    return (
        <section className="about" id="sobre">
            <div className="about__content">
                <p className="section__subtitle">SOBRE MIM</p>

                <h2>Desenvolvedor em formação</h2>

                <p>
                    Sou estudante de Análise e Desenvolvimento de Sistemas e
                    tenho interesse em desenvolvimento de software,
                    principalmente na criação de aplicações web e na
                    construção da lógica e das funcionalidades que fazem
                    essas aplicações funcionarem.
                </p>

                <p>
                    Estou constantemente buscando aprender novas tecnologias
                    e transformar meus conhecimentos em projetos práticos.
                </p>
            </div>

            <div className="about__formation">
                <p className="section__subtitle">FORMAÇÃO</p>

                <div className="formation__cards">
                    <article className="formation__card">
                        <span className="formation__number">01</span>

                        <div className="formation__info">
                            <h3>Análise e Desenvolvimento de Sistemas</h3>

                            <p>Centro Universitário Senac</p>

                            <span>Conclusão prevista: 07/2027</span>
                        </div>

                        <strong>Em curso</strong>
                    </article>

                    <article className="formation__card">
                        <span className="formation__number">02</span>

                        <div className="formation__info">
                            <h3>Ensino Médio Técnico em TI</h3>

                            <p>Senac</p>
                        </div>

                        <strong>Concluído</strong>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About