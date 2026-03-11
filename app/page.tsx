import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import CertificationsSection from "@/components/certifications-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white">
      <Navbar />
      <section id="home">
        <HeroCarousel />
      </section>
      <section id="about" className="py-16 bg-brand-white">
        <AboutSection />
      </section>
      <section id="products" className="py-16 bg-gray-50">
        <ProductsSection />
      </section>
      <section id="certifications" className="py-16 bg-brand-white">
        <CertificationsSection />
      </section>
      <section id="team" className="py-16 bg-gray-50">
        <TeamSection />
      </section>
      <section id="contact" className="py-16 bg-brand-white">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
