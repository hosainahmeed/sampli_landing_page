import RegisterReffer from '@/app/components/Section/RegisterReffer/RegisterReffer';
import AboutUs from '@/app/components/Section/Sample-Section/conditionsSections/AboutUs';
import PageHeader from '@/app/components/shared/PageHeader';
import React from 'react';

function page() {
  return (
    <div>
      <PageHeader title={'About Us'} />
      <div className='area-xl'>
        <AboutUs />
        <RegisterReffer />
      </div>
    </div>
  );
}

export default page;
