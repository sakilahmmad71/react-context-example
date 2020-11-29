import React, { useContext } from 'react';
import { userContext } from '../App';
import { resetUser } from '../context/authReducer';

const Delete = () => {
    const user = useContext(userContext);

    const handleReset = () => {
        user.userDispatch(resetUser());
    };

    return (
        <div>
            <button onClick={handleReset}>delete user data</button>
        </div>
    );
};

export default Delete;
