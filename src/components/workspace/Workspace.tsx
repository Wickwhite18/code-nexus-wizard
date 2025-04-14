
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";
import Preview from "./Preview";
import AIAssistant from "./AIAssistant";

export interface WorkspaceTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const Workspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState("code");

  const tabs: WorkspaceTab[] = [
    {
      id: "code",
      label: "Code Editor",
      content: <CodeEditor />,
    },
    {
      id: "preview",
      label: "Preview",
      content: <Preview />,
    },
    {
      id: "terminal",
      label: "Terminal",
      content: <Terminal />,
    },
    {
      id: "ai",
      label: "AI Assistant",
      content: <AIAssistant />,
    },
  ];

  return (
    <div className="h-[calc(100vh-3.5rem)] flex flex-col">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex flex-col h-full"
      >
        <div className="flex items-center border-b border-border p-1">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="flex-1 overflow-hidden">
          {tabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="h-full overflow-auto"
            >
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Workspace;
