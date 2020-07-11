import React from 'react';
import './css/style_estoque.css';
import { useState, useEffect } from 'react';
import api from '../Services/api';
import { useHistory } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Estoque() {

    const history = useHistory();
    function deslogaSistema() {
        localStorage.clear();
        history.push('/');
    }

    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        api.get('consultarProduto', {}).then(response => {
            setProdutos(response.data);
        });
    }, []);

    return (
        <div>
            <form method="post">
                <div className="page">
                    <header>Estoque de Protudos</header>
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

                    <main>
                        <div id="form_estoque">
                            <div>
                                <table className="tabela_estoque" id="tabela">
                                    <tr>
                                        <th>Código</th>
                                        <th>Nome do Produto</th>
                                        <th>Quantidade em Estoque</th>
                                        <th>Preço do Produto</th>
                                        <th>Categoria do Produto</th>
                                    </tr>
                                    {produtos.map(produto => (
                                        <tr>
                                            <td>{produto.id}</td>
                                            <td>{produto.nome}</td>
                                            <td>{produto.qtd_estoque}</td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.categoria}</td>
                                        </tr>
                                    ))
                                    }
                                </table>
                            </div>
                        </div>
                        <ReactHTMLTableToExcel
                            className="button_exportar"
                            table="tabela"
                            filename="Dados do Estoque"
                            sheet="sheet 1"
                            buttonText="EXPORTAR"
                            type="button">
                        </ReactHTMLTableToExcel>
                    </main>
                </div>

            </form>
        </div>
    );

}

export default Estoque;