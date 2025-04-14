
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Server, Globe, Database, Bot } from "lucide-react";
import { useLLM } from "@/components/providers/LLMProvider";
import { generatePythonSettingsFile } from "@/utils/pythonUtils";

interface LLMIntegrationProps {
  onDownload?: () => void;
}

const LLMIntegration: React.FC<LLMIntegrationProps> = ({ onDownload }) => {
  const { settings, activeProvider } = useLLM();
  
  const downloadPythonSettings = () => {
    const content = generatePythonSettingsFile(settings);
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    element.setAttribute("download", "llm_settings.py");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case "ollama":
        return <Server className="h-5 w-5 text-green-500" />;
      case "deepseek":
        return <Database className="h-5 w-5 text-blue-500" />;
      case "qwen":
        return <Bot className="h-5 w-5 text-purple-500" />;
      case "openrouter":
        return <Globe className="h-5 w-5 text-orange-500" />;
      default:
        return <Bot className="h-5 w-5" />;
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="mr-2 h-5 w-5 text-nexus-600" />
          LLM Integration for Python
        </CardTitle>
        <CardDescription>
          Your current LLM settings will be transferred to the Python GUI application
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Current Active Provider</h3>
              <div className="flex items-center p-3 bg-muted rounded-md">
                {getProviderIcon(activeProvider)}
                <span className="ml-2 capitalize">{activeProvider}</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Available Providers</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(settings).map((provider) => (
                  <div 
                    key={provider}
                    className={`flex items-center px-2 py-1 rounded-md text-xs ${
                      provider === activeProvider 
                        ? "bg-nexus-100 text-nexus-600 dark:bg-nexus-900 dark:text-nexus-300" 
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {getProviderIcon(provider)}
                    <span className="ml-1 capitalize">{provider}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={downloadPythonSettings}
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download LLM Settings for Python
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              These settings can be imported into the Python GUI application to maintain the same configuration.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LLMIntegration;
