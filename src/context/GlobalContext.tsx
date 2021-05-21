import React, {createContext, useState, useReducer} from 'react';
import instance from '../api/apiConfig';

const initialState = {
    credentials: [],
    user: undefined,
    addUser: () => {}

};


const appReducer = (state:any, action:any) => {
    switch (action.type) {
        case 'PUSH_FORM':
            return {...state, credentials: action.payload}
        default:
            return state;
    }
};

    export const GlobalContext = createContext<InitialStateType>(initialState);

    export const GlobalProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    const addUser = async (user:credentials) => {
        try {
            let {data} = await instance.post('/user', user);
            dispatch({type: 'PUSH_FORM', payload: data});
            } catch (err) {
                console.log(err);
            };
    };



    return (
        <GlobalContext.Provider
            value={{
                credentials: state.credentials,
                user: state.user,
                addUser
            }}>
                {children}
        </GlobalContext.Provider>
    )
        };