import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DataSourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  stats?: {
    label: string;
    value: string;
  };
}

export const DataSourceCard = ({ title, description, icon: Icon, colorClass, stats }: DataSourceCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 hover-lift hover:border-primary/30 cursor-pointer group overflow-hidden relative">
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity", colorClass)} />
      
      <div className="relative z-10">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", colorClass)}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        {stats && (
          <div className="flex items-center justify-between pt-4 border-t border-glass-border">
            <span className="text-xs text-muted-foreground">{stats.label}</span>
            <span className="text-sm font-semibold text-foreground">{stats.value}</span>
          </div>
        )}
      </div>
    </div>
  );
};
