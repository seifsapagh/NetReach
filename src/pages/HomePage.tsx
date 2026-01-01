import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  FAQSection,
  FooterCTA,
  Contact,
} from '../components';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <Contact />
      <FooterCTA />
    </>
  );
};
