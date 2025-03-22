import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';

export default function Terms() {
  return (
    <>
      <Head title="Terms & Conditions" />
      <div className="min-h-screen">
        <Navbar />
        
        <div className="mt-24 pb-20">
          <div className="container-custom py-16 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h1 className="text-4xl lg:text-5xl text-primary font-heading mb-6">
                  Terms & Conditions
                </h1>
                <div className="h-1 w-20 bg-secondary"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-gray-700 mb-6">
                  Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                
                <h2>1. Introduction</h2>
                <p>
                  These terms and conditions govern your use of the Pelican Custom Joinery website and the services we provide. 
                  By accessing our website or using our services, you agree to these terms in full. If you disagree with any part of these terms, 
                  you must not use our website or services.
                </p>
                
                <h2>2. Service Description</h2>
                <p>
                  Pelican Custom Joinery provides custom joinery, cabinetry, and woodworking services for residential and commercial clients. 
                  Our services include but are not limited to custom furniture creation, kitchen design and installation, interior joinery, 
                  restoration work, and commercial joinery projects.
                </p>
                
                <h2>3. Quotations and Pricing</h2>
                <p>
                  All quotations provided by Pelican Custom Joinery are subject to the following conditions:
                </p>
                <ul>
                  <li>Quotations are valid for 30 days from the date of issue unless otherwise specified.</li>
                  <li>Prices are subject to change if the scope of work changes or if there are unforeseen circumstances requiring additional materials or labor.</li>
                  <li>A deposit of 50% is required to commence work unless other payment terms have been agreed upon in writing.</li>
                  <li>Final payment is due upon completion of the project and before installation, unless otherwise agreed.</li>
                </ul>
                
                <h2>4. Intellectual Property</h2>
                <p>
                  All intellectual property rights in our website and in the materials published on it are owned by Pelican Custom Joinery or our licensors. 
                  These works are protected by copyright laws and treaties around the world. All such rights are reserved.
                </p>
                <p>
                  You may view, download, and print pages from our website for your personal use, subject to the restrictions set out in these terms and conditions.
                </p>
                
                <h2>5. Project Timeframes</h2>
                <p>
                  While we strive to complete all projects within the estimated timeframe, Pelican Custom Joinery cannot guarantee exact completion dates. 
                  Factors outside our control such as material availability, weather conditions, and site access may affect project timelines.
                </p>
                
                <h2>6. Warranty and Liability</h2>
                <p>
                  Our joinery work is guaranteed against defects in workmanship for a period of 7 years from the date of completion.
                  This warranty does not cover:
                </p>
                <ul>
                  <li>Damage caused by misuse, neglect, or lack of maintenance</li>
                  <li>Normal wear and tear</li>
                  <li>Problems arising from modifications made by others</li>
                  <li>Issues caused by settling of the building or structural changes</li>
                </ul>
                <p>
                  To the maximum extent permitted by law, we exclude all representations, warranties, and conditions relating to our website and services.
                </p>
                
                <h2>7. Cancellation Policy</h2>
                <p>
                  If you wish to cancel a project after work has commenced:
                </p>
                <ul>
                  <li>You will be liable for payment for all work completed up to the date of cancellation.</li>
                  <li>If materials have been ordered specifically for your project, you will be liable for the cost of these materials.</li>
                  <li>Deposits are non-refundable once work has commenced or materials have been ordered.</li>
                </ul>
                
                <h2>8. Dispute Resolution</h2>
                <p>
                  In the event of a dispute, both parties agree to attempt to resolve the matter through direct negotiation before pursuing legal action.
                  If an amicable resolution cannot be reached, the dispute shall be subject to the laws of Victoria, Australia.
                </p>
                
                <h2>9. Contact Information</h2>
                <p>
                  If you have any questions about these terms and conditions, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> info@pelicanjoinery.com<br />
                  <strong>Phone:</strong> +61 3 9123 4567<br />
                  <strong>Address:</strong> 123 Joinery Street, Melbourne, VIC 3000
                </p>
                
                <h2>10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to our website.
                  Your continued use of our website and services after any changes indicates your acceptance of the modified terms.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
} 