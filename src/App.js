import React, { useReducer, createContext } from 'react';
import './App.css';
import { reducer, initialState, setToken } from './context/authReducer';
import Login from './components/Login';

export const userContext = createContext();

function App () {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <userContext.Provider value={{ userState: state, userDispatch: dispatch }}>
            <div className='App'>
                <Login />
                <button onClick={() => dispatch(setToken('supersecrettoken'))}>
                    set token
                </button>
            </div>
        </userContext.Provider>
    );
}

export default App;
