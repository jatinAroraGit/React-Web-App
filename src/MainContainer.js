
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import React, { Component } from 'react';


class MainContainer extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar title="Overview" highlight={this.props.sidebar} />
                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MainContainer;