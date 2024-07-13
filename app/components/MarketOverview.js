import MarketSegment from "./MarketsSegment";


const MarketsOverview = () => {
  const segments = [
    { image: '/market1.jpg', title: 'North America', description: 'Market description for North America.' },
    { image: '/market2.jpg', title: 'Europe', description: 'Market description for Europe.' },
    { image: '/market3.jpg', title: 'Asia', description: 'Market description for Asia.' },
    // Add more market segments as needed
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Market Segments</h2>
      <div className="flex flex-wrap -mx-4">
        {segments.map((segment, index) => (
          <MarketSegment key={index} image={segment.image} title={segment.title} description={segment.description} />
        ))}
      </div>
    </div>
  );
};

export default MarketsOverview;
