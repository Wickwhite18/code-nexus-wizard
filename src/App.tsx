
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CodeProvider } from "@/components/providers/CodeProvider";
import { LLMProvider } from "@/components/providers/LLMProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PythonGUI from "./pages/PythonGUI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CodeProvider>
        <LLMProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/python-gui" element={<PythonGUI />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LLMProvider>
      </CodeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
