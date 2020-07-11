import React from 'react';
import './css/style_produto.css';
import { useState } from 'react';
import api from '../Services/api';
import { useHistory } from 'react-router-dom';

function Produto() {

    const [nome, setNome] = useState('');
    const [qtd_estoque, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            nome,
            qtd_estoque,
            preco,
            categoria
        }

        console.log({data});

        try {
            const response = await api.post('cadastrarProduto', data);
            const id = response.data.id;
            alert("Produto cadastrado " + id)

        } catch (error) {
            console.log(data)
            alert("Erro no Cadastro")
        }
    }

    const history = useHistory();
    function deslogaSistema() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div>
            <form method="post" onSubmit={handleCadastro}>

                <div className="page">
                    <header>Cadastro de Produto</header>
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
                        <div id="form_cadastro">
                            <h4>Preencha as informação abaixo</h4>
                            <fieldset>
                                <input required autoFocus tabIndex="1" value={nome}
                                    onChange={e => setNome(e.target.value)}
                                    placeholder="Informe o nome do Produto" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required tabIndex="2" value={qtd_estoque}
                                    onChange={e => setQuantidade(e.target.value)}
                                    placeholder="Informe a quantidade do Produto" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="3" value={preco}
                                    onChange={e => setPreco(e.target.value)}
                                    placeholder="Informe o preço do Produto" type="text" />
                            </fieldset>
                            <fieldset>
                                <input autoFocus tabIndex="4" value={categoria}
                                    onChange={e => setCategoria(e.target.value)}
                                    placeholder="Informe a categoria do Produto" type="text" />
                            </fieldset>
                            <button tabIndex="5" name="button" type="submit">Salvar</button>
                        </div>
                    </main>
                </div>


            </form>
        </div>
    );

}

export default Produto;