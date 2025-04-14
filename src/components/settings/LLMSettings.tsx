
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useLLM } from "@/components/providers/LLMProvider";
import { useToast } from "@/hooks/use-toast";

interface LLMSettingsProps {
  onClose?: () => void;
}

const LLMSettings: React.FC<LLMSettingsProps> = ({ onClose }) => {
  const { settings, updateSettings, activeProvider, setActiveProvider } = useLLM();
  const { toast } = useToast();
  const [localSettings, setLocalSettings] = useState(settings);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const handleSave = () => {
    // Save each provider's settings
    Object.keys(localSettings).forEach((provider) => {
      updateSettings(provider as any, localSettings[provider as keyof typeof localSettings]);
    });
    
    toast({
      title: "Settings saved",
      description: "Your LLM settings have been saved successfully.",
    });
    
    if (onClose) onClose();
  };

  const updateLocalSettings = (provider: string, key: string, value: any) => {
    setLocalSettings((prev) => ({
      ...prev,
      [provider]: {
        ...prev[provider as keyof typeof prev],
        [key]: value,
      },
    }));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">LLM Configuration</h2>
      
      <Tabs value={activeProvider} onValueChange={setActiveProvider as any}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="ollama">Ollama</TabsTrigger>
          <TabsTrigger value="deepseek">DeepSeek</TabsTrigger>
          <TabsTrigger value="qwen">Qwen</TabsTrigger>
          <TabsTrigger value="openrouter">OpenRouter</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ollama" className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="ollama-local" className="font-medium">Use Local Ollama</Label>
              <Switch
                id="ollama-local"
                checked={localSettings.ollama.useLocal}
                onCheckedChange={(checked) => 
                  updateLocalSettings("ollama", "useLocal", checked)
                }
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Toggle to use a locally running Ollama instance (requires Ollama to be installed)
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ollama-endpoint">Endpoint URL</Label>
            <Input
              id="ollama-endpoint"
              value={localSettings.ollama.endpoint}
              onChange={(e) => 
                updateLocalSettings("ollama", "endpoint", e.target.value)
              }
              placeholder="http://localhost:11434"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ollama-model">Model</Label>
            <Select
              value={localSettings.ollama.model}
              onValueChange={(value) => 
                updateLocalSettings("ollama", "model", value)
              }
            >
              <SelectTrigger id="ollama-model">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="codellama">CodeLlama</SelectItem>
                <SelectItem value="llama3">Llama 3</SelectItem>
                <SelectItem value="llama2">Llama 2</SelectItem>
                <SelectItem value="mistral">Mistral</SelectItem>
                <SelectItem value="phi2">Phi-2</SelectItem>
                <SelectItem value="deepseek-coder">DeepSeek Coder</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="ollama-temperature">Temperature: {localSettings.ollama.temperature}</Label>
            </div>
            <Slider
              id="ollama-temperature"
              min={0}
              max={1}
              step={0.1}
              value={[localSettings.ollama.temperature]}
              onValueChange={(value) => 
                updateLocalSettings("ollama", "temperature", value[0])
              }
            />
            <p className="text-xs text-muted-foreground">
              Lower values produce more focused and deterministic outputs. Higher values produce more diverse outputs.
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Installation Instructions (Kali Linux)</h4>
            <div className="bg-code text-code-foreground p-3 rounded font-mono text-sm overflow-x-auto">
              <pre>{`# Install Ollama on Kali Linux
curl -fsSL https://ollama.com/install.sh | sh

# Start Ollama service
ollama serve &

# Pull CodeLlama model (optimized for code generation)
ollama pull codellama`}</pre>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="deepseek" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="deepseek-api-key">API Key</Label>
            <Input
              id="deepseek-api-key"
              type="password"
              value={localSettings.deepseek.apiKey}
              onChange={(e) => 
                updateLocalSettings("deepseek", "apiKey", e.target.value)
              }
              placeholder="Enter your DeepSeek API key"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="deepseek-model">Model</Label>
            <Select
              value={localSettings.deepseek.model}
              onValueChange={(value) => 
                updateLocalSettings("deepseek", "model", value)
              }
            >
              <SelectTrigger id="deepseek-model">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deepseek-coder">DeepSeek Coder</SelectItem>
                <SelectItem value="deepseek-llm">DeepSeek LLM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="deepseek-temperature">Temperature: {localSettings.deepseek.temperature}</Label>
            </div>
            <Slider
              id="deepseek-temperature"
              min={0}
              max={1}
              step={0.1}
              value={[localSettings.deepseek.temperature]}
              onValueChange={(value) => 
                updateLocalSettings("deepseek", "temperature", value[0])
              }
            />
          </div>
          
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">API Documentation</h4>
            <p className="text-sm text-muted-foreground mb-2">
              DeepSeek provides powerful language models trained specifically for code generation and understanding.
            </p>
            <a 
              href="https://platform.deepseek.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-nexus-600 hover:underline text-sm"
            >
              Visit DeepSeek Platform for API keys
            </a>
          </div>
        </TabsContent>
        
        <TabsContent value="qwen" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="qwen-api-key">API Key</Label>
            <Input
              id="qwen-api-key"
              type="password"
              value={localSettings.qwen.apiKey}
              onChange={(e) => 
                updateLocalSettings("qwen", "apiKey", e.target.value)
              }
              placeholder="Enter your Qwen API key"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="qwen-model">Model</Label>
            <Select
              value={localSettings.qwen.model}
              onValueChange={(value) => 
                updateLocalSettings("qwen", "model", value)
              }
            >
              <SelectTrigger id="qwen-model">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="qwen">Qwen</SelectItem>
                <SelectItem value="qwen-max">Qwen Max</SelectItem>
                <SelectItem value="qwen-coding">Qwen Coding</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="qwen-temperature">Temperature: {localSettings.qwen.temperature}</Label>
            </div>
            <Slider
              id="qwen-temperature"
              min={0}
              max={1}
              step={0.1}
              value={[localSettings.qwen.temperature]}
              onValueChange={(value) => 
                updateLocalSettings("qwen", "temperature", value[0])
              }
            />
          </div>
          
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">API Documentation</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Qwen provides powerful language models with a focus on multilingual capabilities.
            </p>
            <a 
              href="https://qwenlm.github.io/blog/qwen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-nexus-600 hover:underline text-sm"
            >
              Learn more about Qwen Language Models
            </a>
          </div>
        </TabsContent>
        
        <TabsContent value="openrouter" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="openrouter-api-key">API Key</Label>
            <Input
              id="openrouter-api-key"
              type="password"
              value={localSettings.openrouter.apiKey}
              onChange={(e) => 
                updateLocalSettings("openrouter", "apiKey", e.target.value)
              }
              placeholder="Enter your OpenRouter API key"
            />
            <p className="text-xs text-muted-foreground">
              Get an API key from <a href="https://openrouter.ai" className="text-nexus-600 hover:underline" target="_blank" rel="noreferrer">openrouter.ai</a>
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="openrouter-model">Model</Label>
            <Select
              value={localSettings.openrouter.model}
              onValueChange={(value) => 
                updateLocalSettings("openrouter", "model", value)
              }
            >
              <SelectTrigger id="openrouter-model">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mistralai/mixtral-8x7b">Mixtral 8x7B</SelectItem>
                <SelectItem value="meta-llama/llama-3-8b">Llama 3 8B</SelectItem>
                <SelectItem value="anthropic/claude-3-opus">Claude 3 Opus</SelectItem>
                <SelectItem value="google/gemini-pro">Gemini Pro</SelectItem>
                <SelectItem value="openai/gpt-4o">GPT-4o</SelectItem>
                <SelectItem value="meta-llama/codellama-34b">CodeLlama 34B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="openrouter-temperature">Temperature: {localSettings.openrouter.temperature}</Label>
            </div>
            <Slider
              id="openrouter-temperature"
              min={0}
              max={1}
              step={0.1}
              value={[localSettings.openrouter.temperature]}
              onValueChange={(value) => 
                updateLocalSettings("openrouter", "temperature", value[0])
              }
            />
          </div>
          
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">API Documentation</h4>
            <p className="text-sm text-muted-foreground mb-2">
              OpenRouter provides unified access to many different LLM providers through a single API.
            </p>
            <a 
              href="https://openrouter.ai/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-nexus-600 hover:underline text-sm"
            >
              View OpenRouter Documentation
            </a>
          </div>
        </TabsContent>
        
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Kali Linux Setup Guide</h3>
          <p className="text-sm text-muted-foreground mb-3">
            For a complete setup on Kali Linux, you can use our automated bash script:
          </p>
          <div className="bg-code text-code-foreground p-3 rounded font-mono text-sm overflow-x-auto mb-3">
            <pre>{`#!/bin/bash
# Automated setup script for Code Nexus Wizard on Kali Linux

echo "Starting Code Nexus Wizard setup..."

# Check if running as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root"
  exit 1
fi

# Install system dependencies
echo "Installing system dependencies..."
apt update
apt install -y curl wget git python3 python3-pip nodejs npm

# Install Ollama for local LLM support
echo "Installing Ollama..."
curl -fsSL https://ollama.com/install.sh | sh
systemctl enable ollama
systemctl start ollama

# Pull some useful coding models
echo "Downloading coding-specific LLM models..."
ollama pull codellama

# Set up Python environment
echo "Setting up Python environment..."
pip3 install jupyter numpy pandas matplotlib scikit-learn tensorflow

# Install development tools
echo "Installing development tools..."
npm install -g typescript eslint prettier

echo "Setup completed successfully!"
echo "You can now launch Code Nexus Wizard and configure your LLM preferences."
`}</pre>
          </div>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(document.querySelector('pre')?.innerText || '');
              toast({
                title: "Copied to clipboard",
                description: "The setup script has been copied to your clipboard.",
              });
            }}
            className="w-full"
          >
            Copy Setup Script
          </Button>
        </div>
      </Tabs>
      
      <div className="mt-8 flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSave}>
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default LLMSettings;
