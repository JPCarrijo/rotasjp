import React from "react";
import SubMenuMecanica from "../SubMenus/SubMenuMecanica";
import logo from '../img/foto02.jpg'

export default function Mecanica() {
    return(
        <>
            <SubMenuMecanica />
            <section className="container-fluid" style={{backgroundColor: 'yellow', overflow: 'hidden'}}>
                    <img className="container-fluid" src={logo} style={{marginBottom: '3.8vh', marginTop: '3.3vh'}}/>
            </section>
            <footer className="container-fluid" style={{
                backgroundColor: 'black',textAlign: 'center', color: 'white'
            }}> &copy; Todos os direitos reservados
            </footer>
        </>
    )
}