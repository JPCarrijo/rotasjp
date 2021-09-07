import React from 'react';
//import { Link } from 'react-router-dom';
//import './Estilo.css';
import SubMenuHeader from '../../SubMenus/SubMenuHeader_04';
import logopolo from '../../img/polo.jpg'

export default function Polo() {
    return (
        <>
            <SubMenuHeader />
            <section className="container-fluid" style={{ backgroundColor: 'yellow', overflow: 'hidden' }}>
                <img className="container-fluid" src={logopolo} style={{ marginBottom: '3.8vh', marginTop: '3.3vh' }} />
            </section>
            <footer className="container-fluid" style={{
                backgroundColor: 'black', textAlign: 'center', color: 'white'
            }}> &copy; Todos os direitos reservados
            </footer>
        </>
    )
}