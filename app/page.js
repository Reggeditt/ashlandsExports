import Banner from "./Banner";
import FAQ from "./FAQ";
import GalleryNews from "./GalleryNews";
import ServiceProcess from "./ServiceProcess";
import Services from "./Services";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";


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
