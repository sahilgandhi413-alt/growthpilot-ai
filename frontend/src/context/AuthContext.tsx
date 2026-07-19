import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: any;
  token: string | null;

  // New names (recommended)
  login: (user: any, token: string) => void;
  logout: () => void;

  // Backward compatibility
  loginUser: (user: any, token: string) => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  function loginUser(user: any, token: string) {
    setUser(user);
    setToken(token);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  }

  function logoutUser() {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,

        // New API
        login: loginUser,
        logout: logoutUser,

        // Old API
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}