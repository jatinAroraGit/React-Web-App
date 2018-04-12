import React, { Component } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';


class TeamsPanel extends Component{
    constructor(){
        super();
        this.state={ Teams:[]};
    }

    componentDidMount() {
        axios.get("https://web422-api.herokuapp.com/teams").then((res) => { // this would be a URI from your "Teams API"
          this.setState({
            Teams: res.data
          });
        }).catch((err) => {
          console.log("error")
        });
      }
      render(){
          return(
            <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Teams</h3>
                    </div>
                        <div className="panel-body">
                            <div className="table-responsive overview-table">
                                <table className="table table-striped table-bordered">
                                    <tbody>
                                        {this.state.Teams.map(function (team, index) {
                                            return (
                                                <tr>
                                                    <td>{team.TeamName}</td>
                                                    <td>{team.Employees.length}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                        <Link to="/teams" className="btn btn-info form-control">View All Team Data</Link>
            </div>
          );
      }
} 
export default TeamsPanel;