import { useState } from 'react'
import './Projects.css'

function Projects() {
    const [currentImage, setCurrentImage] = useState(0)

    const projectImages = [
        {
            src: '/gerenciamento-copa-home.png',
            alt: 'Tela inicial do Sistema de Gerenciamento de Copa',
        },
        {
            src: '/gerenciamento-copa-cadastro-time.png',
            alt: 'Tela de cadastro de time',
        },
        {
            src: '/gerenciamento-copa-consulta-time.png',
            alt: 'Tela de consulta de times',
        },
        {
            src: '/gerenciamento-copa-cadastro-jogo.png',
            alt: 'Tela de cadastro de jogo',
        },
        {
            src: '/gerenciamento-copa-consulta-jogos.png',
            alt: 'Tela de consulta de jogos',
        },
    ]

    function nextImage() {
        setCurrentImage((current) =>
            current === projectImages.length - 1 ? 0 : current + 1
        )
    }

    function previousImage() {
        setCurrentImage((current) =>
            current === 0 ? projectImages.length - 1 : current - 1
        )
    }

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

            <article className="project">
                <div className="project__media">
                    <div className="project__preview project__preview--gallery">
                        <img
                            src={projectImages[currentImage].src}
                            alt={projectImages[currentImage].alt}
                        />

                        <button
                            className="project__arrow project__arrow--left"
                            onClick={previousImage}
                            aria-label="Imagem anterior"
                        >
                            ←
                        </button>

                        <button
                            className="project__arrow project__arrow--right"
                            onClick={nextImage}
                            aria-label="Próxima imagem"
                        >
                            →
                        </button>
                    </div>

                    <div className="project__indicators">
                        {projectImages.map((image, index) => (
                            <button
                                key={image.src}
                                className={
                                    index === currentImage
                                        ? 'project__indicator project__indicator--active'
                                        : 'project__indicator'
                                }
                                onClick={() => setCurrentImage(index)}
                                aria-label={`Ir para imagem ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="project__content">
                    <span className="project__tag">
                        PROJETO ACADÊMICO
                    </span>

                    <h3>Sistema de Gerenciamento de Copa</h3>

                    <p>
                        Aplicação full stack desenvolvida durante a graduação
                        para gerenciamento de uma competição, permitindo
                        cadastrar e consultar times e jogos.
                    </p>

                    <p>
                        O sistema utiliza os times cadastrados para registrar
                        partidas, integrando frontend, backend e banco de
                        dados.
                    </p>

                    <div className="project__technologies">
                        <span>Angular</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MySQL</span>
                    </div>

                    <div className="project__buttons">
                        <a
                            href="https://github.com/gbordinasso/Sistema-de-Gerenciamento-da-Copa"
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