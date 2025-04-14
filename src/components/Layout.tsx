
import React from "react";
import { SidebarProvider } from "@/components/providers/SidebarProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/sidebar/Sidebar";
import Workspace from "@/components/workspace/Workspace";
import Header from "@/components/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 flex">
            <Sidebar />
            <main className="flex-1 overflow-hidden">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;
