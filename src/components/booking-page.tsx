import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CalendlyWidget from "./calendly-widget";
import React from "react";
import Testimonials from "./testimonials";
import { TempoLogo } from "./ui/tempo-logo";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 relative h-full">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4 flex flex-col md:flex-row items-center gap-6">
            <TempoLogo className="mt-4 h-20 w-20 text-white" />
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <h1 className="text-6xl font-bold tracking-tight">
                  Book a Session
                </h1>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-[#6448EF]">
                with Our Team
              </h2>
            </div>
          </div>
          <p className="text-xl text-[#71717A] leading-relaxed">
            Transform your development workflow with our AI-powered tools and
            expert guidance. Our team will help you implement Tempo Labs in your
            organization.
          </p>
          {/* Testimonials */}
          <Testimonials />
        </div>

        {/* Right Content - Calendly */}
        <div className="bg-[#18181B] rounded-xl p-6 min-h-[900px] h-full border border-[#27272A] flex flex-col">
          <CalendlyWidget />
        </div>
      </div>
    </div>
  );
}
