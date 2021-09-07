import React from 'react';
//import { Link } from 'react-router-dom';
//import './Estilo.css';
import SubMenuHeader from '../../SubMenus/SubMenuHeader_05';
import logogol from '../../img/gol.jpeg'

export default function Gol() {
    return (
        <>
            <SubMenuHeader />
            <section className="container-fluid" style={{ backgroundColor: 'yellow', overflow: 'hidden' }}>
                <img className="container-fluid" src={logogol} style={{ marginBottom: '2.8vh', marginTop: '3vh' }} />
            </section>
            <footer className="container-fluid" style={{
                backgroundColor: 'black', textAlign: 'center', color: 'white'
            }}> &copy; Todos os direitos reservados
            </footer>
        </>
    )
}