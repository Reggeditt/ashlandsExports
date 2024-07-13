import React from 'react';

const MeetOurTeam = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="text-center">
            <img src="/team-member1.jpg" alt="Team Member" className="w-full h-48 object-cover"/>
            <h3 className="mt-4 text-xl font-bold">Team Member Name</h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
          </div>
          <div className="text-center">
            <img src="/team-member2.jpg" alt="Team Member" className="w-full h-48 object-cover"/>
            <h3 className="mt-4 text-xl font-bold">Team Member Name</h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
          </div>
          <div className="text-center">
            <img src="/team-member3.jpg" alt="Team Member" className="w-full h-48 object-cover"/>
            <h3 className="mt-4 text-xl font-bold">Team Member Name</h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
          </div>
          <div className="text-center">
            <img src="/team-member4.jpg" alt="Team Member" className="w-full h-48 object-cover"/>
            <h3 className="mt-4 text-xl font-bold">Team Member Name</h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
