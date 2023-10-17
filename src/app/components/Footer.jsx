import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Image
          src="/images/Aidan_logo.png"
          alt="logo image"
          className='rounded-full w-[50px] h-[50px] relative lg:w-[80px] lg:h-[80px] ml-4 lg:ml-10 mt-6'
          width={100}
          height={100}
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
