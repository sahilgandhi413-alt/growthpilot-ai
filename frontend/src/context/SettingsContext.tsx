import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface SettingsState {
  role: string;
  location: string;
  phone: string;
  dateFormat: string;
  timezone: string;
  language: string;
  currency: string;
  apiStatus: string;
  apiKey: string;
  twoFactor: boolean;
  name: string;
  email: string;
  darkMode: boolean;
  notifications: {
    email: boolean;
    inventory: boolean;
    marketing: boolean;
    ai: boolean;
  };
  aiAssistant: boolean;
  responseStyle: string;
}

interface SettingsContextType {
  settings: SettingsState;
  updateSettings: (data: Partial<SettingsState>) => void;
  saveSettings: () => void;
}

const defaultSettings: SettingsState = {
    name: "Sahil Gandhi",
    email: "sahil@example.com",

    darkMode: true,

    notifications: {
        email: true,
        inventory: true,
        marketing: true,
        ai: true,
    },

    aiAssistant: true,

    responseStyle: "Professional",
    twoFactor: true,
    apiStatus: "",
    apiKey: "",
    dateFormat: "",
    timezone: "",
    language: "",
    currency: "",
    role: "",
    location: "",
    phone: ""
};


const SettingsContext =
  createContext<SettingsContextType | null>(null);


export function SettingsProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [settings, setSettings] =
    useState<SettingsState>(() => {

      const saved =
        localStorage.getItem("settings");

      return saved
        ? JSON.parse(saved)
        : defaultSettings;

    });


  const updateSettings = (
    data: Partial<SettingsState>
  ) => {

    setSettings(prev => ({
      ...prev,
      ...data,
    }));

  };


  const saveSettings = () => {

    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );

    alert(
      "✓ Settings saved successfully"
    );

  };


  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );

}



export function useSettings(){

  const context =
    useContext(SettingsContext);

  if(!context){
    throw new Error(
      "useSettings must be inside SettingsProvider"
    );
  }

  return context;

}