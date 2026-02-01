import { Link } from 'react-router';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-4 mb-6 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Dumbbell className="h-10 w-10 text-accent" />
              </motion.div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent logo-text">
                SWEATOUT
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Anantapur's premier fitness destination. Transform your body, elevate your mind, achieve your potential.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://www.instagram.com/sweatout_team_rz?igsh=MWZwdnY5ZXMyYW9tZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-400 hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Our Trainers
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-400 hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Personal Training
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Group Fitness Classes
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Nutrition Consulting
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Yoga & Meditation
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Body Composition Analysis
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Corporate Wellness
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">
                  <strong className="text-white">Sweatout Health & Fitness</strong><br />
                  Srinagar Colony, Anantapur,<br />
                  Andhra Pradesh 515002
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+919885873976" className="text-gray-400 hover:text-accent transition-colors">
                  +91 98858 73976
                </a>
              </li>
            </ul>
            
            {/* Local Business Keywords */}
            <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/10">
              <p className="text-xs text-gray-500 leading-relaxed">
                🏋️‍♂️ <strong className="text-accent">Best Gym in Anantapur</strong> with Personal Training & Fitness Programs
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} SweatOut Health & Fitness. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Developed by{' '}
                <a 
                  href="https://ananthadigital.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Anantha Web Solutions Pvt Ltd
                </a>
              </p>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-accent transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}