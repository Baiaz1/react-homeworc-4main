import React from "react";
import classes from "./Users.module.css";


class User extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(

            <div className={classes.main}>
                <h1> information about users: </h1>
                <ul>
                    {
                        this.props.usersMass.map((user)=> {
                            return(
                                <li className={classes.extra}>
                                    <div className={classes.dop}>
                                    Name: <li>{user.name}</li>
                                    Age: <li>{user.age}</li>
                                    Position: <li>{user.position}</li>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export  default User;