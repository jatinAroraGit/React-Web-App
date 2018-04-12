import React, { Component } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';


class EmployeesPanel extends Component{
    constructor(){
        super();
        this.state={ Employees:[]};
    }

    componentDidMount() {
        axios.get("https://web422-api.herokuapp.com/employees").then((res) => { // this would be a URI from your "Teams API"
          this.setState({
            Employees: res.data
          });
        }).catch((err) => {
          console.log("error")
        });
      }
      render(){
          return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Employees</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.Employees.map(function (employee, index) {
                                    return (
                                        <tr>
                                            <td>{employee.FirstName} {employee.LastName}</td>
                                            <td>{employee.Position.PositionName}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <Link to="/employees" className="btn btn-info form-control">View All Employees Data</Link>
            </div>
          );
      }
} 
export default EmployeesPanel;