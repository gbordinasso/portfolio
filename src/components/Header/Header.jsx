import './Header.css'

function Header() {
    return (
        <header className="header">
            <a href="#" className="header__logo">
                Gustavo Bordinasso
            </a>

            <nav className="header__nav">
                <a href="#sobre">Sobre</a>
                <a href="#skills">Skills</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>
    )
}

export default Header