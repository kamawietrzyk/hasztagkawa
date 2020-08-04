import React from 'react'
import bialeLogo from './bialeLogo.png'
import './styles.scss'
import { Navbar } from '../Navbar'

export const Header = () => (
    <>
        <div className="Header">
            <div className="Header-logo">
                <img src={bialeLogo} alt="hasztagKawa logo" />
            </div>
            <Navbar />
        </div>
        <div className="example text-light text-center">
            <h1>Tutaj będzie jakiś mądry tekst, <br />prawdopodobnie o kawie.</h1>
        </div>
    </>
)