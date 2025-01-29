import About from '@/Components/About';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import Services from '@/Components/Services';
import Portfolio from '@/Components/Portfolio';
import Process from '@/Components/Process';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';

export default function Welcome(){
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <div className="snap-container">
                    <section className="snap-section">
                        <Hero />
                    </section>
                    <section className="snap-section">
                        <div className="section-content">
                            <About />
                        </div>
                    </section>
                    <section className="snap-section">
                        <div className="section-content">
                            <Services />
                        </div>
                    </section>
                    <section className="snap-section">
                        <div className="section-content">
                            <Portfolio />
                        </div>
                    </section>
                    <section className="snap-section">
                        <div className="section-content">
                            <Process />
                        </div>
                    </section>
                    <section className="snap-section">
                        <div className="section-content">
                            <Contact />
                        </div>
                    </section>
                    <section className="footer-section">
                        <Footer />
                    </section>
                </div>
            </div>
        </>
    );
}
