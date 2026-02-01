import { Card } from '@/app/components/card';
import { motion } from 'motion/react';

export function TermsPage() {
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
              Terms & Conditions
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
              <h2 className="text-3xl font-bold text-white mb-4">1. Membership Agreement</h2>
              <p className="text-gray-300 mb-6">
                By purchasing a membership at SweatOut Health & Fitness, you agree to comply with all gym rules, 
                regulations, and policies. Memberships are non-transferable and for personal use only.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">2. Payment Terms</h2>
              <p className="text-gray-300 mb-6">
                All membership fees must be paid in advance. Monthly memberships will auto-renew unless cancelled 
                at least 7 days before the renewal date. Annual memberships are paid in full upfront.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">3. Cancellation Policy</h2>
              <p className="text-gray-300 mb-6">
                Monthly memberships can be cancelled with 30 days written notice. Annual memberships are non-refundable 
                but can be frozen for medical reasons with valid documentation (doctor's certificate required).
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">4. Facility Usage</h2>
              <p className="text-gray-300 mb-6">
                Members must follow all posted rules and staff instructions. Proper athletic attire and closed-toe 
                shoes are required at all times. Members are responsible for their personal belongings.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">5. Health & Safety</h2>
              <p className="text-gray-300 mb-6">
                Members must be physically fit to use gym facilities. We recommend consulting a physician before 
                starting any exercise program. SweatOut is not liable for injuries sustained during workouts.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">6. Code of Conduct</h2>
              <p className="text-gray-300 mb-6">
                Respectful behavior is required. Harassment, discrimination, or disruptive conduct will result in 
                immediate membership termination without refund. Equipment must be returned to proper storage after use.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">7. Guest Policy</h2>
              <p className="text-gray-300 mb-6">
                Guest passes are available as per your membership tier. All guests must sign a waiver and follow 
                all gym rules. Members are responsible for their guests' conduct.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-8">8. Contact Us</h2>
              <p className="text-gray-300 mb-2">
                For questions about these terms, please contact us:
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
