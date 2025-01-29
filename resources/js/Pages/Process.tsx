import React from 'react';
import { Head } from '@inertiajs/react';
import ProcessComponent from '@/Components/Process';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const Process = () => {
  return (
    <>
      <Head title="Process - Pelican Joinery" />
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <ProcessComponent />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Process; 