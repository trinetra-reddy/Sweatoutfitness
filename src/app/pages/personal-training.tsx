import { Link } from 'react-router';
import { Card, CardContent } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEOHead } from '@/app/components/seo-head';
import { Activity, Heart, Users, Zap, Target, Clock, CheckCircle, Award, Shield, TrendingUp, User, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

export function PersonalTrainingPage() {
  const benefits = [
    {
      icon: User,
      title: 'Personalized Programming',
      description: 'Custom workout plans designed specifically for your goals, fitness level, and any limitations.'
    },
    {
      icon: Target,
      title: 'Goal-Focused Approach',
      description: 'Every session is strategically planned to move you closer to your specific fitness objectives.'
    },
    {
      icon: Award,
      title: 'Expert Form Correction',
      description: 'Real-time feedback and coaching to ensure perfect form, maximize results, and prevent injuries.'
    },
    {
      icon: TrendingUp,
      title: 'Faster Results',
      description: 'Achieve your goals faster with dedicated attention, accountability, and optimized programming.'
    },
    {
      icon: Heart,
      title: 'Nutrition Guidance',
      description: 'Comprehensive nutrition coaching to complement your training and accelerate your transformation.'
    },
    {
      icon: Shield,
      title: 'Accountability & Support',
      description: 'Your trainer keeps you motivated, accountable, and on track even when motivation wanes.'
    }
  ];

  const programTypes = [
    {
      title: 'Weight Loss & Fat Loss',
      level: 'All Levels',
      duration: 'Customized',
      description: 'Personalized fat loss programs combining strength training, cardio, and nutrition coaching for sustainable results.',
      benefits: ['Calorie deficit strategy', 'Muscle preservation', 'Metabolic optimization', 'Habit coaching'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGludGVuc2V8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Muscle Building',
      level: 'Intermediate-Advanced',
      duration: 'Customized',
      description: 'Hypertrophy-focused training with progressive overload, optimal volume, and nutrition for maximum muscle growth.',
      benefits: ['Progressive overload', 'Volume optimization', 'Supplement guidance', 'Recovery protocols'],
      image: 'https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Athletic Performance',
      level: 'Intermediate-Advanced',
      duration: 'Customized',
      description: 'Sport-specific training to enhance power, speed, agility, and endurance for peak athletic performance.',
      benefits: ['Sport-specific drills', 'Power development', 'Speed & agility', 'Injury prevention'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBiZWdpbm5lciUyMHdvcmtvdXR8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Rehabilitation & Injury Recovery',
      level: 'All Levels',
      duration: 'Customized',
      description: 'Safe, progressive training to recover from injuries, address imbalances, and build resilient movement patterns.',
      benefits: ['Injury rehabilitation', 'Corrective exercise', 'Mobility work', 'Pain management'],
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwY2xhc3N8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const faqs = [
    {
      question: 'How is personal training different from group classes?',
      answer: 'Personal training provides 1-on-1 dedicated attention with a trainer who designs every workout specifically for you. Unlike group classes where everyone does the same workout, personal training is completely customized to your goals, fitness level, schedule, and any limitations or injuries.'
    },
    {
      question: 'How often should I train with a personal trainer?',
      answer: 'Most clients see excellent results with 2-4 sessions per week. Beginners often start with 2-3 sessions, while those with specific goals (competition prep, rapid transformation) may train 4-5 times weekly. We\'ll recommend a frequency based on your goals and budget.'
    },
    {
      question: 'Do I need to be in shape to start personal training?',
      answer: 'Absolutely not! Personal training is perfect for beginners because your trainer will meet you exactly where you are and progress at your pace. In fact, personal training is often the safest and most effective way to start your fitness journey.'
    },
    {
      question: 'What results can I expect from personal training?',
      answer: 'Results vary based on your goals, consistency, and nutrition. Most clients see noticeable improvements in strength, energy, and body composition within 4-6 weeks. With dedicated effort and proper nutrition, transformative results are achievable in 12-16 weeks.'
    },
    {
      question: 'Is nutrition coaching included?',
      answer: 'Yes! All personal training packages include basic nutrition guidance. Our INFS-certified nutritionists can provide detailed meal plans, macro calculations, and ongoing nutrition coaching to maximize your results.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Personal Training in Anantapur – SweatOut Health & Fitness | 1-on-1 Coaching"
        description="Get personalized 1-on-1 training in Anantapur with expert coaches. Custom programs, nutrition guidance, and dedicated support. Achieve your goals faster at SweatOut!"
        keywords="personal trainer Anantapur, 1-on-1 training, personal coaching, weight loss coach, muscle building trainer, best personal trainer, gym Anantapur"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1727848480902-beb1959c06f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGd5bXxlbnwxfHx8fDE3Njk3ODc2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Personal Training at SweatOut Health & Fitness Anantapur"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">PERSONALIZED • DEDICATED • RESULTS-DRIVEN</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">1-ON-1 </span>
              <span className="text-accent">PERSONAL TRAINING</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Your goals. Your trainer. Your transformation. Get personalized coaching and achieve results faster with dedicated 1-on-1 attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/membership">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Training Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Personal Training Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Why Choose </span>
                  <span className="text-accent">Personal Training?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Personal training is the fastest, most effective path to your fitness goals. With a dedicated trainer by your side,
                  every workout is optimized for your specific needs, abilities, and objectives. No generic programs – just personalized
                  attention and expert guidance.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At SweatOut, our certified personal trainers bring years of experience, proven methodologies, and genuine care for
                  your success. Whether you're looking to lose weight, build muscle, improve athletic performance, or recover from
                  injury, we'll create a custom roadmap to get you there.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">CUSTOMIZED</div>
                    <div className="text-white text-xs">Tailored to You</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">EXPERT</div>
                    <div className="text-white text-xs">Certified Trainers</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">ACCOUNTABLE</div>
                    <div className="text-white text-xs">Stay on Track</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">RESULTS</div>
                    <div className="text-white text-xs">Guaranteed Progress</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758957646695-ec8bce3df462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Personal Training at SweatOut"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Benefits of </span>
                <span className="text-accent">Personal Training</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Invest in yourself with dedicated 1-on-1 coaching
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card hover className="h-full bg-card/40 backdrop-blur-sm border-white/10">
                      <CardContent className="p-8">
                        <div className="mb-4 p-3 bg-accent/10 rounded-xl w-fit">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Types Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Specialized </span>
                <span className="text-accent">Training Programs</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Custom programs designed for your specific goals
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {programTypes.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="h-full bg-card/40 backdrop-blur-sm border-white/10 overflow-hidden">
                    <div className="relative h-64">
                      <ImageWithFallback
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`} />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                        <div className="flex gap-4 text-sm text-white/90">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" /> {program.level}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {program.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-300 mb-4 leading-relaxed">{program.description}</p>
                      <div className="space-y-2">
                        {program.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Section Heading - Shows on mobile */}
            <div className="text-center mb-12 md:hidden">
              <h2 className="hero-title text-4xl font-bold mb-2">
                <span className="text-white">Meet Your </span>
                <span className="text-accent">Personal Trainer</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <ImageWithFallback
                  src="/images/trainers/rajesh.jpg"
                  alt="Konanki Rajesh - Head Personal Trainer"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 md:-bottom-6 md:-right-6 md:top-auto bg-accent text-black p-4 md:p-6 rounded-xl shadow-xl">
                  <div className="text-2xl md:text-3xl font-bold">15+</div>
                  <div className="text-xs md:text-sm font-semibold">Years Experience</div>
                </div>

                {/* Name and Title - Shows directly under image on mobile */}
                <div className="mt-8 md:hidden text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">Konanki Rajesh</h3>
                  <p className="text-lg text-accent">Head Fitness Trainer • Personal Training Specialist</p>
                </div>
              </div>

              <div>
                {/* Section Heading - Shows on desktop only */}
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6 hidden md:block">
                  <span className="text-white">Meet Your </span>
                  <span className="text-accent">Personal Trainer</span>
                </h2>

                {/* Name and Title - Shows on desktop only */}
                <div className="hidden md:block">
                  <h3 className="text-2xl font-semibold text-white mb-4">Konanki Rajesh</h3>
                  <p className="text-lg text-accent mb-6">Head Fitness Trainer • Personal Training Specialist</p>
                </div>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  ISSA-certified fitness trainer and INFS-certified nutritionist with 15+ years of transforming lives through
                  personalized training. Rajesh specializes in weight loss, muscle building, strength training, and nutrition coaching.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  His holistic approach combines science-based training, customized nutrition plans, and genuine care for each client's
                  success. With Rajesh, you get more than a trainer – you get a dedicated partner in your transformation journey.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">ISSA Certified Fitness Trainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">INFS Certified Nutritionist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">1000+ Successful Transformations</span>
                  </div>
                </div>
                <Link to="/trainers">
                  <Button variant="outline" size="lg">
                    Meet All Our Trainers
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Why Choose </span>
                <span className="text-accent">SweatOut Personal Training?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, title: 'Certified Experts', description: 'ISSA & INFS certified trainers with proven results' },
                { icon: Target, title: 'Goal-Focused', description: 'Every session designed to achieve your objectives' },
                { icon: Heart, title: 'Holistic Approach', description: 'Training + nutrition + lifestyle coaching' },
                { icon: TrendingUp, title: 'Proven Results', description: '1000+ successful client transformations' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mb-4 inline-block p-4 bg-accent/10 rounded-2xl">
                      <Icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Frequently Asked </span>
                <span className="text-accent">Questions</span>
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/40 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                        <span className="text-accent flex-shrink-0">Q:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-gray-300 leading-relaxed pl-8">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-12 border border-accent/20">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Transform </span>
                <span className="text-accent">Your Life?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Book a free consultation with our expert trainers. We'll assess your goals, design a custom plan, and start your transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="primary" className="text-lg px-8">
                    Book Free Consultation →
                  </Button>
                </Link>
                <Link to="/membership">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    View Training Packages
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

