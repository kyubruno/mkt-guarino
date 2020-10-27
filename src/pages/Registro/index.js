import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logo_marketing.svg';

import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import '../Login/styles.css';

export default function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [userRegistered, setUserRegistered] = useState(false)

    async function HandleSubmit(e) {
        e.preventDefault()

        if(password !== passwordAgain){   
            toast.error('Senhas não são iguais', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            return console.error('As senhas são diferentes, corrija e tente novamente')
        }
         

        try {
            const response = await api.post('/Register',{email,password})
            console.log(response.data)
            setUserRegistered(true);
        } catch(err) {
            toast.error('Usuário já existente', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    if(userRegistered)
    return <Redirect to='/home'/>

    return(
        <>
        <div className="container">
            <img src={logo} alt="logotipo" className="img-logo"/>
            {/* <h1 className="title-page"> Register </h1>
                <hr className="line-title"/> */}
                <form onSubmit={e=>HandleSubmit(e)} className="form-container">

                    <label> Nome </label><br/>
                    <input type="text" 
                        placeholder="Digite seu nome"
                        /*onChange={e => setName(e.target.value)}*/
                        className="form-field"
                        required/>
                    
                    <br/>
                    <label> E-mail </label><br/>
                    <input type="email" 
                        placeholder="Digite seu e-mail"
                        onChange={e => setEmail(e.target.value)}
                        className="form-field"
                        required/> <br/>
                    
                    <label> Senha </label><br/>
                    <input type="password" 
                        placeholder="Digite sua senha"
                        onChange={e => setPassword(e.target.value)}
                        className="form-field"
                        required/><br/>
                    
                    <label> Repita sua senha </label><br/>
                    <input type="password" 
                        placeholder="Repita sua senha"
                        onChange={e => setPasswordAgain(e.target.value)}
                        className="form-field"
                        required/>
                    
                    <br/>
                    <input type="submit" value="Registrar" className="form-submit"/>
                </form>
                <br/>
                <Link to="/auth" className="link-back-login"> Voltar à página anterior </Link> 
        </div>

        <ToastContainer/>

        </>
    )
}