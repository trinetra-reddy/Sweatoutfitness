import { Link } from 'react-router';
import { Card, CardContent } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEOHead } from '@/app/components/seo-head';
import { Activity, Heart, Users, Zap, Target, Clock, CheckCircle, Award, Shield, TrendingUp, Brain, Smile } from 'lucide-react';
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

export function YogaPage() {
  const benefits = [
    {
      icon: Heart,
      title: 'Stress Relief',
      description: 'Reduce stress and anxiety through mindful breathing, meditation, and gentle movements that calm the nervous system.'
    },
    {
      icon: Activity,
      title: 'Flexibility & Balance',
      description: 'Improve flexibility, balance, and range of motion through progressive stretching and balance-focused poses.'
    },
    {
      icon: Brain,
      title: 'Mental Clarity',
      description: 'Enhance focus, concentration, and mental clarity through meditation and mindfulness practices.'
    },
    {
      icon: Shield,
      title: 'Injury Recovery',
      description: 'Support injury recovery and prevention with gentle, therapeutic movements that strengthen and heal the body.'
    },
    {
      icon: Smile,
      title: 'Overall Wellness',
      description: 'Improve overall health, boost immunity, and enhance quality of life through holistic yoga practice.'
    },
    {
      icon: Zap,
      title: 'Energy & Vitality',
      description: 'Increase energy levels, improve sleep quality, and feel more vibrant through regular yoga practice.'
    }
  ];

  const classTypes = [
    {
      title: 'Hatha Yoga',
      level: 'Beginner-Friendly',
      duration: '60 min',
      description: 'Traditional yoga focusing on physical postures (asanas) and breathing techniques (pranayama). Perfect for beginners.',
      benefits: ['Gentle introduction', 'Build foundation', 'Stress reduction', 'Improved flexibility'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3MlMjBncm91cHxlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Vinyasa Flow',
      level: 'All Levels',
      duration: '60 min',
      description: 'Dynamic, flowing sequences that link breath with movement. Build strength, flexibility, and cardiovascular endurance.',
      benefits: ['Cardiovascular benefits', 'Strength building', 'Flowing movements', 'Mind-body connection'],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwdmlueWFzYSUyMGZsb3d8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Power Yoga',
      level: 'Intermediate-Advanced',
      duration: '60 min',
      description: 'Vigorous, fitness-based approach to yoga. Build strength, stamina, and flexibility through challenging sequences.',
      benefits: ['Intense workout', 'Strength & endurance', 'Calorie burning', 'Athletic performance'],
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHlvZ2ElMjBjbGFzc3xlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Restorative Yoga',
      level: 'All Levels',
      duration: '60 min',
      description: 'Gentle, relaxing practice using props to support the body in restful poses. Perfect for recovery and stress relief.',
      benefits: ['Deep relaxation', 'Stress relief', 'Recovery support', 'Gentle healing'],
      image: 'https://images.unsplash.com/photo-1518310952931-b1de897abd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0b3JhdGl2ZSUyMHlvZ2F8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  const faqs = [
    {
      question: 'Do I need to be flexible to start yoga?',
      answer: 'Not at all! Flexibility is a result of yoga practice, not a prerequisite. Our classes are designed for all levels, and our instructors will help you modify poses to suit your current ability.'
    },
    {
      question: 'What should I bring to class?',
      answer: 'We provide yoga mats, but you\'re welcome to bring your own. Wear comfortable, breathable clothing that allows for movement. Bring water and arrive 10 minutes early for your first class.'
    },
    {
      question: 'How often should I practice yoga?',
      answer: 'For beginners, 2-3 times per week is ideal. As you progress, you can increase frequency. Consistency is more important than intensity - even 15 minutes daily can bring significant benefits.'
    },
    {
      question: 'Can yoga help with back pain?',
      answer: 'Yes! Yoga is excellent for back pain relief and prevention. Our instructors can guide you through poses that strengthen your core, improve posture, and increase flexibility in the spine.'
    },
    {
      question: 'Is yoga good for weight loss?',
      answer: 'Absolutely! While yoga burns calories (especially Power Yoga and Vinyasa), it also reduces stress, improves sleep, and promotes mindful eating - all crucial for sustainable weight management.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Yoga Classes in Anantapur – SweatOut Health & Fitness | Expert Yoga Instruction"
        description="Transform your mind and body with expert yoga classes in Anantapur. Hatha, Vinyasa, Power Yoga & more. Experienced instructors, all levels welcome. Join SweatOut today!"
        keywords="yoga classes Anantapur, yoga near me, hatha yoga, vinyasa yoga, power yoga, yoga for beginners, yoga instructor Anantapur, best yoga studio Anantapur"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwY2xhc3N8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Yoga Classes at SweatOut Health & Fitness Anantapur"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">MIND • BODY • SPIRIT</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">TRANSFORM WITH </span>
              <span className="text-accent">YOGA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Find balance, strength, and inner peace through expert-led yoga classes in Anantapur.
              All levels welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8">
                  Book Free Trial Class
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

      {/* What is Yoga Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">What is </span>
                  <span className="text-accent">Yoga?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Yoga is an ancient practice that unites the mind, body, and spirit through physical postures (asanas),
                  breathing techniques (pranayama), and meditation. More than just exercise, yoga is a holistic approach
                  to wellness that reduces stress, improves flexibility, builds strength, and promotes inner peace.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At SweatOut, our yoga classes blend traditional wisdom with modern fitness science, creating a practice
                  that's accessible, effective, and transformative for everyone - from complete beginners to advanced practitioners.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">HOLISTIC</div>
                    <div className="text-white text-xs">Mind-Body-Spirit</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">ALL LEVELS</div>
                    <div className="text-white text-xs">Beginner to Advanced</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">PROVEN</div>
                    <div className="text-white text-xs">5000+ Years Old</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">EFFECTIVE</div>
                    <div className="text-white text-xs">Science-Backed</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcG9zZSUyMGNvcmV8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Yoga Practice at SweatOut"
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
                <span className="text-accent">Yoga</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of yoga for your body, mind, and spirit
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

      {/* Class Types Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Our </span>
                <span className="text-accent">Yoga Classes</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose from a variety of yoga styles to match your goals and experience level
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {classTypes.map((classType, index) => (
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
                        src={classType.image}
                        alt={classType.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${classType.color} opacity-60`} />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{classType.title}</h3>
                        <div className="flex gap-4 text-sm text-white/90">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" /> {classType.level}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {classType.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-300 mb-4 leading-relaxed">{classType.description}</p>
                      <div className="space-y-2">
                        {classType.benefits.map((benefit, idx) => (
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
                <span className="text-accent">Yoga Instructor</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758875568932-0eefd3e60090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMG1hbGUlMjBwZXJzb25hbCUyMHRyYWluZXJ8ZW58MXx8fHwxNzY5OTI5ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Gurram Devendra - Yoga Instructor"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 md:-bottom-6 md:-right-6 md:top-auto bg-accent text-black p-4 md:p-6 rounded-xl shadow-xl">
                  <div className="text-2xl md:text-3xl font-bold">10+</div>
                  <div className="text-xs md:text-sm font-semibold">Years Experience</div>
                </div>

                {/* Name and Title - Shows directly under image on mobile */}
                <div className="mt-8 md:hidden text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">Gurram Devendra</h3>
                  <p className="text-lg text-accent">Senior Fitness & Wellness Trainer • Yoga Trained</p>
                </div>
              </div>

              <div>
                {/* Section Heading - Shows on desktop only */}
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6 hidden md:block">
                  <span className="text-white">Expert </span>
                  <span className="text-accent">Yoga Instructor</span>
                </h2>

                {/* Name and Title - Shows on desktop only */}
                <div className="hidden md:block">
                  <h3 className="text-2xl font-semibold text-white mb-4">Gurram Devendra</h3>
                  <p className="text-lg text-accent mb-6">Senior Fitness & Wellness Trainer • Yoga Trained</p>
                </div>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Certified fitness professional with 10+ years of experience and specialized training in Yoga and Pilates.
                  Devendra brings a unique blend of traditional yoga wisdom and modern fitness science to create balanced,
                  functional programs that transform both body and mind.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Known for his versatile approach, Devendra expertly combines flexibility, mobility, and strength training
                  to deliver holistic wellness programs. His classes are welcoming, challenging, and designed to help students
                  of all levels achieve their personal best.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Certified Fitness Trainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Yoga & Pilates Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">10+ Years Experience</span>
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
                <span className="text-accent">SweatOut for Yoga?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: 'Expert Instructors', description: 'Certified, experienced yoga teachers who guide you safely' },
                { icon: Heart, title: 'All Levels Welcome', description: 'From complete beginners to advanced practitioners' },
                { icon: Target, title: 'Personalized Attention', description: 'Small class sizes ensure individual guidance' },
                { icon: Zap, title: 'Modern Facilities', description: 'Clean, peaceful studio with all necessary equipment' }
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
                <span className="text-white">Ready to Start Your </span>
                <span className="text-accent">Yoga Journey?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join us for a free trial class and experience the transformative power of yoga.
                No experience necessary - just bring an open mind and comfortable clothes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="primary" className="text-lg px-8">
                    Book Free Trial Class →
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

