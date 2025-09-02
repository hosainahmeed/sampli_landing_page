import { Collapse } from "antd";
import React from "react";

function FrequentlyAskedQuestions() {
  const items = [
    {
      key: "1",
      label: (
        <span className="text-xl !user-select-none">
          How does the free trial work?
        </span>
      ),
      children: (
        <p
          style={{
            paddingInlineStart: 24,
          }}
        >
          Define your target audience and campaign parameters
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <span className="text-xl">Do I need to send out real products?</span>
      ),
      children: (
        <p
          style={{
            paddingInlineStart: 24,
          }}
        >
          Yes—Sampli is all about authentic feedback. During your trial, you can
          send a limited batch of real product samples to testers. This way, you
          see the genuine results you’d get from full campaigns
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <span className="text-xl">Who receives my free product samples?</span>
      ),
      children: (
        <p
          style={{
            paddingInlineStart: 24,
          }}
        >
          Sampli connects you with real, everyday consumers who match your
          target audience. They sign up to test products in exchange for leaving
          honest photo, video, or written reviews
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <span className="text-xl"> Can I choose who reviews my product?</span>
      ),
      children: (
        <p
          style={{
            paddingInlineStart: 24,
          }}
        >
          Yes! You can filter testers by demographics, interests, or location to
          make sure your samples reach the right audience. This ensures that the
          feedback you receive is relevant and useful for your brand.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <span className="text-xl">What happens to the reviews I collect?</span>
      ),
      children: (
        <p
          style={{
            paddingInlineStart: 24,
          }}
        >
          All reviews—photos, videos, and written feedback—are yours to keep.
          You can repurpose this content across your social media, website, or
          ads (with the reviewer’s permission) to build trust and drive more
          sales
        </p>
      ),
    },
  ];
  return (
    <div className="flex items-start lg:flex-row flex-col px-4 py-4 justify-between gap-12">
      <div className="flex-1">
        <h6 className="text-[#EE4B2F]">FAQ</h6>
        <h1 className="text-4xl font-bold">Commonly asked questions</h1>
        <p className="text-xl text-[var(--text-gray-100)]">
          Our FAQ section provides clear answers to common inquiries about using
          our platform, creating campaigns, and engaging with samplers.
        </p>
      </div>
      <div className="!w-full lg:flex-1">
        <Collapse
          accordion
          className="!bg-[#f8f8f8]"
          style={{ width: "100%" }}
          items={items}
          bordered={false}
          defaultActiveKey={["1"]}
        />
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
