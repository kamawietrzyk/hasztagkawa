import React, { Component } from 'react'
import bialeLogo from './bialeLogo.png'
import czarneLogo from './czarneLogo.png'
import './styles.scss'

class Header extends Component {
    state = {
        position: false,
        navOpen: false
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

    toggleBurger = () => {
        const { navOpen } = this.state
        this.setState({ navOpen: !navOpen })
    };

    render() {
        const tabs = [
            { name: "home", label: "HOME", href: "#home" },
            { name: "about", label: "O NAS", href: "#about" },
            { name: "coffee", label: "KAWA", href: "#coffee" },
            { name: "eco", label: "EKOLOGIA", href: "#eco" },
            { name: "events", label: "EVENTY", href: "#events" },
            { name: "contact", label: "KONTAKT", href: "#contact" }
        ]
        return (
            <div className="Header" id="home">
                <div className={`Header-navbar ${this.state.position && "white"} ${!this.state.position && this.state.navOpen && "dark"}`}>
                    <div className="Header-navbar__logo">
                        <a href="#home">
                            <img src={!this.state.position ? bialeLogo : czarneLogo} className={this.state.position && "dark"} alt="hasztagKawa logo małe" />
                        </a>
                    </div>
                    <div className="Header-navbar__navigation">
                        <nav className={`navbar navbar-expand-md ${this.state.position && "white"}`}>
                            <button className="navbar-toggler p-1" type="button" onClick={this.toggleBurger} data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className={`navbar-toggler-icon ${this.state.position ? "dark-icon" : "light-icon"} ${!this.state.position && this.state.navOpen && "brown-icon"}`}></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    {tabs.map(({ name, label, href }) => (
                                        <a key={name} className={`nav-item nav-link ${this.state.position && "dark"}`} href={href}>{label}</a>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {this.state.navOpen &&
                    <div className={`mobile ${this.state.position && "whiteBg"}`}>
                        {tabs.map(({ name, label, href }) => (
                            <a key={name} onClick={this.toggleBurger} className={`nav-item nav-link ${this.state.position && "dark"}`} href={href}>{label}</a>
                        ))}
                    </div>
                }
                <div className="Header-mainLogo">
                    <img src={bialeLogo} alt="hasztagKawa logo duże" />
                </div>
            </div>
        )
    }
};

export default Header;

