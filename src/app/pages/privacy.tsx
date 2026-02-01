import { Card } from '@/app/components/card';
import { motion } from 'motion/react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black to-muted">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: February 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card/40 backdrop-blur-sm border-white/10 p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect personal information including your name, email address, phone number, date of birth, 
                and payment details when you register for membership. We also collect fitness assessment data 
                and attendance records to provide you with better service.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                Your information is used to manage your membership, process payments, communicate important updates, 
                and improve our services. We may also use your data to send promotional offers (you can opt-out anytime).
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">3. Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement industry-standard security measures to protect your personal information. Payment 
                data is encrypted and processed through secure payment gateways. We never store complete credit 
                card information on our servers.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">4. Data Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell or rent your personal information to third parties. We may share data with service 
                providers (payment processors, email services) who assist in operating our gym, but they are bound 
                by confidentiality agreements.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">5. Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have the right to access, update, or delete your personal information. You can request a copy 
                of your data or ask us to stop processing it. Contact us to exercise these rights.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">6. Cookies & Tracking</h2>
              <p className="text-gray-300 mb-6">
                Our website uses cookies to enhance user experience and analyze traffic. You can disable cookies 
                in your browser settings, but this may affect website functionality.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">7. Children's Privacy</h2>
              <p className="text-gray-300 mb-6">
                Our services are not intended for children under 16. We do not knowingly collect personal information 
                from children. If you believe we have inadvertently collected such data, please contact us immediately.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">8. Changes to Privacy Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this privacy policy periodically. Changes will be posted on this page with an updated 
                revision date. Continued use of our services after changes constitutes acceptance of the new policy.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">9. Contact Us</h2>
              <p className="text-gray-300 mb-2">
                If you have questions or concerns about our privacy practices, please contact us:
              </p>
              <p className="text-accent">
                SweatOut Health & Fitness<br />
                Anantapur, Srinagar Colony, Andhra Pradesh 515002<br />
                Phone: +91 9885873976<br />
                Email: hello@sweatout.com
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
