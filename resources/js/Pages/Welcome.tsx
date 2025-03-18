import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import Services from '@/Components/Services';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';

export default function Welcome(){
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <div className="content-container">
                    <section className="content-section">
                        <Hero />
                    </section>
                    <section className="content-section">
                        <div className="section-content">
                            <Services />
                        </div>
                    </section>
                    <section className="content-section">
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
