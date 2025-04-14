
import React, { useState } from "react";
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

interface LLMSettingsProps {
  onClose?: () => void;
}

const LLMSettings: React.FC<LLMSettingsProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("ollama");
  const [ollamaSettings, setOllamaSettings] = useState({
    endpoint: "http://localhost:11434",
    model: "codellama",
    temperature: 0.7,
    useLocal: true,
  });
  const [deepseekSettings, setDeepseekSettings] = useState({
    apiKey: "",
    model: "deepseek-coder",
    temperature: 0.5,
  });
  const [qwenSettings, setQwenSettings] = useState({
    apiKey: "",
    model: "qwen",
    temperature: 0.7,
  });
  const [openrouterSettings, setOpenrouterSettings] = useState({
    apiKey: "",
    model: "mistralai/mixtral-8x7b",
    temperature: 0.7,
  });

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">LLM Configuration</h2>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
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
                checked={ollamaSettings.useLocal}
                onCheckedChange={(checked) => 
                  setOllamaSettings({...ollamaSettings, useLocal: checked})
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
              value={ollamaSettings.endpoint}
              onChange={(e) => 
                setOllamaSettings({...ollamaSettings, endpoint: e.target.value})
              }
              placeholder="http://localhost:11434"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ollama-model">Model</Label>
            <Select
              value={ollamaSettings.model}
              onValueChange={(value) => 
                setOllamaSettings({...ollamaSettings, model: value})
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
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="ollama-temperature">Temperature: {ollamaSettings.temperature}</Label>
            </div>
            <Slider
              id="ollama-temperature"
              min={0}
              max={1}
              step={0.1}
              value={[ollamaSettings.temperature]}
              onValueChange={(value) => 
                setOllamaSettings({...ollamaSettings, temperature: value[0]})
              }
            />
            <p className="text-xs text-muted-foreground">
              Lower values produce more focused and deterministic outputs. Higher values produce more diverse outputs.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="deepseek" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="deepseek-api-key">API Key</Label>
            <Input
              id="deepseek-api-key"
              type="password"
              value={deepseekSettings.apiKey}
              onChange={(e) => 
                setDeepseekSettings({...deepseekSettings, apiKey: e.target.value})
              }
              placeholder="Enter your DeepSeek API key"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="deepseek-model">Model</Label>
            <Select
              value={deepseekSettings.model}
              onValueChange={(value) => 
                setDeepseekSettings({...deepseekSettings, model: value})
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
              <Label htmlFor="deepseek-temperature">Temperature: {deepseekSettings.temperature}</Label>
            </div>
            <Slider
              id="deepseek-temperature"
              min={0}
              max={1}
              step={0.1}
              value={[deepseekSettings.temperature]}
              onValueChange={(value) => 
                setDeepseekSettings({...deepseekSettings, temperature: value[0]})
              }
            />
          </div>
        </TabsContent>
        
        <TabsContent value="qwen" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="qwen-api-key">API Key</Label>
            <Input
              id="qwen-api-key"
              type="password"
              value={qwenSettings.apiKey}
              onChange={(e) => 
                setQwenSettings({...qwenSettings, apiKey: e.target.value})
              }
              placeholder="Enter your Qwen API key"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="qwen-model">Model</Label>
            <Select
              value={qwenSettings.model}
              onValueChange={(value) => 
                setQwenSettings({...qwenSettings, model: value})
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
              <Label htmlFor="qwen-temperature">Temperature: {qwenSettings.temperature}</Label>
            </div>
            <Slider
              id="qwen-temperature"
              min={0}
              max={1}
              step={0.1}
              value={[qwenSettings.temperature]}
              onValueChange={(value) => 
                setQwenSettings({...qwenSettings, temperature: value[0]})
              }
            />
          </div>
        </TabsContent>
        
        <TabsContent value="openrouter" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="openrouter-api-key">API Key</Label>
            <Input
              id="openrouter-api-key"
              type="password"
              value={openrouterSettings.apiKey}
              onChange={(e) => 
                setOpenrouterSettings({...openrouterSettings, apiKey: e.target.value})
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
              value={openrouterSettings.model}
              onValueChange={(value) => 
                setOpenrouterSettings({...openrouterSettings, model: value})
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
              <Label htmlFor="openrouter-temperature">Temperature: {openrouterSettings.temperature}</Label>
            </div>
            <Slider
              id="openrouter-temperature"
              min={0}
              max={1}
              step={0.1}
              value={[openrouterSettings.temperature]}
              onValueChange={(value) => 
                setOpenrouterSettings({...openrouterSettings, temperature: value[0]})
              }
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button>
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default LLMSettings;
