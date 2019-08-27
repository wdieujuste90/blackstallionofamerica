import React from 'react';
import Logo from '../../assets/images/stallionlogo.png';
import '../../styles/App.css';
import Image from '../common/Image';


export default () => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top className-fluid" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <Image width={145} src={Logo} />
            </a>

            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
            <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About Us</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#community">Community</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#events">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contribute">Contribute</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#team">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
