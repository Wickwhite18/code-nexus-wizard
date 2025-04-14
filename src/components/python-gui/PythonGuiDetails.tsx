
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PythonGuiDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Advanced Features</CardTitle>
          <CardDescription>Detailed information about the Python GUI capabilities</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="editor">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="editor">Code Editor</TabsTrigger>
              <TabsTrigger value="ai">AI Assistant</TabsTrigger>
              <TabsTrigger value="terminal">Terminal</TabsTrigger>
            </TabsList>
            
            <TabsContent value="editor" className="space-y-4">
              <h3 className="text-lg font-semibold">Code Editor Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Syntax highlighting for 20+ languages</li>
                <li>Code folding and auto-indentation</li>
                <li>Line numbering and bracket matching</li>
                <li>Multiple theme options (light/dark)</li>
                <li>Customizable font sizes and styles</li>
                <li>Auto-save functionality</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="ai" className="space-y-4">
              <h3 className="text-lg font-semibold">AI Assistant Capabilities</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Context-aware code suggestions</li>
                <li>Code explanation and documentation generation</li>
                <li>Automatic bug detection and fixing</li>
                <li>Code optimization recommendations</li>
                <li>Support for multiple LLM providers</li>
                <li>Configurable AI parameters (temperature, max tokens)</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="terminal" className="space-y-4">
              <h3 className="text-lg font-semibold">Terminal Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Integrated terminal emulation</li>
                <li>Command history and auto-completion</li>
                <li>Support for running scripts directly</li>
                <li>Output capture and redirection</li>
                <li>Package manager integration</li>
                <li>Built-in Git commands support</li>
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>System Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-md font-semibold mb-2">Minimum Requirements</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Python 3.8 or higher</li>
                <li>2GB RAM</li>
                <li>500MB free disk space</li>
                <li>Any modern operating system (Windows, macOS, Linux)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Recommended Specifications</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Python 3.10 or higher</li>
                <li>4GB RAM or more</li>
                <li>1GB free disk space</li>
                <li>Internet connection for LLM API access</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PythonGuiDetails;
