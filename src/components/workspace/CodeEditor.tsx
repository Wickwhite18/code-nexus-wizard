
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Play, Settings, Download } from "lucide-react";

// Sample code snippets for different languages
const sampleCode = {
  javascript: `// JavaScript Example
function calculateSum(a, b) {
  return a + b;
}

// Example usage
const num1 = 5;
const num2 = 10;
const result = calculateSum(num1, num2);
console.log(\`The sum of \${num1} and \${num2} is \${result}\`);
`,
  python: `# Python Example
def calculate_sum(a, b):
    return a + b

# Example usage
num1 = 5
num2 = 10
result = calculate_sum(num1, num2)
print(f"The sum of {num1} and {num2} is {result}")
`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example Page</title>
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
        <p>This is an example HTML page.</p>
    </div>
</body>
</html>
`,
  bash: `#!/bin/bash
# Bash script example for Kali Linux

echo "Starting system check..."

# Check if user is root
if [ "$(id -u)" != "0" ]; then
   echo "This script must be run as root" 1>&2
   exit 1
fi

echo "Checking system packages..."
apt update -y
echo "System check complete!"

# Function to install dependencies
install_deps() {
    echo "Installing dependencies..."
    apt install -y python3 python3-pip git curl wget
    pip3 install requests numpy pandas
    echo "Dependencies installed!"
}

# Ask if user wants to install dependencies
read -p "Would you like to install common dependencies? (y/n) " choice
if [ "$choice" == "y" ] || [ "$choice" == "Y" ]; then
    install_deps
fi

echo "Script completed successfully!"
`,
  cpp: `// C++ Example
#include <iostream>
#include <vector>
#include <algorithm>

// Function to find the maximum element in a vector
int findMax(const std::vector<int>& numbers) {
    return *std::max_element(numbers.begin(), numbers.end());
}

int main() {
    std::vector<int> data = {5, 2, 9, 1, 7, 6, 8, 3, 4};
    
    std::cout << "Data: ";
    for (int num : data) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    int max = findMax(data);
    std::cout << "Maximum value: " << max << std::endl;
    
    return 0;
}
`
};

const CodeEditor: React.FC = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(sampleCode.javascript);
  const [fontSize, setFontSize] = useState("14");
  const [theme, setTheme] = useState("vs-dark");
  const [autoComplete, setAutoComplete] = useState(true);

  useEffect(() => {
    setCode(sampleCode[language as keyof typeof sampleCode]);
  }, [language]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleRunCode = () => {
    console.log("Running code:", code);
    // In a real implementation, this would execute the code
  };

  const handleSaveCode = () => {
    console.log("Saving code:", code);
    // In a real implementation, this would save the code to a file
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border p-2 flex justify-between items-center">
        <Tabs value={language} onValueChange={setLanguage}>
          <TabsList>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="bash">Bash</TabsTrigger>
            <TabsTrigger value="cpp">C++</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center space-x-2">
          <Select value={fontSize} onValueChange={setFontSize}>
            <SelectTrigger className="w-[80px] h-8">
              <SelectValue placeholder="Font Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12px</SelectItem>
              <SelectItem value="14">14px</SelectItem>
              <SelectItem value="16">16px</SelectItem>
              <SelectItem value="18">18px</SelectItem>
            </SelectContent>
          </Select>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="w-[120px] h-8">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vs-dark">Dark</SelectItem>
              <SelectItem value="vs-light">Light</SelectItem>
              <SelectItem value="hc-black">High Contrast</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon" onClick={handleRunCode} title="Run Code">
            <Play size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleSaveCode} title="Save Code">
            <Save size={16} />
          </Button>
          <Button variant="ghost" size="icon" title="Editor Settings">
            <Settings size={16} />
          </Button>
          <Button variant="ghost" size="icon" title="Download Code">
            <Download size={16} />
          </Button>
        </div>
      </div>
      <div className={`flex-1 overflow-auto p-4 bg-code text-code-foreground font-mono text-${fontSize}`}>
        <textarea 
          className="w-full h-full bg-transparent outline-none resize-none"
          value={code}
          onChange={handleCodeChange}
          spellCheck={false}
        />
      </div>
      <div className="p-2 text-xs text-muted-foreground border-t border-border flex justify-between">
        <div>
          {language.charAt(0).toUpperCase() + language.slice(1)} • {code.split('\n').length} lines
        </div>
        <div className="flex items-center">
          <span className="mr-2">Auto-complete:</span>
          <button 
            className={`px-2 py-1 rounded text-xs ${autoComplete ? 'bg-nexus-600 text-white' : 'bg-muted'}`}
            onClick={() => setAutoComplete(!autoComplete)}
          >
            {autoComplete ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
