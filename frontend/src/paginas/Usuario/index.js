import React from 'react';
import api from '../Services/api';
import './css/style_usuario.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Usuario() {

    const history = useHistory();
    const [nome, setNome] = useState('');
    const [nome_usuario, setNomeUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCEP] = useState('');
    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            nome,
            nome_usuario,
            senha,
            email,
            telefone,
            cidade,
            bairro,
            cep
        }

        try {
            const response = await api.post('cadastrarUsuario', data);
            const id = response.data.id;
            alert("Usuario cadastrado " + id)

        } catch (error) {
            console.log(data)
            alert("Erro no Cadastro")
        }
    }

    function deslogaSistema() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div>
            <form method="post" onSubmit={handleCadastro}>
                <div className="page">
                    <header>Cadastro de Usuario</header>
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
                                    placeholder="Informe o nome do Usuario" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required tabIndex="2" value={nome_usuario}
                                    onChange={e => setNomeUsuario(e.target.value)}
                                    placeholder="Informe o login do Usuario" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="3" value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                    placeholder="Informe a senha do Usuario" type="password" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="3" value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Informe o e-mail do Usuario" type="email" />
                            </fieldset>
                            <fieldset>
                                <input autoFocus tabIndex="4" value={telefone}
                                    onChange={e => setTelefone(e.target.value)}
                                    placeholder="Informe o telefone do Usuario" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="5" value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                    placeholder="Informe a cidade do Usuario" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="6" value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                    placeholder="Informe o bairro do Usuario" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="7" value={cep}
                                    onChange={e => setCEP(e.target.value)}
                                    placeholder="Informe o CEP do Usuario" type="text" />
                            </fieldset>
                            <button tabIndex="8" name="button" type="submit">Salvar</button>
                        </div>
                    </main>
                </div>
            </form>
        </div>
    );

}

export default Usuario;