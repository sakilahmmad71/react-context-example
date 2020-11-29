import React, { useContext } from 'react';
import { userContext } from '../App';
import Delete from './Delete';

const Dashboard = () => {
    const user = useContext(userContext);
    return (
        <div>
            {user.userState.token}, {user.userState.userid}
            <Delete />
        </div>
    );
};

export default Dashboard;
