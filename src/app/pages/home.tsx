import { Link } from 'react-router';
import { Button } from '@/app/components/button';
import { Card, CardContent, CardHeader } from '@/app/components/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Slider } from '@/app/components/slider';
import { SEOHead } from '@/app/components/seo-head';
import { Dumbbell, Users, Award, Clock, Target, Heart, Zap, Shield, Trophy, TrendingUp } from 'lucide-react';
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

export function HomePage() {
  const programs = [
    {
      title: 'Strength Training',
      description: 'Build raw power and muscle mass with our cutting-edge strength programs designed for Indian athletes.',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1661439193765-392d81462003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3ZWlnaHRzJTIwZXF1aXBtZW50JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTc4NzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '45-60 min',
      level: 'All Levels'
    },
    {
      title: 'HIIT & Cardio',
      description: 'Torch calories and boost endurance with high-intensity interval training and advanced cardio circuits.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '30-45 min',
      level: 'Intermediate'
    },
    {
      title: 'Yoga & Wellness',
      description: 'Ancient Indian practices meet modern fitness. Find balance, flexibility, and mental clarity.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1767611120077-3697335ec748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwcGVhY2VmdWwlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2OTc4NzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '60-75 min',
      level: 'All Levels'
    },
    {
      title: 'Functional Training',
      description: 'Real-world strength and movement patterns for everyday life and athletic performance.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1734188341701-5a0b7575efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluaW5nJTIwaW50ZW5zZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5NzgwMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '50-60 min',
      level: 'Advanced'
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Elite Trainers',
      description: 'Internationally certified coaches with expertise in Indian fitness standards',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Extended operating hours to fit your busy schedule',
    },
    {
      icon: Award,
      title: 'Premium Equipment',
      description: 'Latest technology from Technogym, Life Fitness & Hammer Strength',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Sanitized spaces with professional safety protocols',
    },
    {
      icon: Trophy,
      title: 'Results Driven',
      description: 'Proven transformation programs with guaranteed results',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Advanced body composition analysis and fitness assessments',
    },
  ];

  const testimonials = [
    {
      name: 'Pretty Browne',
      role: 'Google Review',
      content: 'Sweat Out is a great gym! The equipment is top-notch and well-maintained. Trainers are highly skilled and really know their stuff. If you\'re looking for good equipment and expert guidance, this is the place!',
      rating: 5,
      location: 'Anantapur'
    },
    {
      name: 'Kishore Madala',
      role: 'Google Review',
      content: 'Really happy to share the compliments that it\'s the best gym in the town with very good hospitality and care taken for each individual clients. I\'m proud to say that the personal trainer Bharath Yadav is very professional and very well trained to give the best out of it. Thanks to Sweatout gym for the support to achieve the personal goals on the body fitness. Happy to suggest the gym for any age person.',
      rating: 5,
      location: 'Anantapur'
    },
    {
      name: 'Javed Firdos',
      role: 'Google Review',
      content: 'I\'ve been training here for the past few months and the experience has been excellent. The gym has good equipment, is always clean, and the owner of gym Mr. Konanki Rajesh Anna is very motivating person and his diets which is perfect for both weight loss and build muscle. My trainers Bala Barath, Dasari Deepak, and Lokanath are very knowledgeable, supportive, and ensure I do every workout with the right form. I\'ve seen great results in my strength and fitness. Highly recommend this gym and trainer to anyone serious about fitness.',
      rating: 5,
      location: 'Anantapur'
    },
    {
      name: 'Sandhya Madupu',
      role: 'Google Review',
      content: 'Professional and intelligent trainers. It isn\'t just about lifting weights or burning calories—it\'s about changing your whole mindset. My trainer always says, fitness isn\'t only physical, it\'s a lifestyle shift. The vibe here makes you want to show up, stay consistent, and push yourself in the best way. A space that motivates you to grow inside and out.',
      rating: 5,
      location: 'Anantapur'
    },
    {
      name: 'Ravimohan Reddy',
      role: 'Google Review',
      content: 'Trainers available are professional and friendly. In a month time you will be able to see difference in your body. The trainers and nutritionist are there to guide you with proper diet recommendations for weight loss as well as to build strength. Great ambience inside the gym. I believe it is best in the town!',
      rating: 5,
      location: 'Anantapur'
    },
  ];

  const stats = [
    { number: '5000+', label: 'Active Members' },
    { number: '20+', label: 'Expert Trainers' },
    { number: '100+', label: 'Weekly Classes' },
    { number: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Sweatout Health & Fitness – Best Gym in Anantapur | Personal Trainers & Workouts"
        description="Join Sweatout Health & Fitness in Srinagar Colony, Anantapur – a top-rated gym offering strength training, personal coaching, Pilates, yoga, HIIT & tailored fitness programs with certified trainers."
        keywords="gym in Anantapur, Sweatout Health & Fitness Anantapur, best gym in Srinagar Colony Anantapur, gym near Rangaswamy Nagar Anantapur, fitness center in Anantapur, personal trainer in Anantapur, strength training in Anantapur, yoga classes Anantapur, weight loss gym Anantapur, bodybuilding gym Anantapur, HIIT workouts Anantapur, certified trainers Anantapur"
      />
      
      {/* Hero Section - Premium with Parallax Effect */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758957646695-ec8bce3df462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njk3ODczODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Premium Gym Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-4 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full"
            >
              <span className="text-accent font-semibold">ANANTAPUR'S PREMIER FITNESS DESTINATION</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="hero-title text-6xl md:text-8xl font-bold mb-6 leading-tight"
            >
              <motion.span 
                className="text-white italic block"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                UNLEASH
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent italic block"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                YOUR POWER
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Transform your body and mind at Anantapur's most advanced fitness facility. 
              World-class equipment, elite coaching, and a community that pushes you beyond limits.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/membership">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90"
                >
                  Start Your Journey →
                </Button>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 grid grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-5xl md:text-6xl font-bold mb-4">
                <span className="text-white">ELITE </span>
                <span className="text-accent">PROGRAMS</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Scientifically designed training programs tailored for Indian fitness goals
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card hover className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden group">
                      <CardHeader className="p-0 relative">
                        <ImageWithFallback
                          src={program.image}
                          alt={program.title}
                          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span>{program.duration}</span>
                            <span className="mx-2">•</span>
                            <span>{program.level}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-1">{program.description}</p>
                        <Link to="/programs" className="block">
                          <Button variant="outline" size="md" className="w-full border-accent/30 hover:bg-accent hover:text-white font-semibold">
                            Explore Program →
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose SweatOut */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-muted to-black" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-white">WHY </span>
                <span className="text-accent">SWEATOUT</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience fitness excellence that sets us apart from the rest
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 border border-accent/20 rounded-full mb-6"
                    >
                      <Icon className="h-10 w-10 text-accent" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-0 relative h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1637870473618-8c9fa7d11f0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaXRuZXNzJTIwY2VudGVyJTIwZGFya3xlbnwxfHx8fDE3Njk3ODczODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Gym Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              STATE-OF-THE-ART FACILITY
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              15,000 sq ft of premium equipment and training zones
            </p>
            <Link to="/gallery">
              <Button size="lg" variant="primary">
                Explore Our Facility
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-white">SUCCESS </span>
                <span className="text-accent">STORIES</span>
              </h2>
              <p className="text-xl text-gray-400">
                Real transformations from real members
              </p>
            </div>
          </AnimatedSection>

          <Slider autoplay autoplaySpeed={6000} dots>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <Card className="bg-card/30 backdrop-blur-sm border border-white/10 text-center p-12">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-3xl">★</span>
                    ))}
                  </div>
                  <p className="text-2xl text-gray-300 mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center border border-accent/30">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-2xl text-white">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                      <p className="text-accent text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzY5Njk0NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Personal Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-accent/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">READY TO</span>
                <br />
                <span className="text-accent">TRANSFORM?</span>
              </h2>
              <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
                Join 5000+ members who have already started their fitness transformation journey at SweatOut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/membership">
                  <Button size="lg" variant="primary" className="text-lg px-10 py-6">
                    View Membership Plans →
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10 hover:border-accent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="mt-12 flex flex-col sm:flex-row gap-6 text-gray-400">
                <div>
                  <div className="text-accent font-semibold mb-1">Location</div>
                  <div>Srinagar Colony, Anantapur, AP 515002</div>
                </div>
                <div>
                  <div className="text-accent font-semibold mb-1">Phone</div>
                  <div>+91 9885873976</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}