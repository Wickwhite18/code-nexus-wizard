
import React, { createContext, useContext, useState } from "react";

interface CodeFile {
  id: string;
  name: string;
  language: string;
  content: string;
}

interface CodeContextType {
  files: CodeFile[];
  activeFileId: string | null;
  setActiveFileId: (id: string | null) => void;
  updateFileContent: (id: string, content: string) => void;
  addFile: (file: Omit<CodeFile, "id">) => string;
  deleteFile: (id: string) => void;
}

const CodeContext = createContext<CodeContextType | undefined>(undefined);

// Sample code files
const initialFiles: CodeFile[] = [
  {
    id: "file1",
    name: "index.js",
    language: "javascript",
    content: `// JavaScript Example
function calculateSum(a, b) {
  return a + b;
}

// Example usage
const num1 = 5;
const num2 = 10;
const result = calculateSum(num1, num2);
console.log(\`The sum of \${num1} and \${num2} is \${result}\`);
`,
  },
  {
    id: "file2",
    name: "script.py",
    language: "python",
    content: `# Python Example
def calculate_sum(a, b):
    return a + b

# Example usage
num1 = 5
num2 = 10
result = calculate_sum(num1, num2)
print(f"The sum of {num1} and {num2} is {result}")
`,
  },
  {
    id: "file3",
    name: "index.html",
    language: "html",
    content: `<!DOCTYPE html>
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
  },
];

export const CodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [files, setFiles] = useState<CodeFile[]>(initialFiles);
  const [activeFileId, setActiveFileId] = useState<string | null>("file1");

  const updateFileContent = (id: string, content: string) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === id ? { ...file, content } : file
      )
    );
  };

  const addFile = (file: Omit<CodeFile, "id">) => {
    const id = `file${Date.now()}`;
    const newFile = { ...file, id };
    setFiles((prevFiles) => [...prevFiles, newFile]);
    return id;
  };

  const deleteFile = (id: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    if (activeFileId === id) {
      setActiveFileId(files.length > 1 ? files[0].id : null);
    }
  };

  return (
    <CodeContext.Provider
      value={{
        files,
        activeFileId,
        setActiveFileId,
        updateFileContent,
        addFile,
        deleteFile,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export const useCode = (): CodeContextType => {
  const context = useContext(CodeContext);
  if (context === undefined) {
    throw new Error("useCode must be used within a CodeProvider");
  }
  return context;
};
