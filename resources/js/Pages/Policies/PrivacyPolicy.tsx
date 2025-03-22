import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';

export default function PrivacyPolicy() {
  return (
    <>
      <Head title="Privacy Policy" />
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
                  Privacy Policy
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
                  At Pelican Custom Joinery, we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our website 
                  and tell you about your privacy rights and how the law protects you.
                </p>
                
                <h2>2. Information We Collect</h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul>
                  <li><strong>Identity Data</strong> includes first name, last name, title.</li>
                  <li><strong>Contact Data</strong> includes email address, telephone number, and address.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                  <li><strong>Usage Data</strong> includes information about how you use our website.</li>
                </ul>
                
                <h2>3. How We Use Your Information</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul>
                  <li>To provide you with information or services that you request from us.</li>
                  <li>To perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
                
                <h2>4. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
                
                <h2>5. Data Retention</h2>
                <p>
                  We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
                </p>
                
                <h2>6. Your Legal Rights</h2>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul>
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
                
                <h2>7. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> info@pelicanjoinery.com<br />
                  <strong>Phone:</strong> +61 3 9123 4567<br />
                  <strong>Address:</strong> 123 Joinery Street, Melbourne, VIC 3000
                </p>
                
                <h2>8. Changes to This Privacy Policy</h2>
                <p>
                  We reserve the right to update this privacy policy at any time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this policy.
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