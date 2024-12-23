"use client";

import { Hero } from "@/components/sections/Hero";
import { MarketStats } from "@/components/sections/MarketStats";
import { AIServices } from "@/components/sections/AIServices";
import { AIFeatures } from "@/components/sections/AIFeatures";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Timeline } from "@/components/sections/Timeline";
import { MarketAnalysis } from "@/components/sections/MarketAnalysis";
import { CompetitiveAnalysis } from "@/components/sections/CompetitiveAnalysis";
import { Investment } from "@/components/sections/Investment";
import { WhyNow } from "@/components/sections/WhyNow";
import { MarketingStrategy } from "@/components/sections/MarketingStrategy";
import { FutureVision } from "@/components/sections/FutureVision";

import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative min-h-screen">
        <div className="container mx-auto relative z-10 py-8 md:py-12 lg:py-16">
          <Hero />
          <MarketStats />
          <AIServices />
          <AIFeatures />
          <TargetAudience />
          <Timeline />
          <MarketAnalysis />
          <CompetitiveAnalysis />
          <MarketingStrategy />
          <Investment />
          <WhyNow />
          <FutureVision />

        </div>
      </div>
    </div>
  );
}
