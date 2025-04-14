
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PythonGUI: React.FC = () => {
  const downloadPythonScript = () => {
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(pythonScript));
    element.setAttribute("download", "code_nexus_wizard.py");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Web Version
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Python Tkinter GUI Version</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Nexus Wizard - Python Edition</CardTitle>
            <CardDescription>
              A standalone Python application with Tkinter GUI that provides the same functionality as the web version.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Python Tkinter GUI interface</li>
                  <li>Code editor with syntax highlighting</li>
                  <li>Multiple LLM integrations (Ollama, DeepSeek, Qwen, OpenRouter)</li>
                  <li>Code completion and suggestions</li>
                  <li>Built-in terminal emulation</li>
                  <li>Project file browser</li>
                  <li>Code execution (for supported languages)</li>
                  <li>Debugging tools</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Python 3.8 or higher</li>
                  <li>Tkinter library (usually comes with Python)</li>
                  <li>Required Python packages (will be installed automatically):</li>
                  <ul className="list-disc pl-5 mt-2">
                    <li>requests</li>
                    <li>python-dotenv</li>
                    <li>pygments (for syntax highlighting)</li>
                    <li>openai (for API integrations)</li>
                    <li>transformers (optional, for local models)</li>
                  </ul>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={downloadPythonScript} className="w-full md:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Python Script
            </Button>
          </CardFooter>
        </Card>

        <Tabs defaultValue="preview">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="installation">Installation Guide</TabsTrigger>
            <TabsTrigger value="source">View Source Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Application Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md p-4 bg-gray-100 dark:bg-gray-900">
                  <img 
                    src="https://placehold.co/800x500/png?text=Python+Tkinter+GUI+Preview" 
                    alt="Python GUI Preview" 
                    className="w-full rounded-md shadow-md" 
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="installation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Installation Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. Download the Script</h3>
                  <p>Click the "Download Python Script" button above to get the code_nexus_wizard.py file.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">2. Install Python</h3>
                  <p>Ensure you have Python 3.8+ installed on your system.</p>
                  
                  <div className="mt-2 p-3 bg-muted rounded-md">
                    <p className="font-mono text-sm">
                      # Check Python version<br />
                      python3 --version
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">3. Run the Script</h3>
                  <p>Navigate to the directory containing the downloaded script and run it:</p>
                  
                  <div className="mt-2 p-3 bg-muted rounded-md">
                    <p className="font-mono text-sm">
                      # On Linux/macOS<br />
                      python3 code_nexus_wizard.py<br /><br />
                      # On Windows<br />
                      python code_nexus_wizard.py
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">4. First Run Setup</h3>
                  <p>On first run, the application will check for and install required dependencies. You may be prompted to confirm installation.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="source">
            <Card>
              <CardHeader>
                <CardTitle>Python Source Code</CardTitle>
                <CardDescription>Preview of the Python Tkinter application source code</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md overflow-auto max-h-[600px]">
                  <pre className="text-sm font-mono">
                    <code>{pythonScript.substring(0, 1500)}...[truncated for preview]</code>
                  </pre>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">Download the full script to see all code.</p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

// Full Python script as a string variable - properly escaped
const pythonScript = `#!/usr/bin/env python3
"""
Code Nexus Wizard - Python Edition
A comprehensive code development environment with LLM integration
"""

import os
import sys
import tkinter as tk
from tkinter import ttk, scrolledtext, filedialog, messagebox
import threading
import json
import subprocess
import webbrowser
from datetime import datetime
import re
import tempfile
import platform
import shutil
from tkinter.font import Font

# Check for required packages and install if missing
REQUIRED_PACKAGES = [
    "requests",
    "python-dotenv",
    "pygments",
    "pillow",
]

def check_and_install_dependencies():
    """Check for required packages and install if missing"""
    missing_packages = []
    
    try:
        import importlib.metadata as importlib_metadata
    except ImportError:
        import importlib_metadata
    
    for package in REQUIRED_PACKAGES:
        try:
            importlib_metadata.distribution(package)
        except importlib_metadata.PackageNotFoundError:
            missing_packages.append(package)
    
    if missing_packages:
        print(f"Installing missing packages: {', '.join(missing_packages)}")
        subprocess.check_call([sys.executable, "-m", "pip", "install"] + missing_packages)
        print("All required packages installed successfully.")
        
        # Restart the application after installing packages
        python = sys.executable
        os.execl(python, python, *sys.argv)

# Install dependencies if needed
if __name__ == "__main__":
    check_and_install_dependencies()

# Now we can safely import from the required packages
import requests
from pygments import highlight
from pygments.lexers import get_lexer_by_name, get_all_lexers
from pygments.formatters import get_formatter_by_name
from pygments.styles import get_all_styles
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

class CodeNexusApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Code Nexus Wizard")
        self.root.geometry("1200x800")
        self.root.minsize(800, 600)
        
        # Set dark theme as default
        self.theme = "dark"
        self.set_theme(self.theme)
        
        # Create main sections
        self.create_menu()
        self.create_main_paned_window()
        self.create_status_bar()
        
        # Initialize LLM settings
        self.llm_settings = {
            "ollama": {
                "endpoint": "http://localhost:11434",
                "model": "codellama",
                "temperature": 0.7,
                "useLocal": True,
            },
            "deepseek": {
                "apiKey": "",
                "model": "deepseek-coder",
                "temperature": 0.5,
            },
            "qwen": {
                "apiKey": "",
                "model": "qwen",
                "temperature": 0.7,
            },
            "openrouter": {
                "apiKey": "",
                "model": "mistralai/mixtral-8x7b",
                "temperature": 0.7,
            }
        }
        self.active_llm = "ollama"
        
        # Load settings if they exist
        self.load_settings()
        
        # Initialize variables
        self.current_file = None
        self.current_language = "python"
        self.terminal_command_history = []
        self.terminal_command_index = 0
        
        # Sample files for demo
        self.create_sample_files()
        
        # Set up file extensions to language mapping
        self.file_ext_to_language = {
            ".py": "python",
            ".js": "javascript",
            ".html": "html",
            ".css": "css",
            ".cpp": "cpp",
            ".c": "c",
            ".java": "java",
            ".php": "php",
            ".rb": "ruby",
            ".go": "go",
            ".rs": "rust",
            ".sh": "bash",
            ".ts": "typescript",
            ".json": "json",
            ".md": "markdown",
            ".xml": "xml",
            ".sql": "sql",
            ".yml": "yaml",
            ".yaml": "yaml",
        }
        
        # Automatically highlight syntax in the editor
        self.highlight_syntax()
        
        # Update status bar
        self.update_status_bar()
        
        # Print welcome message in terminal
        self.write_to_terminal("Code Nexus Wizard Terminal v1.0.0\\n")
        self.write_to_terminal("Type \\"help\\" for a list of available commands.\\n")
        self.write_to_terminal("> ")
`;

export default PythonGUI;
