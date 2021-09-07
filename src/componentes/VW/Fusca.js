import React from 'react';
//import { Link } from 'react-router-dom';
//import './Estilo.css';
import SubMenuHeader from '../../SubMenus/SubMenuHeader_02';
import logofusca from '../../img/fusca.jpg'

export default function Fusca() {
    return (
        <>
            <SubMenuHeader />
            <section className="container-fluid" style={{ backgroundColor: 'yellow', overflow: 'hidden' }}>
                <img className="container-fluid" src={logofusca} style={{ marginBottom: '4.5vh', marginTop: '4.1vh' }} />
            </section>
            <footer className="container-fluid" style={{
                backgroundColor: 'black', textAlign: 'center', color: 'white'
            }}> &copy; Todos os direitos reservados
            </footer>
        </>
    )
}