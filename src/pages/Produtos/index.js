import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './stylesprod.css';
import Header from '../../components/Header';


export default function Produtos(){
    return(
        <>
        <div className="containerprod">

            <h1 className="title-page"> Cadastro de Produtos </h1>
            <hr className="line-title"/>

                <form className="form-container">

                    <label> Modelo</label><br/>
                    <input type="text" 
                        placeholder="Modelo do calçado"
                        /*onChange={e => setName(e.target.value)}*/
                        className="form-field"
                        required/>
                    
                    <br/>
                    <label> Tamanho </label><br/>
                    <input type="number" 
                        placeholder="Número do calçado"
                        /*onChange={e => setEmail(e.target.value)}*/
                        className="form-field"
                        required/> <br/>
                    
                    <label> Marca </label><br/>
                    <input type="text" 
                        placeholder="Marca do calçado"
                        /*onChange={e => setPassword(e.target.value)}*/
                        className="form-field"
                        required/><br/>
                    
                    <label> Cor </label><br/>
                    <input type="text" 
                        placeholder="Cor do calçado"
                       /* onChange={e => setPasswordAgain(e.target.value)}*/
                        className="form-field"
                        required/>                    
                    <br/> 
                    <label> Upload</label>   <br></br>
                    <input type="file" id="upload" accept="image/png, image/jpeg" className="form-field">
                    </input>                
                    <input type="checkbox" name="promocao" id="promocao" ></input> 
                    <label>      Oferecer promoção no produto?</label>
                    <input type="submit" value="Registrar" className="form-submit"/>
                    

                    
                </form>
                <br/>
                <Link to="/" className="link-back-login"> Início </Link> 
        </div>

        <ToastContainer/>

        </>
    )
}