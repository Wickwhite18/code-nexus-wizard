
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
import { Bot, Send, Code, Bug, Wand2, RefreshCw } from "lucide-react";

interface Message {
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      content:
        "👋 I'm your AI coding assistant. I can help you with code completion, debugging, refactoring, or answering questions. What would you like assistance with today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [model, setModel] = useState("ollama");
  const [action, setAction] = useState("general");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: "user",
      content: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        general: "I'll help you with that! Let me analyze your request...",
        complete: "Here's a completion for your code:\n\n```javascript\nfunction processData(data) {\n  // Validate input\n  if (!data || !Array.isArray(data)) {\n    throw new Error('Invalid input: expected an array');\n  }\n  \n  // Process the data\n  return data.map(item => {\n    return {\n      ...item,\n      processed: true,\n      timestamp: new Date().toISOString()\n    };\n  });\n}\n```",
        debug: "I've analyzed your code and found a potential issue:\n\n```javascript\n// Problem: You're not checking if 'items' exists before accessing it\nconst total = items.reduce((sum, item) => sum + item.price, 0);\n\n// Solution: Add a null check\nconst total = items ? items.reduce((sum, item) => sum + item.price, 0) : 0;\n```",
        refactor: "Here's how you can refactor your code for better readability and performance:\n\n```javascript\n// Before\nfunction processItems(items) {\n  let results = [];\n  for (let i = 0; i < items.length; i++) {\n    let item = items[i];\n    if (item.active) {\n      results.push({\n        id: item.id,\n        name: item.name,\n        value: item.value * 2\n      });\n    }\n  }\n  return results;\n}\n\n// After\nfunction processItems(items) {\n  return items\n    .filter(item => item.active)\n    .map(item => ({\n      id: item.id,\n      name: item.name,\n      value: item.value * 2\n    }));\n}\n```"
      };

      const assistantMessage: Message = {
        type: "assistant",
        content: responses[action] || responses.general,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot size={18} className="text-nexus-600" />
          <h3 className="font-medium">AI Assistant</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger className="w-[140px] h-8">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ollama">Ollama</SelectItem>
              <SelectItem value="deepseek">DeepSeek</SelectItem>
              <SelectItem value="qwen">Qwen</SelectItem>
              <SelectItem value="openrouter">OpenRouter</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === "user"
                  ? "bg-nexus-600 text-white"
                  : "bg-muted"
              }`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
              <div
                className={`text-xs mt-1 ${
                  message.type === "user" ? "text-nexus-100" : "text-muted-foreground"
                }`}
              >
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-muted">
              <div className="flex items-center space-x-2">
                <RefreshCw size={14} className="animate-spin" />
                <span>Thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex space-x-2 mb-2">
          <Button
            variant={action === "general" ? "default" : "outline"}
            size="sm"
            onClick={() => setAction("general")}
          >
            <Bot size={14} className="mr-1" />
            General
          </Button>
          <Button
            variant={action === "complete" ? "default" : "outline"}
            size="sm"
            onClick={() => setAction("complete")}
          >
            <Code size={14} className="mr-1" />
            Complete
          </Button>
          <Button
            variant={action === "debug" ? "default" : "outline"}
            size="sm"
            onClick={() => setAction("debug")}
          >
            <Bug size={14} className="mr-1" />
            Debug
          </Button>
          <Button
            variant={action === "refactor" ? "default" : "outline"}
            size="sm"
            onClick={() => setAction("refactor")}
          >
            <Wand2 size={14} className="mr-1" />
            Refactor
          </Button>
        </div>
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend} disabled={loading || !input.trim()}>
            <Send size={16} className="mr-1" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
