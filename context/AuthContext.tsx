import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import { getDoc, doc, setDoc } from "firebase/firestore";

// Define types for the user and context
interface User {
  id: string;
  email: string;
  username: string;
  profileURL?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    email: string,
    password: string,
    username: string,
    profileURL: string
  ) => Promise<void>;
}

// Default context value to prevent null errors
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    true
  );

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (data) => {
      if (data) {
        setIsAuthenticated(true);
        setUser(data);
      } else {
        setIsAuthenticated(false);
        setIsAuthenticated(null);
      }
    });
    return unsub;
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = (): void => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  const register = async (
    email: string,
    password: string,
    username: string
  ): Promise<{ success: boolean; data: any; error: any }> => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", response?.user?.uid), {
        username,
        profileImage: response?.user?.photoURL,
        useId: response?.user?.uid,
      });

      return { success: true, data: response?.user, error: null };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, data: null, error: (error as Error).message };
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
