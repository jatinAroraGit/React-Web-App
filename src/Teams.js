import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './MainContainer'

class Teams extends Component {
    constructor() {
        super();
        this.state = { teams: [] };
    }

    componentDidMount() {
        axios.get("https://web422-api.herokuapp.com/teams").then((res) => {
            this.setState({
                teams: res.data
            });
        })
    }

    render() {
        return (
            <MainContainer sidebar = 'Teams'>
              <h1 classNAme="page-header">Teams</h1>
              <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Team Name</th>
                                        <th>Projects</th>
                                        <th>Employees</th>
                                        <th>Team Lead</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.teams.map(function (team, index){
                                        return (
                                            <tr>
                                                <td>{team.TeamName}</td>
                                                <td><ul>  {team.Projects.map(function (project, index){
                                                            return ( <li>{project.ProjectName}</li> );
                                                        })}
                                                    </ul> </td>
                                                <td>{team.Employees.length}</td>
                                                <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                                            </tr>    
                                        );
                                    })}
                                </tbody>
                        </table>
            </ MainContainer>
        );
    }
}

export default Teams;