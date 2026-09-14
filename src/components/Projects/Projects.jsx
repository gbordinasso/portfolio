import './Projects.css'

function Projects() {
    return (
        <section className="projects" id="projetos">
            <div className="projects__header">
                <p className="section__subtitle">PROJETOS</p>

                <h2>Meus projetos em destaque</h2>

                <p>
                    Conheça alguns dos projetos que desenvolvi ao longo da
                    minha jornada em tecnologia.
                </p>
            </div>

            <article className="project">
                <div className="project__media">
                    <div className="project__preview">
                        <video
                            src="/avaliacao-jogos-game-review.mp4"
                            controls
                        />
                    </div>
                </div>

                <div className="project__content">
                    <span className="project__tag">
                        PROJETO ACADÊMICO
                    </span>

                    <h3>Sistema de Avaliação de Jogos</h3>

                    <p>
                        Aplicação web para avaliação de jogos, permitindo que
                        usuários explorem diferentes títulos, publiquem
                        avaliações e gerenciem suas próprias reviews.
                    </p>

                    <p>
                        O sistema também possui controle sobre as avaliações,
                        permitindo que cada usuário edite apenas suas próprias
                        reviews.
                    </p>

                    <div className="project__technologies">
                        <span>Angular</span>
                        <span>TypeScript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JSON Server</span>
                    </div>

                    <div className="project__buttons">
                        <a
                            href="https://github.com/gbordinasso/PI-Avaliacao-Jogo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Projects