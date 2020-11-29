export const initialState = {
    token: null,
    userid: null,
};

export const setToken = (userToken) => ({
    type: 'SET_TOKEN',
    payload: userToken,
});

export const setUserId = (userId) => ({
    type: 'SET_USERID',
    payload: userId,
});

export const resetUser = () => ({
    type: 'RESET_USER',
    payload: {
        token: null,
        userid: null,
    },
});

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            };

        case 'SET_USERID':
            return {
                ...state,
                userid: action.payload,
            };

        case 'RESET_USER':
            return {
                ...state,
                token: action.payload.token,
                userid: action.payload.token,
            };

        default:
            return state;
    }
};
