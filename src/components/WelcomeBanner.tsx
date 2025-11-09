import { Sparkles } from "lucide-react";

export const WelcomeBanner = () => {
  return (
    <div className="glass-card rounded-2xl p-6 mb-8 overflow-hidden relative">
      <div className="absolute inset-0 gradient-primary opacity-5" />
      <div className="relative z-10 flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground mb-2">Welcome back!</h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            The successful warrior is the average man, with laser-like focus. - Bruce Lee
          </p>
        </div>
      </div>
    </div>
  );
};
