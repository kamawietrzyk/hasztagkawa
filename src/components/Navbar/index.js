import React from 'react'
import './styles.scss'

export const Navbar = () => (
    <div className="Navbar">
        <nav className="navbar navbar-expand-md bg-light">
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href=" ">HOME</a>
                    <a className="nav-item nav-link" href=" ">O NAS</a>
                    <a className="nav-item nav-link" href=" ">KAWA</a>
                    <a className="nav-item nav-link" href=" ">GALERIA</a>
                    <a className="nav-item nav-link" href=" ">EVENTY</a>
                    <a className="nav-item nav-link" href=" ">KONTAKT</a>
                </div>
            </div>
        </nav>
    </div>
)