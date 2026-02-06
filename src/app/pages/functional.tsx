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

export function FunctionalPage() {
  const benefits = [
    {
      icon: Target,
      title: 'Real-World Strength',
      description: 'Build functional strength that translates to everyday activities and sports performance.'
    },
    {
      icon: Shield,
      title: 'Injury Prevention',
      description: 'Strengthen stabilizer muscles and improve movement patterns to reduce injury risk.'
    },
    {
      icon: Zap,
      title: 'Full-Body Conditioning',
      description: 'Engage multiple muscle groups simultaneously for efficient, effective workouts.'
    },
    {
      icon: TrendingUp,
      title: 'Athletic Performance',
      description: 'Enhance power, speed, agility, and coordination for peak athletic performance.'
    },
    {
      icon: Heart,
      title: 'Cardiovascular Fitness',
      description: 'Combine strength and cardio for improved heart health and endurance.'
    },
    {
      icon: Flame,
      title: 'Metabolic Boost',
      description: 'High-intensity functional movements maximize calorie burn and fat loss.'
    }
  ];

  const programTypes = [
    {
      title: 'CrossFit Training',
      level: 'Intermediate-Advanced',
      duration: '60 min',
      description: 'High-intensity functional movements combining weightlifting, gymnastics, and metabolic conditioning.',
      benefits: ['Olympic lifts', 'Gymnastics skills', 'WODs (Workout of the Day)', 'Competition prep'],
      image: 'https://images.unsplash.com/photo-1734188341701-5a0b7575efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluaW5nJTIwaW50ZW5zZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5NzgwMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'TRX Suspension',
      level: 'All Levels',
      duration: '45 min',
      description: 'Bodyweight training using suspension straps for core stability, strength, and flexibility.',
      benefits: ['Core engagement', 'Scalable difficulty', 'Joint-friendly', 'Portable training'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGludGVuc2V8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Kettlebell Training',
      level: 'Beginner-Intermediate',
      duration: '45 min',
      description: 'Dynamic kettlebell movements for explosive power, endurance, and functional strength.',
      benefits: ['Explosive power', 'Grip strength', 'Hip mobility', 'Fat burning'],
      image: 'https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Functional Circuits',
      level: 'All Levels',
      duration: '50 min',
      description: 'Multi-station circuit training combining various functional movements for total-body conditioning.',
      benefits: ['Time-efficient', 'Variety', 'Group energy', 'Progressive difficulty'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBiZWdpbm5lciUyMHdvcmtvdXR8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const faqs = [
    {
      question: 'What is functional training?',
      answer: 'Functional training focuses on exercises that train your muscles to work together and prepare them for daily tasks by simulating common movements. Unlike traditional bodybuilding that isolates muscles, functional training uses multi-joint, multi-muscle movements that improve overall strength, balance, and coordination.'
    },
    {
      question: 'Do I need experience to start functional training?',
      answer: 'No! Functional training is highly scalable and suitable for all fitness levels. Our trainers will modify exercises based on your current abilities and progressively increase difficulty as you improve. We start with foundational movement patterns and build from there.'
    },
    {
      question: 'What equipment is used in functional training?',
      answer: 'We use a variety of equipment including kettlebells, TRX suspension trainers, medicine balls, battle ropes, plyo boxes, resistance bands, and your own bodyweight. The variety keeps workouts engaging and challenges your body in different ways.'
    },
    {
      question: 'How is functional training different from regular gym workouts?',
      answer: "Traditional gym workouts often isolate individual muscles using machines. Functional training emphasizes compound movements that engage multiple muscle groups, improve coordination, and translate better to real-world activities and sports. It's more dynamic and athletic."
    },
    {
      question: 'Can functional training help with weight loss?',
      answer: 'Absolutely! Functional training is highly effective for fat loss because it combines strength and cardio, burns significant calories, builds lean muscle (which boosts metabolism), and keeps your heart rate elevated throughout the workout.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Functional Training in Anantapur – SweatOut Health & Fitness | CrossFit, TRX & Kettlebell"
        description="Build real-world strength with functional training in Anantapur. CrossFit, TRX, kettlebell training, and more. Expert coaching for all levels. Join SweatOut today!"
        keywords="functional training Anantapur, CrossFit Anantapur, TRX training, kettlebell workout, athletic training, gym near me, best gym Anantapur"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1734188341701-5a0b7575efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluaW5nJTIwaW50ZW5zZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5NzgwMjA0fDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Functional Training at SweatOut Health & Fitness Anantapur"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">TRAIN • MOVE • PERFORM</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">FUNCTIONAL TRAINING </span>
              <span className="text-accent">FOR REAL LIFE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Build strength that matters. CrossFit, TRX, kettlebells, and more – train your body to move better in every aspect of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8">
                  Start Training Today
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

      {/* What is Functional Training Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">What is </span>
                  <span className="text-accent">Functional Training?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Functional training is a training approach that prepares your body for real-life movements and activities.
                  Unlike traditional gym exercises that isolate individual muscles, functional training uses compound movements
                  that engage multiple muscle groups simultaneously.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At SweatOut, our functional training programs incorporate CrossFit, TRX suspension training, kettlebells,
                  battle ropes, and bodyweight exercises to build strength, power, endurance, and mobility that translates
                  to better performance in sports, work, and daily life.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">DYNAMIC</div>
                    <div className="text-white text-xs">Multi-Joint Movements</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">PRACTICAL</div>
                    <div className="text-white text-xs">Real-World Application</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">EFFICIENT</div>
                    <div className="text-white text-xs">Maximum Results</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">SCALABLE</div>
                    <div className="text-white text-xs">All Fitness Levels</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGludGVuc2V8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Functional Training at SweatOut"
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
                <span className="text-accent">Functional Training</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Train smarter, move better, live stronger
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
                <span className="text-accent">Training Programs</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Diverse functional training modalities for every goal
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
                <span className="text-accent">Functional Coach</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <ImageWithFallback
                  src="/images/trainers/deepak.jpg"
                  alt="Dasari Deepak - Functional Training Coach"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 md:-bottom-6 md:-right-6 md:top-auto bg-accent text-black p-4 md:p-6 rounded-xl shadow-xl">
                  <div className="text-2xl md:text-3xl font-bold">8+</div>
                  <div className="text-xs md:text-sm font-semibold">Years Experience</div>
                </div>

                {/* Name and Title - Shows directly under image on mobile */}
                <div className="mt-8 md:hidden text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">Dasari Deepak</h3>
                  <p className="text-lg text-accent">Fitness Trainer • Functional Specialist</p>
                </div>
              </div>

              <div>
                {/* Section Heading - Shows on desktop only */}
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6 hidden md:block">
                  <span className="text-white">Expert </span>
                  <span className="text-accent">Functional Coach</span>
                </h2>

                {/* Name and Title - Shows on desktop only */}
                <div className="hidden md:block">
                  <h3 className="text-2xl font-semibold text-white mb-4">Dasari Deepak</h3>
                  <p className="text-lg text-accent mb-6">Fitness Trainer • Functional Training Specialist</p>
                </div>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Certified fitness trainer with 8+ years of hands-on experience in functional training and conditioning programs.
                  Deepak specializes in building real-world strength, endurance, and overall fitness through progressive, functional training methods.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  His approach focuses on movement patterns that translate to everyday life and sports performance, with strong emphasis
                  on proper form and injury prevention. Whether you're training for athletics or daily activities, Deepak will design
                  a functional program that delivers results safely and effectively.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Certified Fitness Trainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">8+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Functional Training & Conditioning Specialist</span>
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
                <span className="text-accent">SweatOut for Functional Training?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: 'Expert Coaching', description: 'Certified trainers with functional training expertise' },
                { icon: Target, title: 'Varied Equipment', description: 'CrossFit rigs, TRX, kettlebells, and more' },
                { icon: Dumbbell, title: 'Scalable Programs', description: 'Suitable for beginners to advanced athletes' },
                { icon: TrendingUp, title: 'Real Results', description: 'Improved performance in sports and daily life' }
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
                <span className="text-white">Ready to Train </span>
                <span className="text-accent">Functionally?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start your functional training journey today with a free consultation and movement assessment.
                Let's build strength that matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="primary" className="text-lg px-8">
                    Start Training Today →
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

