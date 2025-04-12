import React from 'react';
import SectionHeader from '../../shared/SectionHeader';
import { Button } from '@/components/ui/button';
import elips from '@/app/Assets/sample-Image/Ellipse 137.png';
import Image from 'next/image';
import Link from 'next/link';
function Pricing() {
  const pricingData = [
    {
      pricing: 'Image Review: $15 per review',
    },
    {
      pricing: 'Video Review: $30 per review',
    },
    {
      pricing: 'Platform Fee: 15% of total',
    },
  ];

  return (
    <div className="w-full relative  backdrop-blur-2xl bg-transparent  px-4 md:px-8 lg:px-16">
      <SectionHeader
        tag="Pricing"
        title="Flexible Pay-As-You-Go Pricing"
        subTitle="We believe in complete openness. With Sampli, you'll see:"
      />

      <div className=" flex flex-col bg-white md:flex-row items-center justify-between  shadow rounded-3xl p-6 md:p-12 gap-6">
        {/* Pricing Breakdown */}
        <div className="flex  flex-col items-start w-full md:w-1/2 space-y-4">
          <h1 className="text-gray-900 text-2xl font-bold">
            Pricing Breakdown
          </h1>
          <ul className="text-gray-600 space-y-2">
            {pricingData.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm md:text-xl ml-2"
              >
                <Image width={15} height={15} src={elips} alt="icons" />{' '}
                {item?.pricing}
              </li>
            ))}
          </ul>
          <Link href={'https://rad-treacle-994f4a.netlify.app/choose-role'}>
            <Button className="!border-blue-600  !px-6 md:!text-2xl !mt-8 !py-2 !text-blue-600 !hover:bg-blue-600 hover:!text-white hover:!bg-blue-600 !transition-all !border-2 !bg-transparent !rounded-lg">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Enterprise Solutions */}
        <div className="backdrop-blur-3xl bg-[#F8F8F8] shadow-lg p-6 md:p-8 rounded-2xl text-center w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Enterprise Solutions
          </h1>
          <p className="text-gray-700 mt-2">
            Need a custom solution for your business?
          </p>
          <Link href="/contact">
            <Button className="mt-4 px-6 py-2  bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Contact Us
            </Button>
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            No Monthly Charges • No Contracts • Flexible Pricing
          </p>
        </div>
      </div>
      <div className="gradient-ellipse-v3  z-[-1]"></div>
    </div>
  );
}

export default Pricing;
