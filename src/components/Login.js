import React, { useContext } from 'react';
import { userContext } from '../App';
import User from './User';

const Login = () => {
    const user = useContext(userContext);

    return (
        <div>
            <h1>the token is {user.userState.token}</h1>
            <h1>the token is {user.userState.userid}</h1>
            <User />
        </div>
    );
};

export default Login;
