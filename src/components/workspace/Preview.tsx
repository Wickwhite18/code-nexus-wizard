
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Smartphone, Tablet, Monitor, ExternalLink } from "lucide-react";

const Preview: React.FC = () => {
  const [view, setView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const getWidthClass = () => {
    switch (view) {
      case "mobile":
        return "w-[320px]";
      case "tablet":
        return "w-[768px]";
      case "desktop":
      default:
        return "w-full";
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button
            variant={view === "mobile" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("mobile")}
          >
            <Smartphone size={16} className="mr-1" /> Mobile
          </Button>
          <Button
            variant={view === "tablet" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("tablet")}
          >
            <Tablet size={16} className="mr-1" /> Tablet
          </Button>
          <Button
            variant={view === "desktop" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("desktop")}
          >
            <Monitor size={16} className="mr-1" /> Desktop
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            disabled={loading}
          >
            <RefreshCw
              size={16}
              className={`mr-1 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <Button variant="ghost" size="sm">
            <ExternalLink size={16} className="mr-1" /> Open
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-100 p-4 flex justify-center">
        <div
          className={`h-full bg-white border border-gray-200 shadow-sm rounded-md transition-all duration-300 overflow-auto ${getWidthClass()}`}
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Hello, World!</h1>
            <p className="mb-4">
              This is a preview of your application. In a real implementation,
              this would render the HTML, CSS, and JavaScript code you write in
              the editor.
            </p>
            <div className="p-4 bg-gray-100 rounded-md mb-4">
              <pre className="text-sm">
                <code>// Your code will be executed here</code>
              </pre>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-nexus-600 text-white rounded-md hover:bg-nexus-700 transition-colors">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Secondary Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
