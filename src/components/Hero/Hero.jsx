import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <p className="hero__subtitle">OLÁ, EU SOU</p>

                <h1>Gustavo Bordinasso</h1>

                <h2>FULL STACK DEV</h2>

                <p className="hero__description">
                    Estudante de Análise e Desenvolvimento de Sistemas,
                    desenvolvedor em formação e apaixonado por tecnologia.
                </p>

                <div className="hero__buttons">
                    <a href="#projetos">Conheça meu trabalho</a>
                    <a href="#contato">Entre em contato</a>
                </div>
            </div>

            <div className="hero__image">
                <div className="hero__image-placeholder">
                    <img src="/Eu.jpeg" alt="Gustavo Bordinasso" />
                </div>
            </div>
        </section>
    )
}

export default Hero