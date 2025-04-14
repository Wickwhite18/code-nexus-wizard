
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, ArrowUpRight } from "lucide-react";

interface TerminalLine {
  type: 'prompt' | 'command' | 'output' | 'error';
  content: string;
}

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'Code Nexus Wizard Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" for a list of available commands.' },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Sample command handling
  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let output: TerminalLine[] = [];

    // Add command to history
    output.push({ type: 'prompt', content: '>' });
    output.push({ type: 'command', content: cmd });

    // Process command
    if (command === '') {
      // Empty command, just show prompt
    } else if (command === 'help') {
      output.push({ 
        type: 'output', 
        content: `Available commands:
  help                Display this help message
  clear               Clear the terminal
  echo <text>         Display text
  ls                  List files and directories
  cat <file>          View file contents
  python <file>       Run Python script (simulated)
  node <file>         Run Node.js script (simulated)
  npm <command>       Run npm command (simulated)
  git <command>       Run git command (simulated)
  exit                Close terminal (simulated)`
      });
    } else if (command === 'clear') {
      setHistory([]);
      return;
    } else if (command.startsWith('echo ')) {
      const text = cmd.slice(5);
      output.push({ type: 'output', content: text });
    } else if (command === 'ls') {
      output.push({ 
        type: 'output', 
        content: `src/
package.json
tsconfig.json
README.md`
      });
    } else if (command.startsWith('cat ')) {
      const file = cmd.slice(4).trim();
      if (file === 'package.json') {
        output.push({ 
          type: 'output', 
          content: `{
  "name": "code-nexus-wizard",
  "version": "1.0.0",
  "description": "All-in-one code development environment",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  }
}`
        });
      } else {
        output.push({ type: 'error', content: `cat: ${file}: No such file or directory` });
      }
    } else if (command.startsWith('python ') || command.startsWith('node ') || 
               command.startsWith('npm ') || command.startsWith('git ')) {
      output.push({ 
        type: 'output', 
        content: `Simulating ${command.split(' ')[0]} command execution...
Command completed successfully.` 
      });
    } else if (command === 'exit') {
      output.push({ type: 'output', content: 'Closing terminal (simulated)...' });
    } else {
      output.push({ type: 'error', content: `Command not found: ${command}` });
    }

    setHistory(prev => [...prev, ...output]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  const clearTerminal = () => {
    setHistory([]);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-focus on mount
  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div 
      className="h-full flex flex-col bg-terminal text-terminal-foreground p-4 font-mono"
      onClick={focusInput}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">Terminal</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearTerminal}
          className="h-7 text-muted-foreground hover:text-foreground"
        >
          <Trash2 size={14} className="mr-1" /> Clear
        </Button>
      </div>
      
      <div 
        ref={terminalRef}
        className="flex-1 overflow-auto mb-2"
      >
        {history.map((line, i) => (
          <div key={i} className="terminal-line">
            {line.type === 'prompt' && <span className="prompt">{line.content}</span>}
            {line.type === 'command' && <span className="command">{line.content}</span>}
            {line.type === 'output' && <span className="output">{line.content}</span>}
            {line.type === 'error' && <span className="error">{line.content}</span>}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="prompt">{'>'}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="terminal-input"
          autoComplete="off"
          autoFocus
        />
        <Button type="submit" variant="ghost" size="icon" className="h-6 w-6 ml-1 text-muted-foreground">
          <ArrowUpRight size={14} />
        </Button>
      </form>
    </div>
  );
};

export default Terminal;
