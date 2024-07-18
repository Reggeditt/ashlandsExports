'use client'
import React, { useState } from 'react';
import WhyChooseUs from '../WhyChooseUs';
import Image from 'next/image';

const CompanyOverview = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <ul className="space-y-4">
            <li 
              className={currentTab ==='overview'? `bg-red-500 text-white py-2 px-4`:`py-2 px-4 border`} 
              onClick={()=> setCurrentTab('overview')}
            >Company Overview</li>
            <li className={currentTab ==='mission'? `bg-red-500 text-white py-2 px-4`:`py-2 px-4 border`} onClick={()=> setCurrentTab('mission')}>Mission</li>
            <li className={currentTab ==='vision'? `bg-red-500 text-white py-2 px-4`:`py-2 px-4 border`} onClick={()=> setCurrentTab('vision')}>Vision</li>
          </ul>
          <div className="mt-8">
            <h2 className="text-xl font-bold">Latest News</h2>
            <div className="mt-4">
              <div className="mb-4 border-b pb-2">
                <h3 className="font-semibold">News Title</h3>
                <p className="text-sm text-gray-600">16 Apr 2023</p>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="mb-4 border-b pb-2">
                <h3 className="font-semibold">News Title</h3>
                <p className="text-sm text-gray-600">16 Apr 2023</p>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <button className="bg-red-500 text-white py-2 px-4 mt-4">Send Us Quote</button>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className='about-tabs-container min-h-[580px]'>
            {currentTab === 'overview' && <div className='about-tab-content container'>
              <h2 className="text-3xl font-bold">Company Overview</h2>
              <Image src="/images/about/overview.jpg" alt="Company Overview" width={200} height={200} className="w-full h-64 object-cover mt-4 transition delay-150 fade-in" />
              <p className="mt-4 transition delay-300">
                Established in 2017, Ashlands Exports began as a construction and supply company. In 2020, we expanded into farming, focusing on maize, soya beans, snails, and the export of seeds and crop vegetables. Our goal is to enhance our export base to its full potential and explore agro-processing for local consumption and export.
              </p>
              <p className="mt-4 transition delay-350 duration-100">
                We are located in Ashanti and Brong-Ahafo regions of Ghana. Our annual turnover is about $1.7 million. Currently, our main target markets are in the US and Europe, but we are expanding our market focus to recieve requests from anywhere.
              </p>
            </div>}
            {currentTab === 'vision' && <div className='about-tab-content container'>
              <h2 className="text-3xl font-bold">Vision Statement</h2>
              <p className="mt-4">
              At Ashlands Company Ltd., we envision becoming a leading force in sustainable agriculture and agro-processing, transforming farming practices across Ghana and Africa. By leveraging innovative techniques and focusing on quality, we aim to expand our cultivation footprint from 500 acres to 50,000 acres within the next decade. Our commitment is to enhance food security, promote commercial farming, and elevate the export of high-quality agricultural products to global markets, contributing to national development and economic growth.
              </p>
            </div>}
            {currentTab === 'mission' && <div className='about-tab-content container'>
              <h2 className="text-3xl font-bold">Mission Statement</h2>
              <p className="mt-4">
                Our mission is to grow crops and make livestock farming attractive by going beyond subsistence to commercial farming, as we bring a facelift to farming in the form of foodstuffs and raw materials for local consumption and export. To enhance our dream to farm on a space of 500 acres to 50,000 acres by the next ten years.
              </p>
              <p className="mt-4">
              At Ashlands, we believe farming the best way to go in business and national development.
              </p>
            </div>}
          </div>
          {/* <div className="mt-8">
            <h3 className="text-2xl font-bold">Clients Testimonial</h3>
            <div className="mt-4 p-4 bg-gray-100">
              <p className="italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <p className="mt-4 font-semibold">- John Doe</p>
            </div>
          </div> */}
          <div className="mt-8">
            <WhyChooseUs />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
