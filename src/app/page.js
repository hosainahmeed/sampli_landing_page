import dynamic from 'next/dynamic';
import Features from './components/Section/features/Features';
import WorkProcess from './components/Section/work-process/WorkProcess';
import TestimonialCarousel from './components/Section/testomonials/TestimonialCarousel';
import Pricing from './components/Section/pricing/Pricing';
import FrequentlyAskedQuestions from './components/Section/pricing/Frequently Asked Questions/FrequentlyAskedQuestions';
const LandingPage = dynamic(() => import('./components/Section/LandingPage'), {
  loading: () => <p>Loading...</p>,
});

function Page() {
  return (
    <div className="flex  items-center flex-col gap-24">
      <div className="heroPatarns">
        <LandingPage />
      </div>
      <Features />
      <WorkProcess />
      <TestimonialCarousel />
      <Pricing />
      <FrequentlyAskedQuestions />
    </div>
  );
}

export default Page;
