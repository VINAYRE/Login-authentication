import React, {Component} from "react";
import {Link} from 'react-router-dom';

class LogoutC extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>Loggedout</h1>

            <Link to="/">Login Page</Link>
            </div>
        )
    }
}
export default LogoutC;
