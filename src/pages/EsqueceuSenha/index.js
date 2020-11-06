import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logo_marketing.svg';

import '../Login/styles.css';
import { toast, ToastContainer } from 'react-toastify';

export default function ForgetPassword(){
    const [email, setEmail] = useState('');
    const [submited, setSubmited] = useState(false);
    const [pin, setPin] = useState('');
    const [submitedPin, setsubmitedPin] = useState(false);
    const [newPassword, setnewPassword] = useState('');
    const [newPasswordAgain, setnewPasswordAgain] = useState('');
    const [passwordRedefined, setPasswordRedefined] = useState(false);

    async function HandleSubmit(e){
        e.preventDefault();
        console.log(email);
        try {
            const response = await api.post('/RecoverPassword',{email: email});
            console.log(response.data);
            setSubmited(true);
        } catch(err){
            toast.error('User not found',{
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error(err);
        }
    }

    async function HandleSubmitPin(e){
        e.preventDefault();
        console.log(pin,email);
        try {
            const response = await api.post('/RecoverPassword/ComparePin',{pin: pin,email: email});
            console.log(response.data);
            
            if(response.data){
                setsubmitedPin(true)
            }else{
                toast.error('Pin incorrect',{
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.error('Pin Incorreto');
            }  
        } catch(err){
            console.error(err);
        }
    }

    async function HandleSubmitNewPassword(e){
        e.preventDefault();
        console.log(email,newPassword,newPasswordAgain);

        if(newPassword !== newPasswordAgain){
            toast.error('Senhas não ser iguais',{
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return console.error('As senhas são diferentes, corrija e tente novamente');
        }

        try{
            const response = await api.put('/User/UpdatePassword',{email: email, password: newPassword});
            console.log(response.data);
            setPasswordRedefined(true);
        } catch(err){
            console.error(err);
        }
    }

    if(passwordRedefined)
    return <Redirect to='/'/>

    if(submitedPin){
        return(
            <>
                <div className="container-a">
                    <img src={logo} alt="logotipo" className="img-logo"/>
                    {/* <h1 className="title-page"> New password </h1>
                    <hr className="line-title"/> */}
                    <form onSubmit={(e)=>HandleSubmitNewPassword(e)} className="form-container">
                        <label>Nova senha</label><br/>
                        <input
                        type="password"
                        placeholder="Digite sua nova senha"
                        onChange={(e)=>setnewPassword(e.target.value)}
                        className="form-field"
                        required/>
                        <br/>
                        <label>Repita sua nova senha</label><br/>
                        <input
                        type="password"
                        placeholder="Repita sua nova senha"
                        onChange={(e)=>setnewPasswordAgain(e.target.value)}
                        className="form-field"
                        required/>     
                        <br/>
                        <input type="submit" value="Salvar" className="form-submit"/>
                    </form>
                </div>
                <ToastContainer/>
            </>
        )
    }


    if(submited){
        return(
            <>
                <div className="container">
                    <img src={logo} alt="logotipo" className="img-logo"/>
                    {/* <h1 className="title-page"> Fill Pin </h1>
                    <hr className="line-title"/> */}
                    <form onSubmit={(e) => HandleSubmitPin(e)} className="form-container">
                        <input 
                        type="text"
                        placeholder="Type pin"
                        onChange={(e)=>setPin(e.target.value)}
                        className="form-field"
                        required/>
                        <input type="submit" value="Enviar Pin" className="form-submit"/>  
                    </form>
                    <button onClick={()=>setSubmited(false)} className="form-submit">Reenviar e-mail</button>
                </div>
                <ToastContainer/>
            </>
        )
    }

    return(
        <>
            <div className="container">
                <img src={logo} alt="logotipo" className="img-logo"/>
                {/* <h1 className="title-page"> Forget password </h1>
                <hr className="line-title"/> */}
                <form onSubmit={(e) => HandleSubmit(e)} className="form-container">
                    <label>Email</label><br/>
                    <input type="email"
                        placeholder="Digite seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-field"
                        required/><br/>
                    <input type="submit" value="Enviar e-mail" className="form-submit"/>
                </form>
                <br/>
                <Link to="/auth" className="link-back-login"> Voltar à pagina anterior </Link>
            </div>
            <ToastContainer/>
        </>
    );
}