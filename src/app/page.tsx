import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueCards from "@/components/ValueCards";
import IndexCards from "@/components/IndexCards";
import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SparkleParticles from "@/components/SparkleParticles";

export default function Home() {
    return (
        <main className="relative">
            <SparkleParticles />
            <Header />
            <Hero />
            <ValueCards />
            <IndexCards />
            <Calculator />
            <Footer />
            <BackToTop />
        </main>
    );
}
