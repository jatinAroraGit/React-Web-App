
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import whatever else you like here

// Declare your Component here
class Sidebar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2  sidebar">
                <ul className="nav nav-sidebar">
                <li className={(this.props.highlight === 'Overview' ? 'active' : '')}>
                            <Link to="/">{this.props.title}<span className="sr-only">(current)</span></Link>
                            </li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === 'Projects' ? 'active' : '')}>
                        <Link to="/projects">Projects</Link>
                        
                    </li>

                    <li className={(this.props.highlight === 'Teams' ? 'active' : '')}>
                        <Link to="/teams">Teams</Link>
                    </li>
                    <li className={(this.props.highlight === 'Employees' ? 'active' : '')}>
                        <Link to="/employees">Employees</Link>
                    </li>
                </ul>
            </div>
        );
        
    }
}

// export the component by name
export default Sidebar; 