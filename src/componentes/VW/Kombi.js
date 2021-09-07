import React from 'react';
//import { Link } from 'react-router-dom';
//import './Estilo.css';
import SubMenuHeader from '../../SubMenus/SubMenuHeader_03';
import logokombi from '../../img/kombi.jpg'

export default function Kombi() {
    return (
        <>
            <SubMenuHeader />
            <section className="container-fluid" style={{ backgroundColor: 'yellow', overflow: 'hidden' }}  >
                <img className="container-fluid" src={logokombi} style={{ marginBottom: '4.3vh', marginTop: '4.3vh' }} />
            </section>
            <footer className="container-fluid" style={{
                backgroundColor: 'black', textAlign: 'center', color: 'white'
            }}> &copy; Todos os direitos reservados
            </footer>
        </>
    )
}