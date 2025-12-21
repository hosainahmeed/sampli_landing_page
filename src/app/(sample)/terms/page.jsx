
import TermsAndConditions from '@/app/components/Section/Sample-Section/conditionsSections/TermsAndConditions';
import PageHeader from '@/app/components/shared/PageHeader';
import React from 'react';

function page() {
  return (
    <div>
      <PageHeader title={'Terms of service'}  />
      <div className="area-xl">
        <TermsAndConditions />
      </div>
    </div>
  );
}

export default page;
