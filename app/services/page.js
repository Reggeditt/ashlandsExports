import ClientLogos from "./ClientLogos";
import ServicesBanner from "./ServicesBanner";
import ServicesList from "./ServicesList";

const Services = () => {
  return (
    <div>
      <ServicesBanner />
      <ServicesList />
      <ClientLogos />
    </div>
  );
};

export default Services;