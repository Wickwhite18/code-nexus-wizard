
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bot, Send, Code, Bug, Wand2, RefreshCw, Settings } from "lucide-react";
import { LLMProvider, generateWithLLM } from "@/services/llmService";
import { useToast } from "@/hooks/use-toast";

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
  const [model, setModel] = useState<LLMProvider>("ollama");
  const [action, setAction] = useState("general");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
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

    try {
      // Get LLM response
      const response = await generateWithLLM({
        prompt: input,
        config: {
          provider: model,
          model: getDefaultModelForProvider(model),
          temperature: 0.7,
        },
        action: action as any,
      });

      if (response.error) {
        toast({
          title: "Error",
          description: `Failed to get AI response: ${response.error}`,
          variant: "destructive",
        });
      }

      // Add assistant message
      const assistantMessage: Message = {
        type: "assistant",
        content: response.content || "Sorry, I couldn't process your request.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to communicate with the AI service.",
        variant: "destructive",
      });
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const getDefaultModelForProvider = (provider: LLMProvider): string => {
    switch (provider) {
      case "ollama":
        return "codellama";
      case "deepseek":
        return "deepseek-coder";
      case "qwen":
        return "qwen";
      case "openrouter":
        return "mistralai/mixtral-8x7b";
      default:
        return "codellama";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot size={18} className="text-nexus-600" />
          <h3 className="font-medium">AI Assistant</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={model} onValueChange={(value: LLMProvider) => setModel(value)}>
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
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings size={16} />
          </Button>
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
        <div ref={messagesEndRef} />
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
            onKeyDown={handleKeyDown}
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
