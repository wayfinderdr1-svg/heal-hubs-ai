import { Home, MessageCircle, Calendar, History, Info, HelpCircle, LogIn, User, Route, LifeBuoy, LogOut, MapPin, Mail, BookOpen } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";
const publicItems = [{
  title: "Home",
  url: "/",
  icon: Home
}, {
  title: "Support Chat",
  url: "/chat",
  icon: MessageCircle
}, {
  title: "About",
  url: "/about",
  icon: Info
}, {
  title: "How It Works",
  url: "/how-it-works",
  icon: HelpCircle
}, {
  title: "Support",
  url: "/support",
  icon: LifeBuoy
}, {
  title: "Local Resources",
  url: "/local-resources",
  icon: MapPin
}, {
  title: "How We Help",
  url: "/our-support", 
  icon: Route
}, {
  title: "Contact Us",
  url: "/contact-us",
  icon: Mail
}, {
  title: "FAQ",
  url: "/faq",
  icon: BookOpen
}];
const authenticatedItems = [{
  title: "Daily Check-in",
  url: "/daily-checkin",
  icon: Calendar
}, {
  title: "Check-in History",
  url: "/checkin-history",
  icon: History
}];
export function AppSidebar() {
  const {
    state,
    setOpen,
    isMobile,
    setOpenMobile
  } = useSidebar();
  const location = useLocation();
  const { user, signOut } = useAuth();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";
  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({
    isActive
  }: {
    isActive: boolean;
  }) => isActive ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" : "hover:bg-muted/50";

  // Handle menu item click to collapse sidebar on mobile/small screens
  const handleMenuClick = () => {
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (isMobile) {
      // Close the mobile sheet
      setOpenMobile(false);
    } else {
      // Collapse/close desktop sidebar
      setOpen(false);
    }
  };
  return <Sidebar className={isCollapsed ? "w-12 md:w-14" : "w-56 md:w-64 lg:w-72"} collapsible="icon">
      <SidebarContent className="bg-sky-950 p-1 md:p-2">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : "text-xs md:text-sm"}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {publicItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-9 md:h-10">
                    <NavLink to={item.url} end className={getNavCls} onClick={handleMenuClick}>
                      <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                      {!isCollapsed && <span className="text-sm md:text-base">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support Tools - Only show if authenticated */}
        {user && <SidebarGroup>
            <SidebarGroupLabel className={isCollapsed ? "sr-only" : "text-xs md:text-sm"}>
              Support Tools
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {authenticatedItems.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="h-9 md:h-10">
                      <NavLink to={item.url} end className={getNavCls} onClick={handleMenuClick}>
                        <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                        {!isCollapsed && <span className="text-sm md:text-base">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>}

        {/* Account */}
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : "text-xs md:text-sm"}>
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-9 md:h-10">
                  <NavLink to="/auth" className={getNavCls} onClick={handleMenuClick}>
                    {user ? <User className="h-4 w-4 md:h-5 md:w-5" /> : <LogIn className="h-4 w-4 md:h-5 md:w-5" />}
                    {!isCollapsed && <span className="text-sm md:text-base">{user ? "Profile" : "Sign In"}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {user && (
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => { signOut(); handleMenuClick(); }} className="h-9 md:h-10">
                    <LogOut className="h-4 w-4 md:h-5 md:w-5" />
                    {!isCollapsed && <span className="text-sm md:text-base">Sign Out</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>;
}