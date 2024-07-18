import Image from 'next/image';
import React from 'react';

const MeetOurTeam = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col justify-center items-center" >
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8"> */}
          <div className="text-center">
            <Image width={200} height={200} src="/team-member1.jpg" alt="Team Member" className="w-full h-48 object-cover"/>
            <h3 className="mt-4 text-xl font-bold">Mr. P. Y. Gyamfi</h3>
            <p className="text-gray-600">Chief Executive Officer</p>
          </div>
          
        {/* </div> */}
      </div>
    </div>
  );
};

export default MeetOurTeam;
