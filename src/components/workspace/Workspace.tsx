
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";
import Preview from "./Preview";
import AIAssistant from "./AIAssistant";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, Layout, LayoutGrid, Download } from "lucide-react";
import { Link } from "react-router-dom";

export interface WorkspaceTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const Workspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState("code");
  const [layout, setLayout] = useState<"tabs" | "split" | "grid">("tabs");

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

  const renderContent = () => {
    if (layout === "tabs") {
      return (
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
      );
    } else if (layout === "split") {
      return (
        <div className="flex-1 overflow-hidden grid grid-cols-2 gap-1">
          <div className="overflow-auto border border-border rounded-sm">
            {tabs.find(tab => tab.id === "code")?.content}
          </div>
          <div className="overflow-auto border border-border rounded-sm">
            {activeTab === "code" 
              ? tabs.find(tab => tab.id === "preview")?.content
              : tabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      );
    } else if (layout === "grid") {
      return (
        <div className="flex-1 overflow-hidden grid grid-cols-2 grid-rows-2 gap-1">
          <div className="overflow-auto border border-border rounded-sm">
            {tabs.find(tab => tab.id === "code")?.content}
          </div>
          <div className="overflow-auto border border-border rounded-sm">
            {tabs.find(tab => tab.id === "preview")?.content}
          </div>
          <div className="overflow-auto border border-border rounded-sm">
            {tabs.find(tab => tab.id === "terminal")?.content}
          </div>
          <div className="overflow-auto border border-border rounded-sm">
            {tabs.find(tab => tab.id === "ai")?.content}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] flex flex-col">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex flex-col h-full"
      >
        <div className="flex items-center justify-between border-b border-border p-1">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex items-center space-x-1">
            <Link to="/python-gui">
              <Button 
                variant="outline" 
                size="sm"
                title="Get Python Desktop Version"
                className="mr-2"
              >
                <Download size={16} className="mr-1" /> Python GUI
              </Button>
            </Link>
            <Button 
              variant={layout === "tabs" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setLayout("tabs")}
              title="Tabs View"
            >
              <Maximize2 size={16} />
            </Button>
            <Button 
              variant={layout === "split" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setLayout("split")}
              title="Split View"
            >
              <Layout size={16} />
            </Button>
            <Button 
              variant={layout === "grid" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setLayout("grid")}
              title="Grid View"
            >
              <LayoutGrid size={16} />
            </Button>
          </div>
        </div>
        {renderContent()}
      </Tabs>
    </div>
  );
};

export default Workspace;
