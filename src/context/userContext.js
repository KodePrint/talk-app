import React, { useState } from 'react';

export const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
  const [userSession, setUserSession] = useState({});
  
  return <UserContext.Provider value={{ userSession, setUserSession }}>
      {children}
    </UserContext.Provider>
}

