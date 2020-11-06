import React from 'react';
import imagem from '../assets/img-1954.jpg'
const Card = props =>{
    return(
        <div className="card text-center">
           <div className="overflow">
           <img src={imagem} alt='sapato' className='card-img-top'></img>
           </div>
            <div className="card-body text-dark">
                <h2 className="card-title">Sapathanos</h2>
                <p className="card-text text-secondary">Descrição do Sapathanos. COMPRA COMPRA COMPRA!</p>
                <a href="sapatoX" className="btn btn-outline-success">Avaliar</a>
            </div>                 
        </div>
    );
}

export default Card