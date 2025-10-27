import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: any; // Replace 'any' with a specific user type if available
  login: (userData: any) => void; // Replace 'any' with a specific type for userData
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace 'any' with a specific user type if available

  const login = (userData: any) => {
    setUser(userData);
    // Additional logic for storing user data (e.g., localStorage)
  };

  const logout = () => {
    setUser(null);
    // Additional logic for clearing user data (e.g., localStorage)
  };

  useEffect(() => {
    // Logic to check for existing user session (e.g., from localStorage)
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};