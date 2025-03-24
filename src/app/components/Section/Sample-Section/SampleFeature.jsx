import React from 'react';
import featureImage1 from '../../../Assets/sample-Image/feature2.png';
import featureImage2 from '../../../Assets/sample-Image/feature3.svg';
import featureImage3 from '../../../Assets/sample-Image/feature4.png';
import SampleFeatureCard from '../../ui/SampleFeatureCard';
import SectionHeader from '../../shared/SectionHeader';

function SampleFeature() {
  const featuresData = [
    {
      image: featureImage1,
      title: 'Discover Your Niche',
      description:
        'From beauty must-haves to tech treasures, hand-pick campaigns that speak to your expertise and spark your curiosity.',
      style: 'w-full object-contain h-64 p-4',
    },
    {
      image: featureImage2,
      title: 'Unbox Joy',
      style: 'w-full object-contain h-64 p-4 ',
      description:
        'Experience the thrill of receiving premium products at your doorstep. Each package is a new adventure waiting to be shared',
    },
    {
      spacing: true,
      title: 'Share & Shine',
      description:
        'Let your creativity flow through engaging video reviews. Your authentic voice helps others while rewards flow your way.',
    },
    {
      image: featureImage3,
      style: 'w-full object-cover object-bottom h-72 ',
    },
  ];

  return (
    <div>
      <SectionHeader
        tag="Features"
        title="Your Path to Product Paradise"
        subTitle="Get paid to sample products you’ve always wanted to try. Just claim an offer, fill in your address, and we’ll send it to you for free"
        color={'text-[#fd945c]'}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-12">
        {featuresData.map((feature, index) => (
          <div key={index} className="w-full">
            <SampleFeatureCard index={index} {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SampleFeature;
