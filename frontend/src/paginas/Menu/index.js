import React from 'react';
import './css/style_menu.css';
import { useHistory } from 'react-router-dom';


function Menu() {

    const history = useHistory();

    function deslogaSistema() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div>
            <form method="post">
                <div className="page">
                    <header>Menu Inicial</header>
                    <div id="nav-container">
                        <div className="bg"></div>
                        <div className="button" tabIndex="0">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </div>
                        <div id="nav-content" tabIndex="0">
                            <ul>
                                <li><a href="/usuario">Usuário</a></li>
                                <li><a href="/cliente">Cliente</a></li>
                                <li><a href="/produto">Produto</a></li>
                                <li><a href="/estoque">Estoque</a></li>
                                <li className="small"><a onSubmit={deslogaSistema} href="/">Sair</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default Menu;