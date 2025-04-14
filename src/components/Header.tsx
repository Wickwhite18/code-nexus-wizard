
import React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Code2, Save, Play, RefreshCw, Settings, Menu } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useSidebar } from "@/components/providers/SidebarProvider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <header className="border-b border-border bg-background">
      <div className="flex justify-between items-center px-4 h-14">
        <div className="flex items-center space-x-2">
          <Button onClick={toggleSidebar} variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center">
            <Code2 className="h-6 w-6 text-nexus-600 mr-2" />
            <h1 className="font-bold text-lg">Code Nexus Wizard</h1>
          </div>
        </div>

        <Tabs defaultValue="code" className="hidden md:block">
          <TabsList>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="terminal">Terminal</TabsTrigger>
            <TabsTrigger value="ai">AI Assistant</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Save className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Play className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <RefreshCw className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
