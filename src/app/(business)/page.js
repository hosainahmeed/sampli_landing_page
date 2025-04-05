import dynamic from 'next/dynamic';

import WorkProcess from '../components/Section/work-process/WorkProcess';
import TestimonialCarousel from '../components/Section/testomonials/TestimonialCarousel';
import Pricing from '../components/Section/pricing/Pricing';
import FrequentlyAskedQuestions from '../components/Section/pricing/Frequently Asked Questions/FrequentlyAskedQuestions';
import RegisterReffer from '../components/Section/RegisterReffer/RegisterReffer';
import Features from '../components/Section/features/Features';
import BrandShowcase from '../components/ui/BrandShowcase';
import { Spin } from 'antd';
const LandingPage = dynamic(() => import('../components/Section/LandingPage'), {
  loading: () => <Spin size="large" />,
});

function Page() {
  return (
    <div className="flex  items-center flex-col area-xl xl:gap-24 md:gap-16 gap-8">
      <div className="heroPatarns">
        <LandingPage />
      </div>
      <BrandShowcase />
      <Features />
      <WorkProcess />
      <TestimonialCarousel />
      <Pricing />
      <FrequentlyAskedQuestions />
      <RegisterReffer />
    </div>
  );
}

export default Page;
