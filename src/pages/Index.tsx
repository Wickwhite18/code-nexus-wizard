
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Workspace from "@/components/workspace/Workspace";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  Binary,
  FileCode,
  GitBranch,
  Star,
  BookOpen,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const [showWorkspace, setShowWorkspace] = useState(false);

  if (showWorkspace) {
    return (
      <Layout>
        <Workspace />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-nexus-100 dark:bg-nexus-900 flex items-center justify-center">
              <Code2 className="h-8 w-8 text-nexus-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-nexus-600 to-teal-500">
            Code Nexus Wizard
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            The all-in-one development environment for building, debugging, and optimizing your code with powerful AI assistance.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-nexus-600 hover:bg-nexus-700"
              onClick={() => setShowWorkspace(true)}
            >
              Launch Workspace <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="mb-4 h-12 w-12 rounded-md bg-nexus-100 dark:bg-nexus-900 flex items-center justify-center">
              <FileCode className="h-6 w-6 text-nexus-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Intelligent Coding</h3>
            <p className="text-muted-foreground">
              Advanced code completion, syntax highlighting, and real-time error detection across multiple languages.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="mb-4 h-12 w-12 rounded-md bg-nexus-100 dark:bg-nexus-900 flex items-center justify-center">
              <Binary className="h-6 w-6 text-nexus-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Assistance</h3>
            <p className="text-muted-foreground">
              Get smart suggestions, automated debugging, and code optimization using multiple LLM integrations.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="mb-4 h-12 w-12 rounded-md bg-nexus-100 dark:bg-nexus-900 flex items-center justify-center">
              <GitBranch className="h-6 w-6 text-nexus-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Environment</h3>
            <p className="text-muted-foreground">
              Integrated terminal, live preview, and project management in one unified interface.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Powerful Features</h2>
          <Tabs defaultValue="editor" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="editor">Code Editor</TabsTrigger>
              <TabsTrigger value="ai">AI Assistant</TabsTrigger>
              <TabsTrigger value="terminal">Terminal</TabsTrigger>
              <TabsTrigger value="preview">Live Preview</TabsTrigger>
            </TabsList>
            <div className="border border-border rounded-lg overflow-hidden">
              <TabsContent value="editor" className="m-0">
                <div className="bg-code p-6 text-code-foreground font-mono text-sm">
                  <pre className="overflow-x-auto">
                    <code>{`// Example JavaScript Code
function processData(data) {
  // Validate input
  if (!data || !Array.isArray(data)) {
    throw new Error('Invalid input: expected an array');
  }
  
  // Process the data
  return data.map(item => {
    return {
      ...item,
      processed: true,
      timestamp: new Date().toISOString()
    };
  });
}`}</code>
                  </pre>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-medium mb-2">Feature-Rich Editor</h3>
                  <p className="text-muted-foreground">
                    Syntax highlighting, code folding, and intelligent completions for 15+ programming languages.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="ai" className="m-0">
                <div className="p-6 bg-muted">
                  <div className="mb-4 bg-background p-3 rounded-lg border border-border">
                    <div className="text-sm font-medium">User</div>
                    <div>How can I optimize this function for better performance?</div>
                  </div>
                  <div className="bg-nexus-50 dark:bg-nexus-900/40 p-3 rounded-lg border border-nexus-200 dark:border-nexus-800">
                    <div className="text-sm font-medium text-nexus-700 dark:text-nexus-300">AI Assistant</div>
                    <div>
                      I've analyzed your function and here are some optimizations:
                      <ol className="list-decimal pl-6 pt-2 space-y-1">
                        <li>Replace the nested loops with a single map/filter</li>
                        <li>Memoize expensive calculations</li>
                        <li>Use early returns for edge cases</li>
                      </ol>
                      <div className="mt-2 p-2 bg-code text-code-foreground rounded text-sm font-mono">
                        <pre>{`// Optimized version
const processData = memoize((data) => {
  if (!data?.length) return [];
  return data
    .filter(Boolean)
    .map(item => ({ 
      ...item, 
      processed: true 
    }));
});`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-medium mb-2">AI-Powered Assistance</h3>
                  <p className="text-muted-foreground">
                    Get intelligent code suggestions, refactoring advice, and debugging help using multiple LLM integrations.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="terminal" className="m-0">
                <div className="bg-terminal text-terminal-foreground p-6 font-mono text-sm">
                  <div className="terminal-line"><span className="prompt">></span> <span className="command">npm install</span></div>
                  <div className="terminal-line output">Installing dependencies...</div>
                  <div className="terminal-line output">+ react@18.2.0</div>
                  <div className="terminal-line output">+ typescript@5.0.4</div>
                  <div className="terminal-line output">+ vite@4.3.9</div>
                  <div className="terminal-line output">Added 1249 packages in 32s</div>
                  <div className="terminal-line"><span className="prompt">></span> <span className="command">npm run dev</span></div>
                  <div className="terminal-line output">
                    VITE v4.3.9 ready in 324 ms<br />
                    ➜ Local: http://localhost:3000/<br />
                    ➜ Network: use --host to expose
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-medium mb-2">Integrated Terminal</h3>
                  <p className="text-muted-foreground">
                    Run commands, manage packages, and execute scripts directly within your workspace.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="preview" className="m-0">
                <div className="aspect-video bg-gray-100 flex items-center justify-center p-6">
                  <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
                    <h1 className="text-2xl font-bold mb-4">Hello, World!</h1>
                    <p className="mb-4">This is a live preview of your application.</p>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-nexus-600 text-white rounded-md">
                        Primary Button
                      </button>
                      <button className="px-4 py-2 bg-white border border-gray-300 rounded-md">
                        Secondary Button
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-medium mb-2">Live Preview</h3>
                  <p className="text-muted-foreground">
                    See your changes in real-time with responsive views for desktop, tablet, and mobile.
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="rounded-lg border border-border p-8 bg-card mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Supported LLM Integrations</h2>
              <p className="text-muted-foreground mb-4">
                Leverage the power of multiple AI models to enhance your development workflow:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-nexus-500 mr-2" />
                  <span><strong>Ollama</strong> - Run powerful models locally for privacy and speed</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-nexus-500 mr-2" />
                  <span><strong>DeepSeek</strong> - Specialized for complex code generation and comprehension</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-nexus-500 mr-2" />
                  <span><strong>Qwen</strong> - Advanced language understanding and code completion</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-nexus-500 mr-2" />
                  <span><strong>OpenRouter</strong> - Access to multiple LLM providers through a single API</span>
                </li>
              </ul>
              <Button
                className="bg-nexus-600 hover:bg-nexus-700"
                onClick={() => setShowWorkspace(true)}
              >
                Get Started Now
              </Button>
            </div>
            <div className="md:w-1/3 bg-muted rounded-lg p-4 flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-nexus-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-1">Developer Documentation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Comprehensive guides and API references
                </p>
                <Button variant="outline" size="sm">
                  View Docs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
