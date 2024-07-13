import ClientLogos from "../components/ClientLogos";
import ServicesBanner from "../components/ServicesBanner";
import ServicesList from "../components/ServicesList";

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