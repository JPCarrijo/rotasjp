/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
//import './MenuInicio.css'

export default function Menu() {
    return (
        <div >
            <nav style={{ position: 'absolute', width: '100%'}} className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid" style={{paddingLeft: '3vw'}}>
                    <Link className="navbar-brand" to="#" style={{fontFamily: 'Dancing Script', fontWeight: 'bold', fontSize: '25pt'}}>CARRO S/A</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link style={{paddingLeft: '5vw', color: 'green', fontSize: '16pt', fontWeight: 'bold'}} className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    FIAT
                                </Link>
                                <ul style={{marginLeft: '3vw'}} className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">TEMPRA</Link></li>
                                    <li><Link className="dropdown-item" to="#">PALIO</Link></li>
                                    <li><Link className="dropdown-item" to="#">TORO</Link></li>
                                    <li><Link className="dropdown-item" to="#">PUNTO</Link></li>
                                    <li><Link className="dropdown-item" to="#">FIORINO</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link style={{paddingLeft: '5vw', color: '#ffb6c1', fontSize: '16pt', fontWeight: 'bold'}} className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    FORD
                                </Link>
                                <ul style={{marginLeft: '3vw'}}className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">ESCORT</Link></li>
                                    <li><Link className="dropdown-item" to="#">KA</Link></li>
                                    <li><Link className="dropdown-item" to="#">F-1000</Link></li>
                                    <li><Link className="dropdown-item" to="#">FUSION</Link></li>
                                    <li><Link className="dropdown-item" to="#">DEL REY</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link style={{paddingLeft: '5vw', color: 'lightskyblue', fontSize: '16pt', fontWeight: 'bold'}} className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CHEVROLET
                                </Link>
                                <ul style={{marginLeft: '5.5vw'}} className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">COBALT</Link></li>
                                    <li><Link className="dropdown-item" to="#">VECTRA</Link></li>
                                    <li><Link className="dropdown-item" to="#">ÔMEGA</Link></li>
                                    <li><Link className="dropdown-item" to="#">D-20</Link></li>
                                    <li><Link className="dropdown-item" to="#">SILVERADO</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link style={{paddingLeft: '5vw', color: 'yellow', fontSize: '16pt', fontWeight: 'bold'}} className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    VOLKSWAGEN
                                </Link>
                                <ul style={{marginLeft: '6vw'}}className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/brasilia">BRASÍLIA</Link></li>
                                    <li><Link className="dropdown-item" to="/fusca">FUSCA</Link></li>
                                    <li><Link className="dropdown-item" to="kombi">KOMBI</Link></li>
                                    <li><Link className="dropdown-item" to="polo">POLO</Link></li>
                                    <li><Link className="dropdown-item" to="gol">GOL</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link style={{paddingLeft: '5vw', color: 'white', fontSize: '16pt', fontWeight: 'bold'}} className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    HYUNDAI
                                </Link>
                                <ul style={{marginLeft: '4.5vw'}}className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">CRETA</Link></li>
                                    <li><Link className="dropdown-item" to="#">HB20S</Link></li>
                                    <li><Link className="dropdown-item" to="#">HB20</Link></li>
                                    <li><Link className="dropdown-item" to="#">TUCSON</Link></li>
                                    <li><Link className="dropdown-item" to="#">SONATA</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}