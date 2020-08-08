import React, { Component } from 'react'
import bialeLogo from './bialeLogo.png'
import czarneLogo from './czarneLogo.png'
import './styles.scss'

class Header extends Component {
    state = {
        position: false,
        clicked: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        const { position } = this.state
        const scrollY = window.scrollY
        if (scrollY >= 50 && !position) {
            this.setState({ position: true })

        } else if (scrollY < 50 && position) {
            this.setState({ position: false })
        }
    };

    render() {
        const tabs = [
            { name: "home", label: "HOME", href: "#home" },
            { name: "about", label: "O NAS", href: "#about" },
            { name: "coffee", label: "KAWA", href: "#coffee" },
            { name: "galery", label: "GALERIA", href: "#galery" },
            { name: "events", label: "EVENTY", href: "#events" },
            { name: "contact", label: "KONTAKT", href: "#contact" }
        ]
        return (
            <div className="Header">
                <div className={`Header-navbar ${this.state.position && "white"}`}>
                    <div className="Header-navbar__logo">
                        <a href="#home">
                            <img src={!this.state.position ? bialeLogo : czarneLogo} alt="hasztagKawa logo małe" />
                        </a>
                    </div>
                    <div className="Header-navbar__navigation">
                        <nav className={`navbar navbar-expand-md ${this.state.position && "white"}`}>
                            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    {tabs.map(({ name, label, href }) => (
                                        <a key={name} className={`nav-item nav-link ${this.state.position && "dark"}`} onClick={this.handleClick} href={href}>{label}</a>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="Header-mainLogo text-light">
                    <img src={bialeLogo} alt="hasztagKawa logo duże" />
                </div>
            </div>
        )
    }
};

export default Header;

