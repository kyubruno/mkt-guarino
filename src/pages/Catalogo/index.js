import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';

import img from '../../assets/logo_marketing.svg';
import 'react-toastify/dist/ReactToastify.min.css';
import Card from '../../Cards/CardUI'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../Cards/Card-style.css';

export default function pageCard(){
    return(
        <>
        <div className='row'>
        <div className='col-md-3'>
            <Card/>
        </div>
        <div className='col-md-3'>
            <Card/>
        </div>
        <div className='col-md-3'>
            <Card/>
        </div>
        <div className='col-md-3'>
            <Card/>
        </div>
        </div>
        </>
    )
}