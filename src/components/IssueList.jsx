import React, { Component } from 'react';
import './style.scss';
import Issue from './Issue';
import IssueDetail from './IssueDetail'
import { Grid, Row } from '/Users/hudaman/Desktop/Projects/0615/github-issues/node_modules/react-bootstrap/dist/react-bootstrap.js';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router';

// const Home = () => (<h2>Home</h2>)

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
        // console.log('nogood', this.state.issues);
    }


    render() {
        const mystyle = {
            color: "black",
            backgroundColor: "white",
            // padding: "10px",
            fontFamily: "Arial, bold",
            // gridArea: "header",
        };

        return (
            <div>
                {this.state.loading || !this.state.issues ? (
                    <div>loading...</div>
                ) :
                    this.state.issues.map((issue, index) => {
                        return (
                            // <Grid>
                            <div className="box" key={index}>
                                <ul>
                                    <div><li style={mystyle}> Title: {issue.title} </li></div>
                                    <div style={mystyle}> Issue Url: {issue.url} </div>
                                    <div style={mystyle}> Issue Repository: {issue.repository_url} </div>
                                    <div style={mystyle}> username: {issue.user.login} </div>
                                    {/* <div style={mystyle}> Issue ID: <Route path ="/IssueDetail" component= {IssueDetail} /> {issue.number} </div> */}
                                    {/* <switch>
                                        <Route path="location of the title" component={IssueDetail} />
                                    </switch> */}
                                </ul>
                            </div>
                            // </Grid>
                        )
                    }
                    )
                }
            </div>
        )
    }

}

export default IssueList;
