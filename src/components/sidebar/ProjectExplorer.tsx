
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown, FileCode, FolderClosed, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileItem {
  id: string;
  name: string;
  type: "file";
  language?: string;
}

interface FolderItem {
  id: string;
  name: string;
  type: "folder";
  children: (FileItem | FolderItem)[];
  isOpen?: boolean;
}

type ExplorerItem = FileItem | FolderItem;

const sampleProjectStructure: FolderItem = {
  id: "root",
  name: "my-project",
  type: "folder",
  isOpen: true,
  children: [
    {
      id: "src",
      name: "src",
      type: "folder",
      isOpen: true,
      children: [
        {
          id: "components",
          name: "components",
          type: "folder",
          children: [
            { id: "button", name: "Button.tsx", type: "file", language: "typescript" },
            { id: "input", name: "Input.tsx", type: "file", language: "typescript" },
            { id: "card", name: "Card.tsx", type: "file", language: "typescript" },
          ],
        },
        {
          id: "pages",
          name: "pages",
          type: "folder",
          children: [
            { id: "home", name: "Home.tsx", type: "file", language: "typescript" },
            { id: "about", name: "About.tsx", type: "file", language: "typescript" },
            { id: "contact", name: "Contact.tsx", type: "file", language: "typescript" },
          ],
        },
        { id: "app", name: "App.tsx", type: "file", language: "typescript" },
        { id: "main", name: "main.tsx", type: "file", language: "typescript" },
        { id: "index", name: "index.css", type: "file", language: "css" },
      ],
    },
    { id: "package", name: "package.json", type: "file", language: "json" },
    { id: "readme", name: "README.md", type: "file", language: "markdown" },
    { id: "tsconfig", name: "tsconfig.json", type: "file", language: "json" },
  ],
};

const ProjectExplorer: React.FC = () => {
  const [project, setProject] = useState<FolderItem>(sampleProjectStructure);
  const [activeFileId, setActiveFileId] = useState<string | null>(null);

  const toggleFolder = (folderId: string) => {
    const updateFolder = (item: ExplorerItem): ExplorerItem => {
      if (item.type === "file") return item;

      if (item.id === folderId) {
        return { ...item, isOpen: !item.isOpen };
      }

      return {
        ...item,
        children: item.children.map(updateFolder),
      };
    };

    setProject(updateFolder(project) as FolderItem);
  };

  const renderItem = (item: ExplorerItem, level = 0) => {
    if (item.type === "file") {
      return (
        <div
          key={item.id}
          className={cn(
            "file-item",
            activeFileId === item.id && "active"
          )}
          onClick={() => setActiveFileId(item.id)}
        >
          <FileCode size={16} className="file-icon" />
          <span>{item.name}</span>
        </div>
      );
    }

    return (
      <div key={item.id}>
        <div
          className="folder-item"
          onClick={() => toggleFolder(item.id)}
        >
          <Button variant="ghost" size="icon" className="h-4 w-4 p-0 mr-1">
            {item.isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </Button>
          {item.isOpen ? (
            <FolderOpen size={16} className="mr-2 text-nexus-500" />
          ) : (
            <FolderClosed size={16} className="mr-2 text-muted-foreground" />
          )}
          <span className="font-medium">{item.name}</span>
        </div>
        {item.isOpen && (
          <div className="folder-contents">
            {item.children.map((child) => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return <div className="w-full">{renderItem(project)}</div>;
};

export default ProjectExplorer;
