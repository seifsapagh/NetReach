import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  FAQSection,
  FooterCTA,
} from '../components';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <FooterCTA />
    </>
  );
};
