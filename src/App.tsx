import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/AuthContext";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Support from "./pages/Support";
import OurSupport from "./pages/OurSupport";
import SupportChat from "./pages/SupportChat";
import DailyCheckin from "./pages/DailyCheckin";
import CheckinHistory from "./pages/CheckinHistory";
import LocalResources from "./pages/LocalResources";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <AuthProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              {/* Global sidebar trigger in header */}
              <header className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
                <SidebarTrigger className="ml-2" />
                <h1 className="ml-4 font-semibold text-lg">WayFinder</h1>
              </header>

              <AppSidebar />

              <main className="flex-1 pt-12">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/our-support" element={<OurSupport />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/local-resources" element={<LocalResources />} />
                  <Route path="/chat" element={<SupportChat />} />
                  <Route path="/daily-checkin" element={<DailyCheckin />} />
                  <Route path="/checkin-history" element={<CheckinHistory />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </SidebarProvider>
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
