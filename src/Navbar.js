import React, { Component } from 'react';
import logo from './logo.svg'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
            
                <div className="container-fluid">
                
                    <div className="navbar-header">
                    <img src={logo} alt="logo" heigt='52px' width='52px'  title="Made With React"/>
                        <span className="navbar-brand">WEB422: Project Portal</span>
                    </div>
                </div>
            </nav> 
        );
    }
}

export default Navbar;