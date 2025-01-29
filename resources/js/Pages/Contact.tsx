import React from 'react';
import { Head } from '@inertiajs/react';
import ContactComponent from '@/Components/Contact';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const Contact = () => {
  return (
    <>
      <Head title="Contact - Pelican Joinery" />
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <ContactComponent />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact; 