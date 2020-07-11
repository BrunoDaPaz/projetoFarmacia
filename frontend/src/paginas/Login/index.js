import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './css/style_login.css';

function Login() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();
    function handleLogin(e) {
        e.preventDefault();

        console.log(usuario);
        console.log(senha);

        localStorage.setItem('usuario', usuario);
        localStorage.setItem('senha', senha);

        history.push('/menu');
    }

    return (
        <div>
            <main>
                <div>
                    <form id="form_login" onSubmit={handleLogin}>
                        <h1>Faça seu Login</h1>
                        <input
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                            placeholder="Informe seu login de acesso"
                            type="text" />
                        <input
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            placeholder="Informe sua senha"
                            type="password" />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Login;