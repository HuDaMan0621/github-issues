import React, { Component } from 'react';
// import './Issues.css';
import Issue from './Issue';
import { Button, Container, Col } from 'react-bootstrap';

class IssueList extends Component {
    // constructor(props) {
    //     super(props); //step 1.1.c
    //     this.state = {
    //         loading: true,
    //         issues: null
    //     }
    // }

    state = {
        loading: true,
        issues: null
    }
    async componentDidMount() {
        const url = "https://api.github.com/repos/facebook/create-react-app/issues";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ issues: data, loading: false });
        console.log('nogood', this.state.issues);
    }


    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            display: "justify-content",


        };

        // const issueList = this.state.issues.map((issue, index) => {
        //     return <Issue
        //         issueUrl={issue.url}
        //         issueRepositoryUrl={issue.repository_url}
        //         key={index}
        //         issueUserLogin={issue.user.login}
        //     />
        // });

        // render() {
        //     return (
        //         <div>
        //             {this.state.loading || !this.state.person ? (
        //                 <div>loading...</div>
        //             ) : (
        //                     <div>
        //                         <img src={this.state.person.picture.large} />
        //                         <div> {this.state.person.name.title} </div>
        //                         <div> {this.state.person.name.first} </div>
        //                         <div> {this.state.person.name.last} </div>
        //                     </div>
        //                 )}
        //         </div>
        //     )
        // }

        return (
            <div>
                {this.state.loading || !this.state.issues ? (
                    <div>loading...</div>
                ) :
                    this.state.issues.map((issue, index) => {
                        return (
                            <div className={Container} key={index}>
                                <div style={mystyle}> Issue Url: {issue.url} </div>
                                <div style={mystyle}> Issue Repository: {issue.repository_url} </div>
                                <div style={mystyle}> username: {issue.UserLogin} </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
    }

}

export default IssueList;
