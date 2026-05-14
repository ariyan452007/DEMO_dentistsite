import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import DoctorProfile from "@/components/sections/DoctorProfile";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BeforeAfterGallery from "@/components/sections/BeforeAfterGallery";
import Testimonials from "@/components/sections/Testimonials";
import BookingForm from "@/components/sections/BookingForm";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <DoctorProfile />
      <WhyChooseUs />
      <BeforeAfterGallery />
      <Testimonials />
      <BookingForm />
      <FaqSection />
      <ContactSection />
    </>
  );
}
