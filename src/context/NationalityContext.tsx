import React, { createContext, useContext, useState, useEffect } from "react";

type NationalityType = "indian" | "foreign" | null;

interface NationalityContextType {
  visitorType: NationalityType;
  setVisitorType: (type: NationalityType) => void;
  toggleVisitorType: () => void;
}

const NationalityContext = createContext<NationalityContextType | undefined>(undefined);

export const NationalityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visitorType, setVisitorType] = useState<NationalityType>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("visitorType") as NationalityType;
    if (stored) {
      setVisitorType(stored);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && visitorType) {
      localStorage.setItem("visitorType", visitorType);
    }
  }, [visitorType, isLoaded]);

  const toggleVisitorType = () => {
    setVisitorType((prev) => (prev === "indian" ? "foreign" : "indian"));
  };

  return (
    <NationalityContext.Provider value={{ visitorType, setVisitorType, toggleVisitorType }}>
      {children}
    </NationalityContext.Provider>
  );
};

export const useNationality = () => {
  const context = useContext(NationalityContext);
  if (context === undefined) {
    throw new Error("useNationality must be used within NationalityProvider");
  }
  return context;
};
