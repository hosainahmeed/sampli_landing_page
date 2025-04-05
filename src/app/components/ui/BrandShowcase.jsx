import React from 'react';
import threeM from '../../Assets/worksWith/3m.png';
import abbott from '../../Assets/worksWith/abbott.png';
import dealmed from '../../Assets/worksWith/dealmed.webp';
import dukal from '../../Assets/worksWith/dukal.webp';
import wel from '../../Assets/worksWith/wel.png';
import dynarex from '../../Assets/worksWith/dynarex.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const images = [threeM, abbott, dealmed, dukal, wel, dynarex];

function BrandShowcase() {
  const marqueeItems = [
    { image: threeM },
    { image: abbott },
    { image: dealmed },
    { image: dukal },
    { image: wel },
    { image: dynarex },
  ];
  return (
    <div className="flex items-center gap-12 px-2 justify-between w-full">
      <Marquee gradient={true} gradientColor="#F8F8F8" speed={40}>
        <div className="flex items-center">
          {images
            .fill(marqueeItems)
            .flat()
            .map((item, index) => (
              <Image
                placeholder="blur"
                blurDataURL="data:..."
                key={index}
                src={item?.image}
                width={100}
                height={100}
                alt="brand showcase"
                className=" w-16 md:w-20 xl:w-24 mx-12"
              />
            ))}
        </div>
      </Marquee>
    </div>
  );
}

export default BrandShowcase;
