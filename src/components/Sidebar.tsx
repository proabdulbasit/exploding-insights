import { Home, Briefcase, Building2, Users, PackageOpen, Heart, BarChart3, Zap, UserCircle, MessageSquare, Gift, HelpCircle } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Briefcase, label: "Fiverr.com", path: "/fiverr" },
  { icon: Building2, label: "Acquire.com", path: "/acquire" },
  { icon: Users, label: "IndieHackers.com", path: "/indiehackers" },
  { icon: PackageOpen, label: "ProductHunt.com", path: "/producthunt", badge: "New" },
  { icon: Heart, label: "Favorites", path: "/favorites" },
  { icon: BarChart3, label: "Leaderboards", path: "/leaderboards" },
  { icon: Zap, label: "Accelerator", path: "/accelerator" },
];

const bottomItems = [
  { icon: MessageSquare, label: "Leave a testimonial", path: "/testimonial" },
  { icon: Gift, label: "New updates", path: "/updates", badge: "Aug 13" },
  { icon: HelpCircle, label: "Feature requests?", path: "/requests" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen glass-card border-r border-glass-border flex flex-col sticky top-0">
      <div className="p-6">
        <div className="flex items-start gap-2 mb-2">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">
              Exploding Insights
            </h1>
            <span className="text-xs text-primary font-medium">PRO</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                activeClassName="bg-secondary text-foreground"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-8 mb-4">
          <div className="px-3 mb-3">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              New Data in: 
              <span className="inline-flex items-center gap-1 text-foreground font-mono">
                <span className="px-1.5 py-0.5 bg-secondary rounded">21</span>
                <span className="text-xs">D</span>
                <span className="px-1.5 py-0.5 bg-secondary rounded">02</span>
                <span className="text-xs">H</span>
                <span className="px-1.5 py-0.5 bg-secondary rounded">45</span>
                <span className="text-xs">M</span>
              </span>
            </p>
          </div>
        </div>
      </nav>

      <div className="p-3 border-t border-glass-border">
        <ul className="space-y-1">
          {bottomItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all text-sm"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-4 border-t border-glass-border">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <UserCircle className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Account</p>
              <p className="text-xs text-muted-foreground">Exploding Insights PRO</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
