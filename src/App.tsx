import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { NationalityProvider } from "@/context/NationalityContext";
import NationalityModal from "@/components/NationalityModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTopButton from "@/components/BackToTopButton";

const queryClient = new QueryClient();

/**
 * App acts as the root layout/providers shell.
 * Routing is handled by ViteReactSSG in main.tsx.
 * <Outlet /> is where the matched route component renders.
 */
const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <NationalityProvider>
          <Toaster />
          <Sonner />
          <NationalityModal />
          <WhatsAppButton />
          <BackToTopButton />
          <Outlet />
        </NationalityProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
