import SampleBanner from '@/app/components/Section/Sample-Section/SampleBanner';
import SampleFeature from '@/app/components/Section/Sample-Section/SampleFeature';
import React from 'react';

function page() {
  return (
    <div className="min-h-screen">
      <SampleBanner />
      <SampleFeature />
    </div>
  );
}

export default page;
