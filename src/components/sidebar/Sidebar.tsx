
import React, { useState } from "react";
import { useSidebar } from "@/components/providers/SidebarProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FolderClosed,
  Settings,
  Code,
  Terminal,
  Bot,
  Database,
  FolderTree,
  PlusCircle,
  FileCode
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ProjectExplorer from "./ProjectExplorer";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  id: string;
}

const Sidebar: React.FC = () => {
  const { isOpen } = useSidebar();
  const [activeItem, setActiveItem] = useState("explorer");

  const sidebarItems: SidebarItem[] = [
    { icon: <FolderTree size={24} />, label: "Explorer", id: "explorer" },
    { icon: <Code size={24} />, label: "Editor", id: "editor" },
    { icon: <Terminal size={24} />, label: "Terminal", id: "terminal" },
    { icon: <Bot size={24} />, label: "AI Assistant", id: "ai" },
    { icon: <Database size={24} />, label: "Database", id: "database" },
    { icon: <Settings size={24} />, label: "Settings", id: "settings" },
  ];

  return (
    <aside
      className={cn(
        "bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 flex flex-col h-[calc(100vh-3.5rem)]",
        isOpen ? "w-64" : "w-14"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-2 flex flex-col space-y-1">
          {sidebarItems.map((item) => (
            <TooltipProvider key={item.id} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex justify-start items-center space-x-2 px-3 py-2 w-full",
                      activeItem === item.id && "bg-sidebar-accent text-sidebar-accent-foreground"
                    )}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <div>{item.icon}</div>
                    {isOpen && <span>{item.label}</span>}
                  </Button>
                </TooltipTrigger>
                {!isOpen && <TooltipContent side="right">{item.label}</TooltipContent>}
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        {isOpen && activeItem === "explorer" && (
          <div className="flex-1 overflow-auto p-2">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">PROJECT</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
            <ProjectExplorer />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
