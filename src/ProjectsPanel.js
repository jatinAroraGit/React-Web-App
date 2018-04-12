import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';


class ProjectsPanel extends Component{
    constructor(){
        super();
        this.state={ Projects:[]};
    }

    componentDidMount() {
        axios.get("https://web422-api.herokuapp.com/projects").then((res) => { // this would be a URI from your "Teams API"
          this.setState({
            Projects: res.data
          });
        }).catch((err) => {
          console.log("error")
        });
      }
      render(){
          return(
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Projects</h3>
            </div>
            <div className="panel-body">
                            <div className="table-responsive overview-table">
                                <table className="table table-striped table-bordered">
                                     <tbody>
                                            {this.state.Projects.map(function (project, index) {
                                                return (
                                                    <tr>
                                                        <td>{project.ProjectName}</td>
                                                        <td>{moment().diff(project.ProjectStartDate, 'days')}</td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                             </table>
                        </div>
                          
                     </div>
                     <Link to="/projects" className="btn btn-info form-control">View Project Data</Link>
             </div>
          );
      }
} 

export default ProjectsPanel;