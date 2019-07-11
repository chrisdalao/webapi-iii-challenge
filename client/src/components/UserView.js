import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';

export class UserView extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                {this.props.user.name}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.usersReducer.user
    }
}

export default connect(
    mapStateToProps,
    { getUser }
)(UserView);
