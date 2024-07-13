import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import GalleryNews from "./components/GalleryNews";
import ServiceProcess from "./components/ServiceProcess";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <WhyChooseUs />
      <ServiceProcess />
      <Testimonial />
      <GalleryNews />
      <FAQ />
    </>

  );
}
