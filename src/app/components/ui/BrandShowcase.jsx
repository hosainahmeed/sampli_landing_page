import React from 'react';
import threeM from '../../Assets/worksWith/3m.png';
import abbott from '../../Assets/worksWith/abbott.png';
import dealmed from '../../Assets/worksWith/dealmed.webp';
import dukal from '../../Assets/worksWith/dukal.webp';
import wel from '../../Assets/worksWith/wel.png';
import dynarex from '../../Assets/worksWith/dynarex.png';
import Image from 'next/image';

const images = [threeM, abbott, dealmed, dukal, wel, dynarex];

function BrandShowcase() {
  return (
    <div className="flex items-center justify-between w-full">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={100}
          height={100}
          alt="brand showcase"
        />
      ))}
    </div>
  );
}

export default BrandShowcase;
