import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logo_marketing.svg';

import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import '../Cliente/stylecli.css';

export default function Cliente(){

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
        <div className="containercli">

           <h1 className="title-page"> Registre-se aqui! </h1>
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
                    
                    <label> Telefone </label><br/>
                    <input type="text" 
                        placeholder="Digite seu telefone"
                        /*onChange={e => setPassword(e.target.value)}*/
                        className="form-field"
                        required/><br/>
                    
                    <label> Cidade </label><br/>
                    <input type="text" 
                        placeholder="Digite a cidade em que você mora"
                      /*  onChange={e => setPasswordAgain(e.target.value)}*/
                        className="form-field"
                        required/>
                    
                    <br/>
                    <label> Bairro </label><br/>
                    <input type="text" 
                        placeholder="Digite o bairro que você mora"
                       /* onChange={e => setPasswordAgain(e.target.value)}*/
                        className="form-field"
                        required/>
                    
                    <br/>
                    <label> Rua </label><br/>
                    <input type="text" 
                        placeholder="Digite a rua que você mora"
                       /* onChange={e => setPasswordAgain(e.target.value)}*/
                        className="form-field"
                        required/>
                    
                    <br/>
                    <input type="checkbox" name="newsletter" id="newsletter" ></input> 
                    <label>      Aceita receber newsletter em seu e-mail?</label>

                    <input type="submit" value="Registrar" className="form-submit"/>
                </form>
                <br/>
                <Link to="/auth" className="link-back-login"> Voltar à página anterior </Link> 
        </div>

        <ToastContainer/>

        </>
    )
}