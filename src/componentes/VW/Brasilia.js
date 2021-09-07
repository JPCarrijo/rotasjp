import React from 'react';
//import { Link } from 'react-router-dom';
//import './Estilo.css';
import SubMenuHeader from '../../SubMenus/SubMenuHeader.js';
import logobrasilia from '../../img/brasilia.jpg'

export default function Brasilia() {
    return (
        <>
            <SubMenuHeader />
            <section className="container-fluid" style={{ backgroundColor: 'yellow', overflow: 'hidden' }}>
                <img className="container-fluid" src={logobrasilia} style={{ marginBottom: '3.2vh', marginTop: '3.3vh' }} />
            </section>
            <footer className="container-fluid" style={{
                backgroundColor: 'black',textAlign: 'center', color: 'white'
            }}> &copy; Todos os direitos reservados
            </footer>
        </>
    )
}