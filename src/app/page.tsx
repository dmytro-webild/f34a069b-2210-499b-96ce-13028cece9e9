"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import PricingCardEight from "@/components/sections/pricing/PricingCardEight";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { TrendingDown, AlertCircle, BarChart3, Clock, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeLargeTitles"
      background="circleGradient"
      cardStyle="outline"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Wyzn Media"
          navItems={[
            { name: "Problem", id: "problem" },
            { name: "Solution", id: "solution" },
            { name: "How It Works", id: "how-it-works" },
            { name: "Investment", id: "investment" },
            { name: "Contact", id: "final-cta" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Predictable Client Acquisition Powered by AI"
          description="We build automated lead generation systems that attract, qualify, and book high-intent clients directly into your calendar."
          background={{ variant: "glowing-orb" }}
          useInvertedBackground={false}
          tag="AI-Powered Automation"
          tagAnimation="slide-up"
          mediaAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/a-modern-clean-software-dashboard-interf-1772516714493-41a98465.png"
          imageAlt="Wyzn Media AI Lead Generation Dashboard"
          testimonials={[
            {
              name: "Sarah Chen",              handle: "Fitness Coach",              testimonial: "Wyzn Media's system booked 15 qualified clients in the first month. Game-changer for my business.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/professional-headshot-of-a-confident-fem-1772516710804-879ee5ab.png",              imageAlt: "Sarah Chen"
            },
            {
              name: "Marcus Johnson",              handle: "Business Consultant",              testimonial: "The automated qualification saved me 20 hours per week. Highly recommend.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/professional-headshot-of-a-confident-mal-1772516710478-311292dc.png",              imageAlt: "Marcus Johnson"
            },
            {
              name: "Elena Rodriguez",              handle: "Aesthetic Clinic Owner",              testimonial: "Predictable leads every week. Finally scaled without hiring more staff.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/professional-headshot-of-a-confident-fem-1772516709896-dc187dc0.png",              imageAlt: "Elena Rodriguez"
            },
            {
              name: "David Kim",              handle: "Real Estate Agent",              testimonial: "The calendar integration is seamless. Closed 8 deals from Wyzn leads.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/professional-headshot-of-a-confident-mal-1772516710651-9619b3cc.png",              imageAlt: "David Kim"
            }
          ]}
          buttons={[
            { text: "Book Free Strategy Call", href: "https://calendly.com/businessyasht/30min" },
            { text: "See How It Works", href: "#how-it-works" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="problem" data-section="problem">
        <AboutMetric
          title="Most Businesses Lose Leads Every Day"
          useInvertedBackground={true}
          metricsAnimation="slide-up"
          metrics={[
            { icon: TrendingDown, label: "Slow Responses", value: "-40%" },
            { icon: AlertCircle, label: "Unqualified Leads", value: "45%" },
            { icon: BarChart3, label: "Inconsistent Growth", value: "Unpredictable" },
            { icon: Clock, label: "Manual Follow-ups", value: "10+ hrs/wk" }
          ]}
        />
      </div>

      <div id="solution" data-section="solution">
        <FeatureCardTwelve
          title="The Wyzn Media AI Client Acquisition System"
          description="We combine paid advertising with intelligent automation to generate qualified leads and convert them into booked appointments automatically."
          features={[
            {
              id: "targeted-ads",              label: "Targeted",              title: "Targeted Paid Ad Campaigns",              items: [
                "Precision audience targeting",                "High-intent prospect selection",                "Continuous optimization",                "Multi-channel campaigns"
              ]
            },
            {
              id: "ai-qualification",              label: "Qualify",              title: "AI-Powered Lead Qualification",              items: [
                "Instant engagement automation",                "Smart lead scoring",                "Removes unqualified prospects",                "Personalized responses"
              ]
            },
            {
              id: "automation",              label: "Automate",              title: "Automated Booking System",              items: [
                "Direct calendar integration",                "Instant appointment scheduling",                "Qualified prospects only",                "24/7 lead capture"
              ]
            },
            {
              id: "reporting",              label: "Optimize",              title: "Ongoing Optimization & Reporting",              items: [
                "Real-time performance metrics",                "Transparent reporting dashboard",                "Data-backed adjustments",                "Continuous improvement"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Get Started Today", href: "https://calendly.com/businessyasht/30min" }
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <ProductCardOne
          title="Simple. Strategic. Scalable."
          description="Our four-step process transforms your lead acquisition from chaotic to predictable."
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          products={[
            {
              id: "step-1",              name: "Strategy & Offer Optimization",              price: "Step 1",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/a-clean-modern-flowchart-showing-the-wyz-1772516711643-389fe51d.png?_wi=1",              imageAlt: "Strategy refinement"
            },
            {
              id: "step-2",              name: "Targeted Traffic",              price: "Step 2",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/a-clean-modern-flowchart-showing-the-wyz-1772516711643-389fe51d.png?_wi=2",              imageAlt: "Paid campaign launch"
            },
            {
              id: "step-3",              name: "AI Qualification",              price: "Step 3",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/a-clean-modern-flowchart-showing-the-wyz-1772516711643-389fe51d.png?_wi=3",              imageAlt: "Automated lead filtering"
            },
            {
              id: "step-4",              name: "Calendar Integration",              price: "Step 4",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/a-clean-modern-flowchart-showing-the-wyz-1772516711643-389fe51d.png?_wi=4",              imageAlt: "Automated booking"
            }
          ]}
        />
      </div>

      <div id="why-wyzn" data-section="why-wyzn">
        <MetricCardEleven
          title="Why Wyzn Media"
          description="Built for modern growth with proven results."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "ai-driven",              value: "100%",              title: "AI-Driven Automation",              description: "Eliminate manual lead handling with intelligent systems",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/a-visual-representation-of-business-grow-1772516711260-dc5f938d.png?_wi=1",              imageAlt: "AI automation workflow"
            },
            {
              id: "data-backed",              value: "24/7",              title: "Data-Backed Strategy",              description: "Real-time optimization based on proven metrics",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/a-visual-representation-of-business-grow-1772516711260-dc5f938d.png?_wi=2",              imageAlt: "Analytics dashboard"
            },
            {
              id: "qualified-leads",              value: "3x+",              title: "Qualified Leads Focus",              description: "Not vanity metrics—only genuine, high-intent prospects",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/a-visual-representation-of-business-grow-1772516711260-dc5f938d.png?_wi=3",              imageAlt: "Lead quality metrics"
            },
            {
              id: "scalable",              value: "∞",              title: "Scalable Infrastructure",              description: "Grow predictably without hitting operational limits",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/a-visual-representation-of-business-grow-1772516711260-dc5f938d.png?_wi=4",              imageAlt: "Scalable systems"
            }
          ]}
        />
      </div>

      <div id="investment" data-section="investment">
        <PricingCardEight
          title="Performance-Focused Partnership"
          description="Transparent pricing. No hidden fees. Scale on your terms."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          plans={[
            {
              id: "starter",              badge: "Starting Investment",              badgeIcon: Sparkles,
              price: "₹35,000 / $700",              subtitle: "Monthly management fee",              buttons: [
                { text: "Book Strategy Call", href: "https://calendly.com/businessyasht/30min" }
              ],
              features: [
                "Full AI automation system setup",                "Targeted paid ad campaigns",                "Qualified lead generation",                "Calendar integration",                "Weekly performance reporting",                "Ongoing optimization",                "Advertising budget paid separately"
              ]
            }
          ]}
        />
      </div>

      <div id="final-cta" data-section="final-cta">
        <ContactSplit
          tag="Ready to Scale?"
          title="Build a Predictable Growth System"
          description="Schedule a free 30-minute strategy session. We'll analyze your business, identify lead generation gaps, and show you exactly how Wyzn Media's AI system can implement predictable client acquisition for you."
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQEKReAIV3UyO8Ouxkrw1K5Rfl/an-illustration-depicting-business-chall-1772516711517-90db4dec.png"
          imageAlt="Growth system visualization"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Book Free Strategy Call"
          termsText="We respect your privacy. Unsubscribe at any time. By signing up, you agree to our Terms."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",              items: [
                { label: "How It Works", href: "#how-it-works" },
                { label: "AI Automation", href: "#solution" },
                { label: "Pricing", href: "#investment" },
                { label: "Case Studies", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Wyzn Media", href: "#why-wyzn" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#final-cta" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Email: wyznmedia@gmail.com", href: "mailto:wyznmedia@gmail.com" },
                { label: "Instagram", href: "https://www.instagram.com/wyznmedia/" },
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Wyzn Media. All rights reserved. AI Client Acquisition Systems."
        />
      </div>
    </ThemeProvider>
  );
}
