import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NFTify</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" >TokenAddress</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Pair" >PairAddress</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
