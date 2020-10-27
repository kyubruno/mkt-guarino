import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import imgLogo from '../../assets/logo_marketing.svg';

import { getToken, logout } from '../../services/auth';
/*import api from '../../services/api';*/

import './styles.css';

export default function Header(){

    return(
        <header className="header-home">
        <img src={imgLogo} alt="Logotipo"/>
        <div className="user-options">
            <Link to="/auth" onClick={logout} className="link-logout"> Sair </Link>
        </div>
    </header>
    )
}