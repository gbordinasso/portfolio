import './Contact.css'

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaFilePdf,
} from 'react-icons/fa6'

function Contact() {
    return (
        <section className="contact" id="contato">
            <div className="contact__header">
                <p className="section__subtitle">CONTATO</p>

                <h2>Vamos conversar?</h2>

                <p>
                    Estou aberto a novas oportunidades, projetos e conexões.
                    Se quiser entrar em contato, será um prazer conversar.
                </p>
            </div>

            <div className="contact__content">
                <a
                    href="https://github.com/gbordinasso"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__item"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/gustavobordinasso/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__item"
                >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>

                <a
                    href="mailto:gustavobordinasso11@gmail.com"
                    className="contact__item"
                >
                    <FaEnvelope />
                    <span>E-mail</span>
                </a>

                <a
                    href="/curriculo-gustavo.pdf"
                    download
                    className="contact__item"
                >
                    <FaFilePdf />
                    <span>Baixar currículo</span>
                </a>
            </div>
        </section>
    )
}

export default Contact