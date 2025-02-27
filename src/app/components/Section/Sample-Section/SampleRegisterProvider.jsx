import { Button } from 'antd';
import React from 'react';

function SampleRegisterProvider() {
  return (
    <div className="bg-[#313C4D] relative rounded-2xl  mb-12 w-full p-8  lg:p-16 text-white flex items-center justify-between">
      <div className="flex items-end md:flex-row flex-col justify-between">
        <div>
          <h1 className="text-3xl mb-4">Ready to get started?</h1>
          <p className="tracking-wider max-w-screen-md">
            Sign up today to access exclusive premium offers and earn money by
            sharing your reviews. Join our community and start making an impact
            with your insights!
          </p>
        </div>
        <div>
          <Button className="px-4 py-6 text-xl font-semibold" type="primary">
            Get started Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SampleRegisterProvider;
