import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-background via-secondary to-background min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 opacity-50 dark:opacity-30" data-ai-hint="abstract geometric animation"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
          Transform Unused Software
          <br className="hidden md:inline" /> Licenses into <span className="text-primary">Revenue</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-foreground/80">
          The secure, transparent marketplace for enterprise software license resale. Maximize value, minimize waste.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="group animate-pulse-glow shadow-lg" asChild>
            <a href="#contact">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="shadow-md" asChild>
            <a href="#how-it-works">
              Learn More
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
