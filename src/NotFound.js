import React, {Component} from 'react';
import MainContainer from './MainContainer';

class NotFound extends Component {
    render() {
        return (
            <MainContainer sidebar = ''>
                <h1 className="page-header">Oops !</h1>
                                <h3>404: Page Not Found</h3>
                                <h4>Highway 404 does not have this route defined. </h4>

            </MainContainer>
        );
    }
}

export default NotFound;