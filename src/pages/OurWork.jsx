import React from "react";
import CraftsmanshipSection from "../components/CraftmanshipSection";

const OurWork = () => {
  return (
    <main className="min-h-screen w-full 
                   bg-white 
                   overflow-x-hidden 
                   transform-gpu will-change-transform">
      <div className="max-w-[2000px] 
                   mx-auto 
                   px-4 sm:px-6 md:px-8 lg:px-12 
                   py-16 sm:py-20 md:py-24 lg:py-32">
        <CraftsmanshipSection />
      </div>
    </main>
  );
};

export default OurWork;
