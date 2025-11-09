import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { WelcomeBanner } from "@/components/WelcomeBanner";
import { DataSourceCard } from "@/components/DataSourceCard";
import { StatsCard } from "@/components/StatsCard";
import { Briefcase, Building2, MessageSquare, Users, Heart, BarChart3, Zap, Brain, Globe, Database, TrendingUp, Package, TrendingDown, DollarSign, Target, Menu } from "lucide-react";

const dataSources = [
  {
    title: "Fiverr",
    description: "Find micro saas ideas in the Fiverr database.",
    icon: Briefcase,
    colorClass: "bg-fiverr",
    stats: { label: "New Ideas", value: "234" }
  },
  {
    title: "Acquire.com",
    description: "Find micro saas ideas in the Acquire.com database.",
    icon: Building2,
    colorClass: "bg-acquire",
    stats: { label: "Active Deals", value: "89" }
  },
  {
    title: "Reddit",
    description: "Discover trending topics and micro-SaaS ideas from Reddit communities.",
    icon: MessageSquare,
    colorClass: "bg-reddit",
    stats: { label: "Trending", value: "156" }
  },
  {
    title: "IndieHackers.com",
    description: "Find micro saas ideas in the IndieHackers.com database.",
    icon: Users,
    colorClass: "bg-indie",
    stats: { label: "Projects", value: "421" }
  },
  {
    title: "Favorites",
    description: "Access your saved ideas and opportunities quickly.",
    icon: Heart,
    colorClass: "bg-favorites",
    stats: { label: "Saved", value: "67" }
  },
  {
    title: "Leaderboards",
    description: "Track top performers and trending opportunities across what the entire community has 'liked'.",
    icon: BarChart3,
    colorClass: "bg-leaderboard",
    stats: { label: "Top Picks", value: "45" }
  },
  {
    title: "Accelerator",
    description: "Free resources to better use Exploding Insights.",
    icon: Zap,
    colorClass: "bg-accelerator",
    stats: { label: "Resources", value: "28" }
  },
  {
    title: "AI Apps Database",
    description: "Explore a curated collection of AI-powered applications and tools.",
    icon: Brain,
    colorClass: "bg-ai",
    stats: { label: "Apps", value: "312" }
  },
  {
    title: "Upwork",
    description: "Find service-based business opportunities from Upwork marketplace.",
    icon: Globe,
    colorClass: "bg-acquire",
    stats: { label: "Gigs", value: "178" }
  },
  {
    title: "Crunchbase Database",
    description: "Research startup ideas and funding trends from Crunchbase data.",
    icon: Database,
    colorClass: "bg-favorites",
    stats: { label: "Startups", value: "892" }
  },
  {
    title: "Trends & Gaps Analysis",
    description: "AI-powered analysis of market trends and opportunity gaps.",
    icon: TrendingUp,
    colorClass: "bg-primary",
    stats: { label: "Insights", value: "124" }
  },
  {
    title: "Product Hunt",
    description: "Discover new products and validate ideas from Product Hunt community.",
    icon: Package,
    colorClass: "bg-reddit",
    stats: { label: "Products", value: "267" }
  },
];

const stats = [
  { title: "Total Ideas", value: "2,847", change: "+12.5%", icon: Target, trend: "up" as const },
  { title: "Trending This Week", value: "156", change: "+8.2%", icon: TrendingUp, trend: "up" as const },
  { title: "Avg. Revenue Potential", value: "$4.2K", change: "+15.3%", icon: DollarSign, trend: "up" as const },
  { title: "Competition Level", value: "Medium", change: "-5.1%", icon: TrendingDown, trend: "down" as const },
];

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 w-full overflow-y-auto bg-background">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-30 glass-card border-b border-glass-border p-4 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-secondary rounded-lg"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-base font-bold text-foreground">Exploding Insights</h1>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <WelcomeBanner />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Quick Access</h2>
            <p className="text-sm text-muted-foreground">
              Explore profitable business ideas from multiple data sources
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {dataSources.map((source) => (
              <DataSourceCard key={source.title} {...source} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
