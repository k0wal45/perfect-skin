import CallToBook from "@/components/CallToBook";
import Hero from "@/components/Hero/Hero";
import Introduction from "@/components/Introduction/Introduction";
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
    <Testimonials />

  </main>;
}
