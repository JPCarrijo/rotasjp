import React from 'react';
import { Link } from 'react-router-dom';

export default function SubMenuHeader_03() {
    return (
        <>
             <header >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid" style={{ paddingLeft: '5vw', backgroundColor: 'yellow' }}>
                        <Link className="navbar-brand" to="/" style={{ fontFamily: 'Dancing Script', fontWeight: 'bold', fontSize: '25pt', color: 'black' }}>CARRO S/A</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link style={{ paddingLeft: '8vw', color: 'black', fontWeight: 'bold' }} className="nav-link dropdown-toggle" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        KOMBI
                                    </Link>
                                    <ul style={{ marginLeft: '5vw' }} className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/"> VOLTAR </Link></li>
                                        <li><Link className="dropdown-item" to="#"> MECÂNICA </Link></li>
                                        <li><Link className="dropdown-item" to="#"> ELÉTRICA </Link></li>
                                        <li><Link className="dropdown-item" to="#"> ELETRÔNICA </Link></li>
                                        <li><Link className="dropdown-item" to="#"> SUSPENSÃO </Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}