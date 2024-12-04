// AuthContext.js
import React, { createContext, useState } from 'react';

// Create a context object
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Content from './Content';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Content />
      </div>
    </AuthProvider>
  );
};

export default App;
// Navbar.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <nav>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;

// Content.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Content = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
};

export default Content;
