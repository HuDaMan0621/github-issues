import React, { Component } from 'react'

export default class IssueDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    
    componentDidMount() {
        const { issueNumber } = this.props.match.params;
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
    }
    render() {
        return (
            <div>
                { this.props.issue.number }
            </div>
        )
    }
}
