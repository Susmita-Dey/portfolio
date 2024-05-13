import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="border-2 rounded-md">
      <div className="flex space-x-6">
        {/* image */}
        <div className="border">
          <Image src="/verel.svg" alt="profile-photo" width={500} height={500} />
        </div>
        {/* my name and little about with CTA */}
      </div>
    </div>
  );
};

export default HeroSection;
