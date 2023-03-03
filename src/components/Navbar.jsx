export const Navbar = () => {
    return (
        <div className="menu-bar">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/"><img src="/img/logo.png" alt="logo" /></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Consulta de veículos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/cadastrar-veiculo">Cadastrar novo</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
