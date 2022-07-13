import React from "react";

import logo from '../../assets/img/ciandt.png'
import './styles.css'

const Header = () => {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="ProjectLogo" />
                <h1>Projeto Teste</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/JoseAugusto1989">@GutoOliveira</a>
                </p>
            </div>
        </header>
    )
}

export default Header