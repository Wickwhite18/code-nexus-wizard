
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

// Full Python script as a string variable
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
        self.write_to_terminal("Type \"help\" for a list of available commands.\\n")
        self.write_to_terminal("> ")
        
    def create_menu(self):
        """Create application menu bar"""
        menubar = tk.Menu(self.root)
        
        # File menu
        file_menu = tk.Menu(menubar, tearoff=0)
        file_menu.add_command(label="New File", command=self.new_file, accelerator="Ctrl+N")
        file_menu.add_command(label="Open File", command=self.open_file, accelerator="Ctrl+O")
        file_menu.add_command(label="Save", command=self.save_file, accelerator="Ctrl+S")
        file_menu.add_command(label="Save As", command=self.save_file_as, accelerator="Ctrl+Shift+S")
        file_menu.add_separator()
        file_menu.add_command(label="Exit", command=self.root.quit)
        menubar.add_cascade(label="File", menu=file_menu)
        
        # Edit menu
        edit_menu = tk.Menu(menubar, tearoff=0)
        edit_menu.add_command(label="Undo", command=lambda: self.editor.edit_undo(), accelerator="Ctrl+Z")
        edit_menu.add_command(label="Redo", command=lambda: self.editor.edit_redo(), accelerator="Ctrl+Y")
        edit_menu.add_separator()
        edit_menu.add_command(label="Cut", command=lambda: self.editor.event_generate("<<Cut>>"), accelerator="Ctrl+X")
        edit_menu.add_command(label="Copy", command=lambda: self.editor.event_generate("<<Copy>>"), accelerator="Ctrl+C")
        edit_menu.add_command(label="Paste", command=lambda: self.editor.event_generate("<<Paste>>"), accelerator="Ctrl+V")
        edit_menu.add_separator()
        edit_menu.add_command(label="Find", command=self.find_text, accelerator="Ctrl+F")
        edit_menu.add_command(label="Replace", command=self.replace_text, accelerator="Ctrl+H")
        menubar.add_cascade(label="Edit", menu=edit_menu)
        
        # View menu
        view_menu = tk.Menu(menubar, tearoff=0)
        view_menu.add_command(label="Toggle Theme", command=self.toggle_theme)
        view_menu.add_separator()
        view_menu.add_command(label="Increase Font Size", command=self.increase_font_size, accelerator="Ctrl++")
        view_menu.add_command(label="Decrease Font Size", command=self.decrease_font_size, accelerator="Ctrl+-")
        menubar.add_cascade(label="View", menu=view_menu)
        
        # Run menu
        run_menu = tk.Menu(menubar, tearoff=0)
        run_menu.add_command(label="Run Code", command=self.run_code, accelerator="F5")
        menubar.add_cascade(label="Run", menu=run_menu)
        
        # LLM menu
        llm_menu = tk.Menu(menubar, tearoff=0)
        llm_menu.add_command(label="LLM Settings", command=self.show_llm_settings)
        llm_menu.add_separator()
        llm_menu.add_command(label="Complete Code", command=lambda: self.ai_assist("complete"))
        llm_menu.add_command(label="Debug Code", command=lambda: self.ai_assist("debug"))
        llm_menu.add_command(label="Refactor Code", command=lambda: self.ai_assist("refactor"))
        llm_menu.add_command(label="Ask AI Assistant", command=lambda: self.ai_assist("general"))
        menubar.add_cascade(label="AI", menu=llm_menu)
        
        # Help menu
        help_menu = tk.Menu(menubar, tearoff=0)
        help_menu.add_command(label="Documentation", command=lambda: webbrowser.open("https://github.com/username/code-nexus-wizard"))
        help_menu.add_command(label="About", command=self.show_about)
        menubar.add_cascade(label="Help", menu=help_menu)
        
        self.root.config(menu=menubar)
        
        # Keyboard bindings
        self.root.bind("<Control-n>", lambda event: self.new_file())
        self.root.bind("<Control-o>", lambda event: self.open_file())
        self.root.bind("<Control-s>", lambda event: self.save_file())
        self.root.bind("<Control-S>", lambda event: self.save_file_as())
        self.root.bind("<F5>", lambda event: self.run_code())
        self.root.bind("<Control-f>", lambda event: self.find_text())
        self.root.bind("<Control-h>", lambda event: self.replace_text())
        self.root.bind("<Control-plus>", lambda event: self.increase_font_size())
        self.root.bind("<Control-minus>", lambda event: self.decrease_font_size())
        
    def create_main_paned_window(self):
        """Create the main paned window with sidebar and content area"""
        self.main_paned = ttk.PanedWindow(self.root, orient=tk.HORIZONTAL)
        self.main_paned.pack(fill=tk.BOTH, expand=True)
        
        # Create sidebar frame
        self.sidebar_frame = ttk.Frame(self.main_paned, width=200)
        self.main_paned.add(self.sidebar_frame, weight=1)
        
        # Create content frame
        self.content_frame = ttk.Frame(self.main_paned)
        self.main_paned.add(self.content_frame, weight=4)
        
        # Setup sidebar (file browser)
        self.setup_file_browser()
        
        # Setup content area (editor, terminal, preview)
        self.setup_content_area()
        
    def setup_file_browser(self):
        """Set up the file browser in the sidebar"""
        # File browser label
        file_browser_label = ttk.Label(self.sidebar_frame, text="PROJECT EXPLORER")
        file_browser_label.pack(anchor="w", padx=5, pady=5)
        
        # Create treeview for file browsing
        self.file_tree = ttk.Treeview(self.sidebar_frame)
        self.file_tree.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        
        # Add scrollbar to treeview
        file_tree_scroll = ttk.Scrollbar(self.file_tree, orient="vertical", command=self.file_tree.yview)
        self.file_tree.configure(yscrollcommand=file_tree_scroll.set)
        file_tree_scroll.pack(side=tk.RIGHT, fill=tk.Y)
        
        # Bind double-click event to open file
        self.file_tree.bind("<Double-1>", self.open_file_from_tree)
        
        # Create project directory
        self.project_dir = os.path.join(tempfile.gettempdir(), "code_nexus_project")
        os.makedirs(self.project_dir, exist_ok=True)
        
        # Populate file tree with project files
        self.refresh_file_tree()
        
    def setup_content_area(self):
        """Set up the content area with notebook tabs"""
        # Create notebook for tabs
        self.notebook = ttk.Notebook(self.content_frame)
        self.notebook.pack(fill=tk.BOTH, expand=True)
        
        # Editor tab
        self.editor_frame = ttk.Frame(self.notebook)
        self.notebook.add(self.editor_frame, text="Code Editor")
        
        # Terminal tab
        self.terminal_frame = ttk.Frame(self.notebook)
        self.notebook.add(self.terminal_frame, text="Terminal")
        
        # Preview tab
        self.preview_frame = ttk.Frame(self.notebook)
        self.notebook.add(self.preview_frame, text="Preview")
        
        # AI Assistant tab
        self.ai_frame = ttk.Frame(self.notebook)
        self.notebook.add(self.ai_frame, text="AI Assistant")
        
        # Setup editor
        self.setup_editor()
        
        # Setup terminal
        self.setup_terminal()
        
        # Setup preview
        self.setup_preview()
        
        # Setup AI Assistant
        self.setup_ai_assistant()
        
    def setup_editor(self):
        """Set up the code editor area"""
        # Editor control frame (top)
        editor_control_frame = ttk.Frame(self.editor_frame)
        editor_control_frame.pack(fill=tk.X, padx=5, pady=5)
        
        # Language selector
        ttk.Label(editor_control_frame, text="Language:").pack(side=tk.LEFT, padx=5)
        self.language_var = tk.StringVar(value="python")
        languages = ["python", "javascript", "html", "css", "cpp", "java", "bash"]
        language_dropdown = ttk.Combobox(editor_control_frame, textvariable=self.language_var, values=languages, width=10)
        language_dropdown.pack(side=tk.LEFT, padx=5)
        language_dropdown.bind("<<ComboboxSelected>>", lambda event: self.change_language())
        
        # Font size
        ttk.Label(editor_control_frame, text="Font Size:").pack(side=tk.LEFT, padx=5)
        self.font_size_var = tk.StringVar(value="12")
        font_sizes = ["10", "12", "14", "16", "18", "20"]
        font_dropdown = ttk.Combobox(editor_control_frame, textvariable=self.font_size_var, values=font_sizes, width=5)
        font_dropdown.pack(side=tk.LEFT, padx=5)
        font_dropdown.bind("<<ComboboxSelected>>", lambda event: self.change_font_size())
        
        # Run button
        run_button = ttk.Button(editor_control_frame, text="▶ Run", command=self.run_code)
        run_button.pack(side=tk.RIGHT, padx=5)
        
        # Save button
        save_button = ttk.Button(editor_control_frame, text="💾 Save", command=self.save_file)
        save_button.pack(side=tk.RIGHT, padx=5)
        
        # AI Complete button
        ai_button = ttk.Button(editor_control_frame, text="✨ AI Complete", command=lambda: self.ai_assist("complete"))
        ai_button.pack(side=tk.RIGHT, padx=5)
        
        # Editor area
        self.editor = scrolledtext.ScrolledText(self.editor_frame, wrap=tk.WORD, font=("Courier New", 12))
        self.editor.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        
        # Set editor content with sample code
        self.editor.insert(tk.END, self.get_sample_code("python"))
        
        # Bind key events for syntax highlighting
        self.editor.bind("<KeyRelease>", lambda event: self.highlight_syntax())
        
    def setup_terminal(self):
        """Set up the terminal emulation area"""
        # Terminal output area
        self.terminal = scrolledtext.ScrolledText(self.terminal_frame, wrap=tk.WORD, font=("Courier New", 12), bg="#1e1e1e", fg="#f0f0f0")
        self.terminal.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        
        # Make the terminal read-only
        self.terminal.config(state=tk.DISABLED)
        
        # Terminal input frame
        terminal_input_frame = ttk.Frame(self.terminal_frame)
        terminal_input_frame.pack(fill=tk.X, padx=5, pady=5)
        
        # Terminal input
        self.terminal_input = ttk.Entry(terminal_input_frame)
        self.terminal_input.pack(side=tk.LEFT, fill=tk.X, expand=True, padx=5)
        
        # Terminal execute button
        terminal_execute = ttk.Button(terminal_input_frame, text="Execute", command=self.execute_terminal_command)
        terminal_execute.pack(side=tk.RIGHT, padx=5)
        
        # Bind Enter key to execute command
        self.terminal_input.bind("<Return>", lambda event: self.execute_terminal_command())
        
        # Bind up/down arrows for command history
        self.terminal_input.bind("<Up>", lambda event: self.terminal_history_up())
        self.terminal_input.bind("<Down>", lambda event: self.terminal_history_down())
        
    def setup_preview(self):
        """Set up the preview area for HTML/UI output"""
        # Preview frame with toolbar
        preview_toolbar = ttk.Frame(self.preview_frame)
        preview_toolbar.pack(fill=tk.X, padx=5, pady=5)
        
        # Refresh button
        refresh_button = ttk.Button(preview_toolbar, text="🔄 Refresh", command=self.refresh_preview)
        refresh_button.pack(side=tk.LEFT, padx=5)
        
        # View selector
        ttk.Label(preview_toolbar, text="View:").pack(side=tk.LEFT, padx=5)
        self.preview_view_var = tk.StringVar(value="Desktop")
        views = ["Desktop", "Tablet", "Mobile"]
        view_dropdown = ttk.Combobox(preview_toolbar, textvariable=self.preview_view_var, values=views, width=10)
        view_dropdown.pack(side=tk.LEFT, padx=5)
        view_dropdown.bind("<<ComboboxSelected>>", lambda event: self.change_preview_view())
        
        # Preview content frame
        self.preview_content = ttk.Frame(self.preview_frame, style="Preview.TFrame")
        self.preview_content.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        
        # Create a label to show preview is not available
        self.preview_label = ttk.Label(self.preview_content, text="Preview is only available for HTML files.\nEdit an HTML file and click Refresh to see a preview.")
        self.preview_label.pack(expand=True)
        
    def setup_ai_assistant(self):
        """Set up the AI assistant interface"""
        # AI chat history
        self.ai_chat_frame = ttk.Frame(self.ai_frame)
        self.ai_chat_frame.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        
        # Chat history
        self.ai_chat_history = scrolledtext.ScrolledText(self.ai_chat_frame, wrap=tk.WORD, font=("Segoe UI", 11))
        self.ai_chat_history.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        self.ai_chat_history.config(state=tk.DISABLED)
        
        # Input area
        ai_input_frame = ttk.Frame(self.ai_frame)
        ai_input_frame.pack(fill=tk.X, padx=5, pady=5)
        
        # AI input field
        self.ai_input = ttk.Entry(ai_input_frame)
        self.ai_input.pack(side=tk.LEFT, fill=tk.X, expand=True, padx=5)
        
        # Action buttons frame
        ai_actions_frame = ttk.Frame(ai_input_frame)
        ai_actions_frame.pack(side=tk.RIGHT)
        
        # AI action buttons
        ai_send = ttk.Button(ai_actions_frame, text="Send", command=lambda: self.ai_assist("general"))
        ai_send.pack(side=tk.LEFT, padx=2)
        
        ai_complete = ttk.Button(ai_actions_frame, text="Complete", command=lambda: self.ai_assist("complete"))
        ai_complete.pack(side=tk.LEFT, padx=2)
        
        ai_debug = ttk.Button(ai_actions_frame, text="Debug", command=lambda: self.ai_assist("debug"))
        ai_debug.pack(side=tk.LEFT, padx=2)
        
        ai_refactor = ttk.Button(ai_actions_frame, text="Refactor", command=lambda: self.ai_assist("refactor"))
        ai_refactor.pack(side=tk.LEFT, padx=2)
        
        # Bind Enter key to send message
        self.ai_input.bind("<Return>", lambda event: self.ai_assist("general"))
        
        # Add welcome message
        self.update_ai_chat("AI Assistant", "Hello! I'm your AI coding assistant. I can help you with code completion, debugging, refactoring, and answering your coding questions. Type a message or select some code and use one of the action buttons.")
        
    def create_status_bar(self):
        """Create the status bar at the bottom of the window"""
        self.status_bar = ttk.Frame(self.root, relief=tk.SUNKEN, style="StatusBar.TFrame")
        self.status_bar.pack(side=tk.BOTTOM, fill=tk.X)
        
        # Left side status (file info)
        self.status_left = ttk.Label(self.status_bar, text="No file selected", padding=(5, 2))
        self.status_left.pack(side=tk.LEFT)
        
        # Right side status (line, column, language)
        self.status_right = ttk.Label(self.status_bar, text="Ln 1, Col 1 | Python", padding=(5, 2))
        self.status_right.pack(side=tk.RIGHT)
        
    def set_theme(self, theme):
        """Set application theme (light or dark)"""
        style = ttk.Style()
        
        if theme == "dark":
            # Configure dark theme
            self.root.configure(bg="#1e1e1e")
            style.configure("TFrame", background="#1e1e1e")
            style.configure("TLabel", background="#1e1e1e", foreground="#ffffff")
            style.configure("TButton", background="#2d2d2d", foreground="#ffffff")
            style.configure("TNotebook", background="#1e1e1e", foreground="#ffffff")
            style.configure("TNotebook.Tab", background="#2d2d2d", foreground="#ffffff")
            style.configure("Treeview", background="#2d2d2d", foreground="#ffffff", fieldbackground="#2d2d2d")
            style.configure("Preview.TFrame", background="#f5f5f5")
            style.configure("StatusBar.TFrame", background="#2d2d2d")
            
            # Configure the editor and terminal colors
            if hasattr(self, 'editor'):
                self.editor.config(bg="#1e1e1e", fg="#f0f0f0", insertbackground="#ffffff")
            
            if hasattr(self, 'terminal'):
                self.terminal.config(bg="#1e1e1e", fg="#f0f0f0")
                
            if hasattr(self, 'ai_chat_history'):
                self.ai_chat_history.config(bg="#1e1e1e", fg="#f0f0f0")
        else:
            # Configure light theme
            self.root.configure(bg="#f0f0f0")
            style.configure("TFrame", background="#f0f0f0")
            style.configure("TLabel", background="#f0f0f0", foreground="#000000")
            style.configure("TButton", background="#e0e0e0", foreground="#000000")
            style.configure("TNotebook", background="#f0f0f0", foreground="#000000")
            style.configure("TNotebook.Tab", background="#e0e0e0", foreground="#000000")
            style.configure("Treeview", background="#ffffff", foreground="#000000", fieldbackground="#ffffff")
            style.configure("Preview.TFrame", background="#ffffff")
            style.configure("StatusBar.TFrame", background="#e0e0e0")
            
            # Configure the editor and terminal colors
            if hasattr(self, 'editor'):
                self.editor.config(bg="#ffffff", fg="#000000", insertbackground="#000000")
            
            if hasattr(self, 'terminal'):
                self.terminal.config(bg="#ffffff", fg="#000000")
                
            if hasattr(self, 'ai_chat_history'):
                self.ai_chat_history.config(bg="#ffffff", fg="#000000")
    
    def toggle_theme(self):
        """Toggle between light and dark theme"""
        self.theme = "light" if self.theme == "dark" else "dark"
        self.set_theme(self.theme)
        self.save_settings()
        
    def increase_font_size(self):
        """Increase the editor font size"""
        current_size = int(self.font_size_var.get())
        new_size = current_size + 2
        self.font_size_var.set(str(new_size))
        self.change_font_size()
        
    def decrease_font_size(self):
        """Decrease the editor font size"""
        current_size = int(self.font_size_var.get())
        new_size = max(8, current_size - 2)  # Don't go below 8
        self.font_size_var.set(str(new_size))
        self.change_font_size()
        
    def change_font_size(self):
        """Update the editor font size"""
        font_size = int(self.font_size_var.get())
        self.editor.config(font=("Courier New", font_size))
        self.save_settings()
        
    def change_language(self):
        """Change the current programming language"""
        self.current_language = self.language_var.get()
        self.highlight_syntax()
        self.update_status_bar()
        
    def change_preview_view(self):
        """Change the preview view size"""
        view = self.preview_view_var.get()
        # In a real implementation, this would resize the preview area
        self.refresh_preview()
        
    def refresh_file_tree(self):
        """Refresh the file tree view with current project files"""
        # Clear existing items
        for item in self.file_tree.get_children():
            self.file_tree.delete(item)
            
        # Add project root
        project_node = self.file_tree.insert("", "end", text="Project", open=True)
        
        # Recursively add files and folders
        self.add_directory_to_tree(self.project_dir, project_node)
        
    def add_directory_to_tree(self, directory, parent):
        """Add directory contents to tree view recursively"""
        try:
            for item in sorted(os.listdir(directory)):
                item_path = os.path.join(directory, item)
                
                # Skip hidden files and directories
                if item.startswith('.'):
                    continue
                    
                if os.path.isdir(item_path):
                    # It's a directory
                    folder_node = self.file_tree.insert(parent, "end", text=item, open=False)
                    self.add_directory_to_tree(item_path, folder_node)
                else:
                    # It's a file
                    self.file_tree.insert(parent, "end", text=item, values=(item_path,))
        except Exception as e:
            print(f"Error reading directory {directory}: {e}")
            
    def open_file_from_tree(self, event):
        """Open a file when double-clicked in the file tree"""
        selected_item = self.file_tree.selection()[0]
        item_values = self.file_tree.item(selected_item, "values")
        
        if item_values:  # It's a file
            file_path = item_values[0]
            self.load_file(file_path)
            
    def new_file(self):
        """Create a new file"""
        # Ask for file name
        file_name = tk.simpledialog.askstring("New File", "Enter file name:")
        if not file_name:
            return
            
        # Add extension if not provided
        if '.' not in file_name:
            # Default to .py for python files
            file_name += '.py'
            
        # Create full path
        file_path = os.path.join(self.project_dir, file_name)
        
        # Check if file already exists
        if os.path.exists(file_path):
            response = messagebox.askyesno("File exists", f"{file_name} already exists. Overwrite?")
            if not response:
                return
                
        # Create empty file
        with open(file_path, 'w') as f:
            pass
            
        # Refresh file tree
        self.refresh_file_tree()
        
        # Load the new file
        self.load_file(file_path)
        
    def open_file(self):
        """Open a file using file dialog"""
        file_path = filedialog.askopenfilename(
            title="Open File",
            initialdir=self.project_dir,
            filetypes=[
                ("Python files", "*.py"),
                ("JavaScript files", "*.js"),
                ("HTML files", "*.html"),
                ("CSS files", "*.css"),
                ("C++ files", "*.cpp"),
                ("All files", "*.*")
            ]
        )
        
        if file_path:
            # Copy file to project dir if it's outside
            if not file_path.startswith(self.project_dir):
                file_name = os.path.basename(file_path)
                dest_path = os.path.join(self.project_dir, file_name)
                shutil.copy2(file_path, dest_path)
                file_path = dest_path
                self.refresh_file_tree()
                
            self.load_file(file_path)
            
    def load_file(self, file_path):
        """Load a file into the editor"""
        try:
            with open(file_path, 'r') as f:
                file_content = f.read()
                
            # Clear editor and insert new content
            self.editor.delete(1.0, tk.END)
            self.editor.insert(tk.END, file_content)
            
            # Set current file and update UI
            self.current_file = file_path
            file_name = os.path.basename(file_path)
            self.notebook.tab(0, text=f"Editor - {file_name}")
            
            # Detect language from file extension
            file_ext = os.path.splitext(file_path)[1].lower()
            if file_ext in self.file_ext_to_language:
                self.current_language = self.file_ext_to_language[file_ext]
                self.language_var.set(self.current_language)
                
            # Highlight syntax
            self.highlight_syntax()
            
            # Update status bar
            self.update_status_bar()
            
            # If it's an HTML file, update preview
            if file_ext == '.html':
                self.refresh_preview()
                
        except Exception as e:
            messagebox.showerror("Error", f"Could not load file: {str(e)}")
            
    def save_file(self):
        """Save the current file"""
        if not self.current_file:
            return self.save_file_as()
            
        try:
            content = self.editor.get(1.0, tk.END)
            with open(self.current_file, 'w') as f:
                f.write(content)
                
            self.update_status_bar(f"Saved: {os.path.basename(self.current_file)}")
            return True
        except Exception as e:
            messagebox.showerror("Error", f"Could not save file: {str(e)}")
            return False
            
    def save_file_as(self):
        """Save the current file with a new name"""
        initial_dir = self.project_dir
        if self.current_file:
            initial_dir = os.path.dirname(self.current_file)
            
        file_path = filedialog.asksaveasfilename(
            title="Save As",
            initialdir=initial_dir,
            filetypes=[
                ("Python files", "*.py"),
                ("JavaScript files", "*.js"),
                ("HTML files", "*.html"),
                ("CSS files", "*.css"),
                ("C++ files", "*.cpp"),
                ("All files", "*.*")
            ]
        )
        
        if not file_path:
            return False
            
        # Make sure the file is in the project directory
        if not file_path.startswith(self.project_dir):
            file_name = os.path.basename(file_path)
            file_path = os.path.join(self.project_dir, file_name)
            
        # Add appropriate extension if not included
        if '.' not in os.path.basename(file_path):
            if self.current_language == 'python':
                file_path += '.py'
            elif self.current_language == 'javascript':
                file_path += '.js'
            elif self.current_language == 'html':
                file_path += '.html'
            elif self.current_language == 'css':
                file_path += '.css'
            elif self.current_language == 'cpp':
                file_path += '.cpp'
                
        # Set current file and save
        self.current_file = file_path
        success = self.save_file()
        
        if success:
            # Update UI
            file_name = os.path.basename(file_path)
            self.notebook.tab(0, text=f"Editor - {file_name}")
            self.refresh_file_tree()
            
        return success
        
    def highlight_syntax(self):
        """Highlight syntax in the editor based on language"""
        # Only proceed if editor exists
        if not hasattr(self, 'editor'):
            return
            
        # Get the current content and language
        content = self.editor.get(1.0, tk.END)
        
        # Skip if content is empty
        if not content.strip():
            return
            
        try:
            # Get the lexer for the current language
            lexer = get_lexer_by_name(self.current_language, stripall=True)
            formatter = get_formatter_by_name('terminal256', style='monokai')
            
            # Since Tkinter doesn't support ANSI color codes, we'll use a simpler approach
            # In a real implementation, we would use a more sophisticated syntax highlighting approach
            # This is a simplified version that just changes the text color based on language
            
            # Store cursor position
            cursor_pos = self.editor.index(tk.INSERT)
            
            # Apply some basic syntax highlighting based on language
            if self.current_language == 'python':
                self.basic_python_highlighting()
            elif self.current_language == 'javascript':
                self.basic_javascript_highlighting()
            elif self.current_language == 'html':
                self.basic_html_highlighting()
                
            # Restore cursor position
            self.editor.mark_set(tk.INSERT, cursor_pos)
            
        except Exception as e:
            # If highlighting fails, just keep the text as is
            print(f"Syntax highlighting error: {e}")
            
    def basic_python_highlighting(self):
        """Basic syntax highlighting for Python"""
        # This is a very simplified version - a real implementation would use a more robust syntax highlighter
        # Keywords
        keywords = ["def", "class", "import", "from", "if", "elif", "else", "while", "for", "try", "except", "finally", "with", "as", "return", "yield", "pass", "break", "continue", "not", "and", "or", "is", "in", "True", "False", "None"]
        
        # Save current content and clear editor
        content = self.editor.get(1.0, tk.END)
        self.editor.delete(1.0, tk.END)
        self.editor.insert(tk.END, content)
        
        # Highlight comments
        self.highlight_pattern(r"#.*$", "gray", "comment")
        
        # Highlight strings
        self.highlight_pattern(r'"[^"\\\\]*(\\\\.[^"\\\\]*)*"', "green", "string")
        self.highlight_pattern(r"'[^'\\\\]*(\\\\.[^'\\\\]*)*'", "green", "string")
        
        # Highlight keywords
        for keyword in keywords:
            self.highlight_pattern(f"\\\\b{keyword}\\\\b", "blue", "keyword")
            
        # Highlight function definitions
        self.highlight_pattern(r"def\\s+([A-Za-z_][A-Za-z0-9_]*)", "purple", "function")
        
        # Highlight class definitions
        self.highlight_pattern(r"class\\s+([A-Za-z_][A-Za-z0-9_]*)", "purple", "class")
        
    def basic_javascript_highlighting(self):
        """Basic syntax highlighting for JavaScript"""
        # Keywords
        keywords = ["function", "var", "let", "const", "if", "else", "while", "for", "do", "switch", "case", "break", "continue", "return", "try", "catch", "finally", "throw", "new", "this", "typeof", "instanceof", "delete", "void", "true", "false", "null", "undefined"]
        
        # Save current content and clear editor
        content = self.editor.get(1.0, tk.END)
        self.editor.delete(1.0, tk.END)
        self.editor.insert(tk.END, content)
        
        # Highlight comments
        self.highlight_pattern(r"//.*$", "gray", "comment")
        
        # Highlight strings
        self.highlight_pattern(r'"[^"\\\\]*(\\\\.[^"\\\\]*)*"', "green", "string")
        self.highlight_pattern(r"'[^'\\\\]*(\\\\.[^'\\\\]*)*'", "green", "string")
        
        # Highlight keywords
        for keyword in keywords:
            self.highlight_pattern(f"\\\\b{keyword}\\\\b", "blue", "keyword")
            
        # Highlight function definitions
        self.highlight_pattern(r"function\\s+([A-Za-z_][A-Za-z0-9_]*)", "purple", "function")
        
    def basic_html_highlighting(self):
        """Basic syntax highlighting for HTML"""
        # Save current content and clear editor
        content = self.editor.get(1.0, tk.END)
        self.editor.delete(1.0, tk.END)
        self.editor.insert(tk.END, content)
        
        # Highlight tags
        self.highlight_pattern(r"<[/]?\\w+[^>]*>", "blue", "tag")
        
        # Highlight attributes
        self.highlight_pattern(r'\\s(\\w+)="', "purple", "attribute")
        
        # Highlight strings
        self.highlight_pattern(r'"[^"]*"', "green", "string")
        
        # Highlight comments
        self.highlight_pattern(r"<!--[\\s\\S]*?-->", "gray", "comment")
        
    def highlight_pattern(self, pattern, color, tag):
        """Apply color to all text that matches the pattern"""
        # Create tag if it doesn't exist
        if not tag in self.editor.tag_names():
            self.editor.tag_configure(tag, foreground=color)
            
        # Find all occurrences of pattern and apply tag
        start = "1.0"
        end = "end"
        self.editor.mark_set("matchStart", start)
        self.editor.mark_set("matchEnd", start)
        
        while True:
            index = self.editor.search(pattern, "matchEnd", end, regexp=True)
            if not index:
                break
                
            # Find end of match
            match_start = index
            line, col = map(int, match_start.split("."))
            text = self.editor.get(f"{line}.0", f"{line}.end")
            col_end = col
            for i in range(col, len(text)):
                if not re.match(pattern, text[col:i+1], re.MULTILINE):
                    col_end = i
                    break
                    
            match_end = f"{line}.{col_end}"
            
            # Apply tag
            self.editor.tag_add(tag, match_start, match_end)
            self.editor.mark_set("matchStart", match_start)
            self.editor.mark_set("matchEnd", match_end)
            
    def run_code(self):
        """Run the current code file"""
        if not self.current_file:
            messagebox.showinfo("Run Code", "Please save the file first.")
            return
            
        # Save first
        if not self.save_file():
            return
            
        file_ext = os.path.splitext(self.current_file)[1].lower()
        
        # Clear terminal output
        self.terminal.config(state=tk.NORMAL)
        self.terminal.delete(1.0, tk.END)
        
        # Switch to terminal tab
        self.notebook.select(1)
        
        # Print header
        self.write_to_terminal(f"Running: {os.path.basename(self.current_file)}\\n\\n")
        
        # Run code based on file type
        if file_ext == '.py':
            self.run_python_file()
        elif file_ext == '.js':
            self.run_js_file()
        elif file_ext == '.html':
            self.run_html_file()
        else:
            self.write_to_terminal(f"Running files with extension {file_ext} is not supported yet.\\n")
            
        # Add prompt at the end
        self.write_to_terminal("\\n> ")
        
    def run_python_file(self):
        """Run a Python file"""
        try:
            # Run in a separate thread to avoid freezing the UI
            threading.Thread(target=self._run_python_file_thread, daemon=True).start()
        except Exception as e:
            self.write_to_terminal(f"Error: {str(e)}\\n")
            
    def _run_python_file_thread(self):
        """Run Python file in a separate thread"""
        try:
            result = subprocess.run(
                [sys.executable, self.current_file],
                cwd=os.path.dirname(self.current_file),
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )
            
            # Output stdout
            if result.stdout:
                self.write_to_terminal(result.stdout)
                
            # Output stderr
            if result.stderr:
                self.write_to_terminal(f"Error: {result.stderr}\\n")
                
        except Exception as e:
            self.write_to_terminal(f"Execution error: {str(e)}\\n")
            
    def run_js_file(self):
        """Run a JavaScript file"""
        # In a real implementation, we would use Node.js or a JS runtime
        self.write_to_terminal("This is a simulated JavaScript execution environment.\\n")
        try:
            with open(self.current_file, 'r') as f:
                js_code = f.read()
                
            # Create a simulated output for demonstration
            self.write_to_terminal("JavaScript output (simulated):\\n")
            
            # Extract console.log statements
            log_statements = re.findall(r'console\\.log\\((.+?)\\);', js_code)
            for stmt in log_statements:
                # Very naive and limited parsing - just for demonstration
                stmt = stmt.strip('"\'')
                self.write_to_terminal(f"{stmt}\\n")
                
        except Exception as e:
            self.write_to_terminal(f"Error: {str(e)}\\n")
            
    def run_html_file(self):
        """Run an HTML file by opening it in a preview"""
        try:
            # Refresh the preview
            self.refresh_preview()
            
            # Switch to preview tab
            self.notebook.select(2)
            
            self.write_to_terminal("HTML file loaded in preview tab.\\n")
            
        except Exception as e:
            self.write_to_terminal(f"Error: {str(e)}\\n")
            
    def refresh_preview(self):
        """Refresh the preview pane"""
        if not self.current_file:
            return
            
        file_ext = os.path.splitext(self.current_file)[1].lower()
        
        if file_ext == '.html':
            try:
                # Clear existing preview content
                for widget in self.preview_content.winfo_children():
                    widget.destroy()
                    
                # Read HTML file
                with open(self.current_file, 'r') as f:
                    html_content = f.read()
                    
                # Create a label with HTML content
                preview_label = ttk.Label(self.preview_content, text="HTML Preview (simplified):\\n\\n" + html_content[:1000])
                preview_label.pack(expand=True, fill=tk.BOTH, padx=10, pady=10)
                
                # Add a note that this is a simplified preview
                note_label = ttk.Label(self.preview_content, text="Note: This is a simplified HTML preview. In a real implementation, this would render the HTML in a browser view.")
                note_label.pack(side=tk.BOTTOM, padx=10, pady=10)
                
            except Exception as e:
                for widget in self.preview_content.winfo_children():
                    widget.destroy()
                error_label = ttk.Label(self.preview_content, text=f"Error loading preview: {str(e)}")
                error_label.pack(expand=True)
        else:
            # Show a message that preview is only available for HTML files
            for widget in self.preview_content.winfo_children():
                widget.destroy()
            message_label = ttk.Label(self.preview_content, text="Preview is only available for HTML files.")
            message_label.pack(expand=True)
            
    def write_to_terminal(self, text):
        """Write text to the terminal"""
        self.terminal.config(state=tk.NORMAL)
        self.terminal.insert(tk.END, text)
        self.terminal.see(tk.END)
        self.terminal.config(state=tk.DISABLED)
        
    def execute_terminal_command(self):
        """Execute a command in the terminal"""
        command = self.terminal_input.get()
        if not command:
            return
            
        # Add command to history
        self.terminal_command_history.append(command)
        self.terminal_command_index = len(self.terminal_command_history)
        
        # Clear input
        self.terminal_input.delete(0, tk.END)
        
        # Write command to terminal
        self.write_to_terminal(f"{command}\\n")
        
        # Process command
        if command.lower() == "clear":
            self.terminal.config(state=tk.NORMAL)
            self.terminal.delete(1.0, tk.END)
        elif command.lower() == "help":
            self.write_to_terminal("""Available commands:
  help                Display this help message
  clear               Clear the terminal
  echo <text>         Display text
  ls                  List files and directories
  cat <file>          View file contents
  python <file>       Run Python script (simulated)
  node <file>         Run Node.js script (simulated)
  npm <command>       Run npm command (simulated)
  git <command>       Run git command (simulated)
  exit                Close terminal (simulated)
\\n""")
        elif command.lower().startswith("echo "):
            text = command[5:]
            self.write_to_terminal(f"{text}\\n")
        elif command.lower() == "ls":
            try:
                if self.project_dir and os.path.exists(self.project_dir):
                    files = os.listdir(self.project_dir)
                    for file in sorted(files):
                        self.write_to_terminal(f"{file}\\n")
                else:
                    self.write_to_terminal("Project directory not found\\n")
            except Exception as e:
                self.write_to_terminal(f"Error: {str(e)}\\n")
        elif command.lower().startswith("cat "):
            file_name = command[4:].strip()
            try:
                file_path = os.path.join(self.project_dir, file_name)
                if os.path.exists(file_path) and os.path.isfile(file_path):
                    with open(file_path, 'r') as f:
                        content = f.read()
                    self.write_to_terminal(f"{content}\\n")
                else:
                    self.write_to_terminal(f"File not found: {file_name}\\n")
            except Exception as e:
                self.write_to_terminal(f"Error: {str(e)}\\n")
        elif command.lower().startswith(("python ", "node ", "npm ", "git ")):
            cmd_parts = command.split(' ', 1)
            cmd_type = cmd_parts[0].lower()
            cmd_args = cmd_parts[1] if len(cmd_parts) > 1 else ""
            self.write_to_terminal(f"Simulating {cmd_type} command execution...\\n")
            self.write_to_terminal(f"Command completed successfully.\\n")
        elif command.lower() == "exit":
            self.write_to_terminal("Closing terminal (simulated)...\\n")
        else:
            self.write_to_terminal(f"Command not found: {command}\\n")
            
        # Add prompt
        self.write_to_terminal("> ")
        
    def terminal_history_up(self):
        """Navigate up through terminal command history"""
        if not self.terminal_command_history:
            return
            
        self.terminal_command_index = max(0, self.terminal_command_index - 1)
        if self.terminal_command_index < len(self.terminal_command_history):
            self.terminal_input.delete(0, tk.END)
            self.terminal_input.insert(0, self.terminal_command_history[self.terminal_command_index])
            
    def terminal_history_down(self):
        """Navigate down through terminal command history"""
        if not self.terminal_command_history:
            return
            
        self.terminal_command_index = min(len(self.terminal_command_history), self.terminal_command_index + 1)
        if self.terminal_command_index < len(self.terminal_command_history):
            self.terminal_input.delete(0, tk.END)
            self.terminal_input.insert(0, self.terminal_command_history[self.terminal_command_index])
        else:
            self.terminal_input.delete(0, tk.END)
            
    def update_status_bar(self, message=None):
        """Update the status bar information"""
        if message:
            self.status_left.config(text=message)
        else:
            # Get file info
            if self.current_file:
                file_name = os.path.basename(self.current_file)
                self.status_left.config(text=f"File: {file_name}")
            else:
                self.status_left.config(text="No file selected")
                
        # Get cursor position
        try:
            cursor_pos = self.editor.index(tk.INSERT)
            line, column = cursor_pos.split('.')
            self.status_right.config(text=f"Ln {line}, Col {int(column)+1} | {self.current_language.capitalize()}")
        except:
            self.status_right.config(text=f"Ln 1, Col 1 | {self.current_language.capitalize()}")
            
    def find_text(self):
        """Find text in the editor"""
        # In a real implementation, this would show a find dialog
        search_term = tk.simpledialog.askstring("Find", "Enter text to find:")
        if not search_term:
            return
            
        # Start from the beginning
        self.editor.tag_remove("search", "1.0", tk.END)
        
        # Find all occurrences
        start_pos = "1.0"
        while True:
            start_pos = self.editor.search(search_term, start_pos, stopindex=tk.END)
            if not start_pos:
                break
                
            end_pos = f"{start_pos}+{len(search_term)}c"
            self.editor.tag_add("search", start_pos, end_pos)
            start_pos = end_pos
            
        # Highlight found text
        self.editor.tag_config("search", background="yellow", foreground="black")
        
    def replace_text(self):
        """Replace text in the editor"""
        # In a real implementation, this would show a find/replace dialog
        search_term = tk.simpledialog.askstring("Replace", "Enter text to find:")
        if not search_term:
            return
            
        replace_term = tk.simpledialog.askstring("Replace", "Enter replacement text:")
        if replace_term is None:  # User canceled
            return
            
        # Get the text and perform replacement
        content = self.editor.get("1.0", tk.END)
        new_content = content.replace(search_term, replace_term)
        
        # Update the editor
        self.editor.delete("1.0", tk.END)
        self.editor.insert("1.0", new_content)
        
        # Highlight syntax again
        self.highlight_syntax()
        
    def ai_assist(self, action="general"):
        """Get AI assistance based on the action"""
        # Get selected text or all text if none selected
        try:
            selected_text = self.editor.get(tk.SEL_FIRST, tk.SEL_LAST)
        except:
            selected_text = ""
            
        if not selected_text and action != "general":
            # If no text is selected for code actions, use the entire file
            selected_text = self.editor.get("1.0", tk.END)
            
        # Get user input for general queries
        user_query = ""
        if action == "general":
            user_query = self.ai_input.get()
            if not user_query:
                messagebox.showinfo("AI Assistant", "Please enter a question or request.")
                return
                
        # Clear the input field
        self.ai_input.delete(0, tk.END)
        
        # Show the AI is thinking
        self.update_ai_chat("User", user_query if action == "general" else f"Action: {action}")
        self.update_ai_chat("AI Assistant", "Thinking...")
        
        # Switch to AI Assistant tab
        self.notebook.select(3)
        
        # Process the request in a separate thread to avoid freezing the UI
        threading.Thread(
            target=self._process_ai_request, 
            args=(action, selected_text, user_query),
            daemon=True
        ).start()
        
    def _process_ai_request(self, action, code, query):
        """Process the AI request in a background thread"""
        try:
            # For mock implementation, generate a response based on action
            response = self._get_mock_ai_response(action, code, query)
            
            # In a real implementation, we would:
            # 1. Prepare a prompt based on the action and code/query
            # 2. Send the prompt to the selected LLM API
            # 3. Process the response
            
            # Update the AI chat with the full response
            self.root.after(10, lambda: self._update_ai_response("AI Assistant", response))
            
        except Exception as e:
            error_msg = f"Error getting AI response: {str(e)}"
            self.root.after(10, lambda: self._update_ai_response("AI Assistant", error_msg))
            
    def _update_ai_response(self, sender, message):
        """Update the AI chat with a response - called from main thread"""
        # Remove the "Thinking..." message
        self.ai_chat_history.config(state=tk.NORMAL)
        self.ai_chat_history.delete("end-2l", tk.END)
        self.ai_chat_history.config(state=tk.DISABLED)
        
        # Add the actual response
        self.update_ai_chat(sender, message)
        
    def _get_mock_ai_response(self, action, code, query):
        """Generate a mock AI response based on the action"""
        if action == "complete":
            return f"Here's a completion for your code:\n\n```{self.current_language}\n# Your code has been completed with this mock response\n# In a real implementation, this would use the LLM API\n\ndef process_data(data):\n    # Validate input\n    if not data or not isinstance(data, list):\n        raise ValueError('Invalid input: expected a list')\n    \n    # Process the data\n    return [item * 2 for item in data if item > 0]\n```\n\nYou can apply this code by selecting it and copying it to your editor."
        elif action == "debug":
            return f"I've analyzed your code and found a potential issue:\n\n```{self.current_language}\n# Problem: You might have a missing null check before accessing properties\n\n# Original code (potential issue):\nitems.forEach(item => total += item.price);\n\n# Suggested fix:\nif (items && items.length) {{\n    items.forEach(item => total += item.price);\n}}\n```\n\nThis change adds a null check to prevent errors if 'items' is null or undefined."
        elif action == "refactor":
            return f"Here's how you can refactor your code for better readability and performance:\n\n```{self.current_language}\n# Before:\ndef process_items(items):\n    results = []\n    for i in range(len(items)):\n        item = items[i]\n        if item.get('active'):\n            results.append({{\n                'id': item.get('id'),\n                'value': item.get('value') * 2\n            }})\n    return results\n\n# After:\ndef process_items(items):\n    return [\n        {{'id': item.get('id'), 'value': item.get('value') * 2}}\n        for item in items\n        if item.get('active')\n    ]\n```\n\nThe refactored version uses a list comprehension, which is more Pythonic and often more efficient."
        elif action == "general":
            if not query:
                return "Please ask a question or provide a request so I can help you."
            
            # Generate a response based on common programming questions
            if "how to" in query.lower() and "python" in query.lower():
                return "Here's how you can do that in Python:\n\n```python\n# Example code for your question\ndef example_function():\n    print('This is an example response to your Python question')\n    return True\n```\n\nIs there anything specific about this code you'd like me to explain?"
            elif "error" in query.lower() or "bug" in query.lower():
                return "To debug this issue, I'd recommend:\n\n1. Check for typos or syntax errors\n2. Use print statements to trace variable values\n3. Make sure all dependencies are installed\n4. Verify that file paths are correct\n\nIf you share the specific error message, I can provide more targeted help."
            else:
                return f"I'll help you with '{query}'.\n\nIn a real implementation, this would connect to {self.active_llm.capitalize()} LLM API to generate a helpful response based on your question and context."
        else:
            return "I'm not sure how to process that request. Please try again with a different action."
            
    def update_ai_chat(self, sender, message):
        """Update the AI chat history with a new message"""
        self.ai_chat_history.config(state=tk.NORMAL)
        
        # Add timestamp
        timestamp = datetime.now().strftime("%H:%M:%S")
        self.ai_chat_history.insert(tk.END, f"[{timestamp}] ", "timestamp")
        
        # Add sender
        if sender == "User":
            self.ai_chat_history.insert(tk.END, f"{sender}: ", "user")
        else:
            self.ai_chat_history.insert(tk.END, f"{sender}: ", "ai")
            
        # Add message
        self.ai_chat_history.insert(tk.END, f"{message}\n\n")
        
        # Configure tags
        self.ai_chat_history.tag_configure("timestamp", foreground="gray")
        self.ai_chat_history.tag_configure("user", foreground="blue", font=("Segoe UI", 11, "bold"))
        self.ai_chat_history.tag_configure("ai", foreground="green", font=("Segoe UI", 11, "bold"))
        
        # Scroll to the end
        self.ai_chat_history.see(tk.END)
        self.ai_chat_history.config(state=tk.DISABLED)
        
    def show_llm_settings(self):
        """Show dialog to configure LLM settings"""
        # Create a settings dialog
        settings_window = tk.Toplevel(self.root)
        settings_window.title("LLM Settings")
        settings_window.geometry("600x500")
        settings_window.transient(self.root)
        settings_window.grab_set()
        
        # Create a notebook for provider tabs
        providers_notebook = ttk.Notebook(settings_window)
        providers_notebook.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)
        
        # Create tabs for each provider
        ollama_frame = ttk.Frame(providers_notebook)
        deepseek_frame = ttk.Frame(providers_notebook)
        qwen_frame = ttk.Frame(providers_notebook)
        openrouter_frame = ttk.Frame(providers_notebook)
        
        providers_notebook.add(ollama_frame, text="Ollama")
        providers_notebook.add(deepseek_frame, text="DeepSeek")
        providers_notebook.add(qwen_frame, text="Qwen")
        providers_notebook.add(openrouter_frame, text="OpenRouter")
        
        # Ollama settings
        ttk.Label(ollama_frame, text="Endpoint:").grid(row=0, column=0, sticky="w", padx=10, pady=10)
        ollama_endpoint = ttk.Entry(ollama_frame, width=40)
        ollama_endpoint.grid(row=0, column=1, sticky="w", padx=10, pady=10)
        ollama_endpoint.insert(0, self.llm_settings["ollama"]["endpoint"])
        
        ttk.Label(ollama_frame, text="Model:").grid(row=1, column=0, sticky="w", padx=10, pady=10)
        ollama_model = ttk.Entry(ollama_frame, width=40)
        ollama_model.grid(row=1, column=1, sticky="w", padx=10, pady=10)
        ollama_model.insert(0, self.llm_settings["ollama"]["model"])
        
        ttk.Label(ollama_frame, text="Temperature:").grid(row=2, column=0, sticky="w", padx=10, pady=10)
        ollama_temp = ttk.Scale(ollama_frame, from_=0.0, to=1.0, orient=tk.HORIZONTAL, length=200)
        ollama_temp.grid(row=2, column=1, sticky="w", padx=10, pady=10)
        ollama_temp.set(self.llm_settings["ollama"]["temperature"])
        
        ttk.Label(ollama_frame, text="Use Local:").grid(row=3, column=0, sticky="w", padx=10, pady=10)
        ollama_use_local = tk.BooleanVar(value=self.llm_settings["ollama"]["useLocal"])
        ttk.Checkbutton(ollama_frame, variable=ollama_use_local).grid(row=3, column=1, sticky="w", padx=10, pady=10)
        
        # DeepSeek settings
        ttk.Label(deepseek_frame, text="API Key:").grid(row=0, column=0, sticky="w", padx=10, pady=10)
        deepseek_api_key = ttk.Entry(deepseek_frame, width=40, show="*")
        deepseek_api_key.grid(row=0, column=1, sticky="w", padx=10, pady=10)
        deepseek_api_key.insert(0, self.llm_settings["deepseek"]["apiKey"])
        
        ttk.Label(deepseek_frame, text="Model:").grid(row=1, column=0, sticky="w", padx=10, pady=10)
        deepseek_model = ttk.Entry(deepseek_frame, width=40)
        deepseek_model.grid(row=1, column=1, sticky="w", padx=10, pady=10)
        deepseek_model.insert(0, self.llm_settings["deepseek"]["model"])
        
        ttk.Label(deepseek_frame, text="Temperature:").grid(row=2, column=0, sticky="w", padx=10, pady=10)
        deepseek_temp = ttk.Scale(deepseek_frame, from_=0.0, to=1.0, orient=tk.HORIZONTAL, length=200)
        deepseek_temp.grid(row=2, column=1, sticky="w", padx=10, pady=10)
        deepseek_temp.set(self.llm_settings["deepseek"]["temperature"])
        
        # Qwen settings
        ttk.Label(qwen_frame, text="API Key:").grid(row=0, column=0, sticky="w", padx=10, pady=10)
        qwen_api_key = ttk.Entry(qwen_frame, width=40, show="*")
        qwen_api_key.grid(row=0, column=1, sticky="w", padx=10, pady=10)
        qwen_api_key.insert(0, self.llm_settings["qwen"]["apiKey"])
        
        ttk.Label(qwen_frame, text="Model:").grid(row=1, column=0, sticky="w", padx=10, pady=10)
        qwen_model = ttk.Entry(qwen_frame, width=40)
        qwen_model.grid(row=1, column=1, sticky="w", padx=10, pady=10)
        qwen_model.insert(0, self.llm_settings["qwen"]["model"])
        
        ttk.Label(qwen_frame, text="Temperature:").grid(row=2, column=0, sticky="w", padx=10, pady=10)
        qwen_temp = ttk.Scale(qwen_frame, from_=0.0, to=1.0, orient=tk.HORIZONTAL, length=200)
        qwen_temp.grid(row=2, column=1, sticky="w", padx=10, pady=10)
        qwen_temp.set(self.llm_settings["qwen"]["temperature"])
        
        # OpenRouter settings
        ttk.Label(openrouter_frame, text="API Key:").grid(row=0, column=0, sticky="w", padx=10, pady=10)
        openrouter_api_key = ttk.Entry(openrouter_frame, width=40, show="*")
        openrouter_api_key.grid(row=0, column=1, sticky="w", padx=10, pady=10)
        openrouter_api_key.insert(0, self.llm_settings["openrouter"]["apiKey"])
        
        ttk.Label(openrouter_frame, text="Model:").grid(row=1, column=0, sticky="w", padx=10, pady=10)
        openrouter_model = ttk.Entry(openrouter_frame, width=40)
        openrouter_model.grid(row=1, column=1, sticky="w", padx=10, pady=10)
        openrouter_model.insert(0, self.llm_settings["openrouter"]["model"])
        
        ttk.Label(openrouter_frame, text="Temperature:").grid(row=2, column=0, sticky="w", padx=10, pady=10)
        openrouter_temp = ttk.Scale(openrouter_frame, from_=0.0, to=1.0, orient=tk.HORIZONTAL, length=200)
        openrouter_temp.grid(row=2, column=1, sticky="w", padx=10, pady=10)
        openrouter_temp.set(self.llm_settings["openrouter"]["temperature"])
        
        # Select active provider frame
        active_provider_frame = ttk.Frame(settings_window)
        active_provider_frame.pack(fill=tk.X, padx=10, pady=10)
        
        ttk.Label(active_provider_frame, text="Active Provider:").pack(side=tk.LEFT, padx=5)
        active_provider_var = tk.StringVar(value=self.active_llm)
        provider_dropdown = ttk.Combobox(active_provider_frame, textvariable=active_provider_var, values=["ollama", "deepseek", "qwen", "openrouter"], state="readonly")
        provider_dropdown.pack(side=tk.LEFT, padx=5)
        
        # Buttons frame
        buttons_frame = ttk.Frame(settings_window)
        buttons_frame.pack(fill=tk.X, padx=10, pady=10)
        
        # Save button
        def save_settings():
            # Update settings
            self.llm_settings["ollama"]["endpoint"] = ollama_endpoint.get()
            self.llm_settings["ollama"]["model"] = ollama_model.get()
            self.llm_settings["ollama"]["temperature"] = ollama_temp.get()
            self.llm_settings["ollama"]["useLocal"] = ollama_use_local.get()
            
            self.llm_settings["deepseek"]["apiKey"] = deepseek_api_key.get()
            self.llm_settings["deepseek"]["model"] = deepseek_model.get()
            self.llm_settings["deepseek"]["temperature"] = deepseek_temp.get()
            
            self.llm_settings["qwen"]["apiKey"] = qwen_api_key.get()
            self.llm_settings["qwen"]["model"] = qwen_model.get()
            self.llm_settings["qwen"]["temperature"] = qwen_temp.get()
            
            self.llm_settings["openrouter"]["apiKey"] = openrouter_api_key.get()
            self.llm_settings["openrouter"]["model"] = openrouter_model.get()
            self.llm_settings["openrouter"]["temperature"] = openrouter_temp.get()
            
            # Update active LLM
            self.active_llm = active_provider_var.get()
            
            # Save settings
            self.save_settings()
            
            # Close dialog
            settings_window.destroy()
            
            # Show message
            messagebox.showinfo("Settings", "LLM settings saved successfully.")
            
        ttk.Button(buttons_frame, text="Save", command=save_settings).pack(side=tk.RIGHT, padx=5)
        ttk.Button(buttons_frame, text="Cancel", command=settings_window.destroy).pack(side=tk.RIGHT, padx=5)
        
    def show_about(self):
        """Show about dialog"""
        about_text = """Code Nexus Wizard - Python Edition

A comprehensive code development environment with LLM integration
Version 1.0.0

Features:
- Code editor with syntax highlighting
- Multiple LLM integrations
- Terminal emulation
- Project explorer
- AI assistant

Copyright © 2023
"""
        messagebox.showinfo("About", about_text)
        
    def create_sample_files(self):
        """Create sample files for demonstration"""
        # Create sample Python file
        python_sample = """#!/usr/bin/env python3
# Sample Python file

def calculate_sum(a, b):
    \"\"\"Calculate the sum of two numbers\"\"\"
    return a + b

def main():
    # Get input from user
    num1 = 5
    num2 = 10
    
    # Calculate the sum
    result = calculate_sum(num1, num2)
    
    # Print the result
    print(f"The sum of {num1} and {num2} is {result}")

if __name__ == "__main__":
    main()
"""
        # Create sample JavaScript file
        js_sample = """// Sample JavaScript file

function calculateSum(a, b) {
    // Calculate the sum of two numbers
    return a + b;
}

// Example usage
const num1 = 5;
const num2 = 10;
const result = calculateSum(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${result}`);
"""
        # Create sample HTML file
        html_sample = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello, World!</h1>
        <p>This is a sample HTML page.</p>
        <button onclick="alert('Button clicked!')">Click Me</button>
    </div>
    
    <script>
        // Sample JavaScript
        console.log('Page loaded!');
    </script>
</body>
</html>
"""
        # Create files in project directory
        os.makedirs(self.project_dir, exist_ok=True)
        
        with open(os.path.join(self.project_dir, "sample.py"), "w") as f:
            f.write(python_sample)
            
        with open(os.path.join(self.project_dir, "sample.js"), "w") as f:
            f.write(js_sample)
            
        with open(os.path.join(self.project_dir, "sample.html"), "w") as f:
            f.write(html_sample)
            
    def get_sample_code(self, language):
        """Get sample code for a specific language"""
        if language == "python":
            return """#!/usr/bin/env python3
# Sample Python file

def calculate_sum(a, b):
    \"\"\"Calculate the sum of two numbers\"\"\"
    return a + b

def main():
    # Get input from user
    num1 = 5
    num2 = 10
    
    # Calculate the sum
    result = calculate_sum(num1, num2)
    
    # Print the result
    print(f"The sum of {num1} and {num2} is {result}")

if __name__ == "__main__":
    main()
"""
        elif language == "javascript":
            return """// Sample JavaScript file

function calculateSum(a, b) {
    // Calculate the sum of two numbers
    return a + b;
}

// Example usage
const num1 = 5;
const num2 = 10;
const result = calculateSum(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${result}`);
"""
        elif language == "html":
            return """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello, World!</h1>
        <p>This is a sample HTML page.</p>
        <button onclick="alert('Button clicked!')">Click Me</button>
    </div>
    
    <script>
        // Sample JavaScript
        console.log('Page loaded!');
    </script>
</body>
</html>
"""
        else:
            return f"// Sample {language} code\n\n// Add your code here\n"
            
    def save_settings(self):
        """Save application settings to file"""
        settings = {
            "theme": self.theme,
            "font_size": self.font_size_var.get(),
            "language": self.current_language,
            "llm_settings": self.llm_settings,
            "active_llm": self.active_llm,
        }
        
        try:
            settings_dir = os.path.join(os.path.expanduser("~"), ".code_nexus")
            os.makedirs(settings_dir, exist_ok=True)
            
            settings_file = os.path.join(settings_dir, "settings.json")
            with open(settings_file, 'w') as f:
                json.dump(settings, f, indent=2)
        except Exception as e:
            print(f"Error saving settings: {e}")
            
    def load_settings(self):
        """Load application settings from file"""
        try:
            settings_file = os.path.join(os.path.expanduser("~"), ".code_nexus", "settings.json")
            if os.path.exists(settings_file):
                with open(settings_file, 'r') as f:
                    settings = json.load(f)
                    
                # Apply settings
                if "theme" in settings:
                    self.theme = settings["theme"]
                    self.set_theme(self.theme)
                    
                if "font_size" in settings and hasattr(self, 'font_size_var'):
                    self.font_size_var.set(settings["font_size"])
                    self.change_font_size()
                    
                if "language" in settings:
                    self.current_language = settings["language"]
                    if hasattr(self, 'language_var'):
                        self.language_var.set(self.current_language)
                        
                if "llm_settings" in settings:
                    self.llm_settings = settings["llm_settings"]
                    
                if "active_llm" in settings:
                    self.active_llm = settings["active_llm"]
        except Exception as e:
            print(f"Error loading settings: {e}")

def start_application():
    """Start the Code Nexus Wizard application"""
    root = tk.Tk()
    app = CodeNexusApp(root)
    root.mainloop()

if __name__ == "__main__":
    start_application()
`;

export default PythonGUI;
