import { useState } from 'react';
import { Button } from '@/app/components/button';
import { Card, CardContent, CardHeader } from '@/app/components/card';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp integration
    const message = `Hi, I'm ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/919885873976?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('Opening WhatsApp to connect with us directly!');
    setFormData({ name: '', phone: '', email: '', goal: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758521960091-4db78cf93a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGZpZ2h0ZXIlMjB3b3Jrb3V0fGVufDF8fHx8MTc2OTc4NzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">WE'RE HERE TO HELP</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Get In </span>
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Visit us in Anantapur or reach out through any channel. We're excited to be part of your fitness journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gradient-to-b from-black to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-32 relative z-10">
            <motion.a
              href="tel:+919885873976"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-white/10 hover:border-accent transition-all">
                <CardContent className="pt-8 p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/20">
                    <Phone className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Call Us</h3>
                  <p className="text-accent font-semibold text-lg">+91 9885873976</p>
                  <p className="text-gray-400 text-sm mt-2">Mon-Sun, 5 AM - 11 PM</p>
                </CardContent>
              </Card>
            </motion.a>

            <motion.a
              href="https://wa.me/919885873976"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border-green-500/30 hover:border-green-500 transition-all">
                <CardContent className="pt-8 p-8 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <MessageCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">WhatsApp</h3>
                  <p className="text-green-400 font-semibold text-lg">Chat with Us</p>
                  <p className="text-gray-400 text-sm mt-2">Quick responses 24/7</p>
                </CardContent>
              </Card>
            </motion.a>

            <motion.a
              href="mailto:hello@sweatout.com"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-white/10 hover:border-accent transition-all">
                <CardContent className="pt-8 p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/20">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
                  <p className="text-accent font-semibold text-lg">hello@sweatout.com</p>
                  <p className="text-gray-400 text-sm mt-2">We reply within 24 hours</p>
                </CardContent>
              </Card>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-black to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-white">Visit Our Facility</h2>
              
              <div className="space-y-6 mb-10">
                <Card className="bg-card/40 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/20 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white text-lg">Our Location</h3>
                      <p className="text-gray-300 leading-relaxed">
                        <strong>SweatOut Health & Fitness</strong><br />
                        Anantapur, Srinagar Colony,<br />
                        Andhra Pradesh 515002<br />
                        India
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Anantapur+Srinagar+Colony+Andhra+Pradesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-sm mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/40 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/20 flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white text-lg">Facility Hours</h3>
                      <div className="text-gray-300 space-y-1">
                        <p>Monday - Sunday: 5:00 AM - 11:00 PM</p>
                        <p className="text-accent text-sm font-semibold">24/7 Access for Elite Members</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="font-bold mb-4 text-white text-xl">Follow Us</h3>
                <p className="text-gray-400 mb-6">
                  Stay updated with workout tips, member transformations, and special offers
                </p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/40 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
                  <p className="text-gray-400">
                    Fill out the form and we'll connect with you via WhatsApp instantly!
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-gray-300 font-semibold">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-black/50 text-white placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2 text-gray-300 font-semibold">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-black/50 text-white placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-300 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-black/50 text-white placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="goal" className="block mb-2 text-gray-300 font-semibold">What brings you here? *</label>
                      <select
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-black/50 text-white"
                      >
                        <option value="">Select an option</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="free-trial">Free Trial Booking</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="group-classes">Group Classes</option>
                        <option value="nutrition">Nutrition Coaching</option>
                        <option value="corporate">Corporate Wellness</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-gray-300 font-semibold">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your fitness goals..."
                        className="w-full px-4 py-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-black/50 text-white placeholder-gray-500 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 text-lg py-6"
                    >
                      Send via WhatsApp →
                    </Button>
                    
                    <p className="text-center text-sm text-gray-500">
                      By submitting, you agree to our Terms & Privacy Policy
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-muted/30 border border-white/10 h-96 rounded-2xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.234!2d77.6!3d14.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SweatOut Gym Location"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">SweatOut Health & Fitness</p>
                    <p className="text-gray-400 text-sm">Srinagar Colony, Anantapur, AP</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Visit us for a FREE facility tour and complimentary fitness consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919885873976?text=I'd%20like%20to%20book%20a%20free%20trial" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="primary" className="text-lg px-10 py-6">
                  Book Free Trial
                </Button>
              </a>
              <a href="tel:+919885873976">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10">
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}