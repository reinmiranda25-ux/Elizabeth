import React from 'react';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import WelcomeSection from '../components/home/WelcomeSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <WelcomeSection />
      <ServicesOverview />
      <CTASection />
    </div>
  );
};

export default Home;
