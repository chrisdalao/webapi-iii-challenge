import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../actions';
import { Link } from 'react-router-dom';
import User from './User.js';

export class Users extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        return (
            <div>
                {this.props.users.map(user => {
                    return (
                        <Link to={`/users/${user.id}`} key={user.id} >
                            <User user={user} />
                        </Link>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users
    }
}

export default connect(
    mapStateToProps,
    { getAllUsers }
)(Users);