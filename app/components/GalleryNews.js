const GalleryNews = () => {
  return (
    <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold text-center">Recent Gallery</h2>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img src="/gallery1.jpg" alt="Gallery" className="w-full h-40 object-cover"/>
          <img src="/gallery2.jpg" alt="Gallery" className="w-full h-40 object-cover"/>
          <img src="/gallery3.jpg" alt="Gallery" className="w-full h-40 object-cover"/>
          <img src="/gallery4.jpg" alt="Gallery" className="w-full h-40 object-cover"/>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center">Latest News</h2>
        <div className="space-y-4 mt-8">
          <div className="border p-4">
            <h3 className="text-xl font-semibold">News Title</h3>
            <p className="text-sm text-gray-600">28 Feb 2023</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="border p-4">
            <h3 className="text-xl font-semibold">News Title</h3>
            <p className="text-sm text-gray-600">16 Apr 2023</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="border p-4">
            <h3 className="text-xl font-semibold">News Title</h3>
            <p className="text-sm text-gray-600">12 Mar 2023</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryNews;
