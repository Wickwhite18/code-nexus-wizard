
import React, { createContext, useContext, useState, useEffect } from "react";
import { LLMProvider as LLMProviderType } from "@/services/llmService";

interface LLMSettings {
  provider: LLMProviderType;
  apiKey?: string;
  endpoint?: string;
  model: string;
  temperature: number;
}

interface ProviderSettings {
  ollama: {
    endpoint: string;
    model: string;
    temperature: number;
    useLocal: boolean;
  };
  deepseek: {
    apiKey: string;
    model: string;
    temperature: number;
  };
  qwen: {
    apiKey: string;
    model: string;
    temperature: number;
  };
  openrouter: {
    apiKey: string;
    model: string;
    temperature: number;
  };
}

interface LLMContextType {
  settings: ProviderSettings;
  updateSettings: (provider: LLMProviderType, settings: any) => void;
  activeProvider: LLMProviderType;
  setActiveProvider: (provider: LLMProviderType) => void;
  getLLMConfig: () => LLMSettings;
}

const defaultSettings: ProviderSettings = {
  ollama: {
    endpoint: "http://localhost:11434",
    model: "codellama",
    temperature: 0.7,
    useLocal: true,
  },
  deepseek: {
    apiKey: "",
    model: "deepseek-coder",
    temperature: 0.5,
  },
  qwen: {
    apiKey: "",
    model: "qwen",
    temperature: 0.7,
  },
  openrouter: {
    apiKey: "",
    model: "mistralai/mixtral-8x7b",
    temperature: 0.7,
  },
};

const LLMContext = createContext<LLMContextType | undefined>(undefined);

export const LLMProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<ProviderSettings>(() => {
    // Load settings from localStorage if available
    const savedSettings = localStorage.getItem("llmSettings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });
  
  const [activeProvider, setActiveProvider] = useState<LLMProviderType>("ollama");

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem("llmSettings", JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (provider: LLMProviderType, newSettings: any) => {
    setSettings((prev) => ({
      ...prev,
      [provider]: {
        ...prev[provider],
        ...newSettings,
      },
    }));
  };

  const getLLMConfig = (): LLMSettings => {
    const providerSettings = settings[activeProvider];
    return {
      provider: activeProvider,
      apiKey: "apiKey" in providerSettings ? providerSettings.apiKey : undefined,
      endpoint: "endpoint" in providerSettings ? providerSettings.endpoint : undefined,
      model: providerSettings.model,
      temperature: providerSettings.temperature,
    };
  };

  return (
    <LLMContext.Provider
      value={{
        settings,
        updateSettings,
        activeProvider,
        setActiveProvider,
        getLLMConfig,
      }}
    >
      {children}
    </LLMContext.Provider>
  );
};

export const useLLM = () => {
  const context = useContext(LLMContext);
  if (context === undefined) {
    throw new Error("useLLM must be used within a LLMProvider");
  }
  return context;
};
