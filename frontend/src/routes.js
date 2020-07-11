import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cliente from './paginas/Cliente';
import Login from './paginas/Login';
import Estoque from './paginas/Estoque';
import Menu from './paginas/Menu';
import Produto from './paginas/Produto';
import Usuario from './paginas/Usuario';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/cliente" exact={true} component={Cliente} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/" exact={true} component={Login} />
                <Route path="/estoque" exact={true} component={Estoque} />
                <Route path="/menu" exact={true} component={Menu} />
                <Route path="/produto" exact={true} component={Produto} />
                <Route path="/usuario" exact={true} component={Usuario} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;