import React, { createContext, useState } from 'react';

// context provider ( function )
export const userSessionContext = createContext();
export const UserSessionContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    return (
        <userSessionContext.Provider value={{ user, setUser }}>
            {children}
        </userSessionContext.Provider>
    );
};
