
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
`
};

const CodeEditor: React.FC = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(sampleCode.javascript);

  useEffect(() => {
    setCode(sampleCode[language as keyof typeof sampleCode]);
  }, [language]);

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border p-2 flex justify-between items-center">
        <Tabs value={language} onValueChange={setLanguage}>
          <TabsList>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="html">HTML</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex-1 overflow-auto p-4 bg-code text-code-foreground font-mono">
        <pre className="whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
      <div className="p-2 text-xs text-muted-foreground border-t border-border">
        Note: This is a simulated editor. In a full implementation, we would integrate
        a code editor like Monaco Editor (VS Code's editor) or CodeMirror.
      </div>
    </div>
  );
};

export default CodeEditor;
