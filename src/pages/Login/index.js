import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/logo_marketing.svg';
import { login } from '../../services/auth';

import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './styles.css';

export default function Login() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    async function handleSubmit(e){
        e.preventDefault();
        
        try {
            const response = await api.post('/session',{email: email,password: password});
            console.log(response.data);
            login(response.data.token);
            setRedirect(true);
            
        } catch(err) {
            toast.error('E-mail ou senha errados', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error('Usuario ou senha incorretos');
        }

    }

    if(redirect)
    return <Redirect to='/home'/>

    return(
        <>
            <div className="app">
                <div className="container"> 
                <img src={logo} alt="logotipo" className="img-logo"/>
{/* 
                    <h1 className="title-page"> Login </h1>
                    <hr className="line-title"/> */}

                    <form onSubmit={(e)=>handleSubmit(e)} className="form-container">

                       <label>  E-mail </label><br/>
                        <input type="email" 
                            placeholder="Digite seu e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-field"
                            required
                        />

                        <br/>

                        <label> Senha </label><br/>

                        <input type="password" 
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-field"
                        required
                        />

                        <br/>

                        <button type="submit" className="form-submit">Login</button>

                    </form>

                <br/>

                <div className="row">
                    <div className="col">
                        <Link to="/forgetpassword" className="alternative-links"> Esqueceu sua senha? </Link> 
                    </div>
                    <div className="col">
                        <Link to="/signup" className="alternative-links">  Registrar </Link>
                    </div>
                </div>

                </div>
                <br/>

            </div>
                
            
            
            <ToastContainer/>

        </>
    );
}