import { Home, MessageCircle, Calendar, History, Info, HelpCircle, LogIn, User } from "lucide-react";
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
  icon: HelpCircle
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
  const {
    user
  } = useAuth();
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
  return <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sky-950">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {publicItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls} onClick={handleMenuClick}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support Tools - Only show if authenticated */}
        {user && <SidebarGroup>
            <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
              Support Tools
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {authenticatedItems.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} end className={getNavCls} onClick={handleMenuClick}>
                        <item.icon className="h-4 w-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>}

        {/* Account */}
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/auth" className={getNavCls} onClick={handleMenuClick}>
                    {user ? <User className="h-4 w-4" /> : <LogIn className="h-4 w-4" />}
                    {!isCollapsed && <span>{user ? "Profile" : "Sign In"}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>;
}