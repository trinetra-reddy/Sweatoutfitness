import { Card, CardContent, CardHeader } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEOHead } from '@/app/components/seo-head';
import { Target, Users, Award, Heart, Zap, Shield, Trophy, TrendingUp, Map, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To transform Andhra Pradesh into a healthier, fitter community by providing world-class fitness facilities, expert guidance, and unwavering support to every member.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To be India\'s most trusted fitness brand, setting new standards in health, wellness, and member experience across the nation.',
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'A diverse, inclusive family where everyone from beginners to athletes finds their place and achieves their personal best.',
    },
    {
      icon: Award,
      title: 'Our Promise',
      description: 'Delivering excellence in every aspect - from equipment and training to hygiene and customer service. Your success is our success.',
    },
  ];

  const milestones = [
    { year: '2010', event: 'SweatOut Founded', description: 'Started with a vision to revolutionize fitness in Anantapur' },
    { year: '2015', event: '1000 Members', description: 'Reached our first major milestone of 1000 active members' },
    { year: '2018', event: 'Facility Expansion', description: 'Expanded to 15,000 sq ft premium facility' },
    { year: '2020', event: 'Digital Integration', description: 'Launched mobile app and online training programs' },
    { year: '2023', event: '5000+ Members', description: 'Became Andhra Pradesh\'s largest premium gym' },
    { year: '2026', event: 'Regional Recognition', description: 'Awarded "Best Gym in South India"' },
  ];

  const facilities = [
    { name: 'Premium Cardio Zone', description: 'Latest Technogym treadmills, bikes, and ellipticals' },
    { name: 'Free Weights Arena', description: 'Complete range of dumbbells, barbells, and plates' },
    { name: 'Functional Training Area', description: 'TRX, kettlebells, battle ropes, and more' },
    { name: 'Group Fitness Studios', description: 'Spacious studios for Zumba, Yoga, and HIIT classes' },
    { name: 'Personal Training Zones', description: 'Private areas for one-on-one coaching' },
    { name: 'Recovery & Wellness', description: 'Steam rooms, sauna, and massage therapy' },
    { name: 'Nutrition Center', description: 'Protein bar and diet consultation services' },
    { name: 'Changing Rooms', description: 'Premium lockers, showers, and amenities' },
  ];

  const achievements = [
    { icon: Trophy, number: '5000+', label: 'Active Members' },
    { icon: Award, number: '20+', label: 'Certified Trainers' },
    { icon: TrendingUp, number: '15+', label: 'Years of Excellence' },
    { icon: Shield, number: '100%', label: 'Safety Standards' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Us – Sweatout Health & Fitness Anantapur | Our Story & Mission"
        description="Sweatout Health & Fitness in Anantapur is a premier gym with expert trainers, modern equipment, and customized fitness programs for weight loss, muscle gain, and overall wellness."
        keywords="about Sweatout gym Anantapur, fitness center Srinagar Colony, gym history Anantapur, certified trainers Anantapur, best gym in Andhra Pradesh"
      />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758957646695-ec8bce3df462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njk3ODczODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About SweatOut"
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
              <span className="text-accent font-semibold">OUR STORY</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Building India's </span>
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Fitness Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Since 2010, we've been transforming lives in Anantapur and beyond. 
              Our journey is your journey to a healthier, stronger you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-muted -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-card/40 backdrop-blur-sm border-white/10 text-center p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 border border-accent/20">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <div className="text-4xl font-bold text-accent mb-2">{item.number}</div>
                      <div className="text-gray-400">{item.label}</div>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-black to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Our </span>
                  <span className="text-accent">Journey</span>
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Founded in 2010 in the heart of Anantapur, SweatOut began with a simple yet powerful vision: 
                    to create a fitness space that combines international standards with an understanding of Indian lifestyles and needs.
                  </p>
                  <p className="text-lg">
                    What started as a modest 5,000 sq ft facility has grown into Anantapur's premier fitness destination, 
                    spanning 15,000 sq ft of cutting-edge equipment, world-class training zones, and state-of-the-art amenities.
                  </p>
                  <p className="text-lg">
                    Our success is built on three pillars: <span className="text-accent font-semibold">exceptional trainers</span>, 
                    <span className="text-accent font-semibold"> premium equipment</span>, and most importantly, 
                    <span className="text-accent font-semibold"> our amazing community</span> of over 5,000 members 
                    who inspire us every single day.
                  </p>
                  <p className="text-lg">
                    Today, we're not just a gym - we're a movement. A movement towards healthier lifestyles, 
                    stronger bodies, and a fitter India. And we're just getting started.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1637870473618-8c9fa7d11f0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaXRuZXNzJTIwY2VudGVyJTIwZGFya3xlbnwxfHx8fDE3Njk3ODczODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Facility"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-2xl blur-3xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Our Core </span>
                <span className="text-accent">Values</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-card/30 backdrop-blur-sm border-white/10 p-8 h-full hover:border-accent/50 transition-all">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20 flex-shrink-0">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-black to-muted relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="text-accent">Milestones</span>
              </h2>
              <p className="text-xl text-gray-400">
                A journey of growth, innovation, and community
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="bg-card/40 backdrop-blur-sm border-white/10 p-6 hover:border-accent/50 transition-all">
                        <div className="text-accent font-bold text-3xl mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </Card>
                    </div>
                    
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-accent rounded-full border-4 border-black flex items-center justify-center">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-black to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">World-Class </span>
                <span className="text-accent">Facilities</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                15,000 sq ft of premium equipment and training zones designed for your success
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-white/10 p-6 text-center h-full hover:border-accent/50 transition-all">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/20">
                      <Zap className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-white mb-2 text-lg">{facility.name}</h3>
                    <p className="text-gray-400 text-sm">{facility.description}</p>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Visit Us In </span>
                  <span className="text-accent">Anantapur</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Conveniently located in Srinagar Colony, we're proud to serve the Anantapur community 
                  with the finest fitness facility in Andhra Pradesh.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <Map className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Address</h3>
                      <p className="text-gray-400">
                        SweatOut Health & Fitness<br />
                        Anantapur, Srinagar Colony,<br />
                        Andhra Pradesh 515002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Hours</h3>
                      <p className="text-gray-400">
                        Mon-Sun: 5:00 AM - 11:00 PM<br />
                        <span className="text-accent">24/7 for Elite Members</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" variant="primary">
                      Visit Us Today →
                    </Button>
                  </Link>
                  <a href="tel:+919885873976">
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Call +91 9885873976
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="SweatOut Gym"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Be Part Of Our Story
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands who've already transformed their lives at SweatOut. 
              Your fitness journey starts with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership">
                <Button size="lg" variant="primary" className="text-lg px-10 py-6">
                  View Memberships
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10">
                  Book Free Trial
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}