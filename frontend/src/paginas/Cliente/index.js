import React from 'react';
import './css/style_cliente.css';
import { useState } from 'react';
import api from '../Services/api';
import { useHistory } from 'react-router-dom';

function Cliente() {

    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCEP] = useState('');
    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            nome,
            cpf,
            email,
            telefone,
            cidade,
            bairro,
            cep
        }

        try {
            const response = await api.post('cadastrarCliente', data);
            const id = response.data.id;
            alert("Cliente cadastrado " + id)

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
                    <header>Cadastro de Cliente</header>
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
                                    placeholder="Informe o nome do Cliente" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required tabIndex="2" value={cpf}
                                    onChange={e => setCPF(e.target.value)}
                                    placeholder="Informe o CPF do Cliente" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="3" value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Informe o e-mail do Cliente" type="email" />
                            </fieldset>
                            <fieldset>
                                <input autoFocus tabIndex="4" value={telefone}
                                    onChange={e => setTelefone(e.target.value)}
                                    placeholder="Informe o telefone do Cliente" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="5" value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                    placeholder="Informe a cidade do Cliente" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="6" value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                    placeholder="Informe o bairro do Cliente" type="text" />
                            </fieldset>
                            <fieldset>
                                <input required autoFocus tabIndex="7" value={cep}
                                    onChange={e => setCEP(e.target.value)}
                                    placeholder="Informe o CEP do Cliente" type="text" />
                            </fieldset>
                            <button tabIndex="8" name="button" type="submit">Salvar</button>
                        </div>
                    </main>
                </div>
            </form>
        </div>
    );

}

export default Cliente;