/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logofiat from '../../img/fiat-logo-2.png';
import logoford from '../../img/png-clipart-car-ford-motor-company-brand-logo-automobile-factory-car-emblem-label.png'
import logogm from '../../img/2019-Chevrolet-Bowtie-Stacked.png'
import logovw from '../../img/vw.png'
import logoh from '../../img/b8781c2a7763a491f4a71cb84d5cabfd.png'
//import MediaQuery from 'react-responsive'

export default function Container() {
    return (
        <>
            <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.48)' }}>
                <div className="container-fluid">
                    <img src={logofiat} style={{ marginTop: '20vh', marginLeft: '12vw', width: '18vw' }} />
                    <img src={logoford} style={{ marginTop: '9vh', marginLeft: '10vw', width: '18vw' }} />
                    <img src={logogm} style={{ marginTop: '9vh', marginLeft: '10vw', width: '18vw' }} />
                </div>
                <div  style={{height: '42.1vh'}}>
                    <img src={logovw} style={{ marginTop: '1vh', marginLeft: '28vw', width: '16vw' }} />
                    <img src={logoh} style={{ marginTop: '-5vh', marginLeft: '10vw', width: '18vw' }} />
                </div>
            </section>
            <footer style={{
                backgroundColor: 'black',textAlign: 'center', color: 'white'
            }}> &copy; Todos os direitos reservados
            </footer>
        </>
    )
}