import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  const services = [
    {
      image: '/images/products/maize.jpg',
      title: 'Maize',
      description: 'Our maize is cultivated using sustainable farming practices to ensure high yield and quality. We supply maize for both local consumption and export, catering to various markets and industries.',
    },
    {
      image: '/images/products/soya.jpg',
      title: 'Soya Beans',
      description: 'We specialize in the production of soya beans, known for their nutritional value and versatility. Our soya beans are grown under optimal conditions to meet the demands of both local and international markets.',
    },
    {
      image: '/images/products/snails.jpg',
      title: 'Snails',
      description: 'Our snail farming operation focuses on providing premium-quality snails for culinary and medicinal purposes. We adhere to best farming practices to ensure the health and quality of our snails.',
    },
    {
      image: '/images/products/seeds.jpg',
      title: 'Seeds',
      description: 'We offer a variety of high-quality seeds for different crops. Our seeds are selected and processed to ensure high germination rates and resistance to diseases, making them ideal for farmers looking to achieve successful harvests.',
    },
    {
      image: '/images/products/crops.jpg',
      title: 'Crop Vegetables',
      description: 'Our range of crop vegetables includes a variety of fresh and nutritious produce. Grown in fertile soils and managed with care, our vegetables are perfect for both local markets and export.',
    },
    {
      image: '/images/products/botanical.jpg',
      title: 'Raw Botanical Plants',
      description: 'We export raw botanical plants that serve as vital ingredients in nutrition and pharmaceuticals. Our plants are sourced and processed to retain their natural benefits, catering to the health and wellness industry.',
    },
    {
      image: '/images/products/herbs.jpg',
      title: 'Natural Plants, Seeds, and Herbs',
      description: 'We supply natural plants, seeds, and herbs used in cosmetics, aromatics, and medicinal applications. Our products are carefully harvested and prepared to ensure they meet the highest quality standards for our clients worldwide.',
    },
    {
      image: '/images/products/agro.jpg',
      title: 'Agro-Processed Products',
      description: 'In addition to raw agricultural products, we are expanding into agro-processing to create value-added products for local consumption and export. This includes processed foods and raw materials for various industries.',
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
