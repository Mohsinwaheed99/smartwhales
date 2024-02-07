'use client';
import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="relative justify-between md:flex">
      <div className="lg:basis-[256px] 2xl:basis-[256px]">
        <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </div>
        <div className="lg:basis-10/12 2xl:basis-[91%] relative h-screen overflow-y-scroll xl:basis-10/12 2xl:basis-10/12 md:basis-full overflow-hidden">
          <Navbar toggleDrawer={toggleDrawer} />
            <div className="mt-[26px] md:mr-[30px] xl:ml-[30px] mb-6 min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    </section>
  );
};

export default DashLayout;
