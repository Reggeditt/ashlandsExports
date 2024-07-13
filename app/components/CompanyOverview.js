import React from 'react';

const CompanyOverview = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <ul className="space-y-4">
            <li className="bg-red-500 text-white py-2 px-4">Company Overview</li>
            <li className="py-2 px-4 border">Aspiration & Vision</li>
            <li className="py-2 px-4 border">Strength</li>
            <li className="py-2 px-4 border">Quality Policy</li>
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
          <h2 className="text-3xl font-bold">Company Overview</h2>
          <img src="/company-overview.jpg" alt="Company Overview" className="w-full h-64 object-cover mt-4" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Clients Testimonial</h3>
            <div className="mt-4 p-4 bg-gray-100">
              <p className="italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <p className="mt-4 font-semibold">- John Doe</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Why Choose Us?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <i className="fas fa-thumbs-up"></i>
                </div>
                <p>We Are Trusted</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <i className="fas fa-lock"></i>
                </div>
                <p>The Best Security</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <i className="fas fa-check-circle"></i>
                </div>
                <p>100% Guarantee</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <p>Quick Location</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <p className="font-bold text-xl">578</p>
                <p>Project Done</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <i className="fas fa-users"></i>
                </div>
                <p className="font-bold text-xl">354</p>
                <p>Permanent Clients</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <i className="fas fa-truck"></i>
                </div>
                <p className="font-bold text-xl">142</p>
                <p>Owned Vehicles</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <i className="fas fa-user-friends"></i>
                </div>
                <p className="font-bold text-xl">67</p>
                <p>Support Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
