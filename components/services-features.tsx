"use client";
import React from "react";
import { useId, useEffect, useState } from "react";

export default function ServicesFeatures() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 md:px-0">
        {grid.map((feature, index) => (
          <div
            key={feature.title}
            className="relative bg-[#111] p-8 rounded-3xl overflow-hidden transition-all duration-300 group hover:bg-[#1a1a1a]"
          >
            <div className="absolute inset-0">
              <SimpleGrid />
            </div>
            <div className="space-y-4 relative z-20">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm font-normal leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Brand Strategy & Positioning",
    icon: "🎯",
    description:
      "We craft distinct brand identities rooted in strategy and brought to life through design. Every element reflects your purpose, builds recognition, and connects with your target audience in the competitive tech landscape."
  },
  {
    title: "Performance Marketing",
    icon: "📈",
    description:
      "Full-funnel Meta and Google campaigns combining audience insights, creatives, and strategy to attract, engage, and convert. From awareness to action, we drive measurable, scalable performance aligned with your growth goals."
  },
  {
    title: "Search Engine Optimization",
    icon: "🔍",
    description:
      "We optimize your website from the ground up — technical SEO, content strategy, and strategic backlinks — to improve rankings, increase organic traffic, and attract high-intent users for sustainable growth."
  },
  {
    title: "Content Marketing & Production",
    icon: "✍️",
    description:
      "High-quality, brand-aligned content from visuals to copy that captures attention and tells your story. Designed for impact across platforms to build consistency, engagement, and brand recall."
  },
  {
    title: "Website Design & Development",
    icon: "💻",
    description:
      "We design and develop websites that are visually striking and technically sound — built for brand storytelling, seamless navigation, and high performance. Every site is crafted to convert, engage, and scale."
  },
  {
    title: "Social Media Management",
    icon: "📱",
    description:
      "End-to-end social channel management from content creation to community engagement, ensuring your brand stays consistent, visible, and relevant across platforms with clarity and strategic intention."
  },
  {
    title: "Marketing Automation & CRM",
    icon: "⚙️",
    description:
      "Streamlined lead nurturing, customer journey mapping, and automated workflows that convert prospects into customers while reducing manual work and improving customer lifetime value."
  },
  {
    title: "Analytics & Growth Intelligence",
    icon: "📊",
    description:
      "Comprehensive tracking, attribution modeling, and performance insights across all channels. We provide actionable data that drives continuous optimization and demonstrates clear ROI for every marketing dollar spent."
  },
];

// A simple grid component with colorful lines
const SimpleGrid = () => {
  return (
    <div className="h-full w-full">
      {/* Horizontal lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {[...Array(12)].map((_, i) => (
          <div key={`h-${i}`} className="h-px w-full bg-white/5" />
        ))}
      </div>
      
      {/* Vertical lines */}
      <div className="absolute inset-0 flex flex-row justify-between">
        {[...Array(12)].map((_, i) => (
          <div key={`v-${i}`} className="w-px h-full bg-white/5" />
        ))}
      </div>
    </div>
  );
};
