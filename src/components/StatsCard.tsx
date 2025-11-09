import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
}

export const StatsCard = ({ title, value, change, icon: Icon, trend }: StatsCardProps) => {
  return (
    <div className="glass-card rounded-xl p-5 hover-lift">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className={cn(
          "text-xs font-medium px-2 py-1 rounded-full",
          trend === "up" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
        )}>
          {trend === "up" ? "↑" : "↓"} {change}
        </div>
      </div>
      <h3 className="text-sm text-muted-foreground mb-1">{title}</h3>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
};
