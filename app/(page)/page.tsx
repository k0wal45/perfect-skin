import CallToBook from "@/components/CallToBook";
import Contact from "@/components/Contact/Contact";
import Experts from "@/components/Experts/Experts";
import Galery from "@/components/Galery/Galery";
import Hero from "@/components/Hero/Hero";
import Introduction from "@/components/Introduction/Introduction";
import Map from "@/components/Map";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
	return <main className="overflow-x-hidden max-w-screen">
    <Hero />
    <Introduction />
    <Services />
    <Stats />
    <Pricing />
    <CallToBook />
    <Experts />
    <Testimonials />
    <Map />
    <Contact />
    <Galery />

  </main>;
}
