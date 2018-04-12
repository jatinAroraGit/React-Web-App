import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './MainContainer'

import moment from 'moment'
class Projects extends Component {
    constructor() {
        super();
        this.state = { projects: [] };
    }

    componentDidMount() {
        axios.get("https://web422-api.herokuapp.com/projects").then((res) => {
            this.setState({
                projects: res.data
            });
        })
    }

    render() {
        return (
            <MainContainer sidebar = 'Projects'>
              <h1 classNAme="page-header">Projects</h1>
              <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                        </thead>
                            <tbody>
                                    {this.state.projects.map(function (project, index){
                                        return (
                                            <tr>
                                                <td>{project.ProjectName}</td>
                                                <td>{project.ProjectDescription}</td>
                                                <td>{moment(project.ProjectStartDate).format('LL')}</td>
                                                <td>{(project.ProjectEndDate == null ? 'n/a' : moment(project.ProjectEndDate).format('LL'))}</td>
                                            </tr>    
                                    );
                                })}
                            </tbody>
                </table>
            </ MainContainer>
        );
    }
}

export default Projects;