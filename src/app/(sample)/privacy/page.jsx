import PrivacyPolicy from '@/app/components/Section/Sample-Section/conditionsSections/PrivacyPolicy';
import TermsAndConditions from '@/app/components/Section/Sample-Section/conditionsSections/TermsAndConditions';
import PageHeader from '@/app/components/shared/PageHeader';
import React from 'react';

function page() {
  return (
    <div>
      <PageHeader
        title={'Privacy Policy'}
        subTitle={'Last updated:04/05/2022'}
      />
      <div className="area-xl">
        <PrivacyPolicy />
      </div>
    </div>
  );
}

export default page;
