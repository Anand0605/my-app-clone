import React from 'react'
import GymMan from "public/image.png"
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={GymMan}
          fill
          alt="Gym man"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />

      {/* Text Content */}
      <div className="flex items-center justify-center pt-64">
        <h1 className="font-bold text-6xl text-black">
          Professional Gym Trainer
        </h1>
      </div>
    </div>
  );
};

export default HeroPage;