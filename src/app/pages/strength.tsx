import { Link } from 'react-router';
import { Card, CardContent } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEOHead } from '@/app/components/seo-head';
import { Activity, Heart, Users, Zap, Target, Clock, CheckCircle, Award, Shield, TrendingUp, Dumbbell, Flame } from 'lucide-react';
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

export function StrengthPage() {
  const benefits = [
    {
      icon: Dumbbell,
      title: 'Build Muscle Mass',
      description: 'Develop lean muscle through progressive resistance training with scientifically-proven methods.'
    },
    {
      icon: Flame,
      title: 'Fat Loss & Metabolism',
      description: 'Boost your metabolism, burn more calories at rest, and achieve sustainable fat loss.'
    },
    {
      icon: Shield,
      title: 'Bone Density & Health',
      description: 'Strengthen bones, reduce injury risk, and improve overall skeletal health through weight-bearing exercises.'
    },
    {
      icon: TrendingUp,
      title: 'Athletic Performance',
      description: 'Enhance power, speed, and endurance for better performance in sports and daily activities.'
    },
    {
      icon: Heart,
      title: 'Cardiovascular Health',
      description: 'Improve heart health, lower blood pressure, and reduce risk of chronic diseases.'
    },
    {
      icon: Zap,
      title: 'Functional Strength',
      description: 'Build real-world strength that makes everyday tasks easier and improves quality of life.'
    }
  ];

  const programTypes = [
    {
      title: 'Beginner Strength',
      level: 'Beginner',
      duration: '45-60 min',
      description: 'Learn proper form and technique with foundational compound movements. Build a solid base of strength safely.',
      benefits: ['Master proper form', 'Build confidence', 'Progressive overload', 'Injury prevention'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBiZWdpbm5lciUyMHdvcmtvdXR8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Hypertrophy Training',
      level: 'Intermediate',
      duration: '60-75 min',
      description: 'Muscle-building focused program using optimal volume, intensity, and exercise selection for maximum growth.',
      benefits: ['Muscle growth', 'Aesthetic development', 'Strength gains', 'Structured progression'],
      image: 'https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Powerlifting',
      level: 'Advanced',
      duration: '75-90 min',
      description: 'Focus on the big three: squat, bench press, and deadlift. Build maximum strength with periodized programming.',
      benefits: ['Maximum strength', 'Competition prep', 'Advanced techniques', 'Peak performance'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlcmxpZnRpbmclMjBneW18ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Fat Loss Strength',
      level: 'All Levels',
      duration: '50-60 min',
      description: 'High-intensity strength circuits designed to maximize calorie burn while preserving muscle mass during fat loss.',
      benefits: ['Fat burning', 'Muscle preservation', 'Metabolic boost', 'Time-efficient'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGludGVuc2V8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-600 to-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'Will strength training make me bulky?',
      answer: 'No! Building significant muscle mass requires specific training, nutrition, and often years of dedicated work. Strength training will make you lean, toned, and strong - not bulky. You have full control over your physique goals.'
    },
    {
      question: 'How long before I see results?',
      answer: 'You\'ll feel stronger within 2-3 weeks as your nervous system adapts. Visible muscle growth typically appears after 6-8 weeks of consistent training. Fat loss and body composition changes vary based on nutrition and consistency.'
    },
    {
      question: 'Do I need to take supplements?',
      answer: 'Supplements are not necessary but can be helpful. Focus first on proper training, adequate protein intake (1.6-2.2g per kg bodyweight), and good sleep. Our trainers can guide you on evidence-based supplementation if needed.'
    },
    {
      question: 'Can I do strength training if I have joint pain?',
      answer: 'Yes, with proper guidance! Strength training actually helps reduce joint pain by strengthening surrounding muscles. Our trainers will modify exercises and ensure proper form to work around any limitations safely.'
    },
    {
      question: 'How many days per week should I train?',
      answer: '3-5 days per week is optimal for most people. Beginners start with 3 days, intermediate 4 days, advanced 5-6 days. Rest and recovery are crucial - more is not always better. We\'ll design a program that fits your schedule and goals.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Strength Training in Anantapur – SweatOut Health & Fitness | Build Muscle & Strength"
        description="Build muscle, burn fat, and get stronger with expert strength training in Anantapur. Personalized programs, certified trainers, all fitness levels. Join SweatOut today!"
        keywords="strength training Anantapur, gym near me, muscle building, powerlifting, weight training, personal trainer Anantapur, best gym Anantapur, fitness center"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBzdHJlbmd0aCUyMHRyYWluaW5nfGVufDB8fHx8MTczODg1MjgwMHww&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Strength Training at SweatOut Health & Fitness Anantapur"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">BUILD • TRANSFORM • DOMINATE</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">BUILD STRENGTH, </span>
              <span className="text-accent">TRANSFORM YOUR BODY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Expert-guided strength training programs designed to build muscle, burn fat, and unleash your full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8">
                  Start Your Transformation
                </Button>
              </Link>
              <Link to="/membership">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Membership Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Strength Training Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">What is </span>
                  <span className="text-accent">Strength Training?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Strength training, also known as resistance training, is a form of exercise that uses resistance to build
                  muscle strength, endurance, and size. Whether using free weights, machines, or bodyweight, strength training
                  is the most effective way to transform your physique and improve overall health.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At SweatOut, our strength training programs are scientifically designed and expertly coached to help you
                  achieve your goals - whether that's building muscle, losing fat, increasing athletic performance, or simply
                  getting stronger and healthier.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">PROVEN</div>
                    <div className="text-white text-xs">Science-Based Methods</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">ALL LEVELS</div>
                    <div className="text-white text-xs">Beginner to Advanced</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">RESULTS</div>
                    <div className="text-white text-xs">Guaranteed Progress</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">EXPERT</div>
                    <div className="text-white text-xs">Certified Trainers</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Strength Training at SweatOut"
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
                <span className="text-accent">Strength Training</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your body and health with the power of resistance training
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
                <span className="text-white">Our </span>
                <span className="text-accent">Strength Programs</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Customized programs designed for your specific goals and experience level
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
                <span className="text-white">Expert </span>
                <span className="text-accent">Strength Coach</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <ImageWithFallback
                  src="/images/trainers/bala.jpg"
                  alt="Bala Barath - Strength Training Specialist"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 md:-bottom-6 md:-right-6 md:top-auto bg-accent text-black p-4 md:p-6 rounded-xl shadow-xl">
                  <div className="text-2xl md:text-3xl font-bold">8+</div>
                  <div className="text-xs md:text-sm font-semibold">Years Experience</div>
                </div>

                {/* Name and Title - Shows directly under image on mobile */}
                <div className="mt-8 md:hidden text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">Bala Barath</h3>
                  <p className="text-lg text-accent">Fitness Trainer • Strength Training Specialist</p>
                </div>
              </div>

              <div>
                {/* Section Heading - Shows on desktop only */}
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6 hidden md:block">
                  <span className="text-white">Expert </span>
                  <span className="text-accent">Strength Coach</span>
                </h2>

                {/* Name and Title - Shows on desktop only */}
                <div className="hidden md:block">
                  <h3 className="text-2xl font-semibold text-white mb-4">Bala Barath</h3>
                  <p className="text-lg text-accent mb-6">Fitness Trainer • Strength Training Specialist</p>
                </div>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Certified fitness trainer with 8+ years of experience specializing in strength training and conditioning.
                  Bala Barath focuses on building raw strength, muscle mass, and athletic power through proven training methodologies.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  His expertise in progressive overload, compound movements, and proper form ensures safe, effective training
                  that delivers real results. Whether you're a beginner learning the basics or an advanced lifter chasing PRs,
                  Bala will design a program tailored to your goals and guide you every step of the way.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Certified Fitness Trainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Dumbbell className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Strength Training Specialist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">8+ Years Experience</span>
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
                <span className="text-accent">SweatOut for Strength Training?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: 'Expert Coaching', description: 'Certified trainers with years of strength training expertise' },
                { icon: Target, title: 'Personalized Programs', description: 'Custom training plans designed for your specific goals' },
                { icon: Dumbbell, title: 'Premium Equipment', description: 'Top-quality free weights, machines, and training tools' },
                { icon: TrendingUp, title: 'Proven Results', description: '1000+ successful transformations and counting' }
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
                <span className="text-white">Ready to Build </span>
                <span className="text-accent">Real Strength?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start your transformation today with a free consultation and personalized strength training assessment.
                Let's build the stronger, healthier you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="primary" className="text-lg px-8">
                    Start Your Transformation →
                  </Button>
                </Link>
                <Link to="/membership">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    View Membership Plans
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

