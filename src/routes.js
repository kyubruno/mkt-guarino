import React from 'react';
import {BrowserRouter,Switch,Redirect,Route} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Registro';
import ForgetPass from './pages/EsqueceuSenha';
import Profile from './pages/Perfil';
import { isAuthenticated } from './services/auth';
import Home from './pages/Inicio';
import Produtos from './pages/Produtos';
import Cliente from './pages/Cliente';


const PrivateRoute = ({component: Component, ...rest}) => (
    // Verificando se o usúario está autenticado
    <Route 
    {...rest}
        render={props => 
            isAuthenticated() ? (
            <Component {...props}/>
            ) : (
            <Redirect to={{ pathname: "/auth", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/auth' component={(Login)}/>
            <Route path='/signup' component={(Register)}/>
            <Route path='/forgetpassword' component={(ForgetPass)}/>
            <Route path='/home' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/cadpro' component={(Produtos)}/>
            <Route path='/cliente' component={(Cliente)}/>


        </Switch>
    </BrowserRouter>
)

export default Routes;