import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { QuotationSection } from './components/QuotationSection';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { PaintCanvas } from './components/PaintCanvas';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFB] text-slate-800 relative">
      {/* Background Interactive Canvas */}
      <PaintCanvas />

      {/* Top Contact Bar */}
      <TopBar />

      {/* Navigation Header */}
      <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

      {/* Mobile Drawer Navigation */}
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <ProjectsSection />
        <ReviewsSection />
        <QuotationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Chatbot */}
      <ChatbotWidget />
    </div>
  );
}
