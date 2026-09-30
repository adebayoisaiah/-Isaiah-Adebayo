import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AiAgentsSection } from './components/AiAgentsSection';
import { AutomationWorkflowSection } from './components/AutomationWorkflowSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ToolsSection } from './components/ToolsSection';
import { AboutSection } from './components/AboutSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { FloatingContact } from './components/FloatingContact';
import { ServiceItem, PortfolioProject } from './types';
import { FadeInSection } from './components/FadeInSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string>(
    'AI Agent Development'
  );
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<PortfolioProject | null>(null);

  // Intersection observer to track active section smoothly
  useEffect(() => {
    const sectionIds = ['home', 'services', 'ai-agents', 'automation', 'portfolio', 'about', 'faq', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-30% 0px -50% 0px' }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForConsultation(serviceName);
    }
    setIsConsultationOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <FadeInSection delay={50}>
          <Hero
            onOpenConsultation={() => handleOpenConsultation()}
            onViewWork={() => handleScrollToSection('portfolio')}
          />
        </FadeInSection>

        {/* 3. Services Section */}
        <FadeInSection>
          <ServicesSection
            onSelectService={(service) => setSelectedServiceForModal(service)}
            onDiscussProject={() => handleScrollToSection('contact')}
          />
        </FadeInSection>

        {/* 4. AI Agents Section */}
        <FadeInSection>
          <AiAgentsSection
            onBuildAgent={() => handleOpenConsultation('AI Agent Development')}
          />
        </FadeInSection>

        {/* 5. Automation Workflow Section */}
        <FadeInSection>
          <AutomationWorkflowSection
            onAutomateProcess={() => handleOpenConsultation('Business Automation Pipeline')}
          />
        </FadeInSection>

        {/* 6. How It Works Section */}
        <FadeInSection>
          <HowItWorksSection />
        </FadeInSection>

        {/* 7. Selected Projects / Portfolio */}
        <FadeInSection>
          <PortfolioSection
            onSelectProject={(project) => setSelectedProjectForModal(project)}
          />
        </FadeInSection>

        {/* 8. Tools & Technologies Section */}
        <FadeInSection>
          <ToolsSection />
        </FadeInSection>

        {/* 9. About Isaiah */}
        <FadeInSection>
          <AboutSection
            onBuildSomething={() => handleScrollToSection('contact')}
          />
        </FadeInSection>

        {/* 10. Why Work With Me */}
        <FadeInSection>
          <WhyWorkWithMe />
        </FadeInSection>

        {/* 11. FAQ Section */}
        <FadeInSection>
          <FaqSection
            onBookConsultation={() => handleOpenConsultation('General AI & Automation Inquiry')}
            onAskQuestion={() => handleScrollToSection('contact')}
          />
        </FadeInSection>

        {/* 12. Contact Section */}
        <FadeInSection>
          <ContactSection
            onBookConsultation={() => handleOpenConsultation()}
          />
        </FadeInSection>
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedService={selectedServiceForConsultation}
      />

      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBookService={(name) => handleOpenConsultation(name)}
      />

      <ProjectDetailModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
        onInquireSimilar={(title) => handleOpenConsultation(`System like: ${title}`)}
      />
      {/* Persistent Direct Contact: WhatsApp & Phone */}
      <FloatingContact />
    </div>
  );
}
